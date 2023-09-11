<script setup>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'


import { useAuto } from '@/composable/useAuto'

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { onMounted } from 'vue';

const { auto, createAuto } = useAuto()

onMounted(async () => {
  await createAuto()
})



const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
</script>
<template>
  <Menubar :model="items">
    <template #start>
      
      <img alt="logo" src="https://www.nicepng.com/png/full/920-9203332_car-logo-png-hot-wheels-car-svg.png" height="50"
        class="mr-2" />
    </template>
    <template #end>
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



  
  