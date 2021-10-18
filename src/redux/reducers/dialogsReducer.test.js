import dialogsReducer, {deleteMessage, sendMessage} from "./dialogsReducer";

let state = {
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

test('Length of message should be incremented', () => {

    let action = sendMessage("It-kamasutra");

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(4);
});

test('Message of new message should be correct', () => {

    let action = sendMessage("It-kamasutra");

    let newState = dialogsReducer(state, action);

    expect(newState.messages[3].message).toBe("It-kamasutra");
});

test('after deleting length of message should be decremented', () => {

    let action = deleteMessage(1);

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(2);
});

test('after deleting length of message shouldn`t be decremented if ID is incorrect', () => {

    let action = deleteMessage(129);


    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(3);
});
