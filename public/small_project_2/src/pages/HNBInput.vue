<template>
    <HNBHeader/>
    <main>
        <form class="container" action="">

            <div class="category">
                <label for="item-category">카테고리</label>
                <select id="item-category" class="item-input">
                    <option value="햄버거">햄버거</option>
                    <option value="음료">음료</option>
                </select>
            </div>
            <div class="main-container">
                <label for="item-name">품목명</label>
                <input class="item-input" type="text" id="item-name" placeholder="품목명을 입력하세요">
                <label for="item-e-name">영문 품목명</label>
                <input class="item-input" type="text" id="item-e-name" placeholder="영문 품목명을 입력하세요">
                <label for="item-price">가격</label>
                <input class="item-input" type="text" id="item-price" placeholder="가격을 입력하세요">
                <label>수량</label>
                <input type="text" placeholder="품목 수량을 입력하세요" class="item-input">       
            </div>
            <br><br>
            <h3>영양정보</h3><br>
            <div class="nutrition-container">
                <label for="gram">중량(g)</label>
                <input placeholder="중량을 입력하세요" id="gram" class="item-input" type="text">
                <label for="gram">중량(ml)</label>
                <input placeholder="중량을 입력하세요" id="millilitre" class="item-input" type="text">
                <label for="kcal">열량(kcal)</label>
                <input placeholder="열량을 입력하세요" id="kcal" class="item-input" type="text">
                <label for="sugar">당(g)</label>
                <input placeholder="당 함량을 입력하세요" id="sugar" class="item-input" type="text">
                <label for="protein">단백질(g)</label>
                <input placeholder="단백질 함량을 입력하세요" id="protein" class="item-input" type="text">
                <label for="fat">포화지방(g)</label>
                <input placeholder="지방 함량을 입력하세요" id="fat" class="item-input" type="text">
                <label for="natrium">나트륨(mg)</label>
                <input placeholder="나트륨 함량을 입력하세요" id="natrium" class="item-input" type="text">
                <label for="caffeine">카페인(mg)</label>
                <input placeholder="카페인 함량을 입력하세요" id="caffeine" class="item-input" type="text">
            </div>
            <div class="item-container">
                <div class="item-image">
                  <label for="">이미지<span class="sub-txt">(미구현)</span></label>
                  <img height="100px" src="../assets/image/Big Mac.jpg">
                </div>
                <div class="item-input-text">
                  <label for="item-explanation">품목 설명</label>
                  <textarea id="item-explanation" class="item-input" rows="5" placeholder="품목 설명을 입력하세요">
                  </textarea>
                </div>
            </div>
            <button class="submit-btn">품목 저장하기</button>
        </form>
    </main>
    <HNBFooter/>
</template>


<script setup>
import HNBFooter from '@/components/HNBFooter.vue';
import HNBHeader from '@/components/HNBHeader.vue';
</script>


<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        padding: 30px;
        row-gap: 10px;
    }

    .category, .main-container, .nutrition-container{
        display: grid;
        grid-template-columns: 100px 1fr 100px 1fr;
        column-gap: 30px; row-gap: 10px;
    }

    @media (max-width: 720px) {
    .category, .main-container, .nutrition-container {
        grid-template-columns: 1fr 2fr;
        }
    }



    .item-input{
        background-color: rgb(36, 36, 36);
        border: 1px solid rgb(73, 73, 73);
        border-radius: 5px;
        padding: 5px;
        outline: none;
        color: white;
    }

    label{
        display: flex; /* 글 모두 정렬 */
        align-items: center;
    }

    .sub-txt{
        font-size: 12px;
    }

    .item-container{
        display: flex;
        flex-direction: row;
        justify-content: left;
        column-gap: 10px;
        align-items: stretch;
    }

    .item-image{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 15px;
    }

    .item-input-text{
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        flex-grow: 1;
    }

    .submit-btn{
        padding: 10px;
        border: none;
        background-color: red;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
</style>