const SEND_MESSAGE = 'SEND-MESSAGE';
const INPUT_MESSAGE_TEXT = 'INPUT-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText

            };

            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case INPUT_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            break;
        default:
            return state;
    }

    return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const inputMessageActionCreator = (message) =>
    ({ type: INPUT_MESSAGE_TEXT, newMessage: message })


export default dialogsReducer;