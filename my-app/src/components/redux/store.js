import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store={
    _state: {
        profilesPage: {
            posts: [
                {id: 1, message: "hı,how are you?", likesCount: 12},
                {id: 2, message: "it's my first post", likesCount: 15},
                {id: 3, message: "ı like do ıt", likesCount: 31},
                {id: 4, message: "what the sheet?", likesCount: 69}
            ],
            newPostText:"ıt kamasutra"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "hı"},
                {id: 2, message: "how are you"},
                {id: 3, message: "to"},
                {id: 4, message: "yo"},
                {id: 5, message: "yo"}
            ],
            //    newMessageText:"ı am glad",
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Anya"}
            ],
            newMessageBody:" "
        }
    },
    _callSubscriber (){
        console.log("state changed")
    },

    getState(){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber=observer
    },

    dispatch(action){

        this._state.profilesPage=profileReducer(this._state.profilesPage,action)
        this._state.dialogsPage=dialogReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
    }
}
window.store=store
/*
export let addMessage=()=>{
    let newMessage={
        id:5,
        message:state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText=''
    rerenderEntireTree(state);
}
export let updateNewMessage=(newTxt)=>{
    state.dialogsPage.newMessageText=newTxt;
    rerenderEntireTree(state);
}
*/
export default store;