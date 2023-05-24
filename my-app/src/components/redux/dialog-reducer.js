const UPDATE_NEW_POST_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY"
const SENT_MESSAGE="SENT-MESSAGE"

let initialState={
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

const dialogReducer=(state=initialState,action)=> {

    switch (action.type) {
        case UPDATE_NEW_POST_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state

        case SENT_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body});
            return state

        default:
            return state
    }
}
/*
   if(action.type===UPDATE_NEW_POST_MESSAGE_BODY){
        state.newMessageBody=action.body;

   }else if(action.type===SENT_MESSAGE){
        let body= state.newMessageBody;
        state.newMessageBody=""
        state.messages.push({id: 6, message: body});
}
    return state
}

 */

export const sendMessageCreator =()=>{
    return { type:SENT_MESSAGE }
}
export const updateNewMessageBodyCreator=(text)=> {
    return { type:UPDATE_NEW_POST_MESSAGE_BODY, body: text }
}

export default dialogReducer;