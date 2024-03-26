import Map from "@/components/Contact/Map";
import Form from "@/components/Contact/Form";
import Style from "./Contact.module.css"

export default function Contact() {
  return (
    <>
      <h2 class={Style.h2}>
        Contact <span class={Style.h2span}>Us</span>
      </h2>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "40px 0px",
        }}
      >
        <Map />
        <Form />
      </div>
      <footer class={Style.footer}>
      <p class={Style.p}>
        Copyright &copy; 2024 GymGenius Team - Designed by{" "}
        <a href="#Mozaher" target="_blank" class={Style.a}>
          MoZaher
        </a>
      </p>
    </footer>
    </>
  );
}
