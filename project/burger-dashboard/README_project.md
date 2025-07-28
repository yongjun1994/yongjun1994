# 📌 프로젝트명: React 기반 패스트푸드 키오스크 (React-based Fastfood Kiosk)

> 본 프로젝트는 **React, TypeScript, TailwindCSS**를 기반으로 제작된 SPA 방식의 CRUD 대시보드입니다.  
> 햄버거 및 음료 품목의 생성, 조회, 수정, 삭제 기능을 통해 컴포넌트 기반 개발, 상태 관리, 라우팅 등 React의 핵심 개념을 실습하며,  
> 키오스크 UI 스타일을 시각적으로 구현하는 데 집중하였습니다.

---

## 📅 프로젝트 기간

- **시작일:** 2025.07.13  
- **종료일:** 2025.07.27

---

## 🎯 프로젝트 목표

- ✅ React 컴포넌트 구조 설계 및 분리 실습
- ✅ 상태 기반 CRUD 기능 구현 (`useState`, `useEffect` 등)
- ✅ React Router를 통한 페이지 라우팅 구성
- ✅ 사용자 친화적인 키오스크 UI 디자인 설계
- ✅ 컴포넌트 재사용성과 유지보수성을 고려한 개발

---

## 🛠️ 사용 기술 스택

| 구분       | 기술 상세                                    |
|------------|-----------------------------------------------|
| Frontend   | React, TypeScript, HTML, CSS                  |
| State Mgmt | useState, useEffect (React Hooks)             |
| Routing    | React Router DOM                              |
| Style      | TailwindCSS, DaisyUI, Flexbox                 |
| Dev Tools  | VSCode, GitHub, CRA (Create React App)        |

---

## 📁 프로젝트 폴더 구조

```bash
📁 burger-inventory-dashboard/
├── public/                    # index.html, 정적 리소스
├── src/
│   ├── assets/                # 이미지 리소스 (메뉴 이미지, 로고 등)
│   ├── components/            # 공통 컴포넌트 (ex. Header, ItemCard 등)
│   ├── pages/                 # MainPage, ListPage, DetailPage, CreatePage
│   ├── routes/                # AppRouter.tsx
│   ├── data/                  # 초기 메뉴 데이터 (items.json 등)
│   ├── types/                 # 타입 정의 (Item.ts 등)
│   ├── App.tsx               # 전체 라우팅 포함 메인 컴포넌트
│   └── main.tsx              # React DOM 렌더링 진입점
├── tailwind.config.js         # Tailwind 설정
├── postcss.config.js          # PostCSS 설정
├── package.json
└── README_project.md
```

## ✨ 주요 기능 설명

### 🏠 1. 메인 대시보드 (`MainPage.jsx`)
- 전체 메뉴, 햄버거, 음료 메뉴로 진입 가능한 메인 페이지
- 각 카테고리 섹션으로 이동하는 버튼 + 이미지 구성
- 하단 고정 Floating 버튼을 통해 품목 생성 가능

---

### 📋 2. 전체 목록 페이지 (`ListPage.jsx`)
- 등록된 모든 품목을 카드 형태로 출력
- useEffect로 localStorage에서 데이터 로딩
- 검색 기능 (품목명 기준)
- 카테고리별 필터 버튼 (햄버거, 음료)

---

### 🔍 3. 품목 상세보기 페이지 (`DetailPage.jsx`)
- 선택한 품목의 이미지, 설명, 가격, 영양 정보 상세 표시
- 수정 / 삭제 버튼 제공 (삭제 시 확인 후 홈으로 이동)

---

### ✏️ 4. 품목 생성 / 수정 페이지 (`CreatePage.jsx`)
- 입력 폼으로 품목 등록 가능 (이름, 가격, 카테고리, 설명 등)
- 수정 모드 진입 시 기존 항목이 자동 채워짐
- 로컬스토리지 기반 데이터 저장 및 수정 구현

---

## 🖼️ 데모 화면 캡처

| 주요 기능     | 화면 예시                        |
|--------------|-------------------------------|
| 메인 대시보드 | ![main](./image/main.png)     |
| 전체 목록     | ![list](./image/list.png)     |
| 상세 보기     | ![detail](./image/detail.png) |
| 품목 생성     | ![create](./image/create.png) |


---

## 📝 회고 요약

### 🔧 어려웠던 점
- `localStorage` 초기값이 `ListPage`에서 제대로 출력되지 않아 초기 세팅 시점을 수정해야 했음  
- React 구조와 실제 동작 흐름 간 차이로 인해 `App.tsx`의 역할을 명확히 이해하는 데 시간이 걸렸음  

### 📚 배운 점
- `useEffect`의 동작 시점과 `localStorage` 초기화 흐름에 대한 이해  
- React Router를 통해 SPA 형태로 페이지 전환 및 동적 URL 활용 구현  

### 🛠 개선하고 싶은 점
- 전역 상태 관리 도입(Redux, Zustand 등) 및 API 연동 구조로 확장하고 싶음  
- UI 디자인 통일성과 시맨틱 마크업 개선  
- Tailwind, TypeScript, React-Router로 구성된 구조를 Vue 기반으로 재설계하여 동일 프로젝트를 다시 구현해보고 싶음

---

## 👨‍💻 개발자

| 이름   | GitHub                                                  |
|--------|----------------------------------------------------------|
| 이용준 | [https://github.com/yongjun1994](https://github.com/yongjun1994) |
