import Style from "./Contact.module.css";
const Map = () => (
  <div class={Style.mapouter}>
    <iframe
      class={Style.iframe}
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.7509852943613!2d30.755939965450608!3d28.100730508033756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2549f8aac2e5%3A0xb06293e388b32ddd!2z2KzZitmFINin2YTZhdmG2YrYpw!5e0!3m2!1sar!2seg!4v1711372532955!5m2!1sar!2seg"
    ></iframe>
  </div>
);
export default Map;
