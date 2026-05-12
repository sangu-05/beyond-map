export default function Header({ small = false, onClick }) {
  return (
    <h1
      className={small ? "small-title" : "title"}onClick={onClick}>Beyond Map
    </h1>
  );
}