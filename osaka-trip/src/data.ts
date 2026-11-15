export type Mode='walk'|'train'|'rapit'|'flight'|'none';
export type Place={id:string;title:string;time:string;end?:string;category:string;lat?:number;lng?:number;address?:string;hours?:string;hoursNote?:string;memo?:string;mode?:Mode;duration?:string;transit?:{name:string;color:string;from:string;to:string;via?:string;direction?:string;code?:string}[];optional?:boolean;source?:string};
export type TripDay={date:string;weekday:string;subtitle:string;items:Place[]};
const hotel={lat:34.66965,lng:135.5095,address:'3 Chome-9-4 Kawarayamachi, Chuo Ward, Osaka 542-0066, Japan'};
export const days:TripDay[]=[
{date:'2026-11-16',weekday:'월',subtitle:'도착 · 난바 · 신사이바시',items:[
{id:'flight-in',title:'김해공항 → 간사이공항',time:'08:35',end:'10:00',category:'항공',mode:'flight',memo:'일본 입국 후 입국심사 및 수하물 찾기. 일본 현지 시간 기준.'},
{id:'kix-in',title:'간사이 국제공항',time:'10:00',end:'11:00',category:'공항',lat:34.4342,lng:135.2328,address:'Kansai International Airport, Osaka, Japan',mode:'none',memo:'입국심사 · 수하물 수령 · 라피트 승차 준비'},
{id:'rapit-in',title:'라피트 · 간사이공항 → 난카이 난바',time:'11:05',end:'11:43',category:'철도',mode:'rapit',duration:'약 38~50분 (예약편 확인)',transit:[{name:'난카이 특급 라피트',color:'#173a87',from:'간사이공항역',to:'난카이 난바역',direction:'난바 방면'}],memo:'11:35~12:14 대체편도 메모되어 있음. 실제 구매한 승차권 시각 확인 필요.'},
{id:'nankai-in',title:'난카이 난바역',time:'12:00',category:'역',lat:34.6639,lng:135.5019,address:'5 Chome-1-60 Namba, Chuo Ward, Osaka, Japan',mode:'rapit',memo:'난바 파크스 구경 전 도착'},
{id:'nambaparks',title:'난바 파크스 (mont-bell)',time:'12:00',end:'12:30',category:'쇼핑',lat:34.6615,lng:135.5015,address:'2 Chome-10-70 Nanbanaka, Naniwa Ward, Osaka, Japan',hours:'매장별 상이 · 보통 11:00~21:00',mode:'walk',duration:'도보 약 5~10분',optional:true},
{id:'hotel-1',title:'숙소 · 짐 맡기기',time:'12:30',end:'13:00',category:'숙소',...hotel,mode:'walk',duration:'도보 약 20~30분',memo:'체크인 전 짐 맡기고 나오기'},
{id:'ichiran',title:'이치란 라멘 도톤보리점 별관',time:'13:00',end:'14:00',category:'식사',lat:34.66927,lng:135.50337,address:'1 Chome-4-16 Dotonbori, Chuo Ward, Osaka 542-0071, Japan',hours:'카운터 24시간 운영 안내 · 현장 확인',mode:'walk',duration:'도보 약 12~20분',memo:'대기 발생 가능'},
{id:'uniqlo',title:'유니클로 신사이바시',time:'14:00',end:'14:35',category:'쇼핑',lat:34.6739,lng:135.5018,address:'1 Chome-2-17 Shinsaibashisuji, Chuo Ward, Osaka 542-0085, Japan',hours:'11:00~21:00 (통상)',mode:'walk',duration:'도보 약 12~18분'},
{id:'gap',title:'GAP Shinsaibashi',time:'14:35',end:'15:00',category:'쇼핑',lat:34.6748,lng:135.5011,address:'1 Chome-9-6 Shinsaibashisuji, Chuo Ward, Osaka 542-0085, Japan',hours:'10:00~22:00 (통상)',mode:'walk',duration:'도보 약 3~6분'},
{id:'parco',title:'신사이바시 PARCO · 치이카와 랜드',time:'15:00',end:'15:45',category:'쇼핑',lat:34.6747,lng:135.5013,address:'1 Chome-8-3 Shinsaibashisuji, Chuo Ward, Osaka 542-0085, Japan',hours:'10:00~20:00 (일반 매장)',mode:'walk',duration:'도보 약 2~4분',memo:'6층 치이카와 랜드'},
{id:'daimaru',title:'다이마루 신사이바시',time:'15:45',end:'16:20',category:'백화점',lat:34.674,lng:135.5013,address:'1 Chome-7-1 Shinsaibashisuji, Chuo Ward, Osaka 542-8501, Japan',hours:'10:00~20:00 (일반 매장)',mode:'walk',duration:'도보 약 2~4분'},
{id:'gu',title:'GU 신사이바시',time:'16:20',end:'17:00',category:'쇼핑',lat:34.6709,lng:135.5018,address:'2 Chome-1-17 Shinsaibashisuji, Chuo Ward, Osaka 542-0085, Japan',hours:'11:00~21:00 (통상)',mode:'walk',duration:'도보 약 5~8분',optional:true,memo:'시간이 남으면 유니클로와 함께 방문'},
{id:'hotel-rest',title:'숙소 · 짐 정리 및 휴식',time:'17:00',end:'18:00',category:'숙소',...hotel,mode:'walk',duration:'도보 약 15~25분'},
{id:'glico',title:'도톤보리 글리코상',time:'18:00',end:'18:30',category:'관광',lat:34.66875,lng:135.50087,address:'1 Chome-10-3 Dotonbori, Chuo Ward, Osaka 542-0071, Japan',hours:'야외 · 상시',mode:'walk',duration:'도보 약 15~20분',memo:'도톤보리 야경 · 사진'},
{id:'donki-dotonbori',title:'돈키호테 도톤보리점',time:'18:30',end:'21:00',category:'쇼핑',lat:34.66996,lng:135.5029,address:'7-13 Souemoncho, Chuo Ward, Osaka 542-0084, Japan',hours:'24시간 (통상)',mode:'walk',duration:'도보 약 3~7분',memo:'도톤보리 구경 · 쇼핑. 이동 및 대기 시간 포함'},
{id:'rikimaru',title:'야키니쿠 리키마루 센니치마에점',time:'21:45',end:'23:00',category:'예약 · 식사',lat:34.6657,lng:135.5025,address:'2 Chome-9-17 Sennichimae, Chuo Ward, Osaka 542-0074, Japan',hours:'월요일 16:00~익일 01:00 안내',mode:'walk',duration:'도보 약 10~15분',memo:'21:45 예약 · 23:00까지 식사'},
{id:'hotel-night1',title:'숙소 복귀 · 휴식',time:'23:00',category:'숙소',...hotel,mode:'walk',duration:'도보 약 15~20분'}
]},
{date:'2026-11-17',weekday:'화',subtitle:'구로몬 · 난바 · USJ',items:[
{id:'wake2',title:'기상 및 준비',time:'10:00',end:'11:00',category:'일정',...hotel,mode:'none'},
{id:'suehiro',title:'스시 구로몬 스에히로',time:'11:00',end:'12:00',category:'식사',lat:34.6639,lng:135.5065,address:'1 Chome-21-33 Nipponbashi, Chuo Ward, Osaka 542-0073, Japan',hours:'10:30~21:00 (안내 시간 · 확인 권장)',mode:'walk',duration:'도보 약 10~15분',memo:'점심 초밥'},
{id:'takashimaya',title:'다카시마야 오사카',time:'12:00',end:'14:00',category:'백화점',lat:34.6649,lng:135.5019,address:'5 Chome-1-5 Namba, Chuo Ward, Osaka 542-8510, Japan',hours:'10:00~20:00 (통상)',mode:'walk',duration:'도보 약 10~15분',memo:'지하 1층 과일 샌드 · 쇼핑'},
{id:'usj',title:'유니버설 스튜디오 재팬 (USJ)',time:'14:30',end:'20:00',category:'테마파크',lat:34.66544,lng:135.43236,address:'2 Chome-1-33 Sakurajima, Konohana Ward, Osaka 554-0031, Japan',hours:'11/17 예정 09:00~20:00 · 공식 일정 재확인',mode:'train',duration:'약 35~50분 (도보·환승 포함)',transit:[{name:'한신 난바선',color:'#ef8a22',from:'오사카난바역',to:'니시쿠조역',direction:'아마가사키 방면 (열차 행선지 확인)'},{name:'JR 유메사키선',color:'#1676bd',from:'니시쿠조역',to:'유니버설시티역',direction:'사쿠라지마 방면'}],memo:'14:00 출발이면 14:30 도착이 빠듯할 수 있어. 입장권 및 실제 운영시간 재확인.'},
{id:'dotonbori2',title:'도톤보리 · 산책·저녁·펜텔',time:'20:30',end:'22:30',category:'관광 · 식사',lat:34.66875,lng:135.5023,address:'1 Chome Dotonbori, Chuo Ward, Osaka 542-0071, Japan',hours:'거리 상시 · 식당별 상이',mode:'train',duration:'약 40~55분 (도보·환승 포함)',transit:[{name:'JR 유메사키선',color:'#1676bd',from:'유니버설시티역',to:'니시쿠조역',direction:'니시쿠조 방면'},{name:'한신 난바선',color:'#ef8a22',from:'니시쿠조역',to:'오사카난바역',direction:'오사카난바 방면'}],memo:'20:00 퇴장 후 20:30 도톤보리 도착은 빠듯할 수 있음'},
{id:'hotel-night2',title:'숙소 복귀 · 편의점',time:'22:30',category:'숙소',...hotel,mode:'walk',duration:'도보 약 15~20분'}
]},
{date:'2026-11-18',weekday:'수',subtitle:'해유관 · 우메다 쇼핑',items:[
{id:'wake3',title:'기상 및 준비',time:'10:00',end:'11:00',category:'일정',...hotel,mode:'none'},
{id:'lunch3',title:'점심 식사',time:'11:00',end:'12:00',category:'식사',...hotel,mode:'none',memo:'장소 미정 · 숙소 주변에서 식사'},
{id:'kaiyukan',title:'오사카 해유관 (가이유칸)',time:'13:00',end:'15:00',category:'관광',lat:34.65452,lng:135.42891,address:'1 Chome-1-10 Kaigandori, Minato Ward, Osaka 552-0022, Japan',hours:'11/18 10:30~20:00 안내 · 공식 달력 확인',mode:'train',duration:'약 40~55분 (숙소↔역 도보 포함)',transit:[{name:'오사카 메트로 미도스지선',color:'#e94949',code:'M',from:'난바 (M20)',to:'혼마치 (M18)',direction:'에사카·신오사카 방면'},{name:'오사카 메트로 주오선',color:'#159c5d',code:'C',from:'혼마치 (C16)',to:'오사카코 (C11)',direction:'유메시마 방면'}],memo:'오사카코역 1번 출구에서 도보 약 5~10분. 오전 12시 출발 기준'},
{id:'hep',title:'HEP FIVE',time:'16:00',end:'17:00',category:'쇼핑',lat:34.70442,lng:135.50096,address:'5-15 Kakudacho, Kita Ward, Osaka 530-0017, Japan',hours:'11:00~21:00 (쇼핑) · 11/19 휴관 공지',mode:'train',duration:'약 35~50분 (도보·환승 포함)',transit:[{name:'오사카 메트로 주오선',color:'#159c5d',code:'C',from:'오사카코 (C11)',to:'혼마치 (C16)',direction:'나가타 방면'},{name:'오사카 메트로 미도스지선',color:'#e94949',code:'M',from:'혼마치 (M18)',to:'우메다 (M16)',direction:'에사카·신오사카 방면'}]},
{id:'hankyu',title:'한큐 우메다 본점',time:'17:00',end:'18:30',category:'백화점',lat:34.7027,lng:135.4986,address:'8-7 Kakudacho, Kita Ward, Osaka 530-8350, Japan',hours:'10:00~20:00 (통상)',mode:'walk',duration:'도보 약 4~8분'},
{id:'donki-umeda',title:'돈키호테 우메다 본점',time:'18:30',end:'20:00',category:'쇼핑',lat:34.7039,lng:135.5011,address:'4-16 Komatsubaracho, Kita Ward, Osaka 530-0018, Japan',hours:'24시간 (통상)',mode:'walk',duration:'도보 약 5~8분'},
{id:'dinner3',title:'우메다 저녁 식사',time:'20:00',end:'21:00',category:'식사',lat:34.7039,lng:135.5011,address:'Umeda, Kita Ward, Osaka, Japan',mode:'walk',duration:'근처 이동',memo:'식당 미정'},
{id:'hotel-night3',title:'쇼핑 마무리 · 숙소 복귀',time:'21:00',category:'숙소',...hotel,mode:'train',duration:'약 25~40분',transit:[{name:'오사카 메트로 미도스지선',color:'#e94949',code:'M',from:'우메다 (M16)',to:'난바 (M20)',direction:'나카모즈·텐노지 방면'}],memo:'난바역에서 숙소까지 도보. 거리와 피로도에 따라 택시도 고려'}
]},
{date:'2026-11-19',weekday:'목',subtitle:'귀국 · 난카이 난바 → 간사이공항',items:[
{id:'checkout',title:'숙소 체크아웃 · 출발',time:'06:00',end:'06:30',category:'숙소',...hotel,mode:'none',memo:'캐리어 챙기기. 07:00 라피트 탑승 목표.'},
{id:'nankai-out',title:'난카이 난바역 · 라피트 승강장',time:'06:30',end:'07:00',category:'역',lat:34.6639,lng:135.5019,address:'5 Chome-1-60 Namba, Chuo Ward, Osaka, Japan',mode:'walk',duration:'도보 약 25~30분',memo:'캐리어 이동 · 플랫폼과 승차권 시간 확인'},
{id:'rapit-out',title:'특급 라피트 α · 07:00 출발',time:'07:00',end:'07:34',category:'철도',lat:34.6639,lng:135.5019,address:'Nankai Namba Station, Osaka, Japan',mode:'rapit',duration:'34분 · 공식 평일 시간표 기준',transit:[{name:'난카이 특급 라피트 α',color:'#173a87',from:'난카이 난바역',to:'간사이공항역',direction:'간사이공항 방면'}],memo:'대체 07:30→08:10. 예약 후 확정 시간 반드시 확인.'},
{id:'kix-out',title:'간사이공항 · 수속 및 탑승',time:'07:34',end:'10:20',category:'공항',lat:34.4342,lng:135.2328,address:'Kansai International Airport, Osaka, Japan',mode:'rapit',duration:'07:34 도착',memo:'터미널 확인 · 항공사 체크인 · 수하물 위탁 · 보안검색 · 출국심사. 터미널 이동시간 별도.'},
{id:'flight-out',title:'간사이공항 → 한국',time:'11:00',category:'항공',lat:34.4342,lng:135.2328,address:'Kansai International Airport, Osaka, Japan',mode:'flight',memo:'11:00 출발 · 탑승구 마감은 항공사 안내 확인'}
]}
];
export const hotelAddress=hotel.address;
