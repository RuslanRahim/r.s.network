import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../redux/profile-reducer";


const MyPosts = (props) => {
    let postsElement=props.posts.map(p=><Posts message={p.message} likesCount={p.likesCount}/>)
    let newPostElement=React.createRef();

    let onAddPost = ()=>{
        props.addPost()
    }

    let onPostChange=()=>{
        let text=newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                     />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};
export default MyPosts;
