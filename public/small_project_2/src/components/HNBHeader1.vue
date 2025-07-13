<template>
    <header>
        <RouterLink class="logo-wrapper" to="/">
            <img class="logo" src="../assets/image/mac_logo.jpg" alt="키오스크 로고">
        </RouterLink>
        <form class="search-form" action="">
            <svg class="search-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
            <input class="search-bar" type="text" placeholder="품목이름 입력">
        </form>
    </header>
</template>
  
<script setup>
  
</script>
  
  
  
  
  
<style scoped>
    header{
        display: flex;
        column-gap: 15px;
        padding: 20px 30px;
        align-items: center;
    }

    .logo-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo{
        height: 40px;
    }

    .search-form{
        flex-grow: 1;
        display: flex;
        align-items: center;
        background-color: rgb(102, 102, 102);
        border-radius: 15px;
        padding-left: 15px;
    }

    .search-icon{
        color: rgb(160, 160, 160);
    }
    .search-bar{
        width: 100%;
        padding: 5px 20px 5px 5px;
        border: none;
        outline: none;
        border-radius: 15px;
        color: white;
        background: none;
    }

    ::placeholder{
        color: rgb(160, 160, 160);
    }

</style>