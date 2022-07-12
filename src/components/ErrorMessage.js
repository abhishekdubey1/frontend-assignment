import RightArrowIcon from "./svg/RightArrowIcon";

export default () => (
  <p
    role="alert"
    style={{ color: "red", textAlign: "center", position: "relative" }}
  >
    Error occured
    <br />
    <br />
    <span style={{ color: "black", fontWeight: "bold" }}>
      Swipe down to refresh
      <span className="downArrow bounce">
        <RightArrowIcon />
      </span>
    </span>
  </p>
);
