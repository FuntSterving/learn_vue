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
<!-- <template>
  <Card style="width: 25em;  " class="card">
    <template #header style="margin-top: 10px;">
      <img :src="auto.image" alt="" class="car-image">
    </template>
    <template #title> {{ auto.brand }} </template>
    <template #content>
      <p>Цена: {{ auto.price }}</p>
      <p>Год выпуска: {{ auto.year }}</p>
      <p>Объем двигателя: {{ auto.volume }}</p>
      <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
    </template>
    <template #footer> -->

      <!-- <Chip v-if="Number(carRemake.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip v-else-if="Number(carRemake.year) <= 1960" label="Старый" icon="pi pi-history" />
      <Chip v-else label="Скучный" icon="pi-briefcase" />
      <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi pi-eye-slash" /> -->

    <!-- </template>
  </Card>
</template> -->




<template>
  <Card style="width: 25em;" class="card">
    <template #header>
      <!-- Перенесите изображение внутрь шапки карточки -->
      <div class="car-image">
        <img :src="auto.image" alt="" class="car-image-inner">
      </div>
    </template>

    <template #title>
      <div class="car-title">{{ auto.brand }}</div>
    </template>


    <template #content>
      <!-- Текст будет располагаться ниже изображения внутри контейнера -->
      <div class="car-details">
        <p>Цена: {{ auto.price }}</p>
        <p>Год выпуска: {{ auto.year }}</p>
        <p>Объем двигателя: {{ auto.volume }}</p>
        <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
      </div>
    </template>
    <template #footer>
      <!-- Добавьте чипы здесь, если необходимо -->
    </template>
  </Card>
</template>

<style scoped>
.card {
  border-radius: 3px;
  border: 1px solid #dee2e6;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  width: 30%;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}

.car-image {
  width: 100%;
  text-align: center;
  /* Центрируйте изображение по горизонтали */
}

.car-image-inner {
  width: 250px;
  height: 150px;
  display: inline-block;
  vertical-align: middle;
}

.car-title {
  text-align: center;
}
.car-details {
  padding-top: 10px;
  text-align: center;

}



</style>
