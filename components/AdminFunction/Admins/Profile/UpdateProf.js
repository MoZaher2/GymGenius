import Style from "./Profile.module.css";
export default function UpdateProf() {
  return (
    <>
      <form className={Style.updateInfo}>
        <div className={Style.inputCont}>
          <label htmlFor="name" className={Style.label}>
            UserName
          </label>
          <input
            type="text"
            name="username"
            className={Style.input}
            placeholder="new username"
            required
          />
        </div>
        <div className={Style.inputCont}>
          <label htmlFor="num" className={Style.label}>
            Contact No.
          </label>
          <input
            type="text"
            name="num"
            className={Style.input}
            minLength={10}
            maxLength={11}
            placeholder="Ex:01005138370"
            required
          />
        </div>
        <div className={Style.inputCont}>
          <label htmlFor="email" className={Style.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            className={Style.input}
            placeholder="mozaher@example.com"
            required
          />
        </div>
        <div className={Style.btns}>
          <button type="reset" className={Style.btnCancel}>
            Cancel
          </button>
          <button type="submit" className={Style.btnSave}>
            Save
          </button>
        </div>
      </form>
    </>
  );
}
