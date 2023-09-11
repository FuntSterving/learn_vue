<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <div class="card flex flex-wrap justify-content-center gap-3">
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="value1" placeholder="Search" />
                </span>
            </div>
            <h2>Категории автомобилей</h2>
            <ul class="sidebar-menu">
                <li><a href="#">Легковые автомобили</a></li>
                <li><a href="#">Грузовики и коммерческие автомобили</a></li>
                <li><a href="#">Спортивные автомобили</a></li>
                <li><a href="#">Электрические автомобили</a></li>
                <li><a href="#">Классические автомобили</a></li>
                <li><a href="#">SUV и внедорожники</a></li>
            </ul>
        </Sidebar>
        <Button icon="pi pi-arrow-right" rounded outlined @click="visible = true" class="btn" />

    </div>
</template>




<script setup>
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import { ref } from "vue";

const visible = ref(false);

import Button from 'primevue/button';


const value1 = ref(null);
const value2 = ref(null);
</script>

<style scoped>
.btn {
    margin: 5px 0px 0px 5px;
}

.sidebar-menu {
    list-style: none;
    padding: 0;
}

.sidebar-menu h2 {
    font-size: 18px;
    /* Размер заголовка */
    margin-bottom: 10px;
    /* Отступ между заголовком и списком */
}

.sidebar-menu li {
    margin-bottom: 10px;
}

.sidebar-menu a {
    text-decoration: none;
    color: #708da9;
    font-weight: bold;
}

.sidebar-menu a:hover {
    text-decoration: underline;
}
</style>