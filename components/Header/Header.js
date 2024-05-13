import Style from "./Header.module.css";
import Logo from "../../public/logo.png";
import Image from "next/image";
import SunMoon from "@/components/Toggle/SunMoon"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Header() {
  return (
    <>
      <div className={Style.header}>
        <div className={Style.imgCont}>
        <Image
            src={Logo}
            className={Style.img}
            alt="logo"
        />
          {/* <img src="logo.png" alt="logo" /> */}
        </div>
        <div className={Style.icon}>
        <SunMoon />
        <i className={Style.bell} >
            <NotificationsActiveIcon />
        </i>
        </div>
      </div>
    </>
  );
}
