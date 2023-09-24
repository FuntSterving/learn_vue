<template>
    <div class="car-details-container">
        <div v-if="!auto">
            <Skeleton width="100vw" height="100vw"></Skeleton>
            <i class="pi pi-spin pi-truck" style="font-size: 2rem;" id="spinner"></i>
        </div>
        <div v-if="auto" class="car-card">
            <img :src="auto.image" alt="Car" class="car-image" />
            <div class="car-info">
                <h2 class="car-brand">{{ auto.brand }}</h2>
                <p class="car-price">{{ auto.price }} тг</p>
                <p class="car-year">Год выпуска: {{ new Date(auto.year.seconds * 1000).getFullYear() }}</p>
                <p class="car-volume">Объем двигателя: {{ auto.volume }} л</p>
                <p class="car-color" :style="'color: #' + auto.color">Цвет: {{ auto.color }}</p>
                <p class="car-city">Город: {{ auto.city }}</p>
                <p class="car-carcase">Кузов: {{ auto.carcase }}</p>
                <p class="car-gear">Коробка передач: {{ auto.gear }}</p>
                <p class="car-travel">Пробег: {{ auto.travel }} км</p>

                <div class="card flex justify-content-center" style="border: none;">
                    <div class="button-rating-container">
                        <Rating v-model="value" />
                        <button class="buy-button" :disabled="auto.saled">Купить</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template> 


 
<script setup>
import { useAuto } from '../composable/useAuto';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Skeleton from 'primevue/skeleton';
import Rating from 'primevue/rating';
const { auto, getAuto, loading } = useAuto();
const route = useRoute();



onMounted(async () => {
    await getAuto(route.params.id);

});

const value = ref(null);

</script> 
 
<style scoped> .car-details-container {
     background-color: #eff3f8;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 80vh;
     border-radius: 3px;
 
 }

 .car-card {
     display: flex;
     background-color: #fff;
     border-radius: 8px;
     box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
     border: 1px solid #dee2e6;
     width: 1200px;
     height: 500px;
     padding: 20px;
 }

 .car-image {
     width: 500px;
     height: 500px;
     object-fit: contain;
     border-radius: 8px;
     margin-right: 20px;
     transition: 1s;
 }

 .car-image:hover {
     transform: scale(1.1)
 }

 .car-info {
     flex: 1;
     display: flex;
     flex-direction: column;

 }

 .car-brand {
     font-size: 30px;
     font-weight: bold;
     text-align: center;
 }

 .car-price {
     font-size: 18px;
     text-align: center;
 }

 .car-year,
 .car-volume,
 .car-color,
 .car-city,
 .car-carcase,
 .car-gear,
 .car-travel {
     font-size: 16px;
     text-align: center;
 }


 .buy-button {
     background-color: #ffbf00;
     color: #ffffff;
     border: none;
     border-radius: 4px;
     padding: 10px 20px;
     font-size: 16px;
     cursor: pointer;
     transition: background-color 0.3s;
     width: 25%;

 }

 .buy-button:hover {
     background-color: #e9edf3;
     color: #708da9;
     border-radius: 3px;
     border: 1px solid #dee2e6;
     box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
 }

 .buy-button:disabled {
     background-color: #ccc;
     cursor: not-allowed;
 }

 .p-rating {
     position: relative;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     width: 25%;
 }

 .button-rating-container {
    display: flex;
    align-items: center;
    justify-content:  space-around;
    /* margin-top: 20px; */
    width: 100%;
 }
</style>