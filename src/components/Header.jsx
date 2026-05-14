export default function Header({ small = false, onClick, onCommunityClick }) {
  return (
    <div className={small ? "header small" : "header"}>
      <h1
        className={small ? "small-title" : "title"}
        onClick={onClick}
      >
        Beyond Map
      </h1>

      {onCommunityClick && (
        <button className="community-link" onClick={onCommunityClick}>
          Beyond Community
        </button>
      )}
    </div>
  );
}