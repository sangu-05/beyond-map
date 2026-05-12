import { useEffect, useState } from "react";

export default function SearchBar({ onSearch, defaultValue = "" }) {
  const [keyword, setKeyword] = useState(defaultValue);

  useEffect(() => {
    setKeyword(defaultValue);
  }, [defaultValue]);

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="키워드 입력"
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