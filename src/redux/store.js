import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from './sidebarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: 15 },
                { id: 2, message: 'It\'s my first post', likeCount: 20 },
                { id: 3, message: 'Test message', likeCount: 30 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },

        sideBar: {
            friends: [
                { id: 1, name: 'Max' },
                { id: 1, name: 'Andrew' },
                { id: 1, name: 'Vlad' },
                { id: 1, name: 'Valera' }
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        
        this._callSubscriber(this._state);
    }


}

export default store;