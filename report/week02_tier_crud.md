# 🏗️ 3계층 구조와 CRUD 작동 흐름

---

## 📌 1. 3-Tier Architecture (3계층 아키텍처)

3-Tier Architecture는 소프트웨어 시스템을 **3개의 독립적인 계층**으로 나누어 구성하는 구조입니다. 이는 **유지보수 용이성**, **확장성**, **역할 분리** 등을 목적으로 많이 사용됩니다.

### 🔧 구성 계층

| 계층 이름 | 설명 | 주요 역할 |
|-----------|------|------------|
| 1️⃣ Presentation Layer (프레젠테이션 계층) | 사용자 인터페이스(UI)를 담당하는 계층 | - 사용자의 입력을 수집<br>- 결과 화면을 출력<br>- 보통 HTML/CSS, React, JSP 등 사용 |
| 2️⃣ Business Logic Layer (비즈니스 로직 계층) | 실제 로직을 처리하는 계층 | - 요청 처리<br>- 데이터 검증<br>- 트랜잭션 관리<br>- Java(Spring), C#, Python 등 |
| 3️⃣ Data Access Layer (데이터 계층) | 데이터베이스와 연결되는 계층 | - DB CRUD 처리<br>- SQL 실행<br>- JDBC, JPA, MyBatis 등 사용 |

> ✅ **역할 분리** 덕분에 각 계층을 독립적으로 개발하고 유지보수할 수 있음.

---

## 🔁 2. CRUD 개념

**CRUD**는 데이터에 대해 할 수 있는 기본적인 4가지 작업을 의미합니다.

| 작업 | 의미 | HTTP 메서드 | SQL |
|------|------|--------------|------|
| Create | 데이터 생성 | POST | INSERT |
| Read | 데이터 조회 | GET | SELECT |
| Update | 데이터 수정 | PUT / PATCH | UPDATE |
| Delete | 데이터 삭제 | DELETE | DELETE |

---

## 🌐 3. CRUD 웹 흐름 예시

예를 들어, 게시판 웹 애플리케이션에서 "게시글 작성" 흐름을 생각해 봅시다.

### 게시글 작성 흐름 (Create 예시)

1. **사용자 입력 (Presentation Layer)**
   - 사용자가 글 작성 폼에 제목, 내용을 입력하고 [작성] 버튼 클릭

2. **서버 요청 전송**
   - 브라우저에서 POST 요청 (예: `/post/write`) 전송

3. **비즈니스 로직 처리 (Business Logic Layer)**
   - 컨트롤러가 요청을 받아 Service로 전달
   - Service는 글 내용을 검증한 후 DAO에 저장 요청

4. **데이터 저장 (Data Access Layer)**
   - DAO에서 INSERT SQL 실행하여 DB에 저장

5. **응답 반환**
   - 저장 완료 후, 성공 메시지 또는 게시글 목록 페이지로 리다이렉트

---

## 🔄 CRUD 전체 흐름 요약 다이어그램

```text

// 📍 Controller 계층: 클라이언트 요청을 받아 처리하는 입구 역할
@PostMapping("/post/write") // HTTP POST 요청이 "/post/write"로 들어오면 아래 메서드 실행
public String createPost(PostDto postDto) {
    postService.save(postDto); // 사용자가 보낸 데이터(postDto)를 Service 계층으로 전달
    return "redirect:/post/list"; // 처리 후 게시글 목록 페이지로 리다이렉트 (웹 흐름 전환)
}

// 📍 Service 계층: 핵심 비즈니스 로직을 처리하는 중간 관리자
public void save(PostDto dto) {
    postRepository.save(dto.toEntity()); 
    // DTO(Data Transfer Object)를 엔티티(Post 객체)로 변환한 뒤 Repository에 저장 요청
}

// 📍 Repository 계층 (DAO): 실제 데이터베이스에 접근하여 데이터 처리
public void save(Post post) {
    jdbcTemplate.update("INSERT INTO post (title, content) VALUES (?, ?)",
                        post.getTitle(), post.getContent()); 
    // JDBC를 사용하여 SQL INSERT 쿼리를 실행. 사용자가 작성한 제목과 내용을 DB에 저장
}

## 🔁 전체 흐름 요약
사용자가 글쓰기 폼을 제출 (HTML or React form)

Controller가 POST 요청을 받아 PostDto 객체로 변환

Service가 DTO를 도메인 객체(Post)로 변환 후 저장 요청

Repository에서 SQL을 실행하여 DB에 저장

결과적으로 사용자는 게시글 목록 페이지로 이동
