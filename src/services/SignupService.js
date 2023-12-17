
export async function saveSignup(credentials){
    console.log("credentials: ", credentials);
    try {
        const response = await fetch("http://localhost:3900/user/signup",{
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          });
        return await response;
    } catch (error) {
        console.log(error);
    }
   }