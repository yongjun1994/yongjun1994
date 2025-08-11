# CORS 정책과 웹 보안 기본 개념 — 심화 설명

## 1. 동일 출처 정책(Same-Origin Policy, SOP)

### 1-1. 등장 배경
웹 기술 발전으로 브라우저에서 다른 사이트의 데이터나 세션 정보를 훔치는 공격(XSS, CSRF 등)이 등장.
이를 막기 위해 **SOP**가 도입됨.

**목표**
- 악성 스크립트가 사용자의 인증 정보를 탈취하지 못하게 방지
- 브라우저가 서로 다른 출처 간의 직접 데이터 접근을 제한

---

### 1-2. Origin(출처)의 구성
출처는 **프로토콜 + 호스트 + 포트**가 모두 같아야 동일 출처.

| 요소 | 설명 | 예시 |
|------|------|------|
| 프로토콜 | 데이터 전송 방식 | `https://` |
| 호스트 | 도메인 또는 IP | `example.com` |
| 포트 | 서비스 수신 대기 포트 | `:3000` |

기본 포트: HTTP=80, HTTPS=443

---

### 1-3. 동일 출처 여부 예시

| URL A | URL B | 동일 출처 여부 | 다른 이유 |
|-------|-------|----------------|-----------|
| `http://example.com:80` | `http://example.com` | ✅ | 기본 포트 동일 |
| `http://example.com` | `https://example.com` | ❌ | 프로토콜 다름 |
| `http://example.com` | `http://www.example.com` | ❌ | 호스트 다름 |
| `http://example.com` | `http://example.com:8080` | ❌ | 포트 다름 |

---

## 2. CORS (Cross-Origin Resource Sharing)

### 2-1. 필요성
SPA, API 기반 서비스, 마이크로서비스 구조에서 서로 다른 출처 간 요청 필요.

예:
```
프론트엔드: http://localhost:3000
백엔드 API: http://localhost:5000
```

SOP: 차단 / CORS: 예외 허용

### 2-2. 작동 원리
1. 브라우저가 Origin 헤더를 요청에 자동 추가
2. 서버가 CORS 응답 헤더를 반환
3. 브라우저가 검증 후 허용/차단

⚠ CORS는 브라우저만 검사, 서버-서버 요청(Postman, curl)은 적용 안 됨.

---

## 3. 주요 CORS 응답 헤더

| 헤더 이름 | 설명 | 예시 |
|-----------|------|------|
| `Access-Control-Allow-Origin` | 허용 Origin 지정 | `https://myapp.com` |
| `Access-Control-Allow-Methods` | 허용 HTTP 메서드 | `GET, POST, PUT, DELETE` |
| `Access-Control-Allow-Headers` | 허용 요청 헤더 | `Content-Type, Authorization` |
| `Access-Control-Allow-Credentials` | 쿠키·인증정보 포함 여부 | `true` |
| `Access-Control-Max-Age` | 프리플라이트 캐싱 시간(초) | `86400` |

---

## 4. 프리플라이트 요청 (Preflight Request)

### 4-1. 발생 조건
**단순 요청**이 아닌 경우 OPTIONS 요청 선행.

단순 요청 조건:
- 메서드: GET/POST/HEAD
- Content-Type: `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`
- 커스텀 헤더 없음

### 4-2. 흐름 예시

1. OPTIONS 예비 요청
```http
OPTIONS /api/users/123 HTTP/1.1
Origin: http://localhost:3000
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: Authorization
```

2. 서버 응답
```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, DELETE
Access-Control-Allow-Headers: Authorization
Access-Control-Max-Age: 86400
```

3. 실제 요청
```http
DELETE /api/users/123 HTTP/1.1
Origin: http://localhost:3000
Authorization: Bearer token123
```

---

## 5. 보안 고려 사항
- `*` 와일드카드 남발 금지
- Origin 화이트리스트 관리
- 민감 데이터는 서버-서버 통신
- HTTPS 사용 권장

---

## 6. 개발 시 해결 방법

1. 서버에서 허용 헤더 설정 (Express 예시)
```js
const cors = require('cors');
app.use(cors({
  origin: 'https://myapp.com',
  methods: ['GET','POST','DELETE'],
  credentials: true
}));
```

2. 프록시 사용 (React 예시)
```json
"proxy": "http://localhost:5000"
```

3. API Gateway, Nginx 활용

---

## 🔍 CORS 에러 디버깅 체크리스트

1. 콘솔 에러 메시지 확인
2. 요청 Origin과 응답 Origin 비교
3. 서버 CORS 설정 점검
4. 프리플라이트 응답 허용 여부 확인
5. 개발 환경 프록시 설정 확인
6. 운영 환경 리버스 프록시(Nginx 등) 설정 점검
7. 서버-서버 요청 여부 확인
8. 민감 정보 전송 시 보안 정책 점검

---

## 9. CORS 흐름 시퀀스 (텍스트)

```
[JS 실행] → [브라우저 Origin 검사] → 
   ├─ 단순 요청 → 서버 응답 → Origin 허용? → 데이터 표시
   └─ 복잡 요청 → OPTIONS → 서버 허용 → 실제 요청 → 데이터 표시
```

---

## 10. CORS 시퀀스 다이어그램

(브라우저와 서버 간 요청-응답 흐름을 시각화한 이미지 포함)

![CORS Flow Example](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*UGFbPL1mB8bD38mZ.png)

