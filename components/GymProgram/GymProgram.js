import Style from "./GymProgram.module.css";
import DumbbellIcon from "../../public/dumbbell.png";
import Image from "next/image";

export default function GymProgram() {
  return (
    <>
      <div class={Style.main} id="Program">
        <GymTitle />
        <div
          style={{
            width: "100%",
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "40px 0px",
          }}
        >
          <GymProgramCard
            title="Basic Fitness"
            desc="Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
          />
          <GymProgramCard
            title="Advanced Muscle Course"
            desc="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."
          />
          <GymProgramCard
            title="New Gym Training"
            desc="If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot."
          />
          <GymProgramCard
            title="Yoga Training"
            desc="This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections."
          />
          <GymProgramCard
            title="Basic Muscle Course"
            desc="Credit goes to Pexels website for images and video background used in this HTML template."
          />
          <GymProgramCard
            title="Body Building Course"
            desc="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
          />
        </div>
      </div>
    </>
  );
}

const GymProgramCard = ({ title, desc }) => (
  <div class={Style.card}>
    <Image
      src={DumbbellIcon}
      width={100}
      height={100}
      alt="dumbbell"
      class={Style.img}
    />
    <div class={Style.cardInfo}>
      <h4 class={Style.h4}>{title}</h4>
      <p class={Style.p}>{desc}</p>
      <a class={Style.a} href="#/">
        DISCOVER MORE
      </a>
    </div>
  </div>
);

const GymTitle = () => (
  <>
    <h2 class={Style.h2}>
      CHOOSE <span style={{ color: "#ed563b" }}>PROGRAM</span>
    </h2>
    <p class={Style.subTitle}>
      Training Studio is free CSS template for gyms and fitness centers. You are{" "}
      <br />
      allowed to use this layout for your business website.
    </p>
  </>
);
