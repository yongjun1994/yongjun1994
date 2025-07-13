<template>
    <HNBHeader1/>
    <main>
        <div class="container">
            <h2 class="title">Beverage list</h2>
            <div class="card">
                <div class="item-picture">
                    <img class="item-image" src="../assets/image/Cafe Latte.jpg" alt="카페라떼">
                </div>
                <div class="items">
                    <div class="menu-info">
                        <h3 class="menu-name">카페라떼</h3>
                        <p class="menu-subname">Cafe Latte</p>
                        <div class="menu-brief">
                            <p class="menu-price">가격</p> <p id="itemPrice">3,300</p>
                            <p class="menu-quantity">수량</p> <p id="itemQuantity">70</p>
                        </div>
                    </div>
                    <RouterLink class="detail-icon" to="/hnb-detail/3">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                        </svg>
                    </RouterLink>
                </div>
            </div>
            <div class="card">
                <div class="item-picture">
                    <img class="item-image" src="../assets/image/Iced Cafe Latte.jpg" alt="아이스카페라떼">
                </div>
                <div class="items">
                    <div class="menu-info">
                        <h3 class="menu-name">아이스 카페라떼</h3>
                        <p class="menu-subname">Iced Cafe Latte</p>
                        <div class="menu-brief">
                            <p class="menu-price">가격</p> <p id="itemPrice">3,500</p>
                            <p class="menu-quantity">수량</p> <p id="itemQuantity">20</p>
                        </div>
                    </div>
                    <RouterLink class="detail-icon" to="/hnb-detail/1">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                        </svg>
                    </RouterLink>
                </div>
            </div>
        </div>
    
        <!-- 플로팅 버튼: 각 메뉴 섹션으로 전환 -->
        <div class="btn-container">
            <button @click="wholeBtn" class="floating-btn">Whole List</button>
            <button @click="burgerBtn" class="floating-btn">Hamburger</button>
        </div>
    </main>
    <HNBFooter/>
</template>



<script setup>
import HNBFooter from '@/components/HNBFooter.vue';
import HNBHeader1 from '@/components/HNBHeader1.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const burgerBtn = () => {
    router.push('/hnb-burger');           // 페이지 이동
};
const wholeBtn = () => {
    router.push('/hnb-wholelist');           // 페이지 이동
};


</script>


<style scoped>

    .title{
        padding: 0 15px;
    }

    .card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        background-color: rgb(65,65,65);
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        column-gap: 15px;
    }

    .itemn-picture{
        height: 20px;
        width: 20px;
        border-radius: 10px;
        overflow: hidden;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .item-image{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .items{
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        column-gap: 15px;
    }

    .menu-info{
        flex-grow: 1;    /* 이 속성은 플렉스 아이템이 플렉스 컨테이너 내에서 사용 가능한 추가 공간을 얼마나 차지할지를 결정
                          1은 해당 아이템이 다른 플렉스 아이템과 동일한 비율로 사용 가능한 공간을 채우도록 설정 */
        min-width: 0;
    }

    .menu-name, .menu-subname{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .menu-brief{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .menu-brief > *:nth-child(2n) { /* 짝수번째 아이템 (두 번째 열) 선택 */
        justify-self: end;
    }

    .detail-icon svg path{        /* svg path의 색상을 흰색으로 변경   */
        stroke: white;
    }

    .btn-container{
        position: fixed;
        right: 15px;
        bottom: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }

    .floating-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        background-color: yellowgreen;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
</style>