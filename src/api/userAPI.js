import {instance} from "./api";

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            }).then(response => response.data);
    },

    followUser (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    unfollowUser (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
}