<script setup>
import CarItem from '@/components/CarItem.vue';
import { onMounted } from 'vue';
import { useAuto } from '../composable/useAuto';
import { useRouter } from 'vue-router';

const router = useRouter();

const { autoListRemake, getAutoList } = useAuto();

onMounted(async () => {
    await getAutoList()
});


function goToCarUrl(id) {
    router.push(`/car/${id}`)
};

</script>

<template>
    <section class="flexTemplate">
        <section class="cars" v-for="auto in autoListRemake" :key="auto">
            <CarItem :auto="auto" @click="goToCarUrl(auto.id)" />
        </section>
    </section>
</template>

<style scoped>
.flexTemplate {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}

:deep(.p-card) {
    transform: perspective(1000px) !important;
    position: relative !important;
  }
  
  :deep(.p-card):hover {
    animation: transform 1s ease-in-out !important;
    cursor: pointer;
    transform: scale(1.1) !important;
  }
  
  @keyframes transform {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
</style>


  
 