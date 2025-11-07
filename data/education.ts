export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: "kosmo-2019",
    institution: "한국소프트웨어인재개발원 (KOSMO)",
    degree: "Java 개발자 양성과정",
    period: "2018.10 ~ 2019.04",
    description: "Java, Spring, JSP, CSS, HTML5, jQuery, AJAX, JSON, MySQL, Oracle, Android, MyBatis, Toad 등을 학습하며 풀스택 개발 기초를 다졌습니다. 웹 애플리케이션 개발의 전체 라이프사이클을 경험했습니다.",
    achievements: [
      "Java 및 Spring Framework 기반 웹 애플리케이션 개발",
      "MySQL, Oracle 데이터베이스 설계 및 관리",
      "MyBatis를 활용한 ORM 및 데이터베이스 연동",
      "jQuery, AJAX, JSON을 활용한 동적 프론트엔드 개발",
      "Android 모바일 애플리케이션 개발",
      "팀 프로젝트: 풀스택 웹 애플리케이션 개발 및 배포",
    ],
  },
  {
    id: "kosta-2018",
    institution: "소프트웨어기술진흥협회 (KOSTA)",
    degree: "4차산업혁명 사물인터넷 SW 개발자 양성과정",
    period: "2018.03 ~ 2018.08",
    description: "IoT 관련 교육으로 RaspberryPi, Arduino를 활용한 하드웨어 제어 및 소프트웨어 연동을 학습했습니다. 다양한 소프트웨어의 연동 경험을 쌓으며 하드웨어와 소프트웨어의 통합 개발 능력을 키웠습니다.",
    achievements: [
      "RaspberryPi를 활용한 IoT 시스템 구축 및 제어",
      "Arduino를 활용한 센서 및 액추에이터 제어",
      "하드웨어와 소프트웨어 통합 프로젝트 수행",
      "Java 프로그래밍 언어 기초 학습",
      "센서 데이터 수집 및 처리 시스템 구현",
    ],
  },
  {
    id: "guro-highschool",
    institution: "구로고등학교",
    degree: "고등학교 졸업",
    field: "이과계열",
    period: "2013년 졸업",
  },
];
