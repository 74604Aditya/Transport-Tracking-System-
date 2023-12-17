import { Container } from "react-bootstrap";
import TeamComponent from "./TeamComponent";

export function About(){
    return(
        <Container style={{border:"1px solid bluevoilet"}} className="mt-5" >
               <TeamComponent></TeamComponent>
        </Container>
    );
}