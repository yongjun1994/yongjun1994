# 📌 프로젝트명: 햄버거 재고 관리 대시보드 (Burger Inventory Manager)

> 본 프로젝트는 **React, JavaScript, CSS, HTML**을 활용한 CRUD 기반 미니 프로젝트입니다.  
> 사용자 친화적인 UI를 통해 햄버거 품목 등록, 조회, 수정, 삭제 기능을 구현하였으며, 기본적인 상태 관리 및 컴포넌트 구조화를 경험하였습니다.

---

## 📅 프로젝트 기간

- **시작일:** 2025.07.13  
- **종료일:** 2025.07.20 

---

## 🎯 프로젝트 목표

- ✅ 반응형 웹 레이아웃 설계 및 스타일링 적용
- ✅ 햄버거 품목 등록(Create), 조회(Read), 수정(Update), 삭제(Delete) 기능 구현
- ✅ 로컬 스토리지를 활용한 임시 데이터 저장 처리
- ✅ 컴포넌트 분리를 통한 코드 구조화 및 재사용성 향상

---

## 🛠️ 사용 기술 스택

| 구분       | 기술 상세                         |
|------------|----------------------------------|
| Frontend   | React, JavaScript, HTML, CSS     |
| State Mgmt | useState, useEffect (React Hooks)|
| DevTools   | VSCode, Git, GitHub, Vite 등     |

---

## 📁 프로젝트 폴더 구조

```bash
📁 small_project_2/
├── public/             # index.html 및 정적 리소스
├── src/
│   ├── components/     # Header, ItemForm, ItemList 등
│   ├── pages/          # MainPage, ListPage 등
│   ├── styles/         # CSS 또는 module.css
│   ├── App.jsx         # 전체 라우팅 및 컴포넌트 연결
│   └── index.js        # 진입 파일
├── README.md
└── package.json
```
## ✨ 주요 기능 설명

### ✅ 기능 1: 품목 등록 (Create)

- 사용자가 품목명, 수량 등을 입력하여 재고 추가
- 입력값 유효성 검사 및 경고 처리 포함

### 📋 기능 2: 전체 조회 (Read)

- 등록된 품목을 테이블 형태로 출력
- `useEffect`로 초기 로컬 데이터 불러오기 구현

### ✏️ 기능 3: 품목 수정 (Update)

- 목록에서 수정 버튼 클릭 시 기존 값이 form에 자동 입력됨
- 수정 후 저장하면 원래 항목이 업데이트됨

### ❌ 기능 4: 품목 삭제 (Delete)

- 항목별 삭제 버튼으로 리스트에서 제거 가능
- 삭제 전 사용자 확인(alert 또는 confirm)

---

## 🖼️ 데모 화면 캡처

| 주요 기능 | 화면 예시                          |
|-----------|-----------------------------------|
| 홈 화면    | ![home](./assets/home.png)         |
| 등록 폼    | ![create](./assets/create.png)     |
| 목록 조회  | ![read](./assets/list.png)         |
| 수정/삭제  | ![edit](./assets/edit.gif)         |

---

## 🙋‍♀️ 개발자

| 이름  | GitHub                                           |
| --- | ------------------------------------------------ |
| 이용준 | [github.com/yongjun1994](https://github.com/yongjun1994) |
