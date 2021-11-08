import authReducer, {setAuthUserData} from "./authReducer";

let state = {
    userId: 127,
    email: "example@gmail.com",
    login: "userExample",
    userPhoto: null,
    rememberMe: false,
    isFetching: false,
    isAuth: true,
};

test("User will be authorized", () => {
    let action = setAuthUserData(
        state.userId,
        state.email,
        state.login,
        state.userPhoto,
        state.isAuth);

    let newState = authReducer(state, action);

    expect(newState).toEqual(state);
})