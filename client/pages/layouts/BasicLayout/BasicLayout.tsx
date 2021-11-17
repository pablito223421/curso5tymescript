

export default function BasicLayout(props){
const {children} = props;
return(
    <div>
   <h2 className="content">{children}</h2>
    </div>
);
}