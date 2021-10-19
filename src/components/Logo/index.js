import "./style.css";

export default function Logo({ size = "normal" }) {
  return (
    <div className={`logo ${size}`}>
      <i className={`logoIcon ${size}`}></i>
      <h3 className={`logoText ${size}`}>My Films</h3>
    </div>
  );
}
