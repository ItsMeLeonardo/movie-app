import Button from "../Button";

export default function Error({ message }) {
  return (
    <div className="errorContainer">
      <h1 className="errorMessage">{message}</h1>
      <Button content="Go to Home" type="Secondary" location="/home" />
    </div>
  );
}
