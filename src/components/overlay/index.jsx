import { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import styles from "./overlay.module.scss";

export default function Overlay() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleCloseComponents() {
    if (state.mobileNavOpen) {
      uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: false });
    }
    uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
  }

  return (
    <div
      className={styles.overlay}
      data-visible={state.overlayVisible ? true : false}
      aria-hidden="true"
      onClick={handleCloseComponents}
    ></div>
  );
}
