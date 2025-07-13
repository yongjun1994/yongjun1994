<template>
  <header>
    <RouterLink class="logo-wrapper" to="/">
      <img class="logo" src="../assets/image/mac_logo.jpg" alt="logo">
    </RouterLink>
    <h2>품목 정보 입력</h2>
    <div class="list-btn" action="">
      <button @click="listIcon" class="list-items">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';



const router=useRouter();

const listIcon = () => {
    router.push('/hnb-wholelist');           // 페이지 이동
};


</script>





<style scoped>
  header{
    display: flex;
    column-gap: 15px;
    padding: 20px 30px;
    align-items: flex-start;  /* 자식요소들을 교차축의 시작부분에 정렬 왼쪽으로 모두 정렬*/
                              /* 만일 이부분이 없으면 btn-container의 내용은 상하로 길어짐 */
    justify-content: space-between;  /* 첫번째 자식요소는 시작부분에 마지막 자식요소는 끝부분 */
  }

  .logo{
    height: 30px;       /* logo의 세로 크기를 지정함. */
  }

  .list-btn{
    display: flex;
    column-gap: 10px;
  }

  .list-items{ 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(63, 63, 63);
    color: rgb(199, 199, 199);
    border: none;
    padding: 5px;
    border-radius: 100%;
    cursor: pointer;
  }

  ::placeholder{
    color: rgb(160, 160, 160);
  }

</style>