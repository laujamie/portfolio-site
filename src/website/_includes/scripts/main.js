import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../styles/main.css";

library.add(faArrowLeft, faLinkedinIn, faGithub);

dom.i2svg();
