import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
    },
    onChangeMessageText: (message) => {
      dispatch(updateMessageActionCreator(message));
    }

  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;