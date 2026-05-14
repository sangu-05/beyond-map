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
  const [searchResetKey, setSearchResetKey] = useState(0);
  const [page, setPage] = useState("map");

  const handleSearch = (keyword, clearInput = false) => {
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

  if (clearInput) {
  setSearchResetKey((prev) => prev + 1);
  }

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

  const communityPosts = [
    {
      category: "여행후기",
      title: "슬로베니아 블레드 호수 다녀온 후기",
      content: "사람이 많지 않고 조용해서 혼자 여행하기 좋았어요.",
      author: "sangwoo",
      likes: 12,
      comments: 3,
    },
    {
      category: "질문",
      title: "대만 화련 여행 가보신 분 있나요?",
      content: "타이루거 협곡 일정이랑 교통이 궁금합니다.",
      author: "travel01",
      likes: 5,
      comments: 8,
    },
    {
      category: "꿀팁",
      title: "유럽 소도시 여행할 때 숙소 고르는 팁",
      content: "기차역 근처보다 구시가지 근처가 훨씬 편한 경우가 많아요.",
      author: "hidden_trip",
      likes: 20,
      comments: 4,
    },
  ];

const CommunityPage = () => {
  return (
    <div className="community-page">
      <div className="community-search-row">
        <input
          type="text"
          placeholder="여행지, 제목, 키워드 검색"
          className="community-search-input"
        />
        <button className="community-search-btn">검색</button>
      </div>

      <div className="community-layout">
        <aside className="community-sidebar">
          <h3>카테고리</h3>
          <button>전체</button>
          <button>여행후기</button>
          <button>질문</button>
          <button>꿀팁</button>
          <button>동행구함</button>
        </aside>

        <main className="community-main">
          <div className="community-title-row">
            <h2>최신 게시글</h2>
            <button className="write-btn">글쓰기</button>
          </div>

          <div className="post-list">
            {communityPosts.map((post, index) => (
              <div className="post-card" key={index}>
                <span className="post-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.content}</p>

                <div className="post-info">
                  <span>작성자 {post.author}</span>
                  <span>좋아요 {post.likes}</span>
                  <span>댓글 {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

  if (page === "community") {
  return (
    <div className="community-screen">
      <Header
        small
        onClick={() => setPage("map")}
        onCommunityClick={() => setPage("community")}
      />
      <CommunityPage />
    </div>
  );
}

 if (selectedPlace) {
  return (
    <div className="result-page">
      <Header
        small
        onClick={handleReset}
        onCommunityClick={() => setPage("community")}
      />
      <SearchBar onSearch={handleSearch} resetKey={searchResetKey} />

      <div className="layout">
        <div className="sidebar">
          <h3>키워드 목록</h3>

          <div className="keyword-buttons">
            {keywordList.map((k) => (
              <button
                key={k}
                className={`keyword-item ${searchKeyword === k ? "active" : ""}`}
                onClick={() => {
                  setSelectedPlace(null);
                  handleSearch(k, true);
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
          <SearchBar
            onSearch={handleSearch}
            resetKey={searchResetKey}
            variant="box"
          />
        </>
      ) : (
        <>
          <Header
            small
            onClick={handleReset}
            onCommunityClick={() => setPage("community")}
          />
          <SearchBar
            onSearch={handleSearch}
            resetKey={searchResetKey}
            variant="box"
          />

          <div className="layout">
            <div className="sidebar">
              <h3>키워드 목록</h3>

              <div className="keyword-buttons">
                    {keywordList.map((k) => (
                      <button
                        key={k}
                        className={`keyword-item ${searchKeyword === k ? "active" : ""}`}
                        onClick={() => handleSearch(k, true)}
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