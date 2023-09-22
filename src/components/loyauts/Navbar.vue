<script setup>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import Toast from 'primevue/toast';

import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();


import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ref, onMounted } from "vue";

import { useToast } from "primevue/usetoast";
const toast = useToast();


const actvie = ref(0);

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
    label: 'Add New Car',
    icon: 'pi pi-fw pi-plus',

  },
  {
    label: 'Sales',
    icon: 'pi pi-shopping-cart',
  },
  {
    label: 'Сatalog',
    icon: 'pi pi-book',
  },
  {
    label: 'Contacts',
    icon: 'pi pi-megaphone'
  },
  {
    label: 'Cart',
    icon: 'pi pi-shopping-bag'
  },


]);
</script>
<template>
  <Menubar v-model:activIndex="activ" :model="items" class="menuBar">
    <template #start>
      <img alt="logo" src="https://www.nicepng.com/png/full/920-9203332_car-logo-png-hot-wheels-car-svg.png" height="45"
        class="mr-2" />
    </template>
    
    <template #item="{ label, item, props, root, hasSubmenu }">
      <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
        <a :href="routerProps.href" v-bind="props.action">
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span v-bind="props.icon" />
        <span v-bind="props.label">{{ label }}</span>
        <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]"
          v-bind="props.submenuicon" />
      </a>
    </template>

    <template #end>
      <Toast />
      <button type="button" class="p-link p-ml-auto" @click="googleRegister"
        style="margin: 10px; border: 1px solid #d3dbe3; padding: 5px;" v-if="availabilityTrue()">
        <i class="pi pi-user" style="margin: 10px;"></i>Войти
      </button>

      <button type="button" class="p-link p-ml-auto" @click="logOut"
        style="margin: 10px; border: 1px solid #d3dbe3; padding: 5px;" v-else>
        <i class="pi pi-user" style="margin: 10px;"></i>Выйти
      </button>

      <button type="button" class="p-link p-ml-auto" @click="createAuto" style="margin: 10px;">
        <i class="pi pi-plus"></i>
      </button>
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
}
</style>

