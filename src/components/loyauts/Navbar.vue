<script setup>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import Toast from 'primevue/toast';


import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ref } from "vue";

import { useToast } from "primevue/usetoast";
const toast = useToast();

const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
      toast.add({ severity: 'success', summary: 'Logged in', detail: '', life: 4000 });
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      toast.add({ severity: 'warn', summary: 'ERROR', detail: error.message, life: 3000 });
      console.log(errorCode, errorMessage)
    })
};

const items = ref([

  {
    label: 'Add New Car',
    icon: 'pi pi-fw pi-plus',

  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'Log in',
        icon: ' pi pi-google'
      },
      {
        label: 'Sign up',
        icon: 'pi pi-check'
      },
    ]
  },
  {
    label: 'Sales',
    icon: 'pi pi-shopping-cart',
    items: [
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
    ]
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-power-off'
  }
]);
</script>
<template>
  <Menubar :model="items">
    <template #start>
      <img alt="logo" src="https://www.nicepng.com/png/full/920-9203332_car-logo-png-hot-wheels-car-svg.png" height="50"
        class="mr-2" />
    </template>
    <template #default>
      <Menubar :model="items" />
    </template>
    <template #end>
      <Toast />
      <button type="button" class="p-link p-ml-auto" @click="googleRegister" style="margin: 10px;">
        <i class="pi pi-user"></i>
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

<style scoped ></style>

