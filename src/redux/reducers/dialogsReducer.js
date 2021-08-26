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
                let newMessage = {
                    id: 4,
                    message: state.newMessageText

                };

                let stateCopy = {...state};
                stateCopy.messages = [...state.messages];

                stateCopy.messages.push(newMessage);
                stateCopy.newMessageText = '';
                return stateCopy;
            }
        case INPUT_MESSAGE_TEXT: {
                let stateCopy = {...state};

                stateCopy.newMessageText = action.newMessage;
                return stateCopy;
            }
        default:
            return state;
    }

    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const inputMessageActionCreator = (message) =>
    ({type: INPUT_MESSAGE_TEXT, newMessage: message})


export default dialogsReducer;