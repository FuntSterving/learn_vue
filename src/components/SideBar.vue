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

            <div class="card flex justify-content-center">
                <form @submit="onSubmit" class="flex flex-column gap-2">
                    <span class="p-float-label">
                        <Textarea id="value" v-model="value" :class="{ 'p-invalid': errorMessage }" rows="4" cols="30"
                            aria-describedby="text-error" />
                        <label for="value">Description</label>
                    </span>
                    <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
                    <Button type="submit" label="Submit" class="btnSbm" />
                </form>
                <Toast />
            </div>

        </Sidebar>
        <Button icon="pi pi-arrow-left" @click="visible = true" class="btn" />

    </div>
</template>

<script setup>
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import { ref } from "vue";

const visible = ref(false);

import Button from 'primevue/button';


const value1 = ref(null);

import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Description is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
</script>

<style scoped>
.btn {
    margin: 10px 0px 10px 0px;
    position: sticky;
    top: 120px;
    /* Указываем, на какой высоте кнопка должна оставаться зафиксированной */
    width: 100%;
    text-align: center;
    padding: 10px 0;
    background: #eff3f8;
    color: #043d75;
    border: 1px solid #dee2e6;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

}

.btn:hover {
    background-color: #b4c0cb;
    color: #fff; 
    transition: background-color 0.3s, color 0.3s; 
    cursor: pointer;
    border: 1px solid #e2e8ee;
}

.sidebar-menu {
    list-style: none;
    padding: 0;
}

.sidebar-menu h2 {
    font-size: 18px;
    margin-bottom: 10px;

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

.btnSbm {
    margin: 5px;
}
</style>










