import React from "react";
import s from "./Dialogs.module.css"
import Dialogİtem from "./Dialogİtem/Dialogsİtem";
import Message from "./Message/Message";

const Dialogs=(props)=> {
    let state=props.dialogsPage

    let dialogsElements =state.dialogs.map(d => <Dialogİtem name={d.name} id={d.id}/>)
    let messagesElement =state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody=state.newMessageBody;

    let onSendMessageClick=()=>{
        props.sendMessage();
    }
    let onNewMessageChange=(e)=>{
        let body=e.target.value
        props.updateNewMessageBody(body);
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsİtems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea
                        placeholder="Enter your messaje"
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                          />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs