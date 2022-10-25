from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required
from app.models import User, db
from forms.signup_form import SignUpForm

def validation_form_errors(validation_errors):
  errors = []
  for field in validation_errors:
    for err in validation_errors[field]:
      errors.append(f'{field}:{err}')
  return errors

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


## EDIT A USER
@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_a_user(id):
  user = User.query.get(id)
  if not user:
    return {"message":"User couldn't be found", "statusCode":404}

  if user.owner_id != current_user.id:
    return {"message":"Forbidden", "statusCode":403}

  form = SignUpForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print('\n\n\n\n\n\n\n form data', form.data)
  if form.validate_on_submit():

    user.username = form.business_name.data
    user.email = form.email.data
    user.first_name = form.first_name.data
    user.owner_id = current_user.id
    user.city = form.city.data
    user.state = form.state.data
    user.bio = form.bio.data
    user.cover_img = form.cover_img.data
    user.website = form.website.data

    db.session.commit()

    updated_user = user.to_dict()

    return updated_user
  return {"errors": validation_form_errors(form.errors), "statusCode":401}
