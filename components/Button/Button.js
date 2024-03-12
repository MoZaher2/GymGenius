import  Style  from "./Button.module.css";
const Button = ({ text }) => (
  <a class={Style.btn} href="#/">
    {text}
  </a>
);
export default Button;
