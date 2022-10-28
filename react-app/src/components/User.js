import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import './User.css'
import website from "../assets/icons/website-icon.svg"
import audio from "../assets/icons/audio-icon.svg"
import blog from "../assets/icons/blog-icon.svg"
import video from "../assets/icons/video-icon.svg"
import photo from "../assets/icons/photo-icon.svg"
import x from "../assets/icons/x-icon.svg"
import { getAllPostsThunk } from '../store/post';
import { Modal } from './context/Modal';

function User() {
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user)
  const [showModal, setShowModal] = useState(false);
  const [postImage, setPostImage] = useState('');
  const [postText, setPostText] = useState('');


  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId, showModal]);


  useEffect(() => {
    dispatch(getAllPostsThunk())
      .then(() => { setIsLoaded(true) })
  }, [])

  const posts = useSelector(state => state.postReducer.allPosts.undefined)
  // const userPosts = Object.values(posts).filter(post => post.user_id===currentUser.id)

  console.log('all posts', posts)
  console.log('showmodal', showModal)

  if (!user) {
    return null;
  }

  return isLoaded && (
    <>

      {showModal && (
        <Modal id='photo-modal' onClose={() => setShowModal(false)}>
          <div id="close-modal" onClick={() => setShowModal(false)}><img id="close-modal-icon" src={x} alt='close icon' />
          </div>
          <div className="post-modal-wrapper">
            <div className="post-modal-ava-post-container">
              <img id="modal-avatar" src={user.avatar} />
              <textarea
                id="post-text-input"
                type='text'
                name='post'
                placeholder='Keep us posted'
                onChange={((e) => setPostText(e.target.value))}
                value={postText}
              ></textarea>
            </div>
            <div className="post-modal-img-url-container">
              <input
                id="post-img-input"
                name='post-img'
                type='text'
                placeholder='Image URL'
                value={postImage}
                onChange={((e) => setPostImage(e.target.value))}
              />
            </div>
            <div className="post-modal-submit-container">
              <div className="post-modal-submit-button">
                Post
              </div>
            </div>
          </div>
        </Modal>
      )}

      <div className="user-page-wrapper">
        <div className="gradient-top-user-page"></div>
        <div className="user-page-top-wrapper">
          <div className="user-page-container">
            <div className="cover-img-wrapper">
              <img id="user-page-cover-img" src={user.cover_img} />
            </div>
            <div className="avatar-wrapper">
              <img id="user-page-avatar" src={user.avatar} />
              <div className="user-page-top-name-container">
                <div className="user-page-top-name">{user.first_name} {user.last_name}</div>
                <div>la-te.com/{user.username}</div>
              </div>
            </div>

            <div className="user-page-mid-wrapper">
              <div className="user-page-mid-left-container">
                <div className="user-page-mid-left">
                  <div className="user-page-mid-about">
                    <div>
                      <div className="support-title">About {user.first_name} {user.last_name}</div>
                      <div>{user.bio}</div>
                    </div>
                    <div className="user-page-website-sticky">
                      <img id="website-icon" src={website} />
                      <a id="website-url" href={user.website} target="_blank">
                        <div className="website-url">{user.website}</div>
                      </a>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>

              <div className="user-page-mid-right">
                <div className="submit-post-container">
                  <div className="submit-post-content">
                    <div className="submit-post-top">
                      <img id="post-user-ava-icon" src={user.avatar} />
                      <div className="write-a-post-container" onClick={() => setShowModal(true)}>
                        Write a Post
                      </div>
                    </div>
                    <div className="submit-post-bottom">
                      <div id="submit-post-action-suggestions"><img id="submit-post-icon" src={photo} /> Images</div>
                      <div id="submit-post-action-suggestions"><img id="submit-post-icon" src={blog} /> Blog Posts</div>
                      <div id="submit-post-action-suggestions"><img id="submit-post-icon" src={audio} /> Audio Links</div>
                      <div id="submit-post-action-suggestions"><img id="submit-post-icon" src={video} /> Video Links</div>
                    </div>
                    <div className="post-tag">consider posting</div>
                  </div>
                </div>
                <>
                  {Object.values(posts).map(post => {
                    if (post.user_id === +userId) return (
                      <div className="post-wrapper">
                        <div className="post-ava-username">
                          <img id="post-user-pfp" src={user.avatar} />
                          <div className="post-user-username">{user.username}</div>
                        </div>
                        <div className="post-container">
                          <div className="post-content-wrapper">
                            <img className="post-image" src={post.post_img} />
                            <div className="post-text">
                              {post.post}
                            </div>
                            <div className="post-comment-count">5 comments</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </>
                <div className="post-wrapper">
                  <div className="post-ava-username">
                    <img id="post-user-pfp" src={user.avatar} />
                    <div className="post-user-username">{user.username}</div>
                  </div>
                  <div className="post-container">

                    <div className="post-content-wrapper">
                      <img className="post-image" src="https://i.imgur.com/LKgVkZr.gif" />
                      <div className="post-text">
                        This is an example of what post text will look like and display on the post card. After I am done with my capstone project I will be going to hot pot immediately. I really probably should have generated some lorem ipsum here but now that I've typed all of this out I've realized it's too late. On second thought there seems to be a lot of space left. Nah it's okay I'll just cut it here.
                      </div>
                      <div className="post-comment-count">5 comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
