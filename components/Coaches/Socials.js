import Style from "./Coaches.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Socials = () => (
  <div className={Style.socials}>
    <FontAwesomeIcon icon={faFacebookF} className={Style.i} />
    <FontAwesomeIcon icon={faTwitter} className={Style.i} />
    <FontAwesomeIcon icon={faWhatsapp} className={Style.i} />
  </div>
);
export default Socials;
