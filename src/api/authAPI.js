import {instance} from "./api";

export const authAPI = {
    getAuthUser() {
        return  instance.get(`auth/me`)
            .then(response => response.data);
    },

    getAuthUserAvatar(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data.photos.small);
    },

    loginUser(email, password, rememberMe, captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    }
}