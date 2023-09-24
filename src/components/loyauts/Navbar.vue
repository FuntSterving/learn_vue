<script setup>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
// import Toast from 'primevue/toast';

import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();


import { ref, computed, } from "vue";
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import { useAuto } from '@/composable/useAuto';
import FileUpload from 'primevue/fileupload';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useToast } from "primevue/usetoast";


const toast = useToast();

const { newAuto, createAuto, loading, clear, uploadImage } = useAuto()


const visible = ref(false);
const toggleVisible = () => {
  visible.value = !visible.value
}

async function addAuto() {
  await createAuto()
  toggleVisible()
}

async function onUpload(e) {
  const image = e.target.files[0]
  await uploadImage(image)
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





const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
      console.log(localStorage.getItem("user"))
      toast.add({ severity: 'success', summary: 'Logged in', detail: '', life: 4000 });
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      toast.add({ severity: 'warn', summary: 'ERROR', detail: error.message, life: 3000 });
      console.log(errorCode, errorMessage)
    })
};
const availabilityTrue = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user === null;
};

const logOut = () => {
  localStorage.removeItem('user');
  toast.add({ severity: 'info', summary: 'Logged out', detail: '', life: 3000 });
};



const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    route: '/home',
  },

  {
    label: 'Sales',
    icon: 'pi pi-shopping-cart',
    route: '/table',
  },
  {
    label: 'Сatalog',
    icon: 'pi pi-book',
    route: '/cards',
  },
  {
    label: 'Contacts',
    icon: 'pi pi-megaphone',
    route: '/contacts',
  },
  {
    label: 'Cart',
    icon: 'pi pi-shopping-bag',
    route: '/cart',
  },


]);
</script>
<template>
  <Menubar v-model:activIndex="activ" :model="items" class="menuBar">
    <template #start>
      <img alt="logo" src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png" height="45"
        class="mr-2" />
    </template>

    <template #item="{ label, item, props }">
      <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)">
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ label }}</span>
        </a>
      </router-link>
    </template>

    <template #end>
      <Toast />
      <button type="button" class="p-link p-ml-auto select" @click="googleRegister"
        style="margin: 10px; border: 1px solid #d3dbe3; padding: 5px;" v-if="availabilityTrue()">
        <i class="pi pi-user" style="margin: 10px;"></i> &nbsp; Войти
      </button>

      <button type="button" class="p-link p-ml-auto select" @click="logOut"
        style="margin: 10px; border: 1px solid #d3dbe3;  padding: 5px;" v-else>
        <i class="pi pi-user" style="margin: 10px;"></i> &nbsp; Выйти
      </button>

      <button type="button" class="p-link p-ml-auto select" @click="visible = true"
        style="margin: 10px; border: 1px solid #d3dbe3; padding: 12px; ">
        <i class="pi pi-plus"></i> &nbsp; Добавить
      </button>

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
              <ColorPicker v-model="newAuto.color" />
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


            <div class="p-field">
              <label for="photo">Картинка</label>
              <FileUpload mode="basic" id="photo" accept="image/*" @input="onUpload($event)" />
            </div>

          </div>
        </template>
        <template #footer>
          <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text />
          <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus />
        </template>
      </Dialog>
      <!-- <button @click="visible2 = true"  style="margin: 10px;" icon="pi pi-plus" label="Добавить автомобиль" ></button> <i class="pi pi-plus"></i> -->

      <span class="p-input-icon-left" style="margin-left: 35px;">
        <i class="pi pi-search" />
        <InputText v-model="value3" type="text" size="large" placeholder="Search" />
      </span>
    </template>

  </Menubar>
</template>

<style scoped >
.menuBar {
  border: 1px solid #dee2e6;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fdbb2d;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
  color: #fff;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-icon {
  color: #fff;
  margin-right: 0.5rem;
}

.select {
  color: #fff;
}

.select:hover {
  background: #fff;
  color: #043d75;
  transition-delay: 100ms;
}

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

