import { useEffect, useState } from "react";

export default function SearchBar({ onSearch, defaultValue = "", resetKey }) {
  const [keyword, setKeyword] = useState(defaultValue);

  useEffect(() => {
    setKeyword(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
  setKeyword("");
}, [resetKey]);

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="예: 일본 or 문화/역사"
        value={keyword}
        autoFocus
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button className="search-btn" onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
}