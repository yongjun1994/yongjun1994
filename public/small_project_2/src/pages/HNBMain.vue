<template>
    
    <header>
        <img class="logo" src="../assets/image/mac_logo.jpg" alt="logo">
        <h2>Welcome to Korea Burger</h2>
    </header>
    <main>
        <div class="container">
            <div class="item-list-container">
                <RouterLink class="item-list-wrapper" to="/hnb-wholelist">
                    <img id="item-list" class="items-image" src="../assets/image/items.jpg" alt="전체 목록"> 
                </RouterLink>
                <span class="label">Whole Items List</span>
            </div>
            <div class="item-category-container">
                <div>
                    <RouterLink class="item-burger-wrapper" to="/hnb-burger">
                        <img id="burger-list" class="burger" src="../assets/image/Burger.jpg" alt="햄버거 목록">
                    </RouterLink>
                    <span class="label">Burger List</span>
                </div>
                <div>
                    <RouterLink class="item-beverage-wrapper" to="/hnb-beverage">
                        <img id="beverage-list" class="beverage"  src="../assets/image/beverage.jpg" alt="음료 목록">
                    </RouterLink>
                    <span class="label">Beverage List</span>
                </div>
            </div>
            <br>
            <button @click="createList" class="create-btn">Create List</button>

        </div>
    </main>
    <HNBFooter/>
</template>



<script setup>
    import HNBFooter from '@/components/HNBFooter.vue';
    import { useRouter } from 'vue-router';

    const router=useRouter();

    const createList = () => {
        router.push('/hnb-input');           // 페이지 이동
    };


</script>



<style scoped>
    header{
        display: flex;
        justify-content: center;
        column-gap: 15px;
        padding: 20px 30px;
        align-items: flex-start; 
        max-width: 620px;
    }

    .logo-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo{
        height: 30px;       /* logo의 세로 크기를 지정함. */
    }

    ::placeholder{
        color: rgb(160, 160, 160);
    }

    .container{
        display: flex;
        flex-direction: column;
        row-gap: 15px; 
        padding: 30px;
    }

    .item-list-container{
        display: flex;
        flex-direction: column;
        max-width: 620px;
    }

    .items-image, .burger, .beverage{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .item-category-container{
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        row-gap: 15px;
    }

    .item-category-container > div{
        max-width: 300px;
    }

    .create-btn{          /* 리스트 생성 버튼  */
        padding: 5px;
        cursor: pointer;
        background-color: red;
        color: white;
        border: none;
        border-radius: 3px;
        max-width: 620px;
    }
</style>