
import Header from  "../../components/Header";

export default function BasicLayout(props){
const {children} = props;
return(
    <div>
    <Header />
   <h2 className="content">{children}</h2>
    </div>
);
}