# 📦 자료보호와 암호화 기술의 원리 및 알고리즘

데이터를 안전하게 보호하는 것은 현대 정보 사회의 핵심 과제입니다. 이를 위해 암호화 기술이 필수적으로 사용됩니다. 이 문서에서는 자료보호의 기본 원칙과 암호화 기술의 핵심 원리, 그리고 대표적인 암호화 알고리즘인 해싱, 대칭키, 비대칭키 방식에 대해 정리합니다.

---

## 1. 📌 자료보호의 핵심 원칙

자료보호는 데이터의 무단 접근, 사용, 공개, 변경, 파괴 등을 방지하기 위한 모든 활동을 의미합니다.

### ✅ 주요 목표

- **기밀성 (Confidentiality)**  
  인가된 사용자만이 정보에 접근할 수 있도록 함.  
  👉 예: 금융 정보, 의료 기록

- **무결성 (Integrity)**  
  데이터가 위·변조되지 않았음을 보장  
  👉 디지털 서명, 해시 함수

- **인증 (Authentication)**  
  데이터의 출처 또는 사용자의 신원을 확인  
  👉 ID/PW, 생체인식

- **부인 방지 (Non-repudiation)**  
  데이터 송신자가 송신 사실을 부인하지 못하도록 함  
  👉 전자 서명

---

## 2. 🔐 암호화 기술의 원리

암호화는 **평문(Plaintext)**을 알아볼 수 없는 **암호문(Ciphertext)**으로 바꾸는 과정이며, **암호화 키(Key)**를 기반으로 수행됩니다.

### ✅ 주요 용어

- **평문 (Plaintext)**: 암호화되지 않은 원본 데이터
- **암호문 (Ciphertext)**: 암호화된 읽을 수 없는 데이터
- **암호화 (Encryption)**: 평문 ➡ 암호문
- **복호화 (Decryption)**: 암호문 ➡ 평문
- **키 (Key)**: 암호화 및 복호화에 사용하는 비밀 정보

---

## 3. 🔑 암호화 알고리즘의 종류

### 가. 🧮 해싱 (Hashing)

해싱은 단방향 암호화로, 복호화가 불가능하며 고정된 길이의 해시 값을 생성합니다.

#### ✅ 특징
- **단방향성**: 해시값 → 평문 불가능
- **결정성**: 동일 입력 → 동일 출력
- **충돌 저항성**: 서로 다른 입력 → 동일 해시값 발생 확률 낮음
- **눈사태 효과**: 입력값이 조금만 바뀌어도 해시값이 크게 변경

#### 🛠 주요 용도
- 비밀번호 저장 (솔트 포함)
- 데이터 무결성 검증
- 블록체인 구조

#### 🔎 대표 알고리즘
- `MD5`: 더 이상 안전하지 않음
- `SHA-256`: 가장 널리 사용
- `SHA-3`: SHA-2 대안

---

### 나. 🔐 대칭키 암호화 (Symmetric-key Cryptography)

암호화와 복호화에 **동일한 키**를 사용합니다.

#### ✅ 특징
- **속도 빠름**: 대용량 데이터 암호화에 적합
- **구현 간단**

#### ❗️ 단점
- **키 배송 문제**: 안전하게 공유 필요
- **N명 통신 시 키 수 증가**: N×(N−1)/2

#### 🔎 대표 알고리즘
- `DES`: 오래되어 보안 취약
- `3DES`: 보완 버전이나 느림
- `AES`: 현재 표준 (AES-128, AES-192, AES-256)
- `SEED`: 한국에서 개발, 전자정부에서 사용

---

### 다. 🗝 비대칭키 암호화 (Asymmetric-key Cryptography)

**공개키(Public Key)**와 **개인키(Private Key)**로 이루어진 한 쌍의 키를 사용합니다.

#### ✅ 원리
1. 개인키와 공개키 한 쌍 생성
2. 공개키는 자유롭게 배포
3. **공개키로 암호화** → **개인키로 복호화**
4. **개인키로 서명** → **공개키로 검증**

#### 🟢 장점
- 키 배송 문제 해결
- 전자서명, 인증, 무결성 검증 가능

#### 🔴 단점
- 처리 속도 느림
- 대용량 데이터 암호화 비효율적

#### 🔎 대표 알고리즘
- `RSA`: 가장 대표적인 공개키 암호
- `ECC`: 짧은 키로도 높은 보안성, 모바일 환경에 적합

---

## 4. ♻️ 하이브리드 암호화 방식

**대칭키**의 속도 + **비대칭키**의 안전한 키 교환을 결합한 방식입니다.

### ✅ 작동 흐름

1. **대칭키(세션 키)** 생성
2. 세션 키를 **공개키로 암호화**
3. 데이터는 **세션 키로 암호화**
4. 암호화된 세션 키 + 암호화된 데이터 전송
5. 수신자는 **개인키로 세션 키 복호화** → **세션 키로 데이터 복호화**

### 💡 대표 예시
- **SSL/TLS (HTTPS)**: 웹 통신에서 사용되는 하이브리드 방식

---

## ✅ 정리: 암호화 방식 비교

| 방식        | 키 사용 방식     | 속도    | 복호화 가능 | 주요 사용처                  |
|-------------|------------------|---------|---------------|------------------------------|
| 해싱        | 없음 (단방향)     | 매우 빠름 | ❌             | 비밀번호 저장, 무결성 검증  |
| 대칭키 암호화 | 동일한 키 사용     | 빠름    | ✅             | 데이터 암호화 (대용량)       |
| 비대칭키 암호화 | 공개키 ↔ 개인키 사용 | 느림    | ✅             | 키 교환, 전자 서명, 인증     |
| 하이브리드 방식 | 대칭 + 비대칭 결합  | 중간    | ✅             | 웹 보안 통신 (HTTPS 등)     |

---

## 📎 참고

- 암호화 강도는 키의 **길이와 보안 관리**에 따라 결정됩니다.
- 모든 암호화는 100% 완벽하지 않으며, **적절한 알고리즘 + 보안 정책**이 병행되어야 안전합니다.
