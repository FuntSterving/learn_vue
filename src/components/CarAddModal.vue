<template>
    <Button icon="pi pi-plus" @click="toggleVisible" />
    <Dialog v-model:visible="visible" modal header="Выставить автомобиль" :style="` width: '50vw' `">

        <template #default>
            <div class="p-fluid">
                <div class="p-field">
                    <label for="brand">Бренд</label>
                    <Dropdown id="brand" v-model="car.brand" editable :options="brandLabel" option-label="brand"
                        option-value="brand" placeholder="Выбор бренда" />
                </div>
                <div class="p-field">
                    <label for="price">Цена</label>
                    <InputNumber id="price" v-model="car.price" mode="currency" currency="KZT" locale="ru-ru" />
                </div>
                <div class="p-field">
                    <label for="year">Год</label>
                    <Calendar id="year" v-model="car.year" view="year" dateFormat="yy" />
                </div>
                <div class="p-field">
                    <label for="volume">Объем</label>
                    <!-- InputNumber -->
                    <InputNumber id="volume" v-model="car.volume" />
                </div>
                <div class="p-field" style="margin: 5px 0px 5px 0px;">
                    <label for="color">Цвет</label>
                    <!-- ColorPicker -->
                    <ColorPicker v-model="car.color" style="width: 30px; margin: 5px 0px 5px 0px;" />

                </div>
                <div class="p-field">
                    <label for="city">Город</label>
                    <!-- DropDown -->

                    <Dropdown id="city" v-model="car.city" editable :options="carCity" option-label="city"
                        option-value="city" placeholder="Выбор города" />

                </div>
                <div class="p-field">
                    <label for="carcase">Кузов</label>
                    <!-- DropDown -->
                    <Dropdown id="carcase" v-model="car.carcase" editable :options="carCarcase" option-label="carcase"
                        option-value="carcase" placeholder="Выбор города" />


                </div>
                <div class="p-field">
                    <label for="gear">Коробка</label>
                    <!-- RadioButton -->
                    <div style=" margin: 10px;">
                        <RadioButton id="gear" v-model="car.gear" inputId="ingredient1" name="gear" value="Автомат" />
                        <label for="ingredient1" class="ml-2">Автомат</label>

                        <RadioButton id="gear" v-model="car.gear" inputId="ingredient2" name="gear" value="Механика" />
                        <label for="ingredient2" class="ml-2">Механика</label>
                    </div>
                </div>
                <div class="p-field" style="margin-top: 15px;">
                    <!-- Slider -->
                    <label for="travel">Пробег</label>
                    <Slider id="travel" v-model="car.travel" class="w-14rem" />
                   
                </div>
            </div>
        </template>
        <template #footer>
            <Button label="Сбросить" icon="pi pi-times" @click="toggleVisible" text />
            <Button label="Добавить" icon="pi pi-check" @click="toggleVisible" autofocus />
        </template>
    </Dialog>
</template>

<script setup>
import { ref } from "vue";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';

const visible = ref(false);

const toggleVisible = () => {
    visible.value = !visible.value
}


const car = ref({
    brand: '',
    price: '',
    year: '',
    volume: '',
    color: '',
    saled: '',
    city: '',
    carcase: '',
    gear: '',
    travel: '',
})

const brandLabel = [
    { brand: 'BMW' },
    { brand: 'Audi' },
    { brand: 'Mercedes' },
    { brand: 'Volkswagen' },
    { brand: 'Volvo' },
    { brand: 'Toyota' },
    { brand: 'Nissan' },
    { brand: 'Mazda' },
    { brand: 'Honda' },
    { brand: 'Hyundai' },
    { brand: 'Kia' },
    { brand: 'Lexus' },
    { brand: 'Ford' },
    { brand: 'Chevrolet' },
    { brand: 'Skoda' },
    { brand: 'Renault' },
    { brand: 'Peugeot' },
]
const carCity = [
    { city: 'Алматы' },
    { city: 'Астана' },
    { city: 'Шымкент' },
    { city: 'Тараз' },
    { city: 'Актау' },
    { city: 'Атырау' },
    { city: 'Караганда' },
    { city: 'Павлодар' },
    { city: 'Семей' },
    { city: 'Мангистау' },
    { city: 'Уральск' },
]
const carCarcase = [
    { carcase: 'Седан' },
    { carcase: 'Пикап' },
    { carcase: 'Хэтчбек' },
    { carcase: 'Купе' },
    { carcase: 'Кабриолет' },
    { carcase: 'Универсал' },
    { carcase: 'Лимузин' },
    { carcase: 'Лифтбек' },
    { carcase: 'Минивэн' },
    { carcase: 'Кузова вне классификации' },
]
</script>