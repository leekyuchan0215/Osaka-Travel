# 규찬 지민 오사카 여행 ❤️

2026년 11월 16일~19일, 3박 4일 개인 여행 PWA.

## 설치 및 실행
1. PC에 Node.js 20 이상 설치
2. ZIP 압축 해제 후 해당 폴더에서 터미널 실행
3. `npm install`
4. `npm run dev` → 표시된 로컬 주소로 PC 미리보기
5. `npm run build` → `dist/` 폴더에 배포용 파일 생성

## 무료 배포 (Vercel 권장)
1. https://vercel.com 에 가입한 후 GitHub에 이 폴더를 업로드
2. Vercel에서 프로젝트를 가져오기(Import)
3. Framework: Vite, Build command: `npm run build`, Output directory: `dist`
4. 배포 후 생성된 HTTPS URL을 두 아이폰에서 열기

`vite.config.ts`의 `base:'./'`는 하위 경로에서도 작동하도록 설정했습니다.

## 아이폰 홈 화면 앱처럼 추가
- iPhone Safari에서 배포한 HTTPS 주소 접속 → 공유 → '홈 화면에 추가' → 추가
- Chrome에서도 iOS 버전에 따라 공유 메뉴의 '홈 화면에 추가' 사용 가능. 메뉴가 보이지 않으면 Safari 이용.
- 첫 접속 시 온라인 상태에서 페이지를 열어 서비스 워커가 리소스를 캐시하도록 하세요.
- 각 아이폰의 방문 완료 체크는 `localStorage`에 개별 저장되고 동기화되지 않습니다.

## 사용법
- 날짜 탭: 1~4일차 선택
- 상단/하단 목록-지도 버튼: 화면 전환
- 일정 제목: 열어서 주소/교통 안내/길찾기 확인
- 방문 완료: 각 아이폰에 자동 저장
- 지도 핀: 장소명과 위치, 일정 이동
- 현재 위치 버튼: GPS 권한 및 HTTPS 필요
- 오프라인: 캐시된 앱/일정과 방문 기록 가능. 지도 타일/Google 길찾기는 연결 필요.

## 중요 안내
- 지도에 그려진 동선은 **방문 순서를 나타내는 직선**입니다. 실제 보행로나 철로를 따라 계산한 경로가 아닙니다. 정확한 길은 장소별 Google 지도 길찾기 버튼을 이용하세요.
- 한 번에 Google 지도에서 여는 전체경로 링크는 경유지 수 제한이 있어 **모든 목적지를 포함하지 않습니다**. 지도 화면에는 모든 목적지가 표시됩니다.
- 상세 교통 노선은 사전 참고 정보이며, 막차/운행 변경/행선지/공사 상황은 실시간 Google 지도에서 확인하세요.
- 좌표는 사용자가 제공한 주소를 바탕으로 수기 등록한 대략적인 위치이며 일부는 중심점이어서 실제 매장 입구와 차이가 있을 수 있습니다. Google 지도에서 반드시 확인하세요.
- 영업시간은 통상 안내 시간이며 **임시 휴무가 없다는 보장은 아닙니다.** 특히 음식점, USJ, 해유관은 현장/공식 사이트를 확인하세요.
- 1일차 라피트 입국편은 예약 시각이 미확정으로 표시됩니다. 4일차는 **07:00 난카이 난바 출발 → 07:34 간사이공항 도착**을 기준으로 작성했습니다.
- 1일차 야키니쿠 21:45~23:00 반영 완료.
- 3일차 HEP FIVE 주소는 사용자 입력의 해유관 주소 중복을 수정해 **5-15 Kakudacho, Kita Ward**로 변경했습니다.

## 일정 수정
`src/data.ts`에 일정/장소/주소/좌표/시간/교통 정보를 모아두었습니다. 수정 후 재배포하세요.

## 참고 링크
- 난카이 공식 시각표: https://www.nankai.co.jp/en_railway/access-timetable
- 오사카 메트로 공식 노선도: https://subway.osakametro.co.jp/guide/page/osakametro_routemap_d/routemap_2025.pdf
- 해유관 공식 영업시간: https://www.kaiyukan.com/info/hours/
- USJ 공식 운영시간: https://www.usj.co.jp/web/en/us/park-guide/schedule/park-hour

## 기술
React + TypeScript + Vite + React Leaflet(OpenStreetMap) + vite-plugin-pwa. 무료 배포용 정적 사이트이며 API 키나 백엔드가 필요하지 않습니다.
