import axios from "axios";
import router from "@/router/index";
import SERVER from "@/api/spring";

export default {
    postuserData({ commit }, info) {
        axios
          .post(info.location, info.data)
          .then((res) => {
            commit("SET_USERID", res.data.userid);
            // sessionStorage에 유저의 정보를 저장
            sessionStorage.setItem("userid", res.data.userid);
            router.push({ path: "/perparation" });
          })
          .catch(() => alert("아이디 또는 비밀번호가 틀렸습니다"));
      },
    signup({ dispatch }, signupData) {
        const info = {
          location: SERVER.URL + SERVER.ROUTES.users,
          data: signupData,
        };
        dispatch("postuserData", info);
    },
    logout({ commit }) {
        commit("SET_USERID", null);
        router.push({path: "/"})
  },
  login({ dispatch }, loginData) {
    const info = {
      location: SERVER.URL + SERVER.ROUTES.login,
      data: loginData,
    };
    dispatch("postuserData", info);
      
    }
  
}