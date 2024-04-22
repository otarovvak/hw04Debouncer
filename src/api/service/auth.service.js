import axios from "axios";

const CLIENT_ID = "2136a4c5d664491a8dda6eceb76eafd0";
const CLIENT_SECRET = "6fe6fa186f2a4e3888a03f7ddd3b452c";

export const useAuthService = () => {
  const authUser = async () => {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    localStorage.setItem("access_token", res.data.access_token);
    return res.data.access_token;
  };
  return { authUser };
};