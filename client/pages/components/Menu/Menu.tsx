import { useState } from "react";
import {Container, Grid,Label,Menu,Icon} from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../Modal/BasicModal/BasicModal";

export default function MenuWeb(){
  
const [showModal, setShowModal] = useState(false);
const onShowModal = () =>setShowModal(true);

   return(
       <div className="menu">
        <Container>
        <Grid>
        <Grid.Column className="menu__left" width={6}>
        <MenuPlatforms/>
        </Grid.Column>
        <Grid.Column className="menu__right" width={10}>
        <MenuOptions  onShowModal={onShowModal}/>
        </Grid.Column>
        </Grid>
        </Container>
        <BasicModal show={showModal} setShow={setShowModal} title="Inicia Sesion" size="small">
        <h2>Contenido del Modal</h2>
        </BasicModal>
       </div>
   ); 
}

function MenuPlatforms(){
    return(
     <Menu>
     <Link href="/play-station">
     <Menu.Item as="a">Playstation</Menu.Item>
     </Link>
     <Link href="/xbox">
     <Menu.Item as="a">Xbox</Menu.Item>
     </Link>
     <Link href="/switch">
     <Menu.Item as="a">Switch</Menu.Item>
     </Link>
     </Menu>   
    );
}

function MenuOptions(props){
    const{onShowModal}=props;
    return(
     <Menu.Item onClick={onShowModal}>
     <Icon className="user outline"/>
     </Menu.Item>   
    
    );
}