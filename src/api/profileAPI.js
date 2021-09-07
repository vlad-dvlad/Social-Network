import {instance} from "./api";

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
}