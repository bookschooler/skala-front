# SKALA-FRONT 과제/실습 요구사항

출처: `1) Full-stack Engineering_2.HTML,CSS,JavaScript_강병호_0720.pdf`

## 제출 기준

- [ ] 실습 내용을 GitHub Public Repository로 제출한다. (p.5)
- [ ] 저장소는 Public으로 설정한다. Private이면 채점 불가. (p.5)
- [ ] 저장소 주소 예시는 `https://github.com/교육생GitHub계정/skala-front` 형식을 따른다. (p.5)
- [ ] 제출 전 Chrome 시크릿 창에서 저장소 주소에 접속해 로그인 없이 소스코드가 보이는지 확인한다. (p.5)
- [ ] 기본 요구사항을 충족한다. (p.6)
- [ ] 단순 복사/붙여넣기가 아닌 개인 실습 흔적이 보이도록 작성한다. (p.6)
- [ ] 지정된 형식에 맞춰 GitHub Public Repository URL을 제출한다. (p.6)

## 1. Web 개요

### Project 구성과 `index.html` 생성 (p.39)

- [ ] Project Name은 `SKALA-FRONT`로 한다.
- [ ] `html` 폴더를 사용한다.
- [ ] `html/index.html` 파일을 만든다.
- [ ] 브라우저 타이틀은 `Welcome SKALA`로 작성한다.
- [ ] 본문 `h1`은 `환영 인사`로 작성한다.
- [ ] 본문 `p`는 `스칼라에 오신 것을 환영합니다.`로 작성한다.
- [ ] Live Server로 화면을 확인한다.

### What is my IP? (p.37)

- [ ] Windows 터미널에서 `ipconfig /all` 또는 macOS 터미널에서 `ifconfig`로 Private IP를 확인한다.
- [ ] 웹 사이트 `what is my ip`에서 Public IP를 확인한다.
- [ ] 참고 사이트: `https://whatismyipaddress.com/`

### HTTP Request Circle (p.38)

- [ ] Chrome 개발자 도구를 연다. (`F12` 또는 `Ctrl+Shift+I`)
- [ ] Network 탭으로 이동한다.
- [ ] Network Log를 Clear한다.
- [ ] 주소창에 `https://example.com/`을 입력한다.
- [ ] Network 탭에서 목록을 확인한다.
- [ ] Network 탭에서 `example.com`을 클릭한다.
- [ ] `Header`, `Preview`, `Response`, `Initiator`, `Timing`을 확인한다.

## 2. HTML 기초

### 나의 휴일 일과 (p.64)

- [ ] 나의 휴일 일과를 `html/myHoliday.html` 문서로 작성한다.
- [ ] 필수 Element로 `h1`을 사용한다.
- [ ] 필수 Element로 `h2`를 사용한다.
- [ ] 필수 Element로 `br`을 사용한다.
- [ ] 필수 Element로 `p`를 사용한다.
- [ ] 필수 Element로 `mark`를 사용한다.

### 나의 소개 (p.65)

- [ ] 나의 소개를 `html/myProfile.html` 문서로 작성한다.
- [ ] `ul`로 내가 좋아하는 음식을 작성한다.
- [ ] `ol`로 올해 할 일을 작성한다.
- [ ] `dl`로 나를 설명하는 단어들을 작성한다.
- [ ] CSS는 사용하지 않는다.

### 나의 강의 일정 (p.66)

- [ ] 나의 강의 일정을 `html/myClass.html` 문서로 작성한다.
- [ ] `table`을 사용한다.
- [ ] `thead`에 시간, 요일을 작성한다.
- [ ] `tbody`를 사용한다.
- [ ] `td`를 사용한다.
- [ ] 2시간 이상의 강의나 점심시간은 셀을 합쳐서 표시한다.
- [ ] CSS는 사용하지 않는다.

### 바로가기 (p.67)

- [ ] `html/index.html`에 나의 수업, 휴일, 프로필 바로가기를 추가한다.
- [ ] `a`를 사용한다.
- [ ] CSS는 사용하지 않는다.

## 3. HTML Form

### 회원가입 (p.79)

- [ ] 회원가입 페이지를 `html/signUp.html`로 작성한다.
- [ ] `form`을 사용한다.
- [ ] `form`의 `action`은 `signUpResult.html`로 설정한다.
- [ ] `form`의 `method`는 `get`으로 설정한다.
- [ ] `fieldset`을 사용한다.
- [ ] `legend`를 사용한다.
- [ ] `label`을 사용한다.
- [ ] `input`을 사용한다.
- [ ] `input`에 `placeholder`, `required` 등 속성을 사용한다.
- [ ] `select`를 사용한다.
- [ ] `option`을 사용한다.
- [ ] `textarea`를 사용한다.
- [ ] `submit`을 사용한다.
- [ ] `reset`을 사용한다.

### 회원가입결과 (p.80)

- [ ] 회원가입결과 페이지를 `html/signUpResult.html`로 작성한다.
- [ ] 회원가입 페이지에서 회원가입 버튼을 클릭하면 회원가입결과 페이지로 이동한다.

## 4. HTML 심화

### 나의 여행지 (p.93)

- [ ] 나의 여행지를 소개하는 페이지를 `html/myTrip.html`로 작성한다.
- [ ] Media Resource Folder는 `media`로 한다.
- [ ] `audio`를 사용한다.
- [ ] `source`를 사용한다.
- [ ] `img`를 사용한다.
- [ ] `video`를 사용한다.

### 포털 사이트형 메인 Hub 만들기 (p.94)

- [ ] 기존에 만든 `myClass`, `myHoliday`, `myProfile`, `myTrip`, `signUp`을 `html/index.html`에 모아 볼 수 있게 작성한다.
- [ ] `nav`에 다른 파일로 이동하는 메뉴 링크를 넣는다.
- [ ] `main`으로 본문 영역을 선언하고 콘텐츠를 넣는다.
- [ ] `aside`로 사이드바를 만들고 부가 정보를 넣는다.

## 5. CSS 기초

### CSS Code Challenge 1 (p.116)

- [ ] CSS How To를 진행한다: `https://www.w3schools.com/css/css_challenges_howto.asp`
- [ ] CSS Selectors를 진행한다: `https://www.w3schools.com/css/css_challenges_selectors.asp`
- [ ] CSS Pseudo-classes를 진행한다: `https://www.w3schools.com/css/css_challenges_pseudo_classes.asp`

### CSS Code Challenge 2 (p.133)

- [ ] CSS Colors를 진행한다: `https://www.w3schools.com/css/css_challenges_colors.asp`
- [ ] CSS Fonts를 진행한다: `https://www.w3schools.com/css/css_challenges_font.asp`
- [ ] CSS Text를 진행한다: `https://www.w3schools.com/css/css_challenges_text.asp`
- [ ] CSS Backgrounds를 진행한다: `https://www.w3schools.com/css/css_challenges_background.asp`
- [ ] CSS Position을 진행한다: `https://www.w3schools.com/css/css_challenges_position.asp`
- [ ] CSS Inheritance를 진행한다: `https://www.w3schools.com/css/css_challenges_inheritance.asp`

### 미션1 - 전체 테마 및 텍스트 Styling (p.134)

- [ ] 별도 CSS 파일 `css/style.css`를 생성한다.
- [ ] Google Fonts에서 선택한 폰트를 `body` 태그 선택자로 전체 적용한다.
- [ ] 전체 줄간격을 적용한다.
- [ ] 전체 Color를 적용한다.
- [ ] 전체 배경색을 적용한다.
- [ ] `h1`, `h2` 태그에 색을 적용한다.
- [ ] `h1`, `h2` 태그에 크기를 적용한다.
- [ ] `h1`, `h2` 태그에 Padding을 적용한다.
- [ ] `h1`, `h2` 태그에 Border를 적용한다.
- [ ] 링크 컬러를 지정한다.
- [ ] 링크 Decoration을 지정한다.
- [ ] 모든 HTML에서 `style.css`를 적용할 수 있도록 `link`를 추가한다.

### 미션2 - 박스 모델의 이해 (p.135)

- [ ] `body` 태그 아래에 `div class="container"`를 추가한다.
- [ ] `container`를 꾸민다.
- [ ] 모든 콘텐츠를 가운데 정렬한다.
- [ ] `myTrip.html`의 여행지 목록 각 단락에 `p class="trip-card"`를 추가한다.
- [ ] `trip-card`에 배경색을 적용한다.
- [ ] `trip-card`에 테두리를 적용한다.
- [ ] `trip-card`에 패딩을 적용한다.
- [ ] `trip-card`에 마진을 적용한다.
- [ ] `trip-card`를 리뷰 카드 형태로 디자인한다.
- [ ] `myClass.html`의 `table`, `th`, `td`를 꾸며 깔끔한 테이블을 만든다.

### 미션3 - 가독성 높은 회원가입 폼 (p.136)

- [ ] 입력창 크기를 키운다.
- [ ] `fieldset` 그룹 테두리를 다듬는다.
- [ ] 버튼을 꾸민다.

## 6. CSS 심화

### CSS Code Challenge 3 (p.148)

- [ ] CSS Float를 진행한다: `https://www.w3schools.com/css/css_challenges_float.asp`
- [ ] CSS Inline-block을 진행한다: `https://www.w3schools.com/css/css_challenges_inline-block.asp`
- [ ] Flexbox Intro를 진행한다: `https://www.w3schools.com/css/css_challenges_flexbox_intro.asp`
- [ ] Flexbox Container를 진행한다: `https://www.w3schools.com/css/css_challenges_flexbox_container.asp`
- [ ] Flexbox Items를 진행한다: `https://www.w3schools.com/css/css3_flexbox_items.asp`
- [ ] Grid Intro를 진행한다: `https://www.w3schools.com/css/css_challenges_grid_intro.asp`
- [ ] Grid Container를 진행한다: `https://www.w3schools.com/css/css_challenges_grid_container.asp`
- [ ] Grid Items를 진행한다: `https://www.w3schools.com/css/css_challenges_grid_item.asp`

### CSS Code Challenge 4 (p.162)

- [ ] 2D Transforms를 진행한다: `https://www.w3schools.com/css/css_challenges_css3_transforms.asp`
- [ ] 3D Transforms를 진행한다: `https://www.w3schools.com/css/css_challenges_css3_3dtransforms.asp`
- [ ] Transition을 진행한다: `https://www.w3schools.com/css/css_challenges_css3_transitions.asp`
- [ ] Animations를 진행한다: `https://www.w3schools.com/css/css_challenges_css3_animations.asp`
- [ ] RWD Intro를 진행한다: `https://www.w3schools.com/css/css_challenges_rwd_intro.asp`
- [ ] RWD Viewport를 진행한다: `https://www.w3schools.com/css/css_challenges_rwd_viewport.asp`
- [ ] RWD Grid View를 진행한다: `https://www.w3schools.com/css/css_challenges_rwd_grid.asp`
- [ ] RWD Media Queries를 진행한다: `https://www.w3schools.com/css/css_challenges_rwd_grid.asp`
- [ ] CSS Variables를 진행한다: `https://www.w3schools.com/css/css_challenges_css3_variables.asp`

### 미션4 - Flex와 Grid로 레이아웃 잡기 (p.163)

- [ ] `index.html`의 바로가기에 Flexbox를 적용한다.
- [ ] `index.html`의 `main`과 `aside`를 가로 배치한다.
- [ ] `myTrip.html`의 여행지 카드를 Grid로 3열 바둑판 배치한다.

### 미션5 - 스마트폰에서 보기 (반응형 웹 디자인) (p.164)

- [ ] `index.html`은 화면 폭이 786px 이하로 줄면 본문/사이드바 구조를 세로 1열로 변경한다.
- [ ] `index.html`은 화면 폭이 786px 이하로 줄면 바로가기를 1열로 정렬한다.
- [ ] `myTrip.html`은 화면 폭이 작아지면 3열 배열을 1열로 조정한다.

### 미션6 - 생동감을 불어넣는 애니메이션 (p.165)

- [ ] 내비게이션 메뉴에 마우스를 올렸을 때 배경색이나 글자색이 부드럽게 변하도록 처리한다.
- [ ] 회원가입 버튼에 마우스를 올렸을 때 배경색이나 글자색이 부드럽게 변하도록 처리한다.
- [ ] 여행 앨범 카드에 마우스를 올리면 카드가 살짝 위로 떠오르게 한다.
- [ ] 여행 앨범 카드에 마우스를 올리면 그림자가 더 진해지게 한다.
- [ ] `index.html`을 처음 열었을 때 상단 헤더 타이틀이 부드럽게 페이드인 되며 나타나게 한다.

## 7. JavaScript 기초

### Up-Down 숫자 맞추기 게임 (p.230)

- [ ] `/script/upDown.js`를 만든다.
- [ ] 컴퓨터가 1부터 50 사이의 무작위 숫자 하나를 생성하게 한다.
- [ ] `var computerNum = Math.floor(Math.random() * 50) + 1;`을 사용한다.
- [ ] `prompt()` 창을 띄워 사용자에게 숫자를 입력받는다.
- [ ] 사용자가 맞출 때까지 반복해서 기회를 준다.
- [ ] `while` 또는 `for` 반복문을 실습한다.
- [ ] 사용자가 정답보다 큰 값을 입력하면 `alert("Down!")`을 띄운다.
- [ ] 사용자가 정답보다 작은 값을 입력하면 `alert("Up!")`을 띄운다.
- [ ] 정답을 맞추면 `alert("축하합니다! X번 만에 맞추셨습니다.")`를 띄운다.
- [ ] 정답을 맞추면 게임을 종료한다.
- [ ] `index.html`의 원하는 위치에 게임 시작 버튼 태그를 추가한다.
- [ ] 게임 시작 버튼 예시 위치는 `aside` 영역 안의 새로운 `section`이다.

### 성적 계산기 (p.231)

- [ ] `/script/grade.js`를 만든다.
- [ ] 강의 3과목의 점수를 연속으로 입력받는다.
- [ ] 평균을 계산한다.
- [ ] 평균으로 합격 여부와 등급을 정한다.
- [ ] 과목 이름 배열 `var subjects = ["HTML", "CSS", "JavaScript"];`를 만든다.
- [ ] 총점을 저장할 변수 `var total = 0;`을 만든다.
- [ ] `for`문을 배열 길이만큼 실행한다.
- [ ] 각 과목 점수를 `prompt()`로 연속해서 입력받는다.
- [ ] 입력받은 점수를 `total`에 더한다.
- [ ] `prompt(subjects[i] + " 점수를 입력하세요.");` 형식을 사용한다.
- [ ] 반복문이 끝난 후 평균 점수를 구한다.
- [ ] 평균 점수가 60점 이상이면 합격으로 처리한다.
- [ ] 평균 점수가 60점 미만이면 불합격으로 처리한다.
- [ ] 결과를 브라우저 `alert` 창으로 보여준다.
- [ ] 결과 메시지 예시는 `alert("총점: 240점, 평균: 80, 결과: 합격입니다!")` 형식을 따른다.

### 내 가방 보기 (p.232)

- [ ] `/script/bag.js`를 만든다.
- [ ] `showMyBag()` 함수를 생성한다.
- [ ] `myBag` 배열을 만든다.
- [ ] `myBag` 배열에는 소지품 객체 데이터를 만든다.
- [ ] 소지품 객체에는 소지품 명을 포함한다.
- [ ] 소지품 객체에는 소지품 수를 포함한다.
- [ ] 반복문을 통해 소지품 객체를 출력한다.

## 8. JavaScript 심화

### 실시간 날씨 - DOM/이벤트 (p.261)

- [ ] `index.html` 사이드바에 도시를 고를 수 있는 `select` 태그를 만든다.
- [ ] `index.html` 사이드바에 결과를 보여줄 `div id="weather-box"`를 만든다.
- [ ] `weather.js`에서 사용자가 도시를 바꿀 때마다 `change` 이벤트를 처리한다.
- [ ] 선택된 도시의 이름을 DOM 조작으로 화면에 표시한다.
- [ ] 선택된 도시의 위도/경도 좌표를 DOM 조작으로 화면에 표시한다.
- [ ] DOM 조작은 `innerHTML`을 사용한다.
- [ ] 이 단계에서는 실제 날씨 데이터는 표시하지 않는다.

### 실시간 날씨 - 비동기 호출 (p.262)

- [ ] `weather.js`에서 도시가 변경되었을 때 좌표 출력에 그치지 않고 날씨 데이터를 요청한다.
- [ ] `fetch()`를 사용한다.
- [ ] `async/await` 문법을 사용한다.
- [ ] Open-Meteo 서버에 날씨 데이터를 요청한다.
- [ ] 데이터를 받아오는 동안 화면에 `로딩 중… ⏳` 메시지를 띄운다.
- [ ] 다운로드가 완료되면 실시간 온도를 화면에 표시한다.
- [ ] 다운로드가 완료되면 실시간 습도를 화면에 표시한다.
- [ ] Open-Meteo 문서를 참고한다: `https://open-meteo.com/en/docs`
- [ ] API URL 형식은 `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`를 따른다.

### 실시간 날씨 - 모듈분리 (p.263)

- [ ] `weather.js`를 데이터를 책임지는 `weatherAPI.js`와 화면을 책임지는 `realtimeInfo.js`로 분리한다.
- [ ] `index.html`에 `<script type="module" src="realtimeInfo.js"></script>`를 추가한다.
- [ ] `weatherAPI.js`에서 `export async function`으로 함수를 분리한다.
- [ ] `realtimeInfo.js`에서 `weatherAPI`의 함수를 `import`하여 처리한다.
