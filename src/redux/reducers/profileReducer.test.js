import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 13},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
    ],
    newPostText: '',
    status: "",
};

test('Length of post should be incremented', () => {

    let action = addPost("It-kamasutra");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});


test('Message of new post should be correct', () => {

    let action = addPost("It-kamasutra");


    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("It-kamasutra");
});

test('after deleting length of message should be decremented', () => {

    let action = deletePost(1);


    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

test('after deleting length of message shouldn`t be decremented if ID is incorrect', () => {

    let action = deletePost(129);


    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});