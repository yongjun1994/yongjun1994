# RESTful API의 개념과 설계

## 1. REST (Representational State Transfer)란?

REST는 **웹 서비스 아키텍처 스타일** 중 하나로, 네트워크 상에서 클라이언트와 서버가 통신하는 방식의 한 집합입니다. REST는 특정 기술이나 프로토콜이 아닌, **분산 하이퍼미디어 시스템을 위한 아키텍처 원칙**에 가깝습니다. REST 아키텍처를 따르는 API를 **RESTful API**라고 부릅니다.

### REST의 핵심 원칙

| 원칙 | 설명 |
| --- | --- |
| **Client-Server (클라이언트-서버 구조)** | 클라이언트와 서버의 역할을 명확히 분리합니다. 클라이언트는 UI에 집중하고 서버는 데이터 처리에 집중하여 독립성을 높입니다. |
| **Stateless (무상태성)** | 서버는 클라이언트의 상태를 저장하지 않으며, 요청마다 필요한 모든 정보를 포함해야 합니다. |
| **Cacheable (캐시 가능)** | 응답은 캐시될 수 있어야 하며, HTTP 헤더를 통해 명시됩니다. |
| **Uniform Interface (일관된 인터페이스)** | 표준화된 URI와 메서드를 사용해 자원에 접근합니다. |
| **Layered System (계층화)** | 중간 서버(프록시, 게이트웨이 등)를 통해 보안, 로드밸런싱 등을 처리할 수 있습니다. |
| **Code-on-Demand (선택 사항)** | 필요시 클라이언트에 코드(JavaScript 등)를 전송해 기능을 확장할 수 있습니다. |

---

## 2. HTTP 메서드와 CRUD 매핑

| HTTP 메서드 | CRUD 연산 | 설명 |
| --- | --- | --- |
| **GET** | 조회(Read) | 리소스 조회 |
| **POST** | 생성(Create) | 새로운 리소스 생성 |
| **PUT** | 전체 수정(Update) | 리소스 전체 수정 |
| **PATCH** | 부분 수정(Update) | 리소스 일부 수정 |
| **DELETE** | 삭제(Delete) | 리소스 삭제 |

---

## 3. RESTful 엔드포인트 설계 원칙

### ✅ 설계 규칙

1. **명사형 URI 사용 (동사 금지)**  
   - Bad: `/getUser`  
   - Good: `/users`

2. **복수형 사용**  
   - `/users`, `/products` 등

3. **슬래시(/)로 계층 표현**  
   - `/users/1/posts`

4. **파일 확장자 제거**  
   - Bad: `/users/1.json`  
   - Good: `/users/1` (Accept 헤더 사용)

5. **소문자 사용**

### 예시: 사용자 API

| 기능 | 메서드 | URI | 설명 |
|------|--------|-----|------|
| 사용자 전체 조회 | GET | `/users` | |
| 특정 사용자 조회 | GET | `/users/:id` | |
| 사용자 생성 | POST | `/users` | |
| 사용자 전체 수정 | PUT | `/users/:id` | |
| 사용자 부분 수정 | PATCH | `/users/:id` | |
| 사용자 삭제 | DELETE | `/users/:id` | |

---

## 4. Express + MongoDB 기반 REST API 예제

### 📁 프로젝트 구조

```
express-mongo-api/
├── models/
│   └── user.js
├── routes/
│   └── users.js
├── .env
└── server.js
```

---

### 1️⃣ 의존성 설치

```bash
npm init -y
npm install express mongoose dotenv
```

---

### 2️⃣ .env

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
PORT=3000
```

---

### 3️⃣ models/user.js

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
```

---

### 4️⃣ routes/users.js

```js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET: 전체 사용자
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: 특정 사용자
router.get('/:id', getUser, (req, res) => {
  res.json(res.locals.user);
});

// POST: 사용자 생성
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH: 사용자 수정
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) res.locals.user.name = req.body.name;
  if (req.body.email != null) res.locals.user.email = req.body.email;
  try {
    const updatedUser = await res.locals.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE: 사용자 삭제
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.locals.user.remove();
    res.json({ message: 'Deleted User' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 공통 미들웨어
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.locals.user = user;
  next();
}

module.exports = router;
```

---

### 5️⃣ server.js

```js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('✅ MongoDB connected'));

app.use(express.json());
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
```

---

### 6️⃣ API 테스트 예시 (cURL)

```bash
# 사용자 생성
curl -X POST http://localhost:3000/users   -H "Content-Type: application/json"   -d '{"name": "홍길동", "email": "hong@example.com"}'

# 전체 조회
curl http://localhost:3000/users

# 단일 조회
curl http://localhost:3000/users/<user_id>

# 삭제
curl -X DELETE http://localhost:3000/users/<user_id>
```

---

## 🔚 마무리

이 문서는 RESTful API 설계 원칙과 실제 Express/MongoDB 환경에서의 구현 예제를 다루었습니다. Postman이나 ThunderClient로 테스트하면 더 직관적으로 이해할 수 있습니다.
