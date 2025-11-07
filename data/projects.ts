import { Project } from "@/types";

// 프로젝트를 최신순으로 정렬
export const projects: Project[] = [
  {
    id: "integrated-logistics-system",
    title: "통합 물류 시스템 (To-Be)",
    period: "2024.11 ~ 현재",
    description:
      "Spring Boot와 Vue 3 기반의 웹 통합 물류 시스템을 처음부터 설계하고 개발. 풀스택 개발자로서 기술 스택 선정, 아키텍처 설계, 프로젝트 환경 설정부터 개발까지 전 과정 담당.",
    longDescription:
      "기존 C# 기반 물류 시스템(AS-IS)을 최신 웹 기반 통합 시스템(To-Be)으로 전환하는 대규모 프로젝트입니다. Backend는 Spring Boot 3.x, Spring Security, JPA, QueryDSL, OpenFeign, Redis, Quartz를 활용한 API 설계 및 비즈니스 로직 구현을 담당했습니다. Frontend는 Vue 3, TypeScript, Vuetify, Pinia, Axios를 사용하여 현대적인 UI/UX를 개발했습니다. MySQL 및 MSSQL을 활용한 DB 설계 및 최적화, JWT/Spring Security/Jasypt/Lucy-XSS를 통한 보안 구현, Docker 기반 CI/CD 환경 구축, DBDiagram.io와 Notion을 활용한 프로젝트 문서 및 일정 관리를 진행했습니다.",
    tags: [
      "Spring Boot 3.x",
      "Vue 3",
      "TypeScript",
      "JPA",
      "QueryDSL",
      "MySQL",
      "MSSQL",
      "Redis",
      "Docker",
      "CI/CD",
      "Vuetify",
      "Pinia",
    ],
    githubUrl: "https://github.com/kim-yeongseong",
    date: "2024-11",
  },
  {
    id: "panstar-cruise-renewal",
    title: "팬스타크루즈 여객 예약 사이트 리뉴얼",
    period: "2023.07 ~ 2024.07",
    description:
      "Go와 Azure Database, Vue를 활용한 팬스타크루즈 여객 예약 사이트 백엔드 개발. 클린 아키텍처 구조 설계 및 EDI 시스템 구현.",
    longDescription:
      "아로아랩스에서 Backend 전반에 걸친 개발 및 프로젝트 구조 설계를 담당했습니다. 클린 아키텍처 원칙에 따라 프로젝트를 설계하여 유지보수 및 확장성을 크게 향상시켰습니다. Go 언어를 사용한 고성능 백엔드 API를 개발했으며, Azure Database를 활용한 클라우드 기반 데이터 관리를 구현했습니다. 해상 물류 관련 로직 개발, EDI(전자 데이터 교환) 시스템 구현, Stowage Planning(선적 계획) 개발에 참여했습니다. 온프레미스 환경에서 Apache Tomcat 서버 관리, Key Vault를 통한 보안 설정, CI/CD 파이프라인 구축을 진행했으며, 면접 진행 및 신입 사원 선발 업무도 담당했습니다.",
    tags: ["Go", "Azure Database", "Vue", "EDI", "Clean Architecture", "Apache Tomcat", "CI/CD"],
    date: "2023-07",
  },
  {
    id: "spring-boot-api-template",
    title: "Spring Boot API MPLS Template Project",
    period: "2023.03 ~ 2023.06",
    description:
      "Spring Boot 기반 API 서버 템플릿 구축. Panstar API 서버 구축 및 향후 Cargo 등 타 프로젝트의 API 서버 변환을 위한 템플릿 프로젝트 개발.",
    longDescription:
      "회사 표준 API 서버 템플릿을 구축하는 프로젝트입니다. MyBatis와 JPA를 모두 지원하며, JWT 기반 인증, Swagger를 통한 API 문서화, Jasypt를 활용한 보안 설정을 포함합니다. 이 템플릿은 Panstar API 서버 구축에 실제로 적용되었으며, 향후 다른 프로젝트들의 API 서버 마이그레이션 기반이 되었습니다. 재사용 가능한 구조로 설계하여 개발 생산성을 크게 향상시켰습니다.",
    tags: ["Spring Boot", "MyBatis", "JPA", "JWT", "Swagger", "Jasypt", "RESTful API"],
    date: "2023-03",
  },
  {
    id: "panstar-migration",
    title: "Panstarcruise 이관 작업",
    period: "2023.01 ~ 2023.03",
    description:
      "VB 기반 레거시 시스템을 외부 웹으로 이관. DB 오브젝트 권한 체계 적용 및 테이블별 권한 설정, 보안 강화 작업.",
    longDescription:
      "Visual Basic 기반의 레거시 시스템 10개 프로젝트를 현대적인 웹 환경으로 이관하는 대규모 마이그레이션 프로젝트입니다. DB 오브젝트 권한 체계를 새롭게 적용하고 테이블별 세부 권한을 설정했습니다. 쿼리 등 DB 정보 보안을 위해 View 처리를 진행했으며, 이관사의 운영 및 개발 환경 설정을 지원했습니다. 홈페이지를 포함한 여객 시스템, 화물 시스템 등 다양한 프로젝트의 성공적인 이관을 완료했습니다.",
    tags: ["Migration", "Database Security", "Access Control", "Legacy System", "MSSQL"],
    date: "2023-01",
  },
  {
    id: "ecargo-panstar",
    title: "eCargoPanstar 해상물류 WEB BOOKING 시스템",
    period: "2022.08 ~ 2022.10 (신규 개발) / 유지보수 운영 중",
    description:
      "Java Spring과 MSSQL 기반의 새로운 해상물류 웹 부킹 솔루션 구축. 본사 솔루션 메인 담당자로서 신규 개발 및 운영을 주도.",
    longDescription:
      "본사의 핵심 솔루션인 eCargo를 Panstar용으로 커스터마이징한 해상 화물 웹 부킹 시스템입니다. Spring MVC 프레임워크를 활용하여 안정적인 시스템을 구축했으며, 관세청 API(유니패스) 연동을 통한 BL 데이터 관리 및 VIEW 제공, 바로빌 API 연동으로 카드 승인내역을 e-HR 시스템에 자동 연동, 알리고 API를 통한 카톡/SMS 발송 기능, 세틀뱅크 API 연동 무통장 처리 데몬, PG 하이브리드 방식 개선을 구현했습니다. 서버별 프로젝트 파일 관리를 위한 FTP 업/다운로드 시스템도 구축했습니다.",
    tags: ["Java", "Spring", "MSSQL", "MyBatis", "API Integration", "jQuery", "FTP"],
    date: "2022-08",
  },
  {
    id: "dalong-ferry-homepage",
    title: "DalongFerry 홈페이지",
    period: "2022.04 ~ 2022.06 (신규 개발) / 유지보수 운영 중",
    description:
      "CodeIgniter 4, Apache, SVN, MSSQL 2019 기반 정보성 홈페이지 템플릿 구축. 프로젝트 개발 환경 구축, 패키지 구조 및 DB 설계.",
    longDescription:
      "PHP CodeIgniter 4 프레임워크를 사용한 현대적인 정보성 홈페이지 템플릿 프로젝트입니다. Apache 웹 서버, SVN 버전 관리, MSSQL 2019 데이터베이스를 활용했습니다. 재사용 가능한 홈페이지 템플릿 구조를 설계하여 향후 다른 고객사의 홈페이지 개발에도 활용할 수 있도록 했습니다. 프로젝트 개발 환경을 처음부터 구축하고, MVC 패키지 구조를 설계하며, DB 스키마를 설계했습니다.",
    tags: ["PHP", "CodeIgniter 4", "Apache", "SVN", "MSSQL", "Template Design"],
    date: "2022-04",
  },
  {
    id: "pharmaceutical-wholesale",
    title: "동물의약품 도매상 관리 시스템",
    period: "2022.01 ~ 2022.02 / 유지보수 운영 중",
    description:
      "Spring과 MySQL 기반의 의약품 유통 관리 시스템 개발. 바코드 발행 및 재고 관리, 창고 업무 추가 개발.",
    longDescription:
      "동물의약품 유통 관리를 위한 전문 시스템입니다. Spring 프레임워크와 MySQL을 활용하여 안정적인 시스템을 구축했습니다. 바코드/QR 스캐너를 활용한 재고 관리 시스템을 구축했으며, 모바일 연동을 통한 실시간 재고 확인 기능을 개발했습니다. 창고 관리자를 위한 효율적인 업무 프로세스를 설계하고 구현했으며, 의약품 유통 관리 규정에 맞는 추적 시스템을 개발했습니다. 유지보수를 통해 창고 업무 추가 개발을 지속적으로 진행했습니다.",
    tags: ["Spring", "MySQL", "Java", "Barcode System", "Inventory Management", "QR Scanner"],
    date: "2022-01",
  },
  {
    id: "visibility-system",
    title: "해상, 항공 비저빌리티 시스템",
    period: "2021.11 ~ 2022.01 / 판토스 파견업무",
    description:
      "GAUS, JavaScript, Java 환경에서 선박 및 항공 지도 웹 개발. 실시간 스케줄 정보 화면 개발.",
    longDescription:
      "판토스 파견 업무로 진행한 해상 및 항공 운송의 실시간 위치 추적 및 스케줄 관리 시스템입니다. GAUS 프레임워크와 JavaScript, Java를 활용하여 개발했습니다. 지도 기반 인터페이스를 통해 선박과 항공기의 실시간 위치를 확인할 수 있으며, 스케줄 정보를 효율적으로 관리할 수 있는 시스템을 구축했습니다. 실시간 데이터 업데이트와 사용자 친화적인 UI를 구현하여 물류 담당자들의 업무 효율성을 크게 향상시켰습니다.",
    tags: ["GAUS", "JavaScript", "Java", "Map Integration", "Real-time Tracking", "Logistics"],
    date: "2021-11",
  },
  {
    id: "education-system",
    title: "동물의약품 도매상 교육 시스템",
    period: "2021.05 ~ 2021.11 / 유지보수 및 추가 개발 운영",
    description:
      "React, Node.js, AWS 기반의 도매상 교육 관리 시스템 추가 개발. 교육 컨텐츠 관리 및 수강생 관리 기능.",
    longDescription:
      "동물의약품 도매상을 위한 온라인 교육 플랫폼입니다. React와 Node.js를 활용한 SPA(Single Page Application)로 구축했으며, AWS 인프라를 활용하여 안정적이고 확장 가능한 서비스를 제공합니다. 교육 과정 관리, 수강 신청, 진도 관리, 시험 기능, 수료증 발급 등의 기능을 개발했습니다. 관리자는 교육 컨텐츠를 쉽게 업로드하고 관리할 수 있으며, 수강생들의 학습 진도를 실시간으로 확인할 수 있습니다.",
    tags: ["React", "Node.js", "AWS", "Education Platform", "SPA", "LMS"],
    date: "2021-05",
  },
  {
    id: "sap-po-platform",
    title: "SAP_PO 원플랫폼",
    period: "2021.03 ~ 2021.05 / 판토스 파견업무",
    description:
      "GAUS, JavaScript, Java 환경에서 SAP 연동 테스트. Node.js를 사용하여 자바 SAP 데이터 통신 테스트 환경 개발.",
    longDescription:
      "판토스 파견 업무로 진행한 SAP 시스템 연동 프로젝트입니다. GAUS 프레임워크와 JavaScript, Java를 활용하여 SAP 연동 테스트를 진행했습니다. Node.js를 사용하여 Java와 SAP 간의 데이터 통신을 테스트할 수 있는 환경을 개발했습니다. 다양한 SAP 모듈과의 데이터 교환을 테스트하고, 안정적인 통신 프로토콜을 구축했습니다. 이를 통해 판토스의 ERP 시스템과 SAP 간의 원활한 데이터 연동이 가능하게 되었습니다.",
    tags: ["SAP", "GAUS", "JavaScript", "Java", "Node.js", "ERP Integration"],
    date: "2021-03",
  },
  {
    id: "ecargo-solutions",
    title: "eCargo 화물 웹 부킹 시스템 (다중 솔루션)",
    period: "2019.06 ~ 2023.06",
    description:
      "본사 eCargo 솔루션 신규 개발 및 운영. 개별 DB와 개별 프로젝트로 구성된 4개의 고객사별 커스터마이징 솔루션.",
    longDescription:
      "엠피엘에스의 핵심 솔루션인 eCargo 해상물류 WEB Booking 시스템을 4개의 고객사(eCargoDain, eCargoHuadong, eCargoDalong, eCargoPjFerry)에 맞게 커스터마이징하여 개발 및 운영했습니다. 각 프로젝트는 개별 DB와 개별 프로젝트로 구성되어 있으며, 고객사별 요청 사항에 맞게 기능을 개발했습니다. Spring Exception Resolver 재정의 및 WEBHOOK 연동, 다양한 API 연동(세틀뱅크, 관세청 유니패스, 바로빌, 알리고, PG), SVN에서 Git로의 이관, Jenkins를 활용한 CI/CD 구축, 서버 설치 및 설정, Docker Compose 도입 검토 등 전체 시스템의 개발과 운영을 담당했습니다.",
    tags: ["Java", "Spring", "MSSQL", "MyBatis", "Multi-tenancy", "API Integration", "Jenkins", "Git"],
    date: "2019-06",
  },
];
