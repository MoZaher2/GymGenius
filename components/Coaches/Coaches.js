import CoachCard from "./CoachCard";
import TrainerOneBg from "../../public/trainerOne.jpg";
import TrainerTwoBg from "../../public/trainerThree.jpg";
import TrainerThreeBg from "../../public/trainerThree.jpg";
import Style from "./Coaches.module.css";

const Coaches = () => (
  <div class={Style.coaches} id="Coaches">
    <h2 class={Style.h2}>
      EXPERT <span class={Style.h2span}>COACHES</span>
    </h2>
    <p class={Style.h2p}>
      Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra{" "}
      <br />
      ipsum dolor, ultricies fermentum massa consequat eu.
    </p>
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
      <CoachCard
        title="Strength Trainer"
        name="Bret D. Bowers"
        desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
        img={TrainerOneBg}
      />
      <CoachCard
        title="Muscle Trainer"
        name="Hector T. Daigl"
        desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
        img={TrainerTwoBg}
      />
      <CoachCard
        title="Power Trainer"
        name="Paul D. Newman"
        desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
        img={TrainerThreeBg}
      />
    </div>
  </div>
);
export default Coaches;
