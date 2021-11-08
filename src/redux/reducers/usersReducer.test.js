import usersReducer, {follow} from "./usersReducer";

let state = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
};

test("Follow & unfollow users", () => {
    const id = 127;
    const action = follow(id);

    const newState = usersReducer(state, action);
    expect(newState.users.length).toBe(1);
});