import axios from "axios";
import { useAuthService } from "./service/auth.service";

const axiosInct = axios.create();

axiosInct.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem("access_token");

    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + accessToken,
    };
    return config;
  },
  (error) => {}
);
axiosInct.interceptors.response.use(
  (res) => res,
  async (err) => {
    const authService = useAuthService();
    if (err.response.status == 401) {
      const accessToken = await authService.authUser();
      const oldReq = err.config;
      oldReq.headers = {
        Authorization: "Bearer " + accessToken,
      };
      axiosInct(oldReq);
    }
  }
);
export default axiosInct;
