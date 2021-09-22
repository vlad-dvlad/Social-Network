import {instance} from "./api";

export const authAPI = {
    getAuthUser() {
        return  instance.get(`auth/me`)
            .then(response => response.data);
    },

    getAuthUserAvatar(id = 2) {
        return instance.get(`profile/${id}`)
            .then(response => response.data.photos.small);
    },

    loginUser(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },

    logoutUser() {
      return instance.delete(`/auth/login`)
          .then(response => response.data);
    }
}