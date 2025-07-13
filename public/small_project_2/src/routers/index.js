import HNBBeverage from "@/pages/HNBBeverage.vue";
import HNBBurger from "@/pages/HNBBurger.vue";
import HNBDetail from "@/pages/HNBDetail.vue";
import HNBInput from "@/pages/HNBInput.vue";
import HNBMain from "@/pages/HNBMain.vue";
import HNBWholeList from "@/pages/HNBWholeList.vue";
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {path: '/', component: HNBMain},
    {path: '/hnb-wholelist', component: HNBWholeList},
    {path: '/hnb-beverage', component: HNBBeverage},
    {path: '/hnb-burger', component: HNBBurger},
    {path: '/hnb-detail/:id', component: HNBDetail},
    {path: '/hnb-input', component: HNBInput}
];        // routes는 List로 구성. 세개의 경로, 자바스크립트에서 객체는 { }
            // ':id' 는 동적 라우팅이 됨. 어떤 값이 들어가든 해당 path를 출력함.  

const router = createRouter({
    history : createWebHistory(), 
    routes: routes
});               // 두개의 옵션을 정해야 됨. history는 페이지 이동의 내용 / routes는 리스트로 위에 따로 설정함. 
            // createRouter()를 통해 만든 결과를 router에 저장

export default router;          // 다른 곳에서 쓸 수 있도록 엑스포트 해주어야 함. 
