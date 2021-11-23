import React, {useState,useEffect}from "react";
import BasicLayout from "../../client/pages/layouts/BasicLayout/BasicLayout";
import {useRouter} from "next/router";
import useAuth from "../pages/hooks/userAuth";
import {getMeApi} from "../api/User";

export default function Account (){
const [user, setUser] = useState(undefined);
const {auth, logout} = useAuth();
const router = useRouter();

useEffect ( () =>{
(async () =>{
const response = await getMeApi(logout);
setUser(response || null);
})()
},[auth]);

if(user===undefined) return null;
if(!auth && !user){
    router.replace("/");
    return null;
}

return(
<BasicLayout className="account">
<Configuration />
</BasicLayout>
);
}

function Configuration(){
return(
    <div className="acount__configuration">
     <div className="title">Configuración</div>
     <div className="data">Formularios de configuración</div>
    </div>
)
}
