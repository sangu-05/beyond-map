const countries = [
  {
    country: "일본",
    city: "가나자와",
    zoom: 14,
    image: "https://res-3.cloudinary.com/jnto/image/upload/w_750,h_750,c_fill,f_auto,fl_lossy,q_auto/v1648535635/gifu/H_00092_002.jpg",
    mainPlace: "겐로쿠엔",
    lat: 36.5621,
    lng: 136.6625,
    places: [
        {
            name: "가나자와성",
            lat: 36.5613,
            lng: 136.6562,
            description: "가나자와의 대표적인 역사 유적으로, 성곽과 정원을 함께 둘러볼 수 있는 장소예요.",
        },
        {
            name: "오미초 시장",
            lat: 36.5718,
            lng: 136.6569,
            description: "신선한 해산물과 다양한 먹거리를 즐길 수 있는 가나자와의 대표 재래시장이에요.",
        },
        {
            name: "히가시 차야 거리",
            lat: 36.5728,
            lng: 136.6661,
            description: "전통 찻집과 목조 건물이 이어진 거리로, 일본 전통 분위기를 느낄 수 있는 곳이에요.",
        },
        {
            name: "나가마치 사무라이 거리",
            lat: 36.5630,
            lng: 136.6507,
            description: "에도 시대 사무라이의 흔적이 남아 있는 거리로, 고즈넉한 분위기가 매력적인 장소에요."
        },
        ], 
        courseImages: [
            "https://visitkanazawa.jp/lsc/upfile/spot/0001/0060/10060_1_l.jpg",
            "https://digjapan.travel/files/topics/9570_ext_02_ko_0.jpg",
            "https://visitkanazawa.jp/lsc/upfile/spot/0001/0212/10212_7_l.jpg",
            "https://images.trvl-media.com/place/553248635962289150/08f4f675-6d98-4bcc-bada-9578d0499bda.jpg",
        ],
    keywords: ["문화/역사", "도시탐험", "휴양/힐링", "감성여행", "혼자여행", "커플여행", "짧은여행"],
  },

  {
    country: "중국",
    city: "리장",
    zoom: 9,
    image: "https://i.namu.wiki/i/0y0sxr2FSoLpxNjFp3HgubzcqI4kVQQIaeRbg90-U8qTUlkTQSmyF4cfJxoMedYO_IliDIehYZcZQjoRiS_sUQ.jpg",
    mainPlace: "리장고성",
    lat: 26.8721,
    lng: 100.2385,
    places: [
        {
            name: "사방가",
            lat: 26.8717,
            lng: 100.2399,
            description: "리장고성 중심 광장으로, 다양한 상점과 공연이 어우러진 활기찬 공간이에요.",
        },
        {
            name: "옥룡설산",
            lat: 27.1096,
            lng: 100.2387,
            description: "해발 5,000m 이상의 설산으로, 장관을 이루는 자연 경관을 감상할 수 있어요.",
        },
        {
            name: "블루문밸리",
            lat: 27.1045,
            lng: 100.2446,
            description: "에메랄드빛 호수가 펼쳐진 계곡으로, 환상적인 자연 풍경이 인상적인 곳이에요.",
        },
        {
            name: "호도협",
            lat: 27.1860,
            lng: 100.0990,
            description: "세계에서 가장 깊은 협곡 중 하나로, 트레킹 명소로 유명한 자연 절경이에요.",
        },
    ],      
    courseImages: [
       "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjFfMjg1/MDAxNzM3NDYxMDAwODYw.Ie0FIBFEHQdsGjgTT-6PUhDuogBnQ2CTUFAA7XGOzp8g.joIvVIPhDIG1lJmsyI8jnCusWsG9Q9mJ1TvWzNfMm9Qg.JPEG/image.JPEG?type=w800",
       "https://kr.people.com.cn/NMediaFile/2018/0207/FOREIGN201802071044000379485789991.jpg",
       "https://media.istockphoto.com/id/917169968/ko/%EC%82%AC%EC%A7%84/%EB%B8%94%EB%A3%A8-%EB%AC%B8-%EB%B0%B8%EB%A6%AC-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%9B%8C%ED%84%B0-%EB%A6%AC%EB%B2%84-%ED%8F%AD%ED%8F%AC%EC%99%80-%EC%98%A5-%EB%A3%A1-%EC%84%A4-%EC%82%B0-%EC%A4%91%EA%B5%AD-%EB%A6%AC%EC%9E%A5-%EC%9A%B4-%EB%82%A8.jpg?s=170667a&w=0&k=20&c=gcE7-h5rTI-cgGp3-LAiD3qVZEjE4he9IK4eRbw3c-I=",
       "https://mblogthumb-phinf.pstatic.net/20160614_278/bgy26_1465913362417aoauI_PNG/%C8%A3%B5%B5%C7%F9_%285%29.PNG?type=w800",
    ],
    keywords: ["자연풍경", "문화/역사", "휴양/힐링", "액티비티", "자연 속 체험"],
  },

  {
    country: "몽골",
    city: "울란바토르",
    zoom: 10,
    image: "https://images.unsplash.com/photo-1684814833784-c9c8cdba1d20?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainPlace: "수흐바타르 광장",
    lat: 47.9184,
    lng: 106.9177,
    places: [
        {
            name: "수흐바타르 광장",
            lat: 47.9184,
            lng: 106.9177,
            description: "몽골의 중심 광장으로, 역사적 기념물과 현대 건물이 어우러진 상징적인 장소에요.",
        },
        {
            name: "간단 사원",
            lat: 47.9206,
            lng: 106.8946,
            description: "몽골 최대 불교 사원으로, 웅장한 불상과 전통 건축을 볼 수 있는 곳이에요.",
        },
        {
            name: "몽골 국립 역사 박물관",
            lat: 47.9194,
            lng: 106.9133,
            description: "몽골의 역사와 문화를 한눈에 볼 수 있는 대표적인 박물관이에요.",
        },
        {
            name: "테를지 국립공원",
            lat: 47.9167,
            lng: 107.3930,
            description: "초원과 기암괴석이 어우러진 자연 명소로, 승마와 게르 체험이 가능한 곳이에요.",
        },
    ],
    courseImages: [
        "https://images.unsplash.com/photo-1684814833784-c9c8cdba1d20?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://www.holamon.cat/sites/default/files/styles/original_to_webp/public/pla/images/2020-04/Zesp%C3%B3%C5%82_klasztoru_Gandan_%2812%29.jpg.webp",
        "https://nomadays.scdn4.secure.raxcdn.com/mn2-public/museum_of_ub-FILL-w800h500.jpg",
        "https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2023/09/08/16941528231608.jpeg",
    ],
    keywords: ["자연풍경", "문화/역사", "액티비티", "이색경험", "감성여행", "자연 속 체험"],
  },

  {
    country: "베트남",
    city: "꾸이년",
    zoom: 13,
    image: "https://statics.vinpearl.com/quy-nhon-vietnam-01_1686724633.jpeg",
    mainPlace: "꾸이년 해변",
    lat: 13.7606,
    lng: 109.2163,
     places: [
        {
        name: "꾸이년 해변",
        lat: 13.7606,
        lng: 109.2163,
        description: "조용하고 한적한 분위기의 해변으로, 여유롭게 휴식을 즐기기 좋은 곳이에요.",
        },
        {
        name: "끼꼬 비치",
        lat: 13.8979,
        lng: 109.3157,
        description: "맑고 투명한 바다와 하얀 모래가 어우러진 숨은 해변 명소에요.",
        },
        {
        name: "에오지오",
        lat: 13.8896,
        lng: 109.2917,
        description: "절벽과 바다가 어우러진 전망 명소로, 일몰 풍경이 특히 아름다운 곳이에요.",
        },
        {
        name: "담 시장",
        lat: 13.7764,
        lng: 109.2234,
        description: "현지인들의 삶을 엿볼 수 있는 전통 시장으로, 다양한 먹거리와 기념품이 있어요.",
        },
    ],
    courseImages: [
        "https://statics.vinpearl.com/quy-nhon-vietnam-01_1686724633.jpeg",
        "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/akhgbg-1751688483692.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjdfMjc5/MDAxNjExNzMzNjMxNjQ3.HusHwdLSH4x3HjDUVWkC88160z31e8msU6avBkOaAvYg.f-zwb6JBg3rzMs5acXZ0qs55504m_IAsGVCz8rwXnS8g.JPEG.tgroupvn/1.jpg?type=w800",
        "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMDVfMjk2/MDAxNjc3OTc3ODc3NzQw.-DY--t1U44xy2IPEIOU5VAC6M83yq9ZRz3772Ps8yDwg.bgperphdPcPyWKW_jks4amrs2YKNjjW7KfZDjK1JJewg.JPEG.wlsgml850/IMG_0099.jpg?type=w800",
    ],
    keywords: ["자연풍경", "휴양/힐링", "감성여행", "혼자여행", "짧은여행"],
  },

  {
    country: "태국",
    city: "춤폰",
    zoom: 11,
    image: "https://www.thefunkyturtle.com/wp-content/uploads/2020/02/thefunkyturtle.com-half-day-snorkel-trip-koh-tao.jpg",
    mainPlace: "툰 와렌 비치",
    lat: 10.5673,
    lng: 99.2787,
    places: [
        {
        name: "툰 와렌 비치",
        lat: 10.5673,
        lng: 99.2787,
        description: "맑은 바다와 다양한 섬들로 이루어진 지역으로, 스노클링 명소로 유명해요.",
        },
        {
        name: "카오 맛시 전망대",
        lat: 10.4489,
        lng: 99.2553,
        description: "춤폰 시내와 바다를 한눈에 내려다볼 수 있는 최고의 전망 포인트에요.",
        },
        {
        name: "무코 춤폰 국립공원",
        lat: 10.3564,
        lng: 99.2369,
        description: "수십 개의 섬으로 이루어진 해양 국립공원으로, 맑은 바다와 산호초를 즐길 수 있는 자연 명소에요.",
        },
    ],
    courseImages: [
        "https://images.trvl-media.com/place/6048367/56710bb1-0d8d-4dec-9d10-0c99e4a5e3cf.jpg?impolicy=fcrop&w=400&h=225&q=mediumLow",
        "https://ak-d.tripcdn.com/images/1mi3x224x94eg7q5aB081_W_320_0_R5_Q30.jpg?proc=source/trip",
    ],
    keywords: ["자연풍경", "휴양/힐링", "감성여행", "자연 속 체험", "혼자여행", "짧은여행"],
  },

  {
    country: "필리핀",
    city: "시퀴호르",
    zoom: 12,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ce/d8/cd/coconut-trees-bow-to.jpg?w=1200&h=-1&s=1",
    mainPlace: "팔리톤비치",
    lat: 9.2140,
    lng: 123.5150,
    places: [
        {
            name: "캄부가하이 폭포",
            lat: 9.1992,
            lng: 123.5061,
            description: "에메랄드빛 물과 자연이 어우러진 폭포로, 시원하게 물놀이를 즐길 수 있는 인기 명소에요.",
        },
        {
            name: "살락독 비치",
            lat: 9.1583,
            lng: 123.5093,
            description: "조용하고 한적한 분위기의 해변으로, 맑은 바다와 여유로운 시간을 즐기기 좋은 곳이에요.",
        },
        {
            name: "발레테 나무",
            lat: 9.2165,
            lng: 123.5162,
            description: "수백 년 된 거대한 나무로, 신비로운 분위기를 느낄 수 있는 시퀴호르의 대표 명소에요.",
        },
    ],
    courseImages: [
        "https://cdn.getyourguide.com/img/tour/928fa530474282063ec63084aa8ef230867a52ef050375e9a15fb0be9bd46a86.png/68.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/04/cb/86/enjoy-kayaking-and-many.jpg?w=900&h=500&s=1",
        "https://cdn.getyourguide.com/img/tour/b86df694919c06dd169b279d7f6124fa68433a69bd394cf1074536d2ebb9beb8.jpeg/68.jpg",
    ],
    keywords: ["자연풍경", "휴양/힐링", "이색경험", "감성여행", "짧은여행"],
  },

  {
    country: "프랑스",
    city: "몽펠리에",
    zoom: 11,
    image: "https://images.trvl-media.com/place/6068881/7fc97c8b-5840-4052-879a-9c2f5cf16237.jpg",
    mainPlace: "코메디광장",
    lat: 43.6110,
    lng: 3.8767,
    places: [
        {
            name: "코메디 광장",
            lat: 43.6087,
            lng: 3.8793,
            description: "몽펠리에 중심 광장으로, 분수와 건물이 어우러진 활기찬 도시의 상징적인 공간이에요.",
        },
        {
            name: "파브르 미술관",
            lat: 43.6119,
            lng: 3.8789,
            description: "프랑스를 대표하는 미술관 중 하나로, 다양한 예술 작품을 감상할 수 있는 문화 공간이에요.",
        },
        {
            name: "생피에르 대성당",
            lat: 43.6115,
            lng: 3.8737,
            description: "웅장한 고딕 양식의 성당으로, 몽펠리에의 역사와 건축미를 느낄 수 있는 곳이에요.",
        },
        {
            name: "팔라바스 레 플로",
            lat: 43.5297,
            lng: 3.9282,
            description: "지중해를 따라 펼쳐진 해변 도시로, 휴양과 바다 풍경을 즐기기 좋은 곳이에요.",
        },
        {
            name: "생길렘 르 데제르",
            lat: 43.7335,
            lng: 3.5486,
            description: "중세 분위기가 남아 있는 작은 마을로, 고즈넉한 풍경이 매력적인 여행지에요.",
        },
    ],
    courseImages: [
        "https://images.trvl-media.com/place/6068881/7fc97c8b-5840-4052-879a-9c2f5cf16237.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/34/8e/04/classical-paintings.jpg?w=1200&h=-1&s=1",
        "https://img.freepik.com/premium-photo/montpellier-saint-pierre-cathedral-france_78361-15321.jpg",
        "https://images.trvl-media.com/place/6047038/245e4d13-03b2-4111-8177-fe3b89dd3059.jpg",
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/b0/da/99.jpg",
    ],
    keywords: ["자연풍경", "문화/역사", "도시탐험", "숨겨진도시", "감성여행", "커플여행"],
  },

  {
    country: "독일",
    city: "프라이부르크",
    zoom: 13,
    image: "https://www.windsortour.co.kr/images/area_img/DE/QFB/DEQFB3200317_0005.jpg?CMD=resize&width=100%",
    mainPlace: "프라이부르크 대성당",
    lat: 47.9959,
    lng: 7.8522,
    places: [
        {
        name: "뮌스터 광장",
        lat: 47.9962,
        lng: 7.8525,
        description: "시장과 상점이 어우러진 광장으로, 현지 분위기를 느끼기 좋은 활기찬 공간이에요.",
        },
        {
        name: "슈바벤토어",
        lat: 47.9936,
        lng: 7.8575,
        description: "중세 시대의 성문으로, 프라이부르크의 역사적인 분위기를 느낄 수 있는 곳이에요.",
        },
        {
        name: "슐로스베르크 전망대",
        lat: 47.9983,
        lng: 7.8570,
        description: "도시 전경을 내려다볼 수 있는 언덕으로, 전망이 아름다운 산책 명소에요.",
        },
        {
        name: "티티제 호수",
        lat: 47.9000,
        lng: 8.1660,
        description: "검은숲 지역에 위치한 아름다운 호수로, 맑은 물과 자연 풍경 속에서 여유로운 휴식을 즐기기 좋은 곳이에요.",
        },
    ],
    courseImages: [
        "https://media.istockphoto.com/id/511605970/ko/%EC%82%AC%EC%A7%84/%EB%AE%8C%EC%8A%A4%ED%84%B0-%EA%B4%91%EC%9E%A5-%EB%B0%8F-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B6%80%EB%A5%B4%ED%81%AC-%EA%B5%AC%EB%8F%84%EC%8B%9C-%EB%8F%85%EC%9D%BC.jpg?s=612x612&w=0&k=20&c=GcaxC374feDZGaXTkHwS62Xw5WiImSFqgTU1prWQ8xo=",
        "https://images.trvl-media.com/place/6164943/8fff51d5-f0e3-454c-9561-4a227fa184d7.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d6/67/a0/the-schlossberg-is-a.jpg?w=1200&h=1200&s=1",
        "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1NyZ/image/WPoKQlnc7qGpbIoSnlzO1IJmB6s.jpg",
       
    ],
    keywords: ["자연풍경", "도시탐험", "숨겨진도시", "혼자여행"],
  },

  {
    country: "영국",
    city: "본머스",
    zoom: 12,
    image: "https://images.trvl-media.com/place/6092109/fbddb69b-cdd7-4763-8e6f-38a521f10de7.jpg",
    mainPlace: "본머스비치",
    lat: 50.7161,
    lng: -1.8756,
     places: [
        {
        name: "본머스 피어",
        lat: 50.7161,
        lng: -1.8756,
        description: "바다 위로 길게 뻗은 부두로, 산책과 바다 풍경을 즐기기 좋은 명소에요.",
        },
        {
        name: "러셀 코츠 미술관",
        lat: 50.7165,
        lng: -1.8691,
        description: "바다를 내려다보는 언덕 위에 위치한 미술관으로, 다양한 예술 작품과 함께 아름다운 전망을 즐길 수 있는 곳이에요.",
        },
        {
        name: "로어 가든스",
        lat: 50.7174,
        lng: -1.8763,
        description: "도심 속에 위치한 정원으로, 여유롭게 휴식을 즐기기 좋은 공간이에요.",
        },
    ],

    courseImages: [
        "https://images.trvl-media.com/place/654/82385ef0-491c-4597-b2c9-6752e78b6cc7.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ee/74/41/russell-cotes-grade-2.jpg?w=700&h=400&s=1",
        "https://images.trvl-media.com/place/6150280/d63df24b-d097-4f73-adc5-00ffab4fbf42.jpg",
    ],
    keywords: ["자연풍경", "도시탐험", "휴양/힐링", "감성여행", "자연 속 체험"],
  },

  {
    country: "스페인",
    city: "사라고사",
    zoom: 14,
    image: "https://tourimage.interpark.com//Spot/157/13311/201812/6368074984790215614.jpg",
    mainPlace: "필라르대성당",
    lat: 41.6563,
    lng: -0.8789,
    places: [
        {
        name: "필라르 광장",
        lat: 41.6563,
        lng: -0.8789,
        description: "사라고사의 중심에 위치한 광장으로, 대성당과 분수가 어우러진 도시의 상징적인 공간이에요.",
        },
        {
        name: "필라르 대성당",
        lat: 41.6568,
        lng: -0.8785,
        description: "사라고사의 상징적인 성당으로, 웅장한 건축과 역사적인 의미를 지닌 명소에요.",
        },
        {
        name: "알하페리아 궁전",
        lat: 41.6565,
        lng: -0.8971,
        description: "이슬람 양식의 궁전으로, 독특한 건축미와 역사를 함께 느낄 수 있는 곳이에요.",
        },
        {
        name: "라 세오 대성당",
        lat: 41.6547,
        lng: -0.8756,
        description: "다양한 건축 양식이 조화를 이루는 성당으로, 고요한 분위기 속에서 역사적인 매력을 느낄 수 있는 장소에요.",
        },
    ],
    courseImages: [
        "https://images.trvl-media.com/place/6121848/28a82296-4646-4a7b-9eee-04f2a3f88568.jpg",
        "https://tourimage.interpark.com//Spot/157/13311/201812/6368074984790215614.jpg",
        "https://images.trvl-media.com/place/6121868/156e7dc7-cc2a-44b7-9aeb-979226141b84.jpg",
        "https://images.trvl-media.com/place/6121846/06ef77c2-6be4-40ed-80aa-f0bc455ae0db.jpg",
    ],
    keywords: ["문화/역사", "도시탐험", "혼자여행"],
  },

  {
    country: "이탈리아",
    city: "피렌체",
    zoom: 15,
    image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e27bf95b-0fe1-4987-bec1-b08d4c98522a.jpeg",
    mainPlace: "피렌체 대성당",
    lat: 43.7731,
    lng: 11.2560,
    places: [
        {
        name: "피렌체 대성당",
        lat: 43.7731,
        lng: 11.2560,
        description: "붉은 돔이 인상적인 피렌체의 대표 랜드마크로, 르네상스 건축의 아름다움을 느낄 수 있는 곳이에요.",
        },
        {
        name: "우피치 미술관",
        lat: 43.7678,
        lng: 11.2553,
        description: "르네상스 미술 작품을 감상할 수 있는 세계적인 미술관이에요.",
        },
        {
        name: "베키오 다리",
        lat: 43.7687,
        lng: 11.2532,
        description: "아르노 강 위에 위치한 다리로, 상점들이 이어진 독특한 풍경이 매력적인 곳이에요.",
        },
        {
        name: "시뇨리아 광장",
        lat: 43.7696,
        lng: 11.2558,
        description: "조각상과 역사적 건물이 어우러진 광장으로, 피렌체의 중심적인 분위기를 느낄 수 있는 공간이에요.",
        },
        {
        name: "미켈란젤로 광장",
        lat: 43.7629,
        lng: 11.2651,
        description: "피렌체 전경을 한눈에 내려다볼 수 있는 전망 명소로, 특히 일몰 풍경이 아름다운 곳이에요.",
        },
    ],
    courseImages: [
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e27bf95b-0fe1-4987-bec1-b08d4c98522a.jpeg",
        "https://tourimage.interpark.com//Spot/197/16538/201511/6358449467198321762.jpg",
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/0abbdf9e-0b45-43db-86fe-d1be522164d0.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6EvCcyWnbFXqyQd-m0Iq9T90YY3RMb0HCg&s",
        "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjVfMTY5/MDAxNTg3Nzk4NzIyMDc4.rHI-AA40XCPcehUrvjL91O1S3NK10DVZaAM3aBa3eKEg.qBz7bDhIlq2Rfo6leI3Y2oJCrqRtSzmnrZXH_6wST7Mg.PNG.ichufs/IMG_2606.png?type=w800",
    ],
    keywords: ["문화/역사", "도시탐험", "이색경험", "감성여행"],
  },

  {
    country: "포르투갈",
    city: "브라가",
    zoom: 13,
    image: "https://d3b39vpyptsv01.cloudfront.net/photo/1/2/d0a7e302cc0e82d1d589ce60dd5887a4_l.jpg",
    mainPlace: "브라가 대성당",
    lat: 41.5503,
    lng: -8.4265,
    places: [
        {
        name: "브라가 대성당",
        lat: 41.5503,
        lng: -8.4265,
        description: "포르투갈에서 가장 오래된 성당으로, 역사적인 가치가 높은 장소에요.",
        },
        {
        name: "산타 바르바라 정원",
        lat: 41.5517,
        lng: -8.4283,
        description: "꽃과 정원이 어우러진 공간으로, 산책하기 좋은 아름다운 장소에요.",
        },
        {
        name: "봄 제수스 두 몬테 성당",
        lat: 41.5548,
        lng: -8.3774,
        description: "계단이 아름다운 성당으로, 브라가를 대표하는 명소에요.",
        },
        {
        name: "사메이로 성당",
        lat: 41.5607,
        lng: -8.3935,
        description: "언덕 위에 위치한 성당으로, 브라가 시내와 주변 풍경을 한눈에 내려다볼 수 있는 전망 명소에요.",
        },
    ],

    courseImages: [
        "https://d3b39vpyptsv01.cloudfront.net/photo/1/2/d0a7e302cc0e82d1d589ce60dd5887a4_l.jpg",
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/4eabef65-b879-421d-ae7c-6bec7c8f662e.jpeg",
        "https://images.trvl-media.com/place/6349/80250374-881d-49bf-892c-210edd2b49e8.jpg",
        "https://img.freepik.com/premium-photo/basilica-sameiro-sanctuary-braga-portugal_462054-526.jpg",
    ],
    keywords: ["문화/역사", "도시탐험", "숨겨진도시", "짧은여행"],
  },

  {
    country: "노르웨이",
    city: "알레순드",
    zoom: 12,
    image: "https://d3b39vpyptsv01.cloudfront.net/photo/1/2/f1c92a661487eefba33b87ca24d46834.jpg",
    mainPlace: "악슬라 전망대",
    lat: 62.4722,
    lng: 6.1549,
    places: [
        {
        name: "악슬라 전망대",
        lat: 62.4722,
        lng: 6.1549,
        description: "알레순드 전경과 바다를 한눈에 내려다볼 수 있는 전망 명소로, 아름다운 풍경이 인상적인 곳이에요.",
        },
        {
        name: "알레순드 수족관",
        lat: 62.4729,
        lng: 6.1264,
        description: "노르웨이 해양 생물을 가까이에서 볼 수 있는 수족관으로, 가족과 함께 방문하기 좋은 장소에요.",
        },
        {
        name: "알네스 등대",
        lat: 62.4816,
        lng: 5.9962,
        description: "바다 끝에 위치한 등대로, 탁 트인 해안 풍경과 함께 조용한 분위기를 느낄 수 있는 곳이에요.",
        },
        {
        name: "수네뫼레 박물관",
        lat: 62.4694,
        lng: 6.1644,
        description: "노르웨이 전통 건축과 문화를 체험할 수 있는 야외 박물관으로, 지역의 역사와 생활을 엿볼 수 있는 곳이에요.",
        },
    ],
    courseImages: [
       "https://images.trvl-media.com/place/553248635919602870/9de07289-e64b-4ace-9e6d-cff445380140.jpg",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/b7/7e/df/atlanterhavsparken.jpg?w=1200&h=-1&s=1",
       "https://img.freepik.com/free-photo/alnes-lighthouse-near-alesund-norway_23-2148153643.jpg",
       "https://cdn.getyourguide.com/img/tour/27c3a8d0007f2531.jpeg/68.jpg",

    ],
    keywords: ["자연풍경", "휴양/힐링", "이색경험", "감성여행", "자연 속 체험", "짧은여행"],
  },

  {
    country: "미국",
    city: "미네소타",
    zoom: 12,
    image: "https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Minneapolis-Minnesota-USA-at-Sunset-on-the-Mississippi-River-1244x700.jpg",
    mainPlace: "미니애폴리스 다운타운",
    lat: 44.9778,
    lng: -93.2650,
    places: [
        {
        name: "미니애폴리스 다운타운",
        lat: 44.9778,
        lng: -93.2650,
        description: "고층 빌딩과 강이 어우러진 도심 지역으로, 도시의 활기찬 분위기를 느낄 수 있는 중심지에요.",
        },
        {
        name: "미니하하 폭포",
        lat: 44.9153,
        lng: -93.2113,
        description: "도심 속에 위치한 아름다운 폭포로, 자연과 함께 여유로운 시간을 보내기 좋은 곳이에요.", 
        },
        {
        name: "체인 오브 레이크스",
        lat: 44.9484,
        lng: -93.3033,
        description: "여러 개의 호수가 이어진 자연 공간으로, 산책과 자전거를 즐기기 좋은 힐링 명소에요.",
        },
        {
        name: "스톤 아치 브리지",
        lat: 44.9786,
        lng: -93.2579,
        description: "미시시피 강 위에 놓인 역사적인 다리로, 산책하며 도시 풍경을 감상하기 좋은 장소에요.",
        },
     ],
    courseImages: [
        "https://www.shutterstock.com/image-photo/minneapolis-downtown-skyline-minnesota-usa-600w-1065163916.jpg",
        "https://www.shutterstock.com/image-photo/minnehaha-falls-minneapolis-minnesota-usa-260nw-2659896163.jpg",
        "https://cdn.ttlnews.com/news/photo/202503/20250303_4_17629.jpg",
        "https://www.nps.gov/miss/planyourvisit/images/stonearchbridge_2.jpg",
    ],
    keywords: ["자연풍경", "도시탐험", "휴양/힐링", "이색경험", "숨겨진도시", "커플여행"],
  },

  {
    country: "캐나다",
    city: "옐로나이프",
    zoom: 11,
    image: "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MThfNzUg/MDAxNTYzNDE4NDY5ODky.z7uXndFLdTj8-dFFE-YwOUYA4to2Qz_Py5vdRQQ9Umsg.LZAhjNaRNamwFnXwQiIvr0kZHxifhdhNkTBTEFOeAyog.JPEG.canadawow/18122121154925.JPG?type=w800",
    mainPlace: "옐로나이프 다운타운",
    lat: 62.4540,
    lng: -114.3718,
     places: [
        {
        name: "옐로나이프 다운타운",
        lat: 62.4540,
        lng: -114.3718,
        description: "작지만 개성 있는 북부 도시 중심지로, 현지 분위기와 문화를 느낄 수 있는 곳이에요.",
        },
        {
        name: "프레임 레이크 트레일",
        lat: 62.4530,
        lng: -114.3755,
        description:  "호수를 따라 이어진 산책로로, 자연 속에서 여유롭게 걷기 좋은 힐링 코스에요.",
        },
        {
        name: "그레이트 슬레이브 호수 전망 포인트",
        lat: 62.4680,
        lng: -114.3600,
        description: "광활한 호수를 바라볼 수 있는 전망 장소로, 아름다운 자연 풍경을 감상할 수 있는 곳이에요."  ,
        },
    ],

    courseImages: [
        "https://mblogthumb-phinf.pstatic.net/20160210_214/canadawow_14550904108021bnNc_JPEG/1.jpg?type=w420",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/66/19/0d/cameron-river-falls.jpg?w=1200&h=-1&s=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OZoMNFZ9W0QhocZvqqFYMX9SvgVaB3bnrA&s",
    ],
    keywords: ["자연풍경", "도시탐험", "이색 경험", "짧은여행"],
  },

  {
    country: "멕시코",
    city: "과나후아토",
    zoom: 14,
    image: "https://kr.img.news.koreanair.com/wp-content/uploads/2019/10/NR201910_artandcity_18.png",
    mainPlace: "과나후아토 중심 광장",
     lat: 21.0190,
    lng: -101.2574,
    places: [
        {
        name: "과나후아토 중심 광장",
        lat: 21.0190,
        lng: -101.2574,
        description: "형형색색의 건물과 사람들이 어우러진 공간으로, 도시의 활기찬 분위기를 느낄 수 있는 중심지에요.",
        },
        {
        name: "피필라 전망대",
        lat: 21.0173,
        lng: -101.2597,
        description: "언덕 위에서 과나후아토 전경을 한눈에 내려다볼 수 있는 전망 명소로, 야경이 특히 아름다운 곳이에요.",
        },
        {
        name: "과나후아토 대성당",
        lat: 21.0192,
        lng: -101.2572,
        description: "노란색 외관이 인상적인 성당으로, 도시 중심에서 눈에 띄는 대표적인 랜드마크에요.",
        },
        {
        name: "키스의 골목",
        lat: 21.0186,
        lng: -101.2579,
        description: "두 건물이 매우 가까이 마주한 골목으로, 사랑 이야기가 전해지는 독특한 명소에요.",
        },
    ],
    courseImages: [
        "https://www.got2globe.com/wp-content/uploads/2022/06/guanajuato-mexico-teatro-juarez-jardim-la-union.jpg.webp",
        "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMTdfMTQz/MDAxNzM3MTE4NzgwNDQx.ngUpYLDUXQAQRjazj7dF64nqwgRczEOBP4ikRcOHBb8g.JcQH-m8R8Q-EJ0pJa-ib9rVR68LhBe-yHNcnP4UpGO8g.JPEG/20231017_144408.jpg?type=w800",
        "https://img.freepik.com/premium-photo/mexico-basilica-our-lady-guanajuato-basilica-de-nuestra-senora-de-guanajuato_451699-795.jpg",
       "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjlfOTgg/MDAxNDkwNzk3OTE2NTg1.RegZnzDVuDfW5lApnd8u1LfngTGBcy4P6fR8OaMqVnAg.ZF_0QA1oixguB7T_ULncK9Hx6AydAv9u654Me2snd-Yg.JPEG.wed1204/WED_0525-1.jpg?type=w800",
    ],
    keywords: ["자연풍경", "도시탐험", "휴양/힐링", "숨겨진도시"],
  },

  {
    country: "브라질",
    city: "렌소이스 마라녜시스",
    zoom: 10,
    image: "https://image.fnnews.com/resource/media/image/2017/08/09/201708091049305585_l.jpg",
    mainPlace: "렌소이스 마라녜시스 국립공원",
    lat: -2.4850,
    lng: -43.1200,
    places: [
        {
        name: "렌소이스 마라냐엔시스 국립공원",
        lat: -2.4850,
        lng: -43.1200,
        description: "하얀 모래 언덕과 에메랄드빛 호수가 어우러진 독특한 자연 풍경을 감상할 수 있는 곳이에요.",
        },
        {
        name: "라고아 아줄 (블루 라군)",
        lat: -2.5750,
        lng: -43.3400,
        description: "투명한 푸른 물이 펼쳐진 라군으로, 사막 속에서 특별한 풍경을 즐길 수 있는 명소에요.",
        },
        {
        name: "라고아 보니타",
        lat: -2.4835,
        lng: -43.1515,
        description: "언덕 위에서 내려다보는 라군 풍경이 아름다운 곳으로, 일몰이 특히 인상적인 장소에요.",
        },
    ],
    courseImages: [
        "https://cdn.getyourguide.com/img/location/5cbec2b445ac9.jpeg/99.jpg",
        "https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3013780215/origin/4-145.jpg?type=wide",
        "https://cdn.getyourguide.com/img/tour/15fe4abe61bc964fd3c4c63dc66fd7f3c7d361bc4a05f5b25f5b6bab283a3eaa.jpg/98.jpg",
    ],
    keywords: ["자연풍경", "휴양/힐링", "이색경험", "자연 속 체험"],
  },

  {
    country: "아르헨티나",
    city: "멘도사",
    zoom: 11,
    image: "https://images.trvl-media.com/place/6096710/61664068-ca30-4d53-864b-1202e33f9650.jpg",
    mainPlace: "독립광장",
    lat: -32.8895,
    lng: -68.8458,
    places: [
        {
        name: "독립 광장",
        lat: -32.8895,
        lng: -68.8458,
        description: "멘도사 중심에 위치한 광장으로, 분수와 나무가 어우러진 여유로운 휴식 공간이에요.",
        },
        {
        name: "산 마르틴 공원",
        lat: -32.8934,
        lng: -68.8792,
        description: "넓은 녹지와 호수가 있는 공원으로, 산책과 휴식을 즐기기 좋은 자연 공간이에요.",
        },
        {
        name: "세로 데 라 글로리아",
        lat: -32.8898,
        lng: -68.8796,
        description: "멘도사 시내를 내려다볼 수 있는 언덕으로, 역사적인 기념비와 함께 전망을 즐길 수 있는 곳이에요.",
        },
        {
        name: "아콩카과 국립공원",
        lat: -32.6532,
        lng: -70.0109,
        description: "남미 최고봉 아콩카과를 포함한 국립공원으로, 웅장한 안데스 산맥의 자연을 경험할 수 있는 곳이에요.",
        },
  ],
    courseImages: [
        "https://images.trvl-media.com/place/6096710/301c9c2f-7764-43bd-a587-fb41c7738e52.jpg",
        "https://images.trvl-media.com/place/6096714/1e140d70-0a73-4632-9bae-a6254e7ae3aa.jpg",
        "https://media.istockphoto.com/id/864915044/ko/%EC%82%AC%EC%A7%84/%EB%A9%98%EB%8F%84%EC%82%AC%EC%97%90%EC%84%9C-%EC%84%B8%EB%A1%9C-%EB%93%9C-%EB%9D%BC-%EA%B8%80%EB%A1%9C%EB%A6%AC%EC%95%84-%EA%B8%B0%EB%85%90%EB%AC%BC.jpg?s=612x612&w=0&k=20&c=sHlm8CD8vZO1YWVp245H1-gqrjmW20Y7Y8dmcTZ_W_M=",
        "https://img.freepik.com/premium-photo/scenic-shot-picturesque-mountains-aconcagua-provincial-park-mendoza-argentina_181624-54976.jpg",
    ],
    keywords: ["자연풍경", "문화/역사", "도시탐험", "액티비티", "이색경험"],
  },

  {
    country: "칠레",
    city: "아타카마 사막",
    zoom: 10,
    image: "https://images.trvl-media.com/place/500224/bebd7d0c-74d3-4d08-8c52-23c9c74d0974.jpg",
    mainPlace: "산 페드로 데 아타카마",
    lat: -22.9110,
    lng: -68.2010,
    places: [
        {
        name: "산 페드로 데 아타카마",
        lat: -22.9110,
        lng: -68.2010,
        description: "아타카마 사막의 중심 마을로, 다양한 자연 명소로 이동하기 좋은 거점이에요.",
        },
        {
        name: "달의 계곡 (Valle de la Luna)",
        lat: -22.9273,
        lng: -68.2920,
        description: "달 표면을 닮은 독특한 지형이 펼쳐진 계곡으로, 일몰 풍경이 특히 아름다운 곳이에요.",
        },
        {
        name: "엘 타티오 간헐천",
        lat: -22.3355,
        lng: -68.0123,
        description: "이른 아침 뜨거운 증기가 솟아오르는 장관을 볼 수 있는 세계적인 간헐천 지대에요.",
        },
        {
        name: "미스칸티 라군",
        lat: -23.7436,
        lng: -67.7683,
        description: "고산지대에 위치한 푸른 호수로, 산과 어우러진 고요한 풍경이 인상적인 곳이에요.",
        },
    ],
    courseImages: [
        "https://images.trvl-media.com/place/500224/36fa84b4-a244-4a61-909a-92800da7a110.jpg",
        "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/188h/image/TSHbOHdg5XLfsqgBB5D40FgQgzc.jpg",
        "https://cdn.getyourguide.com/img/tour/a7d7470c7291850309b8376bf1aed43263c80587b2371bc57af4d9e6b96bed8c.jpg/99.jpg",
        "https://www.shutterstock.com/image-photo/laguna-miscanti-andes-mountains-san-260nw-2722738869.jpg",
    ],
    keywords: ["자연풍경", "도시탐험", "이색경험"],
  },

  {
    country: "호주",
    city: "브룸",
    zoom: 12,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/cd/c4/c8/camel-train.jpg?w=900&h=500&s=1",
    mainPlace: "케이블비치",
    lat: -17.9614,
    lng: 122.2147,
    places: [
        {
        name: "케이블 비치",
        lat: -17.9614,
        lng: 122.2147,
        description: "넓게 펼쳐진 백사장과 붉은 석양이 어우러진 해변으로, 낙타 체험으로도 유명한 명소에요.",
        },
        {
        name: "간테움 포인트",
        lat: -17.9793,
        lng: 122.1904,
        description: "붉은 절벽과 바다가 어우러진 해안으로, 독특한 지형과 아름다운 풍경을 감상할 수 있는 곳이에요.",
        },
        {
        name: "말콤 더글라스 악어 공원",
        lat: -17.9163,
        lng: 122.2397,
        description: "호주의 다양한 악어와 야생동물을 가까이에서 볼 수 있는 체험형 자연 공원이에요.",
        },
        {
        name: "로벅 베이",
        lat: -18.0000,
        lng: 122.3000,
        description: "잔잔한 바다와 넓은 갯벌이 펼쳐진 곳으로, 한적한 자연 풍경을 즐기기 좋은 장소에요.",
        },
    ],
    courseImages: [
        "https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3010179825/origin/4-145.jpg?type=wide",
        "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/b11c7a6601c2e5b92b37caf65a132d68e2b0332774e7b90936c7949cd78b46bd.jpg",
        "https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3012747071/origin/8-145.jpg?type=wide",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/c2/d4/d5/pool.jpg?w=900&h=500&s=1",
    ],
    keywords: ["자연풍경", "휴양/힐링", "액티비티", "이색경험", "감성여행", "커플여행"],
  },

  {
    country: "뉴질랜드",
    city: "퀸스타운",
    zoom: 12,
    image: "https://images.trvl-media.com/place/6052807/c29886bf-32ad-4731-8095-65e5c21e486d.jpg",
    mainPlace: "퀸스타운 중심",
    lat: -45.0312,
    lng: 168.6626,
     places: [
        {
        name: "퀸스타운 중심",
        lat: -45.0312,
        lng: 168.6626,
        description: "호수와 산이 어우러진 마을 중심지로, 다양한 액티비티와 여행을 즐기기 좋은 곳이에요.",
        },
        {
        name: "스카이라인 곤돌라",
        lat: -45.0295,
        lng: 168.6557,
        description: "곤돌라를 타고 올라가며 퀸스타운 전경을 한눈에 감상할 수 있는 인기 명소에요.",
        },
        {
        name: "와카티푸 호수",
        lat: -45.0312,
        lng: 168.6626,
        description: "맑은 물과 산이 어우러진 아름다운 호수로, 산책과 휴식을 즐기기 좋은 장소에요.",
        },
        {
        name: "샷오버 강",
        lat: -45.0057,
        lng: 168.7160,
        description: "짜릿한 제트보트 체험으로 유명한 강으로, 액티비티를 즐기기 좋은 명소에요.",
        },
    ],
    courseImages: [
        "https://images.trvl-media.com/place/6052807/70c49dc1-6f52-4d15-8fdf-bc2f3d91049a.jpg",
        "https://d2v5p8jgjm0j1e.cloudfront.net/67762602e7e12be17ac25c05/20250416-05h/28m37s/crop.webp",
        "https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3006905721/origin/1-145.jpg?type=wide",
        "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/apadk2ug19e7wkbystfz/%EC%83%B7%EC%98%A4%EB%B2%84%EA%B0%95%EA%B8%89%EB%A5%98%EB%9E%98%ED%94%84%ED%8C%85%EC%B2%B4%ED%97%98(%ED%80%B8%EC%8A%A4%ED%83%80%EC%9A%B4%EC%B6%9C%EB%B0%9C).jpg",
        
    ],
    keywords: ["자연풍경", "액티비티", "이색경험", "커플여행"],
  },

  {
    country: "튀르키예",
    city: "가지안테프",
    zoom: 14,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/DamagedCastleofAintab.jpg",
    mainPlace: "가지안테프 성",
    lat: 37.0662,
    lng: 37.3833,
     places: [
        {
        name: "가지안테프 성",
        lat: 37.0662,
        lng: 37.3833,
        description: "도시 중심 언덕 위에 자리한 성으로, 가지안테프 전경을 내려다볼 수 있는 대표적인 역사 명소에요.",
        },
        {
        name: "제우그마 모자이크 박물관",
        lat: 37.0666,
        lng: 37.3998,
        description: "세계적으로 유명한 모자이크 작품을 감상할 수 있는 박물관으로, 고대 예술의 정수를 느낄 수 있는 곳이에요.",
        },
        {
        name: "타흐미스 커피하우스",
        lat: 37.0656,
        lng: 37.3810,
        description: "전통적인 분위기의 카페로, 터키식 커피와 함께 여유로운 시간을 보낼 수 있는 장소에요.",
        },
        {
        name: "가지안테프 동물원",
        lat: 37.0926,
        lng: 37.3490,
        description: "다양한 동물을 만날 수 있는 대형 동물원으로, 가족과 함께 방문하기 좋은 곳이에요.",
        },
    ],

    courseImages: [
        "https://i.namu.wiki/i/JZT7JUaIkiMMgimeXGvChWrurg54epBx3l2fmF_ZnICEafvMY7zryZqlzjTadlBggsJVns5gg8zoUraR2lisRg.webp",
        "https://cdn.getyourguide.com/img/tour/b1ad438c3dabea6664ed51135ecd62bf5e6e1a082fa5ca127016812c5c2c46b8.jpg/99.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAxODEwMjZfMzAw/MDAxNTQwNDg5OTg0NDMw.9pE4UVSH5fpHsg2JNxlXV94XpYZBdk_dbp1CoZ0l8fMg.klgJkFfHGfCHFqfGTD0tIZr81waR2LJepWRXXR4hAFAg.JPEG.ddubabi/image_5989689721540489875868.jpg?type=w800",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a8/a2/f0/20200120-145322-largejpg.jpg?w=900&h=-1&s=1",
    ],
    keywords: ["문화/역사", "이색경험", "감성여행"],
  },

  {
    country: "불가리아",
    city: "소피아",
    zoom: 14,
    image: "https://images.trvl-media.com/place/6097802/340d7eff-44aa-4753-9c3e-a33a7644830c.jpg",
    mainPlace: "알렉산더 네브스키 대성당",
    lat: 42.6958,
    lng: 23.3322,
    places: [
        {
        name: "알렉산더 네프스키 대성당",
        lat: 42.6958,
        lng: 23.3322,
        description: "소피아를 대표하는 웅장한 성당으로, 화려한 돔과 건축미가 인상적인 랜드마크에요.",
        },
        {
        name: "성 소피아 교회",
        lat: 42.6963,
        lng: 23.3315,
        description: "소피아의 이름 유래가 된 교회로, 오래된 역사와 고요한 분위기를 느낄 수 있는 곳이에요.",
        },
        {
        name: "국립 문화궁전 (NDK)",
        lat: 42.6865,
        lng: 23.3199,
        description: "공연과 전시가 열리는 대형 문화 공간으로, 현대적인 소피아의 모습을 볼 수 있는 곳이에요.",
        },
        {
        name: "보야나 교회",
        lat: 42.6447,
        lng: 23.2667,
        description: "유네스코 세계문화유산으로 지정된 교회로, 중세 벽화가 잘 보존된 역사적인 장소에요.",
        },
    ],
    courseImages: [
       "https://images.trvl-media.com/place/6097802/b74aa8de-8ade-4c81-92d8-0fc8ca86bdca.jpg",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/cc/b5/f6/sofia-bei-nacht.jpg?w=1200&h=-1&s=1",
       "https://www.windsortour.co.kr/images/area_img/BG/SOF/BGSOF3203682_0001.jpg?CMD=resize&width=100%",
       "https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3009985742/origin/6-145.jpg?type=wide",
    ],
    keywords: ["자연풍경", "문화/역사", "감성여행", "혼자여행", "짧은여행"],
  },

  {
    country: "세르비아",
    city: "베오그라드",
    zoom: 13,
    image: "https://www.windsortour.co.kr/images/area_img/RS/BEG/RSBEG3200552_0004.jpg?CMD=resize&width=100%",
    mainPlace: "칼레메그단 요새 ",
    lat: 44.8230,
    lng: 20.4500,
    places: [
        {
        name: "칼레메그단 요새",
        lat: 44.8230,
        lng: 20.4500,
        description: "다뉴브강과 사바강이 만나는 곳에 위치한 요새로, 탁 트인 전망을 감상할 수 있는 역사 명소에요.",
        },
        {
        name: "성 사바 대성당",
        lat: 44.7982,
        lng: 20.4695,
        description:  "발칸 지역에서 가장 큰 성당 중 하나로, 웅장한 규모와 화려한 내부가 인상적인 곳이에요.",
        },
        {
        name: "크네즈 미하일로바 거리",
        lat: 44.8179,
        lng: 20.4560,
        description: "상점과 카페가 이어진 중심 거리로, 베오그라드의 활기찬 분위기를 느낄 수 있는 곳이에요.",
        },
        {
        name: "스카다를리야 거리",
        lat: 44.8193,
        lng: 20.4622,
        description: "전통 음악과 음식이 어우러진 거리로, 예술적인 분위기를 느낄 수 있는 감성적인 장소에요.",
        },
        {
        name: "아다 치간리야",
        lat: 44.7866,
        lng: 20.4145,
        description: "강 위에 형성된 휴식 공간으로, 자전거와 수영 등 다양한 액티비티를 즐길 수 있는 곳이에요.",
        },
    ],
    courseImages: [
        "https://www.windsortour.co.kr/images/area_img/RS/BEG/RSBEG3200552_0002.jpg?CMD=resize&width=100%",
        "https://www.windsortour.co.kr/images/area_img/RS/BEG/RSBEG3201702_0004.jpg?CMD=resize&width=100%",
        "https://images.trvl-media.com/place/6118044/9b6c8f25-1456-4427-b5a1-8f265ca1851d.jpg",
        "https://media.istockphoto.com/id/1703610381/ko/%EC%82%AC%EC%A7%84/%EA%B3%B5%EC%A4%91-%EB%93%9C%EB%A1%A0%EC%97%90%EC%84%9C-ada-ciganlija%EC%9D%98-%EC%A0%84%EB%A7%9D%EA%B3%BC-sava-%EA%B0%95-%EC%9C%84%EC%9D%98-most-na-adi-%EB%8B%A4%EB%A6%AC-%EB%B2%A0%EC%98%A4%EA%B7%B8%EB%9D%BC%EB%93%9C-%EC%84%B8%EB%A5%B4%EB%B9%84%EC%95%84.jpg?s=612x612&w=0&k=20&c=hs1qZhS9LcNRjUEXE21qlKyUccSMJ9hs5MWwIQShDDw=",
    ],
    keywords: ["문화/역사", "감성여행", "도시탐험", "커플여행", "짧은여행"],
  },

  {
    country: "싱가포르",
    city: "싱가포르",
    zoom: 14,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/1280px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg",
    mainPlace: "마리나 베이 샌즈",
    lat: 1.2834,
    lng: 103.8607,
    places: [
        {
        name: "마리나 베이 샌즈",
        lat: 1.2834,
        lng: 103.8607,
        description: "싱가포르를 대표하는 랜드마크로, 독특한 건축과 아름다운 야경을 감상할 수 있는 곳이에요.",
        },
        {
        name: "가든스 바이 더 베이",
        lat: 1.2816,
        lng: 103.8636,
        description: "미래적인 구조물과 정원이 어우러진 공간으로, 독특한 분위기를 느낄 수 있는 관광 명소에요.",
        },
        {
        name: "머라이언 공원",
        lat: 1.2868,
        lng: 103.8545,
        description: "싱가포르 상징인 머라이언 동상이 있는 공원으로, 사진 명소로 유명한 곳이에요.",
        },
        {
        name: "센토사 섬",
        lat: 1.2494,
        lng: 103.8303,
        description: "해변과 다양한 액티비티가 모여 있는 휴양지로, 여유로운 시간을 보내기 좋은 곳이에요.",
        },
    ],
    courseImages: [
        "https://ko.marinabaysands.com/content/dam/marinabaysands/guides/exceptional-experiences/architecture-of-mbs/masthead.jpg",
        "https://i.namu.wiki/i/xtONvdbBMwbj_bp1hDnD8E2Xh-yiTPqj8ZRSgpBqJrX_6xfvb2ZqyZkXsB_jl3bvsT5kNXqwbrrf0WYwMqyv8A.webp",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4d/a7/97/photo2jpg.jpg?w=1200&h=-1&s=1",
        "https://thumb.tidesquare.com/tour/public/product/PRV3002921624/PRD3003102621/origin/20240320074753386_c5O0B.jpg?type=wide",
    ],
    keywords: ["도시탐험", "감성여행", "휴양/힐링", "액티비티", "커플여행"],
  },

  {
    country: "핀란드",
    city: "로바니에미",
    zoom: 11,
    image: "https://cdn.getyourguide.com/img/location/ee662f7adf4e21ba.jpeg/60.jpg",
    mainPlace: "산타클로스 빌리지",
    lat: 66.5430,
    lng: 25.8473,
    places: [
        {
        name: "산타클로스 빌리지",
        description:
            "동화 같은 분위기의 산타 마을로, 북극권을 체험할 수 있는 로바니에미 대표 명소예요.",
        lat: 66.5430,
        lng: 25.8473,
        },

        {
        name: "아르크티쿰 박물관",
        description:
            "북극 문화와 핀란드 역사를 함께 볼 수 있는 현대적인 박물관이에요.",
        lat: 66.5039,
        lng: 25.7294,
        },

        {
        name: "오우나스바라 전망대",
        description:
            "로바니에미 시내와 설원 풍경을 한눈에 내려다볼 수 있는 감성적인 전망 명소예요.",
        lat: 66.5107,
        lng: 25.7853,
        },

        {
        name: "오로라 투어 포인트",
        description:
            "맑은 밤하늘 아래 환상적인 오로라를 감상할 수 있는 북유럽 대표 체험 장소예요.",
        lat: 66.6012,
        lng: 26.0097,
        },
    ],
    courseImages: [
        "https://images.trvl-media.com/lodging/5000000/4400000/4399800/4399778/24ffaba5.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/126375b1-fcc6-4c21-8c8a-ce872e521baa",
        "https://images.trvl-media.com/lodging/38000000/37020000/37015400/37015323/b8444564.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "https://t1.daumcdn.net/brunch/service/user/wlQ/image/IXNjA0dHDGepLPJdcmkWqbKc2O0.jpg",
    ],
    keywords: ["자연풍경", "이색경험", "감성여행", "자연 속 체험", "커플여행", "휴양/힐링"],
  },

  {
    country: "슬로베니아",
    city: "블레드",
    zoom: "13",
    image: "https://tourimage.interpark.com//Spot/292/19963/202112/6377508344978195210.jpg",
    mainPlace: "블레드 호수",
    lat: 46.3636,
    lng: 14.0938,
    places: [
        {
        name: "블레드 호수",
        description:
            "맑은 에메랄드빛 호수와 알프스 풍경이 어우러진 블레드의 대표 명소예요.",
        lat: 46.3636,
        lng: 14.0938,
        },

        {
        name: "블레드 성",
        description:
            "절벽 위에 자리한 중세 성으로, 블레드 호수를 한눈에 내려다볼 수 있는 전망 명소예요.",
        lat: 46.3690,
        lng: 14.1004,
        },

        {
        name: "블레드 섬 성모승천교회",
        description:
            "호수 가운데 떠 있는 작은 섬의 아름다운 교회로, 블레드의 상징 같은 장소예요.",
        lat: 46.3625,
        lng: 14.0926,
        },

        {
        name: "오소이니차 전망대",
        description:
            "블레드 호수와 알프스 풍경을 가장 아름답게 감상할 수 있는 감성적인 전망 포인트예요.",
        lat: 46.3574,
        lng: 14.0818,
        },
    ],
    courseImages: [
        "https://thumb.tidesquare.com/tour/public/product/PRV3006455682/PRD3006947826/origin/1-145.jpg?type=wide",
        "https://i.redd.it/dt6xyl8k81t01.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAyNTExMDdfMTU2/MDAxNzYyNDk5NTk3OTM4.votvmslqenRoBSw2nf6TCtS8jFOsufaEO90TSEiD8-og.xrHeNamLbyencs6XZwUKw3xkWkDiOBC-FJND-bYBh-0g.JPEG/SE-fe4e6051-021d-45a0-8a72-b1a282312bca.jpg?type=w800",
        "https://q-xx.bstatic.com/xdata/images/landmark/608x352/200159.webp?k=35c80486a6573abdeb5128ea2331ced8ed3742f8f036987bae3c0d05ca425532&o=",
    ],
    keywords: ["자연풍경", "감성여행", "휴양/힐링", "커플여행", "숨겨진도시"]
},

{
    country: "크로아티아",
    city: "로빈",
    zoom: "14",
    image: "https://kr.imboldn.com/wp-content/uploads/2019/02/48-hours-in-rovinj-croatia-header.jpg",
    mainPlace: "성 에우페미아 성당",
    lat: 45.0810,
    lng: 13.6349,
    places: [
        {
        name: "성 에우페미아 성당",
        description:
            "로빈 구시가지가 한눈에 내려다보이는 언덕 위 성당으로, 도시의 상징 같은 장소예요.",
        lat: 45.0814,
        lng: 13.6387,
        },

        {
        name: "로빈 구시가지",
        description:
            "알록달록한 건물과 좁은 골목길이 이어지는 감성적인 해안 마을 거리예요.",
        lat: 45.0810,
        lng: 13.6349,
        },

        {
        name: "발비 아치",
        description:
            "옛 로빈의 입구 역할을 했던 역사적인 석조 아치로, 구시가지 분위기를 느끼기 좋은 장소예요.",
        lat: 45.0805,
        lng: 13.6355,
        },

        {
        name: "푼타 코렌테 공원",
        description:
            "푸른 바다와 숲길을 함께 즐길 수 있는 자연 공원으로, 여유롭게 산책하기 좋은 장소예요.",
        lat: 45.0723,
        lng: 13.6265,
        },
    ],
    courseImages: [
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Croatia_Rovinj_St_Euphemia_church_BW_2014-10-08_14-23-33.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjhfMjE1/MDAxNDkwNjg5ODAzMzUx.Er4_j0qm0DIT9Os0XELKPmDquQnirU-4Xup-Z-qEVLQg.c3sZUxOVGqUeyDH3_XbxyoSEZzzpC2Hthj_bYtQVC_4g.JPEG.muh8234/image_850131751490689683352.jpg?type=w800",
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/4f499a57-ca1d-401e-94f2-a0089feeccfb.jpeg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/6f/aa/bb/prachtig-uitzicht.jpg?w=500&h=500&s=1",
    ],
    keywords: ["감성여행", "숨겨진도시", "커플여행", "휴양/힐링", "도시탐험"],
},
  
{
    country: "루마니아",
    city: "브라쇼브",
    zoom: "14",
    image: "https://www.sjpost.co.kr/news/photo/202103/57111_55841_3553.png",
    mainPlace: "흑색교회",
    lat: 45.6419,
    lng: 25.5889,
    places: [
        {
        name: "흑색교회",
        description:
            "브라쇼브를 대표하는 고딕 양식의 대형 교회로, 중세 도시 분위기를 느낄 수 있는 명소예요.",
        lat: 45.6413,
        lng: 25.5886,
        },

        {
        name: "의회광장",
        description:
            "알록달록한 건물들이 둘러싸고 있는 브라쇼브 중심 광장으로, 유럽 감성이 가득한 장소예요.",
        lat: 45.6419,
        lng: 25.5889,
        },

        {
        name: "탬파산 전망대",
        description:
            "브라쇼브 시내 전경과 붉은 지붕 풍경을 한눈에 내려다볼 수 있는 인기 전망 포인트예요.",
        lat: 45.6359,
        lng: 25.5936,
        },

        {
        name: "카테리나의 문",
        description:
            "중세 시대 성벽의 흔적이 남아 있는 역사적인 문으로, 브라쇼브의 오래된 분위기를 느끼기 좋아요.",
        lat: 45.6398,
        lng: 25.5862,
        },
    ],
    courseImages: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/07/b4/e2/black-church-biserica.jpg?w=900&h=500&s=1",
        "https://img.freepik.com/premium-photo/aerial-drone-view-council-square-brasov-romania_1268-19111.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/de/6b/62/mount-tampa.jpg?w=900&h=500&s=1",
        "https://img.freepik.com/premium-photo/catherine-s-gate-brasov-winter-day-romania_759575-3233.jpg",
    ],
    keywords: ["문화/역사", "도시탐험", "감성여행", "숨겨진도시", "커플여행"],
},

{
    country: "대만",
    city: "화롄",
    zoom: "11",
    image: "https://itaiwan.co.kr/files/attach/images/2023/03/29/c16482913a6829dafd7ce33751c8dd03.jpg",
    mainPlace: "타이루거 협곡",
    lat: 23.9768,
    lng: 121.6044,
    places: [
        {
        name: "타이루거 협곡",
        description:
            "거대한 대리석 절벽과 강물이 어우러진 대만 대표 자연 명소로, 압도적인 풍경을 감상할 수 있어요.",
        lat: 24.1544,
        lng: 121.6203,
        },

        {
        name: "치싱탄 해변",
        description:
            "푸른 태평양과 자갈 해변 풍경이 아름다운 장소로, 여유롭게 산책하기 좋은 바다 명소예요.",
        lat: 24.0325,
        lng: 121.6316,
        },

        {
        name: "화롄 문화창의산업단지",
        description:
            "옛 공장을 개조한 감성 문화 공간으로, 카페와 전시를 함께 즐길 수 있는 장소예요.",
        lat: 23.9768,
        lng: 121.6044,
        },

        {
        name: "청수단애",
        description:
            "절벽과 바다가 함께 이어지는 화롄 대표 드라이브 코스로, 대만 최고의 해안 풍경 중 하나예요.",
        lat: 24.2311,
        lng: 121.6897,
        },
    ],
    courseImages: [
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/06def5bd-1d92-40f2-a9c2-1965f02797ed.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Taiwan_2009_HuaLien_City_CiSingTan_Bay_FRD_8343.jpg",
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/f16040ad-db3f-44fa-9aaf-61fadd26fb68.jpeg",
        "https://itaiwan.co.kr/files/attach/images/2023/03/08/c56b05a79b5e7f5bff2c6eb22eb6d788.jpg",
    ],
    keywords: ["자연풍경", "휴양/힐링", "액티비티", "감성여행", "자연 속 체험"],
},

];

export default countries;