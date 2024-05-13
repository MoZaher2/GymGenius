import Style from "./Profile.module.css";
export default function UpdatePass() {
  return (
    <>
      <form className={Style.changePass}>
        <h2 className={Style.formHead}>Change Password</h2>
        <div className={Style.inputCont}>
          <label htmlFor="pass" className={Style.label}>
            Current Password
          </label>
          <input
            type="password"
            id="pass"
            name="pass"
            className={Style.input}
            required
          />
        </div>
        <div className={Style.inputCont}>
          <label htmlFor="new-pass" className={Style.label}>
            New Password
          </label>
          <input
            type="password"
            id="new-pass"
            name="new_pass"
            className={Style.input}
            required
          />
        </div>
        <div className={Style.inputCont}>
          <label htmlFor="re-pass" className={Style.label}>
            Re-type Password
          </label>
          <input
            type="password"
            id="re-pass"
            name="re_pass"
            className={Style.input}
            required
          />
        </div>
        <div className={Style.btns}>
          <button type="reset" className={Style.btnCancel}>
            Cancel
          </button>
          <button type="submit" className={Style.btnSave}>
            Change
          </button>
        </div>
      </form>
    </>
  );
}
