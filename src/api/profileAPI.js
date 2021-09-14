import {instance} from "./api";

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },

    getStatus(userId = 19470) {
        return instance.get(`profile/status/${userId}`);

    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    }
}