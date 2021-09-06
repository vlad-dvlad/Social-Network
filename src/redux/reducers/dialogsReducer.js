const SEND_MESSAGE = 'SEND-MESSAGE';
const INPUT_MESSAGE_TEXT = 'INPUT-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Roman'},
    ],
    messages: [
        {id: 1, message: 'This is message'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hi'}
    ],
    newMessageText: 'Hello, my friend!'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        case INPUT_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})

export const inputMessage = (message) => ({type: INPUT_MESSAGE_TEXT, newMessage: message})


export default dialogsReducer;