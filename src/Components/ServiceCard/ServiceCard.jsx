
import "./style.css";
import Arrow from "../../assets/svg/Arrow";

export default function ServiceCard(props) {
  const { title, icon } = { ...props };
  return (
    <div className="service-card">
      <div>{icon}</div>
      <p>{title}</p>
      <div className="icon">
        {" "}
        <Arrow />
      </div>
    </div>
  );
}
