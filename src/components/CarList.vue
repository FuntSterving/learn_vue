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
    margin-bottom: 20px;
}
</style>