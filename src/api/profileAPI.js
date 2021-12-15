import {instance} from "./api";

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);

    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    },

    savePhoto(file) {
        const formData = new FormData();
        formData.append("image", file);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile);
    },
}