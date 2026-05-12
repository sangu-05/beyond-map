import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import countries from "./data/countries";
import TravelMap from "./components/TravelMap";

const keywordList = [
  "자연풍경",
  "문화/역사",
  "도시탐험",
  "휴양/힐링",
  "액티비티",
  "이색경험",
  "숨겨진도시",
  "감성여행",
  "자연 속 체험",
  "혼자여행",
  "커플여행",
  "짧은여행"
];

function App() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [focusedPlace, setFocusedPlace] = useState(null);

  const handleSearch = (keyword) => {
  const searchText = keyword.trim().replace(/\s/g, "");

  if (searchText === "") return;

  const filtered = countries.filter((item) => {
  const countryText = item.country.replace(/\s/g, "");
  const cityText = item.city.replace(/\s/g, "");

  const keywordMatch = item.keywords.some((word) => {
    const keywordText = word.replace(/\s/g, "");
    return keywordText.includes(searchText);
  });

  const countryMatch = countryText.includes(searchText);
  const cityMatch = cityText.includes(searchText);

  return keywordMatch || countryMatch || cityMatch;
});

  setResults(filtered);
  setSearchKeyword(keyword);
  setSearched(true);
  setSelectedPlace(null);
};

  const handleReset = () => {
    setResults([]);
    setSearchKeyword("");
    setSearched(false);
     setSelectedPlace(null);
  };

  const handleCardClick = (item) => {
    setSelectedPlace(item);
  };

 if (selectedPlace) {
  return (
    <div className="result-page">
      <Header small onClick={handleReset} />
      <SearchBar onSearch={handleSearch} />

      <div className="layout">
        <div className="sidebar">
          <h3>키워드 목록</h3>

          <div className="keyword-buttons">
            {keywordList.map((k) => (
              <button
                key={k}
                className="keyword-item"
                onClick={() => {
                  setSelectedPlace(null);
                  handleSearch(k);
                }}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-content">
          <h2 className="detail-title">
            {selectedPlace.country} - {selectedPlace.city}
          </h2>

          <div className="detail-hero">
             <TravelMap
                lat={selectedPlace.lat}
                lng={selectedPlace.lng}
                place={selectedPlace.mainPlace}
                places={selectedPlace.places}
                zoom={selectedPlace.zoom}
                focusedPlace={focusedPlace}
            />
          </div>

          <section className="course-section">
            
            <div
                className={`course-card-list ${
                  selectedPlace.places.length >= 5 ? "five-cards" : ""
                }`}
            >
              {(selectedPlace.places || []).map((place, index) => (
                <div
                  className="course-card"
                  key={index}
                  onClick={() => setFocusedPlace(place)}
                  onMouseEnter={() => setFocusedPlace(place)}
                  onMouseLeave={() => setFocusedPlace(null)}
                >
                  <div className="course-image-box">
                    <img
                      src={
                        selectedPlace.courseImages?.[index] ||
                        selectedPlace.image
                      }
                      alt={place.name}
                    />
                  </div>
                  <div className="course-card-text">
                      <h4>
                        <span>{index + 1}</span>
                        {place.name}
                      </h4>
                      <p>{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className={searched ? "result-page" : "home"}>
      {!searched ? (
        <>
          <Header />
          <SearchBar onSearch={handleSearch} />
        </>
      ) : (
        <>
          <Header small onClick={handleReset} />
          <SearchBar onSearch={handleSearch} />

          <div className="layout">
            <div className="sidebar">
              <h3>키워드 목록</h3>

              <div className="keyword-buttons">
                    {keywordList.map((k) => (
                      <button
                        key={k}
                        className="keyword-item"
                        onClick={() => handleSearch(k)}
                      >
                        {k}
                      </button>
                    ))}
            </div>

            </div>

            <div className="results">
              <h2>
                "{searchKeyword}" 검색 결과 {results.length}개
              </h2>

              {results.map((item, index) => (
                <div className="card" key={index} onClick={() => handleCardClick(item)}>
                  <div className="image-box">
                    <img src={item.image} alt={item.city} />
                  </div>
                  <p>{item.country} - {item.city}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;