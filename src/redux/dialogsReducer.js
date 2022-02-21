const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: 1, message: 'Hello, how are you?' },
        { id: 2, message: 'I\'m fine' },
        { id: 3, message: 'Let\'s meet at 12' },
    ],
    dialogs: [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Polina' },
        { id: 5, name: 'Bogdan' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.messageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.messageText
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (text) => ({ type: SEND_NEW_MESSAGE, messageText: text });

export const updateMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: text });

export default dialogsReducer;