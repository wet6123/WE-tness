# **🥇WE-TNESS (위트니스)🥈**
### WebRTC와 모션인식을 활용한 운동 게임 서비스

<br>
<img width="50%" src="https://user-images.githubusercontent.com/61536153/208925456-84989509-fbb3-46fd-b9fe-dd4cfa00c921.png"/>
<br>


## ✨ 목차
1. 서비스 소개
    1. 주요 기능 및 시연화면
    2. 기본 기능 및 시연화면
2. 개발환경
    1. 시스템 환경
    2. Technical Architecture Diagram
3. 팀원 소개

<br>
<br>


## 🔎 서비스 소개

https://user-images.githubusercontent.com/61536153/194935846-74eae361-f25f-4e32-98d1-aec7f9d3940c.mp4

항상 작심 일일을 실행하고 있진 않으신가요?

요즘 날씨, 밖에 나가서 운동하기 힘들죠?

**그냥** 숨쉬기도 버거운데 운동이 재미없으면 어떻게 해요?

하지만 운동을 게임처럼 즐겁게 할 수 있다면?

위트니스와 함께라면 가능합니다. 

<br>
<br>

## 💻 주요기능 및 시연화면

<br>

### 게임 화면 - 플레이 화면

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208926054-543204ae-9cb7-408d-84f0-a7dba806ebbe.gif"/>

### 운동 - 푸시업

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208926656-fd2da801-aa87-4f10-a72a-d26a817cc363.gif"/>

### 운동 - 런지

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208926746-80218316-edaf-46f0-b127-3bbe8331aecd.gif"/>

### 운동 -스쿼트

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208926800-62ddd15f-a194-4a0b-8593-2c96ab1f4259.gif"/>

### 운동 - 버피

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208926910-242d7420-fb7f-43aa-8ab1-057553cb42c7.gif"/>

### Teachable Machine - 버피, 스쿼트, 푸시업, 런지

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208927023-4f34ad41-dd21-44c2-a15c-aac3cf5acdf5.gif"/>

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208927051-bc89c278-dbdc-4acc-ab62-6d292378d57b.gif"/>

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208927101-9093c2b4-92af-4d75-ae90-5f5a087349a0.gif"/>

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208927134-f14eea89-8bcd-4c99-802b-3968bd9f9de6.gif"/>

<br>
<br>

## 💻 기본기능 및 시연화면


### 홈 화면 - 현재 생성된 방

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208927338-1f72409b-72dd-48bc-8f36-f4b5b05821e4.png"/>

### 방 생성 - 게임 종류, 제목 및 암호 설정

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208927408-998d8c20-537f-4471-8110-bf8e2835c02a.png"/>

### 튜토리얼 - 카메라 세팅 및 운동 별 가이드

[screen-recording__2_.webm](https://user-images.githubusercontent.com/61536153/194936147-bcbb7982-59bd-414b-97dc-9baa598e58e0.webm)

### 랭킹 페이지 - 게임 종류 별(중복 선택 가능) 및 지역 별 랭킹

[screen-recording__1_.webm](https://user-images.githubusercontent.com/61536153/194936271-770ca603-5010-42ad-9f8d-715f638dac09.webm)

### 검색 - 유저, 방 검색 및 유저 운동 기록 조회

[screen-recording.webm](https://user-images.githubusercontent.com/61536153/194936305-db4965e0-ef68-4cc7-a678-cc78cb6b8147.webm)



<br>
<br>


## 📃 개발환경


### 시스템 환경


- **🔗 Frontend**
    - React v5.0.1
    - node.js v16.14.0
    - npm v8.7.0
    - redux-toolkit v1.8.3
    - styled-components v5.3.5
    
- **🔗 CI/CD & Database**
    - AWS ec2 - Ubuntu 20.04.4 LTS
    - Docker 20.10.12
    - Jenkins 2.346.3
    - nginx/1.18.0 (Ubuntu)
    - MySQL 8.0.30-0ubuntu0.20.04.2
    - certbot 0.40.0

- **🔗 Backend**
    - Spring Boot 2.7.1
    - Spring Data JPA 2.7.1
    - Spring Security 5.7.2
    - Spring Cloud 2.2.6

- **🔗 Web RTC**
    - openVidu 2.22.0
    
- **🔗 Tools**
    - Intellij 2022.2
    - VS Code
    - Google Chrome 104.0.5112.81

### Technical Architecture Diagram

<img width="70%" src="https://user-images.githubusercontent.com/61536153/208927649-942362f4-4919-4606-a408-bdb4ca677cde.jpg"/>


## 🤸‍♀️ 팀원 소개

- 오혜린(팀장)
    - 백엔드
    - User, Rank관련 API 구현
    - 데이터베이스 설계
    - Jenkins를 사용한 자동빌드
    - nginx세팅
    - EC2 서버 환경 세팅 및 배포
    - 최종 발표
    
- 김윤석
    - 백엔드
    - user 로그인 관련 기능 개발
    - 팔로우, 알림, 신고, 어워드 기능 개발

- 류현수
    - 백엔드
    - Spring Security 활용한 user 인증 구현
    - Openvidu 활용 WebRTC 환경 구축
    - 소셜 로그인 구현(카카오)

- 배준성
    - 프론트엔드
    - 요구사항 명세서 작성
    - react-toolkit & react-router-dom 활용 SPA 구현
    - axios 요청을 통한 api 통신
    - 튜토리얼 페이지 제작
    - 디자인 및 프로토타입 제작
    - 운동별 애니메이션 제작
    - styled-components 활용 css 스타일링
    - 협업과 코드 리팩토링을 위한 ESLint 설정

- 이동근
    - 프론트엔드
    - react 컴포넌트 구조 설계
    - react-toolkit & react-router-dom 활용 SPA 구현
    - axios 요청을 통한 api 통신
    - 회원 CRUD 구현 (회원가입, 로그인, 정보 수정, 비밀번호 수정, 팔로우 등)
    - 소셜 로그인 구현 (카카오)
    - Openvidu 활용 게임방 실시간 데이터 교환 구현
    - teachable machine 활용 동작인식 구현
    - styled-components 활용 css 스타일링

- 한유연
    - 백엔드
    - 게임 관련 기능 (게임 생성 및 결과 저장 등) API 구현
    - 사용자 운동 기록 관련 API 구현
    - 다이어리 관련 기능, S3 버킷 연동 통해 리소스 관리 API 구현
    - EC2 서버 환경 세팅 및 배포
        - DB 세팅 및 관리
        - Nginx 통한 프록시 설정
        - Certbot 통해 SSL 구축
