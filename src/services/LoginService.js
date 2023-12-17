import axios from "axios";

export async function login(credentials){
    const response = await fetch("http://127.0.0.1:3900/user/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
    //   console.log("response from api", await response.json());
    return  await response.json();
}
