import Socials from "../Coaches/Socials";
import Style from "./Coaches.module.css"
import Image from "next/image";
const CoachCard = ({ title, name, desc, img }) => (
  <div class={Style.card}>
    <Image
      src={img}
      alt="Coach"
      class={Style.img}
    />
    <h5 class={Style.h5}>{title}</h5>
    <h3 class={Style.h3}>{name}</h3>
    <p class={Style.p}>{desc}</p>
    <Socials />
  </div>
);
export default CoachCard;
