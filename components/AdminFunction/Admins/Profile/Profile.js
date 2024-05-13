import Style from "./Profile.module.css";
import UpdateProf from "./UpdateProf";
import UpdatePass from "./UpdatePass";
import Avatar from "../../../../public/logo.png";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className={Style.content}>
        {/* Profile */}
        <div className={Style.profile}>
          <div className={Style.prof}>
            <div className={Style.adminImg}>
              <div className={Style.imgCont}>
                <Image src={Avatar} className={Style.avatar} alt="Avatar" />
              </div>
              <p className={Style.adminName}>Mohamed Zaher</p>
            </div>
            <div className={Style.infoCont}>
              <p className={Style.text}>Username</p>
              <p>mozaher</p>
            </div>
            <div className={Style.infoCont}>
              <p className={Style.text}>Email</p>
              <p style={{maxWidth: "215px",overflow: "hidden"}}>mohamedzahertaha@gmail.com</p>
            </div>
            <div className={Style.infoCont}>
              <p className={Style.text}>Age</p>
              <p>23</p>
            </div>
            <div className={Style.infoCont}>
              <p className={Style.text}>Phone</p>
              <p>01005138370</p>
            </div>
            <div className={Style.infoCont}>
              <p className={Style.text}>Salary</p>
              <p>3500$</p>
            </div>
          </div>
          <button className={Style.addAdmin}>Register New Admin Account</button>
        </div>
        <div className={Style.forms}>
          {/* Update Info */}
          <UpdateProf />
          {/* Update Password */}
          <UpdatePass />
        </div>
      </div>
    </>
  );
}

