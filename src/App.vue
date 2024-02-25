<script setup lang="ts">
import Login from './components/Login.vue'
import { ref } from 'vue'
import MainPage from './components/MainPage.vue'

interface Profile {
  FirstName: string
  LastName: string
  Patronymic: string
  RoleName: string
  SuccessLevel: number
}

const profile = ref<Profile>()
</script>
<template>
  <Login v-if="profile === undefined" @sing-in="(args) => (profile = args)" />
  <div v-else class="w-dvw h-dvh">
    <MainPage :profile="profile" @sign-out="profile = undefined" />
  </div>
</template>
<style scoped></style>
