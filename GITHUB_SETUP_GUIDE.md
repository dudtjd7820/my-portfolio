# GitHub 프로필에 포트폴리오 표시하기

## 1. Repository 설정 (즉시 가능)

### 1-1. Repository About 섹션
1. GitHub에서 https://github.com/kim-yeongseong/my-portfolio 접속
2. 우측 상단 ⚙️ (Settings) 버튼 클릭 (Repository 이름 옆)
3. **About** 섹션에서 다음 입력:
   - **Description**: `6년 2개월 경력 풀스택 개발자 포트폴리오 | Spring Boot, Vue.js, TypeScript`
   - **Website**: `https://my-portfolio-six-coral-80.vercel.app`
   - **Topics** (태그):
     - `portfolio`
     - `nextjs`
     - `typescript`
     - `fullstack-developer`
     - `spring-boot`
     - `vuejs`
     - `tailwindcss`

### 1-2. Repository Settings에서 Website 추가
이미 About에서 추가하면 자동으로 반영됩니다.

## 2. GitHub 프로필 README 설정 (추천!)

### 2-1. 특별한 Repository 생성
GitHub 프로필에 README를 표시하려면 **자신의 username과 동일한 이름의 repository**를 만들어야 합니다.

1. GitHub에서 New Repository 클릭
2. Repository 이름: **`kim-yeongseong`** (본인 username과 동일)
3. Public으로 설정
4. "Add a README file" 체크
5. Create repository

### 2-2. 프로필 README 내용 (제가 작성해드릴게요!)

아래 내용을 복사해서 `kim-yeongseong/README.md`에 붙여넣으세요:

```markdown
# 안녕하세요! 👋 풀스택 개발자 김영성입니다

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio-six-coral-80.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kim-yeongseong)

## 🚀 About Me

6년 2개월 경력의 풀스택 개발자로, Spring Boot와 Vue.js를 활용한 엔터프라이즈 시스템 개발을 주로 해왔습니다.
클린 아키텍처와 최신 웹 기술을 활용하여 확장 가능하고 유지보수가 쉬운 시스템을 설계하고 구축합니다.

- 🔭 현재 **통합 물류 시스템 (To-Be)** 프로젝트 진행 중
- 💼 **엠피엘에스** 재직 중 (2019.05 ~ 현재)
- 🌱 Spring Boot, Vue 3, TypeScript, Docker, CI/CD에 능숙합니다
- 📫 연락처: **이메일 주소를 여기에**

## 💻 Tech Stack

### Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

### Frontend
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

### Database
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MSSQL](https://img.shields.io/badge/MSSQL-CC2927?style=for-the-badge&logo=microsoftssqlserver&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

### DevOps
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)

## 📊 GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=kim-yeongseong&show_icons=true&theme=tokyonight)

## 🔥 Recent Projects

### [통합 물류 시스템 (To-Be)](https://github.com/kim-yeongseong/my-portfolio)
Spring Boot 3.x + Vue 3 기반 웹 통합 물류 시스템
- **Tech**: Spring Boot, Vue 3, TypeScript, MySQL, Redis, Docker
- **Role**: 풀스택 개발 (아키텍처 설계부터 개발까지)

### [팬스타크루즈 여객 예약 시스템](https://github.com/kim-yeongseong/my-portfolio)
Go + Azure Database 기반 예약 시스템
- **Tech**: Go, Azure Database, Vue, EDI
- **Role**: Backend 전반 개발 및 클린 아키텍처 설계

## 📫 Contact

- 📧 Email: **your.email@example.com**
- 💼 LinkedIn: **LinkedIn 프로필 URL**
- 🌐 Portfolio: [https://my-portfolio-six-coral-80.vercel.app](https://my-portfolio-six-coral-80.vercel.app)

---

⭐️ From [kim-yeongseong](https://github.com/kim-yeongseong)
```

## 3. 현재 Portfolio Repository README 업데이트

`my-portfolio/README.md`에 배포 정보와 배지를 추가하는 것도 좋습니다.

## 4. 다른 사람들은 어떻게 하나요?

### 일반적인 방법:
1. ✅ **GitHub 프로필 README** (username/username repo) - 가장 중요!
2. ✅ **Repository About 섹션**에 Website 링크
3. ✅ **Repository Topics** (태그) 설정
4. ✅ **README.md에 배포 배지** 추가
5. 선택: LinkedIn, 이력서에 GitHub 링크
6. 선택: 기술 블로그에 프로젝트 소개

### 추가로 할 수 있는 것:
- README에 스크린샷 추가
- 프로젝트별 상세한 기술 문서 작성
- GitHub Actions로 자동 배포 상태 배지 표시
- 방문자 카운터 배지 추가

## 5. 즉시 실행 가능한 순서

1. **Repository About 설정** (1분)
   - my-portfolio repository 페이지 → ⚙️ 클릭
   - Website와 Description 입력

2. **새 Repository 생성** (2분)
   - 이름: `kim-yeongseong`
   - Public, README 체크

3. **프로필 README 작성** (5분)
   - 위 마크다운 복사/붙여넣기
   - 이메일 주소 수정

완료!
