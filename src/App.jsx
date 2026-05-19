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

  const [communityPosts, setCommunityPosts] = useState([
  {
    id: 1,
    category: "여행후기",
    title: "슬로베니아 블레드 호수 다녀온 후기",
    content: "사람이 많지 않고 조용해서 혼자 여행하기 좋았어요.",
    author: "sangwoo",
    likes: 12,
    comments: 3,
    commentList: [
      { author: "travel01", text: "사진 찍기 좋은 곳도 많나요?" },
      { author: "hidden_trip", text: "블레드 호수 진짜 조용해서 좋아요." },
      { author: "guest", text: "저도 가보고 싶네요." },
    ],
  },
  {
    id: 2,
    category: "질문",
    title: "대만 화련 여행 가보신 분 있나요?",
    content: "타이루거 협곡 일정이랑 교통이 궁금합니다.",
    author: "travel01",
    likes: 5,
    comments: 8,
    commentList: [
      { author: "sangwoo", text: "버스보다는 투어가 편하다고 들었어요." },
      { author: "guest", text: "기차 예약은 미리 하는 게 좋아요." },
    ],
  },
  {
    id: 3,
    category: "꿀팁",
    title: "유럽 소도시 여행할 때 숙소 고르는 팁",
    content: "기차역 근처보다 구시가지 근처가 훨씬 편한 경우가 많아요.",
    author: "hidden_trip",
    likes: 20,
    comments: 4,
    commentList: [
      { author: "travel01", text: "이거 진짜 공감합니다." },
      { author: "guest", text: "밤 늦게 도착하면 기차역 근처도 괜찮더라구요." },
    ],
  },
    {
    id: 4,
    category: "여행후기",
    title: "일본 가나자와는 조용한 분위기가 좋았어요",
    content: "겐로쿠엔이랑 히가시 차야 거리가 특히 인상 깊었고, 큰 도시보다 차분해서 걷기 좋았어요.",
    author: "kanazawa_trip",
    likes: 14,
    comments: 2,
    commentList: [
      { author: "sangwoo", text: "가나자와성도 같이 보기 좋나요?" },
      { author: "guest", text: "오미초 시장도 코스에 넣으면 좋아요." },
    ],
  },
  {
    id: 5,
    category: "질문",
    title: "중국 리장 여행은 며칠 정도 잡는 게 좋을까요?",
    content: "리장고성이랑 옥룡설산, 블루문밸리까지 가려면 일정이 얼마나 필요할지 궁금합니다.",
    author: "lijiang_plan",
    likes: 7,
    comments: 2,
    commentList: [
      { author: "hidden_trip", text: "최소 3일 정도는 잡는 게 좋아요." },
      { author: "travel01", text: "옥룡설산은 하루 따로 빼는 걸 추천해요." },
    ],
  },
  {
    id: 6,
    category: "꿀팁",
    title: "몽골 울란바토르 여행할 때 테를지 일정은 따로 빼세요",
    content: "시내 관광이랑 테를지 국립공원은 분위기가 완전히 달라서 하루씩 나눠서 보는 게 훨씬 좋아요.",
    author: "mongol_trip",
    likes: 18,
    comments: 2,
    commentList: [
      { author: "guest", text: "게르 숙박도 같이 하면 좋겠네요." },
      { author: "sangwoo", text: "승마체험도 코스에 넣으면 괜찮을 것 같아요." },
    ],
  },
  {
    id: 7,
    category: "여행후기",
    title: "베트남 꾸이년은 휴양지 느낌이 강했어요",
    content: "꾸이년 해변이 조용하고, 끼꼬 비치랑 에오지오 쪽은 사진 찍기 좋은 분위기였어요.",
    author: "vietnam_hidden",
    likes: 11,
    comments: 2,
    commentList: [
      { author: "travel01", text: "다낭보다 덜 복잡한 느낌인가요?" },
      { author: "hidden_trip", text: "조용한 바다 찾는 사람한테 좋을 것 같아요." },
    ],
  },
  {
    id: 8,
    category: "질문",
    title: "캐나다 옐로나이프 오로라 여행 가보신 분 있나요?",
    content: "프레임 레이크 트레일이나 그레이트 슬레이브 호수 쪽도 같이 둘러볼 만한지 궁금합니다.",
    author: "aurora_plan",
    likes: 9,
    comments: 2,
    commentList: [
      { author: "guest", text: "겨울에 가면 방한 준비 꼭 해야 해요." },
      { author: "sangwoo", text: "오로라 목적이면 3박 이상이 좋아 보여요." },
    ],
  },
  {
    id: 9,
    category: "꿀팁",
    title: "필리핀 시퀴호르는 폭포랑 해변을 같이 넣으면 좋아요",
    content: "캄부가하이 폭포는 물놀이하기 좋고, 살락독 비치는 바다 색이 예뻐서 하루 코스로 묶기 괜찮아요.",
    author: "siquijor_trip",
    likes: 15,
    commentList: [
      { author: "guest", text: "발레테 나무도 코스에 넣으면 좋겠네요." },
      { author: "sangwoo", text: "이색 경험 카테고리랑 잘 맞는 것 같아요." },
    ],
  },
  {
    id: 10,
    category: "여행후기",
    title: "프랑스 몽펠리에는 분위기가 여유로웠어요",
    content: "코메디 광장 주변이 걷기 좋았고, 파브르 미술관이랑 페루 산책로를 같이 보기 좋았어요.",
    author: "montpellier_day",
    likes: 13,
    commentList: [
      { author: "travel01", text: "파리보다 덜 복잡한 느낌인가요?" },
      { author: "guest", text: "남프랑스 분위기 좋아 보여요." },
    ],
  },
  {
    id: 11,
    category: "꿀팁",
    title: "독일 프라이부르크는 자연 코스까지 같이 잡기 좋아요",
    content: "도시 안은 조용하고 깔끔한 느낌이고, 티티제 호수까지 같이 다녀오면 자연 풍경 코스로도 괜찮아요.",
    author: "freiburg_walk",
    likes: 17,
    commentList: [
      { author: "hidden_trip", text: "당일치기로 티티제 가능할까요?" },
      { author: "guest", text: "혼자 여행하기 좋아 보여요." },
    ],
  },
  {
    id: 12,
    category: "질문",
    title: "영국 본머스는 런던에서 당일치기 가능할까요?",
    content: "본머스 해변이랑 러셀 코츠 미술관을 보고 싶은데 하루 일정으로 충분한지 궁금합니다.",
    author: "uk_trip",
    likes: 8,
    commentList: [
      { author: "travel01", text: "해변 중심이면 당일치기도 가능할 것 같아요." },
      { author: "guest", text: "기차 시간만 잘 보면 괜찮을 듯해요." },
    ],
  },
  {
    id: 13,
    category: "여행후기",
    title: "스페인 사라고사는 대성당 분위기가 좋았어요",
    content: "필라르 광장이 넓고 인상적이었고, 라 세오 대성당까지 같이 보면 문화/역사 코스로 좋아요.",
    author: "zaragoza_trip",
    likes: 12,
    commentList: [
      { author: "sangwoo", text: "마드리드나 바르셀로나보다 덜 붐비나요?" },
      { author: "hidden_trip", text: "역사 건축 좋아하면 괜찮을 것 같아요." },
    ],
  },
  {
    id: 14,
    category: "꿀팁",
    title: "이탈리아 피렌체는 전망 코스를 꼭 넣는 게 좋아요",
    content: "피렌체 대성당이랑 시뇨리아 광장도 좋지만, 미켈란젤로 광장에서 보는 도시 전망이 가장 기억에 남아요.",
    author: "firenze_view",
    likes: 25,
    commentList: [
      { author: "guest", text: "노을 시간에 가면 좋을 것 같아요." },
      { author: "travel01", text: "걸어서 올라갈 수 있나요?" },
    ],
  },
  {
    id: 15,
    category: "질문",
    title: "포르투갈 브라가는 포르투에서 가기 괜찮나요?",
    content: "브라가 중심지랑 사메이로 성당을 보고 싶은데 포르투에서 하루 일정으로 다녀올 수 있을까요?",
    author: "braga_plan",
    likes: 7,
    commentList: [
      { author: "hidden_trip", text: "기차로 이동하면 당일치기도 괜찮아 보여요." },
      { author: "guest", text: "성당 위주 코스로 잡으면 좋을 것 같아요." },
    ],
  },
  {
    id: 16,
    category: "여행후기",
    title: "노르웨이 알레순드는 전망대가 진짜 좋았어요",
    content: "악슬라 전망대에서 보는 도시랑 바다 풍경이 인상적이었고, 알네스 등대까지 가면 더 여유로운 느낌이에요.",
    author: "alesund_view",
    likes: 19,
    commentList: [
      { author: "travel01", text: "도시가 작아서 걷기 좋나요?" },
      { author: "guest", text: "북유럽 감성 여행으로 좋아 보여요." },
    ],
  },
  {
    id: 17,
    category: "여행후기",
    title: "미국 미네소타는 도심이랑 자연을 같이 보기 좋았어요",
    content: "미니애폴리스 다운타운은 도시 느낌이고, 미니하하 폭포랑 체인 오브 레이크스는 산책하기 좋았어요.",
    author: "minnesota_walk",
    likes: 10,
    commentList: [
      { author: "sangwoo", text: "스톤 아치 브리지 사진 예쁠 것 같아요." },
      { author: "guest", text: "자연 속 체험 카테고리랑 잘 맞네요." },
    ],
  },
  {
    id: 18,
    category: "여행후기",
    title: "멕시코 과나후아토는 색감이 예쁜 도시였어요",
    content: "피필라 전망대에서 보는 도시 풍경이 좋았고, 키스의 골목이랑 중심 광장도 걸어다니기 좋았어요.",
    author: "guanajuato_trip",
    likes: 21,
    commentList: [
      { author: "guest", text: "감성 여행으로 딱 좋아 보여요." },
      { author: "sangwoo", text: "사진 카드로 쓰기 좋은 도시네요." },
    ],
  },
  {
    id: 19,
    category: "질문",
    title: "아르헨티나 멘도사는 와이너리 없이도 괜찮나요?",
    content: "독립 광장, 산마르틴 공원, 세로 데 라 글로리아 쪽 위주로 가도 여행 코스가 괜찮을지 궁금해요.",
    author: "mendoza_plan",
    likes: 5,
    commentList: [
      { author: "guest", text: "공원 코스만으로도 여유로울 것 같아요." },
      { author: "hidden_trip", text: "아콩카과 국립공원까지 넣으면 자연풍경도 좋아요." },
    ],
  },
  {
    id: 20,
    category: "여행후기",
    title: "칠레 아타카마는 풍경이 완전히 달랐어요",
    content: "달의 계곡이 정말 독특했고, 엘 타티오 간헐천이랑 미스칸티 라군까지 보면 자연풍경 코스로 강해요.",
    author: "atacama_view",
    likes: 23,
    commentList: [
      { author: "travel01", text: "고산지대라 힘들지는 않나요?" },
      { author: "guest", text: "액티비티 여행으로 좋아 보여요." },
    ],
  },
  {
    id: 21,
    category: "여행후기",
    title: "호주 브룸은 케이블 비치가 제일 기억에 남아요",
    content: "케이블 비치의 노을이 좋았고, 간테움 포인트랑 로벅 베이까지 보면 자연풍경 코스로 좋아요.",
    author: "broome_sunset",
    likes: 18,
    commentList: [
      { author: "guest", text: "호주에서 덜 알려진 느낌이라 좋네요." },
      { author: "sangwoo", text: "감성 여행 카드로 쓰기 좋아 보여요." },
    ],
  },
  {
    id: 22,
    category: "질문",
    title: "뉴질랜드 퀸스타운은 액티비티 없이도 괜찮나요?",
    content: "스카이라인 곤돌라랑 와카티푸 호수 위주로 천천히 보고 싶은데 액티비티를 안 해도 충분할까요?",
    author: "queenstown_plan",
    likes: 9,
    commentList: [
      { author: "travel01", text: "풍경만 봐도 충분히 좋을 것 같아요." },
      { author: "guest", text: "샷오버 강 쪽도 같이 보면 좋겠네요." },
    ],
  },
  {
    id: 23,
    category: "여행후기",
    title: "튀르키예 가지안테프는 음식이랑 박물관이 좋았어요",
    content: "제우그마 모자이크 박물관이 인상 깊었고, 타흐미스 커피하우스까지 들르면 지역 분위기를 느끼기 좋아요.",
    author: "gaziantep_trip",
    likes: 12,
    commentList: [
      { author: "hidden_trip", text: "문화/역사 코스로 괜찮아 보여요." },
      { author: "guest", text: "이스탄불이랑은 다른 느낌일 것 같아요." },
    ],
  },
  {
    id: 24,
    category: "꿀팁",
    title: "불가리아 소피아는 성당 코스를 묶어서 보세요",
    content: "알렉산더 네프스키 대성당, 성 소피아 교회, 보야나 교회를 함께 보면 도시의 역사 분위기를 느끼기 좋아요.",
    author: "sofia_walk",
    likes: 15,
    commentList: [
      { author: "travel01", text: "국립 문화 궁전도 같이 넣으면 좋겠네요." },
      { author: "guest", text: "동유럽 여행 코스로 좋을 것 같아요." },
    ],
  },
  {
    id: 25,
    category: "여행후기",
    title: "세르비아 베오그라드는 야외 코스가 좋았어요",
    content: "칼레메그단 요새에서 보는 풍경이 좋았고, 크네즈 미하일로바 거리랑 스카다를리야 거리도 걷기 좋았어요.",
    author: "belgrade_day",
    likes: 13,
    commentList: [
      { author: "sangwoo", text: "아다 치간리야도 코스에 넣으면 좋겠네요." },
      { author: "guest", text: "도시 탐험 느낌이 강하네요." },
    ],
  },
  {
    id: 26,
    category: "질문",
    title: "싱가포르는 숨겨진도시 느낌이 약하지 않나요?",
    content: "마리나 베이 샌즈랑 가든스 바이 더 베이는 유명해서, Beyond Map 컨셉이랑 맞는지 궁금합니다.",
    author: "city_question",
    likes: 6,
    commentList: [
      { author: "hidden_trip", text: "유명하지만 도시 탐험 예시로는 괜찮을 것 같아요." },
      { author: "travel01", text: "숨겨진 코스랑 섞으면 더 자연스러울 듯해요." },
    ],
  },
]);

const [likedPosts, setLikedPosts] = useState([]);
const [openCommentId, setOpenCommentId] = useState(null);
const [commentInputs, setCommentInputs] = useState({});
const [selectedCategory, setSelectedCategory] = useState("전체");
const [communityInput, setCommunityInput] = useState("");
const [communitySearch, setCommunitySearch] = useState("");

const handleCommunitySearch = () => {
  setCommunitySearch(communityInput);
};

const filteredCommunityPosts = communityPosts.filter((post) => {
  const categoryMatch =
    selectedCategory === "전체" || post.category === selectedCategory;

  const searchText = communitySearch.trim().replace(/\s/g, "");

  const titleText = post.title.replace(/\s/g, "");
  const contentText = post.content.replace(/\s/g, "");
  const authorText = post.author.replace(/\s/g, "");
  const categoryText = post.category.replace(/\s/g, "");

  const searchMatch =
    searchText === "" ||
    titleText.includes(searchText) ||
    contentText.includes(searchText) ||
    authorText.includes(searchText) ||
    categoryText.includes(searchText);

  return categoryMatch && searchMatch;
});

const handleLike = (postId) => {
  const isLiked = likedPosts.includes(postId);

  setCommunityPosts((prevPosts) =>
    prevPosts.map((post) =>
      post.id === postId
        ? {
            ...post,
            likes: isLiked ? post.likes - 1 : post.likes + 1,
          }
        : post
    )
  );

  setLikedPosts((prevLikedPosts) =>
    isLiked
      ? prevLikedPosts.filter((id) => id !== postId)
      : [...prevLikedPosts, postId]
  );
};

const handleToggleComments = (postId) => {
  setOpenCommentId((prevId) => (prevId === postId ? null : postId));
};

const handleCommentChange = (postId, value) => {
  setCommentInputs((prevInputs) => ({
    ...prevInputs,
    [postId]: value,
  }));
};

const handleAddComment = (postId) => {
  const commentText = commentInputs[postId]?.trim();

  if (!commentText) return;

  setCommunityPosts((prevPosts) =>
    prevPosts.map((post) =>
      post.id === postId
        ? {
            ...post,
            commentList: [
            ...post.commentList,
            {
              author: "guest",
              text: commentText,
            },
          ],
          }
        : post
    )
  );

  setCommentInputs((prevInputs) => ({
    ...prevInputs,
    [postId]: "",
  }));
};

const CommunityPage = () => {
  return (
    <div className="community-page">
      <div className="community-search-row">
       <input
  type="text"
  placeholder="여행지, 제목, 키워드 검색"
  className="community-search-input"
  value={communityInput}
  onChange={(e) => setCommunityInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleCommunitySearch();
    }
  }}
/>
        <button
  className="community-search-btn"
  onClick={handleCommunitySearch}
>
  검색
</button>
      </div>

      <div className="community-layout">
       <aside className="community-sidebar">
        <h3>카테고리</h3>

        {["전체", "여행후기", "질문", "꿀팁",].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </aside>

        <main className="community-main">
          <div className="community-title-row">
            <h2>최신 게시글</h2>
          </div>

          <div className="post-list">
            {filteredCommunityPosts.map((post) => (
                <div className="post-card" key={post.id}>
                <span className="post-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.content}</p>

                <div className="post-info">
                <span className="post-author">작성자 {post.author}</span>
                <span className="post-dot">·</span>

                <button
                  className={`post-action-btn ${
                    likedPosts.includes(post.id) ? "liked" : ""
                  }`}
                  onClick={() => handleLike(post.id)}
                >
                  좋아요 {post.likes}
                </button>

                <span className="post-dot">·</span>

                <button
                  className="post-action-btn"
                  onClick={() => handleToggleComments(post.id)}
                >
                  댓글 {post.commentList.length}
                </button>
              </div>

{openCommentId === post.id && (
  <div className="comment-box">
    <div className="comment-list">
      {post.commentList.map((comment, commentIndex) => (
        <div className="comment-item" key={commentIndex}>
          <strong>{comment.author}</strong>
          <span>{comment.text}</span>
        </div>
      ))}
    </div>

    <div className="comment-write">
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        value={commentInputs[post.id] || ""}
        onChange={(e) => handleCommentChange(post.id, e.target.value)}
       onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return;

            if (e.key === "Enter") {
              handleAddComment(post.id);
            }
          }}
      />

      <button onClick={() => handleAddComment(post.id)}>등록</button>
    </div>
  </div>
)}
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
      {CommunityPage()}
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