// import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

async function getAuthToken() {
  const url =
    "https://id.twitch.tv/oauth2/token?client_id=g7tso1wxr1uv8qjs6h10cbmd15n1v4&client_secret=f8eudorcqnf873egaq7qr1x5n0qiyz&grant_type=client_credentials";

  const response = await axios.post(url);
  console.log(response.data);
  return response.data;
}

async function getGamesList() {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.igdb.com/v4/games?fields=name,cover,url",
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

//   }
// }

getAuthToken();
