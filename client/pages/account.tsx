import React, {useState,useEffect}from "react";
import BasicLayout from "../../client/pages/layouts/BasicLayout/BasicLayout";
import {useRouter} from "next-router";
import useAuth from "../pages/hooks/userAuth";
import {getMeApi} from "../api/User";
import ChangeNameForm from "../../client/pages/components/Account/ChangeNameForm/ChangeNameForm" ;

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
<Configuration user={user}/>
</BasicLayout>
);
}

function Configuration(props){
    const {user} = props;
return(
    <div className="acount__configuration">
     <div className="title">Configuración</div>
     <div className="data">
     <ChangeNameForm user={user}/>
     </div>
    </div>
)
}
