import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import react from 'react'


const Dialogs = (props) => {

  let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} className={m.className} />)

  let newMessage = react.createRef();

  let sendMessage = () => {
    let message = newMessage.current.value;
    props.sendMessage(message);
  }

  let onChangeMessageText = () => {
    let message = newMessage.current.value;
    props.onChangeMessageText(message);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <textarea value={props.dialogsPage.newMessageText} onChange={onChangeMessageText} ref={newMessage} name="" id="" cols="30" rows="10" />
        <div className="">
          <button onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;