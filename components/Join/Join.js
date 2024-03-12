import Button from "../Button/Button";
import GymOverlayBg from "../../public/gymOverlayBg.jpg";
import Style from "./Join.module.css"
const Join = () => (
  <div class={Style.member}>
    <h2 class={Style.h2}>
      DON’T <span class={Style.span}>THINK</span>, BEGIN <span>TODAY</span>!
    </h2>
    <p class={Style.p}>
      Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
      ligula, sit amet dapibus odio augue eget libero.
      <br /> Morbi tempus mauris a nisi luctus imperdiet.
    </p>
    <Button text="BECOME A MEMBER" />
  </div>
);
export default Join;
