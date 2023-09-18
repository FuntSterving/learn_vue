<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';


defineProps({
  auto: {
    type: Object,
    required: true,
  },
})

function changeColor(color) {
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF'];
  if (crappyColors.includes(color)) {
    return true
  }
  return false
} 
</script>
<template>
  <Card style="width: 30em; " class="card">
    <template #header>
      <img :src="auto.image" alt="" style="width: 250px; height: 150px;">
    </template>
    <template #title> {{ auto.brand }} </template>
    <template #content>
      <p>Цена: {{ auto.price }}</p>
      <p>Год выпуска: {{ auto.year }}</p>
      <p>Объем двигателя: {{ auto.volume }}</p>
      <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
    </template>
    <template #footer>

      <!-- <Chip v-if="Number(carRemake.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip v-else-if="Number(carRemake.year) <= 1960" label="Старый" icon="pi pi-history" />
      <Chip v-else label="Скучный" icon="pi-briefcase" />
      <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi pi-eye-slash" /> -->

    </template>
  </Card>
</template>

<style scoped>
.card {
  margin: 0px 10px;
  border-radius: 3px;
  border: 1px solid #dee2e6;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.car-image {
  width: 250px;
  height: 150px;
}
</style>