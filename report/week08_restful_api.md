# RESTful API 개념과 설계

---

## 1. REST 원칙 및 HTTP 메서드

### REST란?

REST(Representational State Transfer)는 분산 시스템을 위한 소프트웨어 아키텍처 스타일입니다. 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하여 웹의 장점을 최대한 활용할 수 있는 아키텍처입니다.

---

### REST의 6가지 제약 조건

| 제약 조건 | 설명 |
| -------- | ---- |
| **클라이언트-서버 구조** | 클라이언트와 서버가 독립적으로 분리되어 있어야 하며, 서로의 의존성을 줄여 확장성을 높임 |
| **무상태 (Stateless)** | 각 요청은 독립적이며, 서버는 클라이언트의 상태를 저장하지 않음. 모든 요청에 필요한 정보가 포함되어야 함 |
| **캐시 가능 (Cacheable)** | 응답은 캐시 가능 여부를 명시해야 하며, 캐시를 통해 성능 향상이 가능함 |
| **균등한 인터페이스 (Uniform Interface)** | 일관된 인터페이스로 시스템 구조를 단순화. 자원 식별, 표현을 통한 자원 조작, 자기 서술적 메시지, HATEOAS 등 포함 |
| **계층화 시스템 (Layered System)** | 클라이언트는 서버와 직접 통신하는지 중간 서버와 통신하는지 알 수 없음. 로드 밸런서, 게이트웨이 등을 통한 확장성 제공 |
| **온디맨드 코드 (Code-On-Demand)** | 서버에서 클라이언트로 실행 가능한 코드(JavaScript 등)를 전송 가능 (선택 사항) |

---

### HTTP 메서드별 특징 비교

| HTTP 메서드 | 목적 | 안전성 | 멱등성 | 캐시 가능 | 요청 바디 | 응답 바디 |
|-------------|------|--------|--------|------------|-----------|------------|
| GET    | 리소스 조회         | ✅ | ✅ | ✅ | ❌ | ✅ |
| POST   | 리소스 생성/처리    | ❌ | ❌ | ❌ | ✅ | ✅ |
| PUT    | 리소스 전체 수정/생성 | ❌ | ✅ | ❌ | ✅ | ✅ |
| PATCH  | 리소스 부분 수정     | ❌ | ❌ | ❌ | ✅ | ✅ |
| DELETE | 리소스 삭제         | ❌ | ✅ | ❌ | ❌ | ✅ |
| HEAD   | 헤더 정보 조회       | ✅ | ✅ | ✅ | ❌ | ❌ |
| OPTIONS| 지원 메서드 확인     | ✅ | ✅ | ❌ | ❌ | ✅ |

> 💡 **용어 설명**
> - **안전성**: 서버 상태를 변경하지 않음
> - **멱등성**: 같은 요청을 여러 번 보내도 결과가 동일함
> - **캐시 가능**: 응답을 캐시할 수 있음

---

### HTTP 상태 코드

| 상태 코드 범위 | 의미 | 주요 예시 |
|----------------|------|------------|
| 1xx | 정보성 응답 | 100 Continue |
| 2xx | 성공 | 200 OK, 201 Created, 204 No Content |
| 3xx | 리다이렉션 | 301 Moved Permanently, 304 Not Modified |
| 4xx | 클라이언트 오류 | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| 5xx | 서버 오류 | 500 Internal Server Error, 503 Service Unavailable |

---

## 2. RESTful 엔드포인트 설계 방법

### ✅ 기본 원칙

- **명사 사용**: `/users` (❌ `/getUsers`)
- **복수형 사용**: `/users`, `/products`
- **계층 구조 표현**: `/users/123/posts`
- **소문자 사용**: URI 전체 소문자 사용
- **하이픈 사용 권장**: 단어 구분 시 하이픈(-) 사용 (`user-profile`)

---

### 🔎 좋은 설계 vs 나쁜 설계

| 항목 | 좋은 설계 | 나쁜 설계 |
|------|----------|-----------|
| 리소스 명명 | `/users` | `/getUsers`, `/user_list` |
| 단일 리소스 조회 | `/users/123` | `/user?id=123` |
| 중첩 리소스 | `/users/123/posts` | `/getUserPosts/123` |
| 필터링 | `/users?role=admin` | `/searchUsers?role=admin` |
| 정렬 | `/users?sort=name,-created_at` | `/users/sortByName` |
| 페이징 | `/users?page=2&limit=10` | `/users/page2/limit10` |

---

### 📘 표준 RESTful URL 패턴

| 동작 | HTTP 메서드 | URL |
|------|--------------|-----|
| 전체 목록 조회 | GET | `/users` |
| 단일 항목 조회 | GET | `/users/:id` |
| 생성 | POST | `/users` |
| 전체 수정 | PUT | `/users/:id` |
| 부분 수정 | PATCH | `/users/:id` |
| 삭제 | DELETE | `/users/:id` |

---

### 🧩 중첩 리소스 예시

```http
GET     /users/123/posts
GET     /users/123/posts/456
POST    /users/123/posts
PUT     /users/123/posts/456
DELETE  /users/123/posts/456
```


---

### 🔍 쿼리 파라미터 활용 예시

```http
# 필터링
GET /users?role=admin&status=active

# 정렬
GET /users?sort=name,-created_at

# 페이징
GET /users?page=1&limit=20&offset=0

# 필드 선택
GET /users?fields=id,name,email

# 검색
GET /users?search=john&search_fields=name,email
```

## 3. Express/MongoDB 기반 REST API 예제

### 📁 프로젝트 구조

```
blog-api/
├── package.json
├── server.js
├── models/
│   └── Post.js
├── routes/
│   └── posts.js
└── middleware/
    └── validation.js
```

---

### ⚙️ 서버 설정 (server.js)

```js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/posts', require('./routes/posts'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

### 🧱 모델 정의 (models/Post.js)

```js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  author: { type: String, required: true, trim: true },
  tags: [{ type: String, trim: true }],
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

postSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Post', postSchema);
```

---

### 🛣️ 라우터 구현 (routes/posts.js)

```js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET /api/posts
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, author, search } = req.query;
    const query = {};
    if (status) query.status = status;
    if (author) query.author = new RegExp(author, 'i');
    if (search) {
      query.$or = [
        { title: new RegExp(search, 'i') },
        { content: new RegExp(search, 'i') }
      ];
    }

    const posts = await Post.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Post.countDocuments(query);

    res.json({
      posts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// GET /api/posts/:id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: '게시글 없음' });
    res.json(post);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// POST /api/posts
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    const saved = await post.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// PUT /api/posts/:id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// PATCH /api/posts/:id
router.patch('/:id', async (req, res) => {
  try {
    const patched = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(patched);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// DELETE /api/posts/:id
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: '삭제 완료' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
```

---

### 💡 API 사용 예시 (cURL)

```bash
# 전체 게시글 조회
curl http://localhost:3000/api/posts

# 필터링
curl "http://localhost:3000/api/posts?status=published&author=kim"

# 게시글 생성
curl -X POST http://localhost:3000/api/posts \
-H "Content-Type: application/json" \
-d '{"title":"REST 학습","content":"내용","author":"홍길동","status":"published"}'
```

---

### 📚 추가 학습 포인트

#### REST vs GraphQL vs RPC

| 항목 | REST | GraphQL | RPC |
|------|------|---------|-----|
| 요청 방식 | 다수의 엔드포인트 | 단일 엔드포인트 | 함수 호출 |
| Over-fetching | 발생 | 방지 | 발생 |
| 캐싱 | 쉬움 | 어려움 | 직접 구현 |
| 학습 곡선 | 낮음 | 높음 | 중간 |
| 타입 시스템 | 없음 | 강력한 타입 시스템 | 케바케 |

---

### ✅ 모범 사례

- 버전 관리: `/api/v1`, `/api/v2`
- 에러 처리: 일관된 JSON 형식 `{ error: '', message: '' }`
- 인증/인가: JWT, OAuth2
- 문서화: Swagger, OpenAPI
- 테스트: Jest, Mocha
- 로깅/모니터링: Winston, Morgan
- Rate Limit: express-rate-limit
