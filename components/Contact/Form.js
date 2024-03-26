import Button from "../Button/Button";
import Style from "./Contact.module.css"

const Form = ({ text }) => (
  <div class={Style.formContainer}>
    <form class={Style.form}>
      <input type="text" placeholder="Your Name*" class={Style.input}/>
      <input type="text" placeholder="Your Email*" class={Style.input} />
      <input type="text" placeholder="Subject" class={Style.input}/>
      <textarea cols="30" rows="10" placeholder="Message" class={Style.textarea}></textarea>
      <Button text="SEND MESSAGE" />
    </form>
  </div>
);



export default Form;
