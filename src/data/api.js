import axios from "axios";

export function getChatData(){
    return new Promise((resolve,reject)=>{
        axios({
            url:"https://my-json-server.typicode.com/codebuds-fk/chat/chats",
            method:"GET"
        }).then((response)=>resolve(response.data))
        .catch(error=>reject(error))
    })
}