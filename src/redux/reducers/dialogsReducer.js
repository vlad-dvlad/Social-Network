const SEND_MESSAGE = 'SEND-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessage}]
            };
        }
        default:
            return state;
    }
}

export const sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage})

export default dialogsReducer;