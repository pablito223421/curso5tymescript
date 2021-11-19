 import {BASE_PATH} from "../../utils/constants";

export async  function registerApi(formData){
try{
const url = `${BASE_PATH}/auth/local/register`;
const params = {
    method:"POST",
    headers:{
    "Content-type":"application/json"
    },
    body:JSON.stringify(formData)
};
 //const response:await fetch(url, params);
 //const result: await Response.json();
}catch(error){
console.log(error);
return null;
}

}