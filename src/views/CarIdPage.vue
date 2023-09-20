<template>
    {{ auto }}
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useAuto } from '../composable/useAuto';
import { onMounted } from 'vue';





const router = useRouter();
const { auto, getAuto, loading } = useAuto()

onMounted(async () => {
    await getAuto(useRoute().params.id)
});
</script>

<style scoped></style>