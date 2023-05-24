import React from "react";
import MyPosts from "./MyPost/MyPosts";
import s from "./profile.module.css";
import Profileİnfo from "./Profileİnfo/Profileİnfo";
import {updateNewPost, updateNewPostText} from "../redux/store";
import MyPostsContainer from "./MyPost/myPostContainer";

const Profile = (props) => {
    return (
        <div>
            <Profileİnfo/>
            <MyPostsContainer
                store={props.store}
            />

        </div>
    );
};
export default Profile;
