export type Mode='walk'|'train'|'rapit'|'flight'|'none';
export type ChecklistGroup={title:string;items:string[]};
export type Place={id:string;title:string;time:string;end?:string;category:string;lat?:number;lng?:number;address?:string;hours?:string;hoursNote?:string;memo?:string;mode?:Mode;duration?:string;transit?:{name:string;color:string;from:string;to:string;via?:string;direction?:string;code?:string}[];optional?:boolean;source?:string;checklists?:ChecklistGroup[]};
export type TripDay={date:string;weekday:string;subtitle:string;items:Place[]};
export const days:TripDay[]= [
  {
    "date": "2026-11-16",
    "weekday": "월",
    "subtitle": "난바 → 신사이바시 → 도톤보리",
    "items": [
      {
        "id": "flight-in",
        "title": "김해 → 간사이 국제공항",
        "time": "08:35",
        "category": "항공",
        "end": "10:00",
        "address": "Kansai International Airport, Izumisano, Osaka, Japan",
        "lat": 34.4342,
        "lng": 135.2328,
        "mode": "flight",
        "memo": "일본 현지시각 10:00 도착"
      },
      {
        "id": "arrival",
        "title": "간사이공항 입국심사 · 수하물",
        "time": "10:00",
        "category": "공항",
        "end": "11:00",
        "address": "Kansai International Airport, Izumisano, Osaka, Japan",
        "lat": 34.4342,
        "lng": 135.2328,
        "memo": "입국심사와 수하물 수령. 지연 시 이후 쇼핑 시간 조정"
      },
      {
        "id": "rapit-in",
        "title": "라피트 · 공항 → 난카이 난바",
        "time": "11:05",
        "category": "철도",
        "end": "11:43",
        "address": "5 Chome-1-60 Namba, Chuo Ward, Osaka, Japan",
        "lat": 34.6639,
        "lng": 135.5019,
        "mode": "rapit",
        "duration": "약 38~50분 · 탑승편에 따라 다름",
        "transit": [
          {
            "name": "난카이 특급 라피트",
            "color": "#173a87",
            "from": "간사이공항역",
            "to": "난카이 난바역",
            "direction": "난바 방면",
            "code": ""
          }
        ],
        "memo": "11:05 또는 11:35 탑승 예정. 실제 좌석 지정 편에 따라 도착 시각과 쇼핑 시작이 늦어질 수 있음"
      },
      {
        "id": "montbell-city",
        "title": "몽벨 난바 CITY",
        "time": "12:00",
        "category": "쇼핑",
        "end": "12:45",
        "address": "5-1-60 Namba, Chuo Ward, Osaka, Japan",
        "lat": 34.6634,
        "lng": 135.5019,
        "hours": "11:00~21:00 (제공 일정 기준)",
        "mode": "walk",
        "duration": "난카이 난바역과 연결",
        "checklists": [
          {
            "title": "경량패딩 · 가방",
            "items": [
              "경량패딩 — 가장 우선",
              "슈페리어 다운 재킷",
              "슈페리어 다운 파카",
              "다른 경량패딩 모델 비교",
              "몽벨 백팩·가방",
              "몽벨 지갑·카드지갑",
              "파우치·여행 소품"
            ]
          }
        ],
        "memo": "남관 B1 · 경량패딩 목표 예산 ¥15,000~25,000 · 사이즈와 보온성 비교"
      },
      {
        "id": "namba-parks",
        "title": "난바 파크스 · 매장 3곳",
        "time": "12:45",
        "category": "쇼핑",
        "end": "13:35",
        "address": "2 Chome-10-70 Nanbanaka, Naniwa Ward, Osaka 556-0011, Japan",
        "lat": 34.6615,
        "lng": 135.5015,
        "hours": "대부분 11:00~21:00 / Standard Products 10:00~21:00",
        "mode": "walk",
        "duration": "도보 약 5~10분",
        "checklists": [
          {
            "title": "Standard Products · T-terrace 1층",
            "items": [
              "보냉 쇼핑백 (保冷ショッピングバッグ)",
              "보냉 파우치",
              "작은 아이스팩·보냉제",
              "여행용 생활 잡화"
            ]
          },
          {
            "title": "Bshop · 3층 (단톤)",
            "items": [
              "단톤 이너다운·경량패딩",
              "단톤 자켓",
              "단톤 니트·맨투맨",
              "단톤 셔츠",
              "심플한 캐주얼 의류",
              "실용적인 가방·소품"
            ]
          },
          {
            "title": "LUSH · 3층",
            "items": [
              "배스밤",
              "샤워젤",
              "바디 스크럽",
              "바디로션",
              "일본 한정 향 제품",
              "선물용 입욕제"
            ]
          }
        ],
        "memo": "보냉백 먼저 구매. Bshop·LUSH는 시간이 부족하면 짧게 방문. 보냉백만으로 장시간 식품 냉장 보관이 보장되지는 않음"
      },
      {
        "id": "hotel-drop",
        "title": "숙소 · 짐 맡기기",
        "time": "13:35",
        "category": "숙소",
        "end": "14:10",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095,
        "mode": "walk",
        "duration": "도보 약 20~30분 (추정)",
        "memo": "짐 보관 가능 여부 사전 확인"
      },
      {
        "id": "ichiran",
        "title": "이치란 도톤보리점 별관",
        "time": "14:10",
        "category": "식사",
        "end": "15:10",
        "address": "1 Chome-4-16 Dotonbori, Chuo Ward, Osaka 542-0071, Japan",
        "lat": 34.66927,
        "lng": 135.50337,
        "hours": "24시간 카운터 안내 · 변동 확인",
        "mode": "walk",
        "duration": "도보 약 15~20분 (추정)",
        "checklists": [
          {
            "title": "먹을 것",
            "items": [
              "돈코츠 라멘",
              "반숙 계란"
            ]
          }
        ],
        "memo": "1인 ¥1,500~2,500 예상. 대기 길면 3일차 화장품 쇼핑으로 조정"
      },
      {
        "id": "gap",
        "title": "GAP 신사이바시",
        "time": "15:10",
        "category": "쇼핑",
        "end": "16:00",
        "address": "1 Chome-9-6 Shinsaibashisuji, Chuo Ward, Osaka 542-0085, Japan",
        "lat": 34.6748,
        "lng": 135.5011,
        "hours": "10:00~22:00 (제공 일정 기준)",
        "mode": "walk",
        "duration": "도보 약 10~15분",
        "checklists": [
          {
            "title": "커플 후드집업",
            "items": [
              "커플 로고 후드집업 2벌",
              "색상 비교",
              "사이즈 착용",
              "할인 상품 확인"
            ]
          }
        ],
        "memo": "1인 목표 예산 ¥6,000~10,000"
      },
      {
        "id": "parco",
        "title": "신사이바시 PARCO · 층별 쇼핑",
        "time": "16:00",
        "category": "쇼핑",
        "end": "17:05",
        "address": "1 Chome-8-3 Shinsaibashisuji, Chuo Ward, Osaka 542-0085, Japan",
        "lat": 34.6747,
        "lng": 135.5013,
        "hours": "일반 쇼핑층 10:00~20:00",
        "mode": "walk",
        "duration": "도보 약 2~4분",
        "checklists": [
          {
            "title": "HUMAN MADE · 1층",
            "items": [
              "로고 티셔츠",
              "후드·맨투맨",
              "모자",
              "양말",
              "액세서리",
              "하트 로고 굿즈",
              "일본 한정 제품"
            ]
          },
          {
            "title": "치이카와랜드 · 6층 (필수)",
            "items": [
              "치이카와 인형",
              "하치와레 인형·키링",
              "우사기 굿즈",
              "파우치",
              "문구류",
              "일본 한정 상품"
            ]
          },
          {
            "title": "PLAZA · 4층 (선택)",
            "items": [
              "세잔느 무펄 하이라이터",
              "밀피 아이돌 하이라이터 팔레트",
              "캔메이크 파우더",
              "아누아 마스크팩",
              "루루룬 마스크팩"
            ]
          },
          {
            "title": "Hands · 9~11층 (선택)",
            "items": [
              "화장품·메이크업 도구",
              "지갑·파우치",
              "일본 디자인 문구류",
              "실용 생활용품"
            ]
          }
        ],
        "memo": "치이카와랜드는 20:00 폐점. 화장품 쇼핑은 3일차 @cosme에서 집중 가능"
      },
      {
        "id": "lawson",
        "title": "숙소 주변 로손 · 편의점 먹방",
        "time": "17:05",
        "category": "편의점",
        "end": "17:30",
        "mode": "walk",
        "duration": "숙소 근처 점포 방문 · 정확한 매장은 미지정",
        "checklists": [
          {
            "title": "일본에서 먹을 간식",
            "items": [
              "모찌뿌요 (もちぷよ)",
              "모찌롤 (もち食感ロール)",
              "프리미엄 롤케이크",
              "쟈지 우유 푸딩",
              "로얄 커스타드 푸딩",
              "크림브륄레 디저트"
            ]
          }
        ],
        "memo": "매장별 재고 다름. 숙소 주변 로손은 아직 정확한 지점 미정 · 점포 주소를 지정하지 않았으므로 지도에 확정 지점으로 표시하지 않음."
      },
      {
        "id": "hotel-rest",
        "title": "숙소 · 휴식 / 구매 물품 정리",
        "time": "17:30",
        "category": "숙소",
        "end": "18:30",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095,
        "mode": "walk",
        "duration": "근처 도보"
      },
      {
        "id": "dotonbori1",
        "title": "도톤보리 · 글리코상 / 간식",
        "time": "18:30",
        "category": "관광",
        "end": "20:00",
        "address": "1 Chome Dotonbori, Chuo Ward, Osaka 542-0071, Japan",
        "lat": 34.66875,
        "lng": 135.5023,
        "mode": "walk",
        "duration": "숙소에서 도보 약 15~20분",
        "checklists": [
          {
            "title": "즐길 것",
            "items": [
              "글리코상 앞 커플 사진",
              "도톤보리 강가 산책",
              "타코야키",
              "크레페·말차 디저트",
              "리쿠로 오지상 치즈케이크 (영업 중이면)"
            ]
          }
        ]
      },
      {
        "id": "donki-dotonbori",
        "title": "도톤보리 야경 · 돈키호테 구경",
        "time": "20:00",
        "category": "관광",
        "end": "21:15",
        "address": "7-13 Souemoncho, Chuo Ward, Osaka 542-0084, Japan",
        "lat": 34.66996,
        "lng": 135.5029,
        "hours": "돈키호테 24시간 (통상)",
        "mode": "walk",
        "duration": "도보 약 3~7분",
        "checklists": [
          {
            "title": "가볍게 구경",
            "items": [
              "도톤보리 강가 산책",
              "돈키호테 도톤보리점 구경"
            ]
          }
        ],
        "memo": "과자 대량 구매는 3일차 난바센니치마에점에서 진행"
      },
      {
        "id": "rikimaru",
        "title": "야키니쿠 리키마루 센니치마에",
        "time": "21:45",
        "category": "예약 · 식사",
        "end": "23:00",
        "address": "2 Chome-9-17 Sennichimae, Chuo Ward, Osaka 542-0074, Japan",
        "lat": 34.6657,
        "lng": 135.5025,
        "hours": "월요일 16:00~익일 01:00 안내",
        "mode": "walk",
        "duration": "도보 약 10~15분",
        "memo": "21:45 예약 확정 · 23:00까지 식사"
      },
      {
        "id": "hotel-night1",
        "title": "숙소 복귀",
        "time": "23:00",
        "category": "숙소",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095,
        "mode": "walk",
        "duration": "도보 약 15~20분"
      }
    ]
  },
  {
    "date": "2026-11-17",
    "weekday": "화",
    "subtitle": "구로몬시장 → 난바 → USJ → 도톤보리",
    "items": [
      {
        "id": "wake2",
        "title": "숙소 · 기상 및 준비",
        "time": "10:00",
        "category": "숙소",
        "end": "11:00",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095
      },
      {
        "id": "kuromon",
        "title": "스시 구로몬 스에히로 / 구로몬시장",
        "time": "11:00",
        "category": "식사",
        "end": "12:00",
        "address": "1 Chome-21-33 Nipponbashi, Chuo Ward, Osaka 542-0073, Japan",
        "lat": 34.6639,
        "lng": 135.5065,
        "hours": "10:30~21:00 안내 · 점포 확인 권장",
        "mode": "walk",
        "duration": "도보 약 10~15분",
        "checklists": [
          {
            "title": "점심 · 시장 먹거리",
            "items": [
              "스시 구로몬 스에히로",
              "연어·참치·새우 초밥",
              "일본식 계란말이",
              "길거리 음식"
            ]
          }
        ],
        "memo": "1인 ¥2,000~3,500"
      },
      {
        "id": "takashimaya",
        "title": "다카시마야 오사카 · 지하 식품관",
        "time": "12:00",
        "category": "백화점",
        "end": "12:45",
        "address": "5 Chome-1-5 Namba, Chuo Ward, Osaka 542-8510, Japan",
        "lat": 34.6649,
        "lng": 135.5019,
        "hours": "10:00~20:00 (통상)",
        "mode": "walk",
        "duration": "도보 약 10~15분",
        "checklists": [
          {
            "title": "과일 산도 · 디저트",
            "items": [
              "과일 산도",
              "베이커리",
              "일본식 푸딩",
              "디저트·간식"
            ]
          }
        ]
      },
      {
        "id": "namba-free",
        "title": "난바 자유 구경 / 간식",
        "time": "12:45",
        "category": "관광",
        "end": "13:30",
        "address": "5 Chome-1-60 Namba, Chuo Ward, Osaka, Japan",
        "lat": 34.6639,
        "lng": 135.5019,
        "mode": "walk",
        "duration": "인근 거리 도보",
        "memo": "13:30 이전에는 USJ 가는 열차 승차 준비"
      },
      {
        "id": "usj-rail",
        "title": "난바 → 유니버설시티역",
        "time": "13:30",
        "category": "철도",
        "end": "14:30",
        "address": "Universal City Station, Konohana Ward, Osaka, Japan",
        "lat": 34.6676,
        "lng": 135.4382,
        "mode": "train",
        "duration": "약 35~55분 · 대기 포함",
        "transit": [
          {
            "name": "한신 난바선",
            "color": "#ed8b24",
            "from": "오사카난바역",
            "to": "니시쿠조역",
            "direction": "아마가사키 방면 · 열차 행선지 확인",
            "code": "HS"
          },
          {
            "name": "JR 유메사키선",
            "color": "#1676bd",
            "from": "니시쿠조역",
            "to": "유니버설시티역",
            "direction": "사쿠라지마 방면",
            "code": "JR"
          }
        ],
        "memo": "오사카난바(한신)는 난카이 난바와 다른 역. 구글맵으로 플랫폼/시각 재확인"
      },
      {
        "id": "usj-front",
        "title": "USJ 정문 · 사진 / 입장 준비",
        "time": "14:30",
        "category": "관광",
        "end": "15:00",
        "address": "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka 554-0031, Japan",
        "lat": 34.66544,
        "lng": 135.43236,
        "mode": "walk",
        "duration": "유니버설시티역에서 도보 약 5~10분",
        "checklists": [
          {
            "title": "입장 준비",
            "items": [
              "공식 앱 설치",
              "티켓 등록",
              "닌텐도 월드 입장 정리권 확인"
            ]
          }
        ],
        "memo": "오후권 입장 시간은 보유 티켓에서 확인"
      },
      {
        "id": "usj",
        "title": "유니버설 스튜디오 재팬",
        "time": "15:00",
        "category": "테마파크",
        "end": "19:45",
        "address": "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka 554-0031, Japan",
        "lat": 34.66544,
        "lng": 135.43236,
        "hours": "11/17 예정 09:00~20:00 · 공식 확인",
        "mode": "walk",
        "checklists": [
          {
            "title": "놀이기구 · 즐길 것",
            "items": [
              "마리오 카트 — 쿠파의 도전장",
              "해리포터 포비든 저니",
              "죠스",
              "놀이기구 최소 1개 탑승",
              "닌텐도 월드 구경",
              "해리포터 성 사진",
              "USJ 간식",
              "USJ 기념품"
            ]
          }
        ],
        "memo": "마리오 카트 정리권·대기시간에 따라 입장 어려울 수 있음. 해리포터/죠스를 대안으로"
      },
      {
        "id": "usj-return",
        "title": "유니버설시티 → 난바",
        "time": "19:45",
        "category": "철도",
        "end": "20:45",
        "address": "5 Chome-1-60 Namba, Chuo Ward, Osaka, Japan",
        "lat": 34.6639,
        "lng": 135.5019,
        "mode": "train",
        "duration": "약 35~55분 · 대기 포함",
        "transit": [
          {
            "name": "JR 유메사키선",
            "color": "#1676bd",
            "from": "유니버설시티역",
            "to": "니시쿠조역",
            "direction": "니시쿠조 방면",
            "code": "JR"
          },
          {
            "name": "한신 난바선",
            "color": "#ed8b24",
            "from": "니시쿠조역",
            "to": "오사카난바역",
            "direction": "오사카난바 방면",
            "code": "HS"
          }
        ],
        "memo": "20시 폐장 기준 출발이 지연될 수 있으니 저녁 일정에 여유 확보"
      },
      {
        "id": "dotonbori2",
        "title": "도톤보리 · 오코노미야키 / 저녁",
        "time": "20:45",
        "category": "식사",
        "end": "22:00",
        "address": "1 Chome Dotonbori, Chuo Ward, Osaka 542-0071, Japan",
        "lat": 34.66875,
        "lng": 135.5023,
        "mode": "walk",
        "duration": "도보 약 10~15분",
        "checklists": [
          {
            "title": "저녁 후보",
            "items": [
              "오코노미야키",
              "강가 저녁 또는 산책"
            ]
          }
        ]
      },
      {
        "id": "konbini2",
        "title": "세븐일레븐 · 패밀리마트 먹거리",
        "time": "22:00",
        "category": "편의점",
        "end": "23:00",
        "mode": "walk",
        "duration": "숙소 주변 점포 · 지점 미정",
        "checklists": [
          {
            "title": "세븐일레븐 · 냉장·냉동 디저트",
            "items": [
              "냉동 고구마 맛탕 (カリッと大学いも)",
              "쟈지 우유 푸딩",
              "로얄 커스타드 푸딩",
              "아이스노미 (アイスの実)",
              "크림브륄레",
              "당고"
            ]
          },
          {
            "title": "세븐일레븐 · 즉석식품",
            "items": [
              "몽고탄면 나카모토 (蒙古タンメン中本)",
              "동파육 또는 돼지고기 조림",
              "반숙란 (半熟たまご)",
              "마라탕면",
              "고구마면 제품"
            ]
          },
          {
            "title": "패밀리마트 · 디저트",
            "items": [
              "수플레 푸딩 (スフレ・プリン)",
              "모찌 디저트",
              "일본 한정 빵",
              "당고"
            ]
          },
          {
            "title": "패밀리마트 · 오뎅",
            "items": [
              "계란 (たまご)",
              "유부떡 (もち巾着)",
              "소시지 어묵 (ウインナー巻)",
              "무 (大根)",
              "일반 어묵"
            ]
          }
        ],
        "memo": "몽고탄면 + 동파육 + 반숙란 조합. 점포마다 오뎅 취급과 재고 상이 · 점포 주소를 지정하지 않았으므로 지도에 확정 지점으로 표시하지 않음."
      },
      {
        "id": "hotel-night2",
        "title": "숙소 · 컵라면 / 푸딩 / 오뎅",
        "time": "23:00",
        "category": "숙소",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095,
        "mode": "walk",
        "memo": "편의점 음식은 일본에서 먹기"
      }
    ]
  },
  {
    "date": "2026-11-18",
    "weekday": "수",
    "subtitle": "신사이바시 → 해유관 → 우메다 → 난바",
    "items": [
      {
        "id": "wake3",
        "title": "숙소 · 기상 및 준비",
        "time": "09:30",
        "category": "숙소",
        "end": "10:30",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095
      },
      {
        "id": "shinsaibashi-move",
        "title": "신사이바시로 이동",
        "time": "10:30",
        "category": "이동",
        "end": "11:00",
        "address": "3 Chome-5-15 Minamisenba, Chuo Ward, Osaka, Japan",
        "lat": 34.6775,
        "lng": 135.5021,
        "mode": "walk",
        "duration": "도보 약 25~35분 추정 · 구글맵 확인"
      },
      {
        "id": "arcteryx",
        "title": "아크테릭스 신사이바시",
        "time": "11:00",
        "category": "쇼핑",
        "end": "11:35",
        "address": "3 Chome-5-15 Minamisenba, Chuo Ward, Osaka, Japan",
        "lat": 34.6775,
        "lng": 135.5021,
        "hours": "11:00~20:00 (제공 일정 기준)",
        "mode": "walk",
        "checklists": [
          {
            "title": "구경 · 비교",
            "items": [
              "아크테릭스 바람막이",
              "경량 쉘 재킷",
              "아웃도어 의류",
              "티셔츠·상의",
              "백팩·가방 (선택)"
            ]
          }
        ],
        "memo": "예산 확인 후 구매"
      },
      {
        "id": "gu3",
        "title": "GU · 유니클로 신사이바시",
        "time": "11:35",
        "category": "쇼핑",
        "end": "12:10",
        "address": "2 Chome-1-17 Shinsaibashisuji, Chuo Ward, Osaka 542-0085, Japan",
        "lat": 34.6709,
        "lng": 135.5018,
        "hours": "11:00~21:00 (제공 일정 기준)",
        "mode": "walk",
        "duration": "도보 약 10~15분",
        "checklists": [
          {
            "title": "GU / 유니클로",
            "items": [
              "와이드팬츠",
              "후드·맨투맨",
              "니트",
              "기본 티셔츠",
              "일본 한정 상품",
              "세일 의류"
            ]
          }
        ],
        "memo": "유니클로 B1~2층 · GU 3~4층"
      },
      {
        "id": "matsukiyo",
        "title": "마츠모토키요시 · 신사이바시",
        "time": "12:10",
        "category": "드럭스토어",
        "end": "12:35",
        "address": "Shinsaibashisuji, Chuo Ward, Osaka, Japan",
        "lat": 34.672,
        "lng": 135.5018,
        "hours": "점포별 상이 · 방문 전 확인",
        "mode": "walk",
        "duration": "상점가 내 도보 · 지점 미지정",
        "checklists": [
          {
            "title": "유스킨 · 화장품",
            "items": [
              "유스킨 80g (ユースキン)",
              "세잔느 톤 필터 하이라이트 03 필터 매트",
              "캔메이크 마시멜로 피니시 파우더",
              "fino 헤어 마스크",
              "멜라노 CC",
              "루루룬 마스크팩",
              "아누아 마스크팩",
              "비오레 금목서 향 바디 제품",
              "란도린 탈취제·섬유유연제"
            ]
          }
        ],
        "memo": "유스킨 우선. 미구매 화장품은 @cosme에서 다시 확인"
      },
      {
        "id": "gyukatsu",
        "title": "규카츠 모토무라 난바",
        "time": "12:35",
        "category": "식사",
        "end": "13:25",
        "address": "Gyukatsu Motomura Namba, Osaka, Japan",
        "lat": 34.6662,
        "lng": 135.502,
        "mode": "walk",
        "duration": "도보 약 10~15분 · 점포 위치 확인",
        "checklists": [
          {
            "title": "점심",
            "items": [
              "규카츠 정식",
              "화로에 구워 먹기",
              "와사비·소스 조합"
            ]
          }
        ],
        "memo": "웨이팅이 길면 해유관 이동 시간을 조정"
      },
      {
        "id": "kaiyukan-train",
        "title": "난바 → 해유관 (지하철)",
        "time": "13:25",
        "category": "철도",
        "end": "14:15",
        "address": "1 Chome-1-10 Kaigandori, Minato Ward, Osaka 552-0022, Japan",
        "lat": 34.65452,
        "lng": 135.42891,
        "mode": "train",
        "duration": "약 40~50분 · 도보/대기 포함",
        "transit": [
          {
            "name": "오사카 메트로 미도스지선",
            "color": "#e44c55",
            "from": "난바 (M20)",
            "to": "혼마치 (M18)",
            "direction": "신오사카·에사카 방면",
            "code": "M"
          },
          {
            "name": "오사카 메트로 주오선",
            "color": "#159c5d",
            "from": "혼마치 (C16)",
            "to": "오사카코 (C11)",
            "direction": "유메시마 방면",
            "code": "C"
          }
        ],
        "memo": "오사카코역 1번 출구 → 해유관 도보 약 5~10분"
      },
      {
        "id": "kaiyukan",
        "title": "해유관 (가이유칸)",
        "time": "14:15",
        "category": "수족관",
        "end": "15:35",
        "address": "1 Chome-1-10 Kaigandori, Minato Ward, Osaka 552-0022, Japan",
        "lat": 34.65452,
        "lng": 135.42891,
        "hours": "날짜별 변동 · 공식 시간표 확인",
        "mode": "walk",
        "checklists": [
          {
            "title": "관람",
            "items": [
              "고래상어 보기",
              "대형 수조 관람",
              "해양생물 구경",
              "기념사진",
              "기념품 숍"
            ]
          }
        ],
        "memo": "입장권·지정 입장시간 확인 · 관람 시간 80분 계획"
      },
      {
        "id": "umeda-train",
        "title": "해유관 → 우메다 (지하철)",
        "time": "15:35",
        "category": "철도",
        "end": "16:25",
        "address": "3 Chome-1-3 Umeda, Kita Ward, Osaka 530-8558, Japan",
        "lat": 34.7031,
        "lng": 135.4957,
        "mode": "train",
        "duration": "약 40~50분 · 도보/환승 포함",
        "transit": [
          {
            "name": "오사카 메트로 주오선",
            "color": "#159c5d",
            "from": "오사카코 (C11)",
            "to": "혼마치 (C16)",
            "direction": "나가타 방면",
            "code": "C"
          },
          {
            "name": "오사카 메트로 미도스지선",
            "color": "#e44c55",
            "from": "혼마치 (M18)",
            "to": "우메다 (M16)",
            "direction": "신오사카·에사카 방면",
            "code": "M"
          }
        ],
        "memo": "우메다역에서 LUCUA 1100까지 도보 이동"
      },
      {
        "id": "atcosme",
        "title": "@cosme OSAKA · LUCUA 1100 3층",
        "time": "16:25",
        "category": "화장품",
        "end": "17:05",
        "address": "3 Chome-1-3 Umeda, Kita Ward, Osaka 530-8558, Japan",
        "lat": 34.7031,
        "lng": 135.4957,
        "hours": "10:30~20:30 (제공 일정 기준)",
        "mode": "walk",
        "checklists": [
          {
            "title": "화장품 집중 구매",
            "items": [
              "세잔느 무펄 하이라이터",
              "밀피 아이돌 하이라이터 팔레트",
              "캔메이크 파우더",
              "아누아 마스크팩",
              "루루룬 마스크팩",
              "일본 한정 화장품",
              "인기 뷰티 랭킹 제품"
            ]
          }
        ]
      },
      {
        "id": "montbell-lucua",
        "title": "몽벨 · LUCUA 1100 6층",
        "time": "17:05",
        "category": "쇼핑",
        "end": "17:25",
        "address": "3 Chome-1-3 Umeda, Kita Ward, Osaka 530-8558, Japan",
        "lat": 34.7031,
        "lng": 135.4957,
        "hours": "10:30~20:30 (제공 일정 기준)",
        "mode": "walk",
        "duration": "같은 건물 내 층 이동",
        "checklists": [
          {
            "title": "필요하면 재확인",
            "items": [
              "경량패딩 원하는 모델 재확인",
              "몽벨 가방·백팩",
              "몽벨 지갑",
              "실용적인 아웃도어 소품"
            ]
          }
        ],
        "memo": "1일차에 구매 완료했다면 생략 가능",
        "optional": true
      },
      {
        "id": "salomon",
        "title": "살로몬 · LUCUA 7층",
        "time": "17:25",
        "category": "쇼핑",
        "end": "17:45",
        "address": "3 Chome-1-3 Umeda, Kita Ward, Osaka 530-8558, Japan",
        "lat": 34.7031,
        "lng": 135.4957,
        "hours": "10:30~20:30 (제공 일정 기준)",
        "mode": "walk",
        "duration": "연결 쇼핑몰 내부 이동",
        "checklists": [
          {
            "title": "운동화 · 소품",
            "items": [
              "살로몬 백팩",
              "살로몬 XT-6 등 운동화",
              "데일리 신발",
              "작은 가방·패션 소품"
            ]
          }
        ],
        "memo": "가방은 마음에 들 때만 구매",
        "optional": true
      },
      {
        "id": "grand-move",
        "title": "그랜드 프론트로 도보 이동",
        "time": "17:45",
        "category": "이동",
        "end": "18:00",
        "address": "3-1 Ofukacho, Kita Ward, Osaka 530-0011, Japan",
        "lat": 34.7055,
        "lng": 135.4951,
        "mode": "walk",
        "duration": "도보 약 10~15분"
      },
      {
        "id": "asics",
        "title": "ASICS GRAND FRONT OSAKA",
        "time": "18:00",
        "category": "쇼핑",
        "end": "18:35",
        "address": "3-1 Ofukacho, Kita Ward, Osaka 530-0011, Japan",
        "lat": 34.7055,
        "lng": 135.4951,
        "hours": "11:00~19:00 (공식 매장 안내)",
        "mode": "walk",
        "duration": "그랜드 프론트 3층",
        "checklists": [
          {
            "title": "아식스 운동화",
            "items": [
              "아식스 운동화",
              "GEL 시리즈",
              "스포츠스타일 스니커즈",
              "데일리 운동화",
              "일본 한정 색상·제품"
            ]
          }
        ],
        "memo": "19:00 폐점 주의. 신사이바시점 리모델링 휴업 안내"
      },
      {
        "id": "bshop-grand",
        "title": "Bshop · 그랜드 프론트 남관 3층",
        "time": "18:35",
        "category": "쇼핑",
        "end": "19:05",
        "address": "4-20 Ofukacho, Kita Ward, Osaka 530-0011, Japan",
        "lat": 34.7047,
        "lng": 135.4947,
        "hours": "11:00~21:00 (제공 일정 기준)",
        "mode": "walk",
        "duration": "그랜드 프론트 내부 이동",
        "checklists": [
          {
            "title": "단톤(DANTON)",
            "items": [
              "단톤 이너다운",
              "단톤 경량패딩",
              "단톤 자켓",
              "단톤 니트·맨투맨",
              "단톤 셔츠",
              "실용적인 캐주얼 의류"
            ]
          }
        ],
        "memo": "1일차 Bshop에서 충분히 봤다면 생략 가능",
        "optional": true
      },
      {
        "id": "namba-train",
        "title": "우메다 → 난바 (지하철)",
        "time": "19:05",
        "category": "철도",
        "end": "20:00",
        "address": "12-7 Nanbasennichimae, Chuo Ward, Osaka 542-0075, Japan",
        "lat": 34.6631,
        "lng": 135.5035,
        "mode": "train",
        "duration": "약 25~40분 · 역 도보 포함",
        "transit": [
          {
            "name": "오사카 메트로 미도스지선",
            "color": "#e44c55",
            "from": "우메다 (M16)",
            "to": "난바 (M20)",
            "direction": "나카모즈·텐노지 방면",
            "code": "M"
          }
        ],
        "memo": "난바역에서 돈키호테 난바센니치마에점까지 도보"
      },
      {
        "id": "donki-sennichimae",
        "title": "돈키호테 난바센니치마에점",
        "time": "20:00",
        "category": "쇼핑",
        "end": "22:00",
        "address": "12-7 Nanbasennichimae, Chuo Ward, Osaka 542-0075, Japan",
        "lat": 34.6631,
        "lng": 135.5035,
        "hours": "09:00~익일 04:00 (제공 일정 기준)",
        "mode": "walk",
        "checklists": [
          {
            "title": "한국 가져갈 과자 · 초콜릿",
            "items": [
              "샤샤 초콜릿 (紗々)",
              "죽순마을 (たけのこの里)",
              "갈보 초콜릿 (ガルボ)",
              "포키 (ポッキー)",
              "블랙썬더 (ブラックサンダー)",
              "일본 한정 킷캣",
              "일본 한정 감자칩",
              "민티아 (ミンティア)",
              "선물용 과자 세트"
            ]
          },
          {
            "title": "생활용품 · 기념품",
            "items": [
              "란도린 탈취제",
              "란도린 섬유유연제",
              "일본 한정 캐릭터 굿즈",
              "일본 여행 기념품",
              "필요한 화장품 추가 구매"
            ]
          },
          {
            "title": "결제 및 면세 확인",
            "items": [
              "일반 마트·드럭스토어와 가격 비교",
              "유효한 돈키호테 쿠폰 확인",
              "여권 준비",
              "면세 구매 등록",
              "환급 방법 확인",
              "영수증 보관",
              "면세 과자는 일본에서 먹지 않기"
            ]
          }
        ],
        "memo": "과자는 모두 한국에 가져가서 먹기. 2026년 11월부터 소비세 포함 결제 후 출국 세관 확인에 따른 환급 방식"
      },
      {
        "id": "hotel-night3",
        "title": "숙소 주변 편의점 · 짐 정리",
        "time": "22:00",
        "category": "숙소",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095,
        "mode": "walk",
        "duration": "도보 약 15~25분",
        "memo": "마지막 간식 구매, 면세 물품과 위탁 수하물 정리"
      }
    ]
  },
  {
    "date": "2026-11-19",
    "weekday": "목",
    "subtitle": "난바 → 간사이공항 → 부산",
    "items": [
      {
        "id": "wake4",
        "title": "기상 · 마지막 짐 정리",
        "time": "06:00",
        "category": "숙소",
        "end": "06:30",
        "address": "3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan",
        "lat": 34.66965,
        "lng": 135.5095,
        "checklists": [
          {
            "title": "귀국 준비",
            "items": [
              "여권·탑승권",
              "라피트 좌석 지정",
              "면세 구매 내역",
              "면세 물품 캐리어에 정리",
              "짐 위탁 전 세관 확인",
              "환급 등록 방법 확인",
              "보조배터리 기내 반입 규정 확인",
              "액체류·식품 반입 제한 확인",
              "캐리어 무게 확인"
            ]
          }
        ]
      },
      {
        "id": "nankai4",
        "title": "체크아웃 → 난카이 난바역",
        "time": "06:30",
        "category": "이동",
        "end": "07:00",
        "address": "5 Chome-1-60 Namba, Chuo Ward, Osaka, Japan",
        "lat": 34.6639,
        "lng": 135.5019,
        "mode": "walk",
        "duration": "도보 약 25~30분 · 캐리어 고려",
        "memo": "07:00 열차 이용 시 06:30 숙소 출발은 빠듯함. 06:15 이전 출발 권장 (원문 06:30 유지)."
      },
      {
        "id": "rapit4",
        "title": "특급 라피트 · 난바 → 간사이공항",
        "time": "07:00",
        "category": "철도",
        "end": "07:34",
        "address": "Kansai International Airport, Izumisano, Osaka, Japan",
        "lat": 34.4342,
        "lng": 135.2328,
        "mode": "rapit",
        "duration": "약 34~40분 · 좌석 지정 편 확인",
        "transit": [
          {
            "name": "난카이 특급 라피트 α",
            "color": "#173a87",
            "from": "난카이 난바역",
            "to": "간사이공항역",
            "direction": "간사이공항 방면",
            "code": ""
          }
        ],
        "memo": "7시 전후 출발 계획. 탑승 시각은 실제 좌석 지정 시간 우선"
      },
      {
        "id": "airport4",
        "title": "간사이공항 · 세관 / 수속",
        "time": "07:40",
        "category": "공항",
        "end": "10:20",
        "address": "Kansai International Airport, Izumisano, Osaka, Japan",
        "lat": 34.4342,
        "lng": 135.2328,
        "mode": "walk",
        "checklists": [
          {
            "title": "공항에서",
            "items": [
              "세관 면세 물품 반출 확인 (수하물 위탁 전)",
              "항공사 체크인·수하물 위탁",
              "보안검색·출국심사",
              "탑승구 위치·시간 확인"
            ]
          }
        ],
        "memo": "원문 일정 07:40~08:30 면세·세관 / 08:30~09:15 체크인 / 09:15~10:20 보안검색. 단 항공사·공항 안내에 따라 순서 조정"
      },
      {
        "id": "flight4",
        "title": "간사이 → 김해공항",
        "time": "11:00",
        "category": "항공",
        "end": "12:30",
        "address": "Kansai International Airport, Izumisano, Osaka, Japan",
        "lat": 34.4342,
        "lng": 135.2328,
        "mode": "flight",
        "memo": "11:00 출발 · 12:30 김해 도착 예정. 출발·도착 시각 모두 현지 시간 기준"
      }
    ]
  }
];
