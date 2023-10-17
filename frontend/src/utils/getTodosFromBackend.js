// getTodosFromBackend.js
import axios from "axios";

export async function getTodosFromBackend(setCallBackFun) {
    try{
        const config = {
            method: "get",
            url: "http://localhost:8081/gettodos",
            headers: {
              "Content-Type": "application/json",
            }
        }
        const res = await axios(config);
        console.log(res.data.todos);
        setCallBackFun(res.data.todos);
        console.log(res.data.message);

    }catch(error){
        console.log("Fetch in Frontend failed");
    
      }
    }