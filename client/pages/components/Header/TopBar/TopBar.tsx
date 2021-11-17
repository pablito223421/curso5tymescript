
import Link from "next/link";
import Image from "next/image";
import * as React from "react" ;

export default function TopBar() {
    return (
        <div className="top-bar">
         <div>
        <div className="top-bar">
        <div  className="top-bar__left">
        <Logo/>
        </div>
        <div  className="top-bar__right">
        <Search/>
        </div>
        </div>
         </div> 
        </div>
    );
}

function Logo() {
return(
<Link href="/">
<a>
<img  src="./logo.png" alt="Gamming"/>
</a>
</Link>
)
}

function Search(){
    return(
     <input
      id="search-name" 
     />
    );
}
