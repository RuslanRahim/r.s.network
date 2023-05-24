const ADD_POST="ADD-POST"
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT"

let initialState={
    posts: [
        {id: 1, message: "hı,how are you?", likesCount: 12},
        {id: 2, message: "it's my first post", likesCount: 15},
        {id: 3, message: "ı like do ıt", likesCount: 31},
        {id: 4, message: "what the sheet?", likesCount: 69}
    ],
    newPostText:"ıt kamasutra"
}

const profileReducer=(state=initialState,action)=> {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        default:
            return state
    }
}
/*
    if( action.type===ADD_POST){
        let newPost={
            id:5,
            message:state.newPostText,
            likesCount:0
        }
        state.posts.push(newPost);
        state.newPostText=''

    }else if(action.type===UPDATE_NEW_POST_TEXT){
        state.newPostText=action.newText
    }
    return state
}

 */
export const addPostActionCreator =()=>{
    return { type:ADD_POST }
}
export const updateNewPostTextActionCreator=(text)=> {
    return { type:UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;