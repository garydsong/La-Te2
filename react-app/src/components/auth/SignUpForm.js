import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const updateCoverImg = (e) => {
    setCoverImg(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };


  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className="sign-up-full-page">
        <div className="whitespace"></div>
        <div className="checking">
          <form id="signup-form-spacing" onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <input
                id="first-name-input"
                type='text'
                name='username'
                placeholder='First Name'
                onChange={updateFirstName}
                value={firstName}
              ></input>

              <input
                id="last-name-input"
                type='text'
                name='username'
                placeholder='Last Name'
                onChange={updateLastName}
                value={lastName}
              ></input>
            </div>

            <div>
              <input
                id="username-input"
                type='text'
                name='username'
                placeholder='Display Name'
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div>
              <input
                id="email-input"
                type='text'
                name='email'
                placeholder='Email Address'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>

            <div>
              <input
                id="city-input"
                type='text'
                name='city'
                placeholder='City'
                onChange={updateCity}
                value={city}
              ></input>
              <input
                id="state-input"
                type='text'
                name='state'
                placeholder='State'
                onChange={updateState}
                value={state}
              ></input>
            </div>

            <div>
              <input
                id="password-input"
                type='password'
                name='password'
                placeholder='Choose a Password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div>
              <input
                id="password2-input"
                type='password'
                name='repeat_password'
                placeholder='Repeat your Password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>

            <div>
              <input
                id="avatar-input"
                type='text'
                name='avatar'
                placeholder='Avatar URL'
                onChange={updateAvatar}
                value={avatar}
              ></input>
            </div>
            <div>
              <input
                id="cover-img-input"
                type='text'
                name='cover-img'
                placeholder='Cover Image Url'
                onChange={updateCoverImg}
                value={coverImg}
              ></input>
            </div>
            <div>
              <textarea
                id="bio-input"
                type='text'
                name='bio'
                placeholder='About me'
                onChange={updateBio}
                value={bio}
              ></textarea>
            </div>
            <button id="signup-input" type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
