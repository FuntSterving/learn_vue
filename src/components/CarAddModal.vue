<template>
    <Button icon="pi pi-plus" @click="toggleVisible" />
    <Dialog v-model:visible="visible" modal header="Выставить автомобиль" :style="` width: '70%' `">

        <template #default>
            <div class="p-fluid">
                <div class="p-field cont">
                    <label for="brand">Бренд</label>
                    <Dropdown id="brand" v-model="newAuto.brand" editable :options="brandLabel" option-label="brand"
                        option-value="brand" placeholder="Выбор бренда" />
                </div>
                <div class="p-field cont">
                    <label for="price">Цена</label>
                    <InputNumber id="price" v-model="newAuto.price" mode="currency" currency="KZT" locale="ru-ru" />
                </div>
                <div class="p-field cont">
                    <label for="year">Год</label>
                    <Calendar id="year" v-model="newAuto.year" view="year" dateFormat="yy" />
                </div>
                <div class="p-field cont">
                    <label for="volume">Объем</label>
                    <!-- InputNumber -->
                    <InputNumber id="volume" v-model="newAuto.volume" />
                </div>
                <div class="p-field cont">
                    <label for="color">Цвет</label>
                    <!-- ColorPicker -->
                    <ColorPicker :readonly="true" v-model="newAuto.color" />
                </div>

                <div class="p-field cont">
                    <label for="saled">Наличие</label>
                    <!-- RadioButton -->
                    <div class="radio-button-group">
                        <RadioButton id="saled" :readonly="true" v-model="newAuto.saled" inputId="ingredient1" name="saled"
                            value="Продано" />
                        <label for="ingredient1" :readonly="true" class="ml-2">Продано</label>

                        <RadioButton id="saled" v-model="newAuto.saled" inputId="ingredient2" name="saled" value="В наличии"
                            style="margin-left: 15px;" />
                        <label for="ingredient2" class="ml-2">В наличии</label>
                    </div>
                </div>
                <div class="p-field cont">
                    <label for="city">Город</label>
                    <!-- DropDown -->

                    <Dropdown id="city" v-model="newAuto.city" editable :options="carCity" option-label="city"
                        option-value="city" placeholder="Выбор города" />

                </div>
                <div class="p-field cont">
                    <label for="carcase">Кузов</label>
                    <!-- DropDown -->
                    <Dropdown id="carcase" v-model="newAuto.carcase" editable :options="carCarcase" option-label="carcase"
                        option-value="carcase" placeholder="Выбор кузова" />


                </div>
                <div class="p-field cont">
                    <label for="gear">Коробка</label>
                    <!-- RadioButton -->
                    <div class="radio-button-group">
                        <RadioButton id="gear" v-model="newAuto.gear" inputId="ingredient1" name="gear" value="Автомат" />
                        <label for="ingredient1" class="ml-2">Автомат</label>

                        <RadioButton id="gear" v-model="newAuto.gear" inputId="ingredient2" name="gear" value="Механика"
                            style="margin-left: 15px;" />
                        <label for="ingredient2" class="ml-2">Механика</label>
                    </div>
                </div>
                <div class="p-field cont">
                    <!-- Slider -->
                    <label for="travel">Пробег</label>
                    <div class="slider-cont">
                        <Slider id="travel" v-model="newAuto.travel" :min="0" :max="500000" :step="1000" class="w-14rem"
                            style="margin-top: 7px;" />
                    </div>
                </div>
            </div>
        </template>
        <template #footer>
            <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text />
            <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus />
        </template>
    </Dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import { useAuto } from '@/composable/useAuto'

const { newAuto, createAuto, loading, clear } = useAuto()




const visible = ref(false);
const toggleVisible = () => {
    visible.value = !visible.value
}

async function addAuto() {
    await createAuto()
    toggleVisible()
}

function clearAuto() {
    clear()
    toggleVisible()
}

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
<style scoped>
.p-field {
    margin-bottom: 20px;
}

.p-field label {
    margin-bottom: 5px;
}

label {
    display: block;
    font-weight: bold;

}

.p-dropdown {
    width: 100%;

}

.p-inputnumber {
    width: 100%;

}


.p-calendar {
    width: 100%;

}

/* Стили для ColorPicker */
.p-colorpicker {
    width: 100%;
    margin-top: 5px;
    border: 1px solid #d3dbe3;

    color: #043d75;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #d3dbe3;

    border-radius: 6px;

}


.radio-button-group {
    display: flex;
    align-items: center;
    margin-top: 15px;
    border: 1px solid #d3dbe3;

    color: #043d75;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #d3dbe3;

    border-radius: 6px;
}

.radio-button-group label {
    margin-left: 10px;
    /* Отступ между радиокнопками и метками */
}


.p-field label[for="travel"] {
    margin-bottom: 10px;

}

.slider-cont {
    width: 100%;
    height: 45px;
    border: 1px solid #d3dbe3;
    color: #043d75;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #d3dbe3;

    border-radius: 6px;
}
</style>
