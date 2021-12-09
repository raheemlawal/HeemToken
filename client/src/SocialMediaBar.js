import './SocialMediaBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,Navbar,Row} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter,faDiscord} from "@fortawesome/free-brands-svg-icons";

function SocialMediaBar() {
    return (
        <Navbar className = "socialmedia-bar">
            <Nav className="mx-auto">
                <Row id = "botrow">
                    <div>
                        <a href="https://www.twitter.com/"
                            className="twittersocial">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                 </Row>
            </Nav>
        </Navbar>
    );
  }
  export default SocialMediaBar;