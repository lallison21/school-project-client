<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import ContentPage from './ContentPage.vue'
import MyJournal from './MyJournal.vue'
import EducationalMaterial from './EducationMaterial.vue'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'
import Schedule from './Schedule.vue'
import TeacherJournal from '@/components/TeacherJournal.vue'

interface Profile {
  FirstName: string
  LastName: string
  Patronymic: string
  RoleName: string
  SuccessLevel: number
}

const emit = defineEmits(['sign-out'])

const pageName = ref('Главная страница')
const isSignOut = ref(false)

const props = defineProps<{
  profile: Profile
}>()

const isLoading = ref(false)
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const changePage = async (newPageName: string) => {
  if (newPageName !== pageName.value) {
    isLoading.value = true
    await sleep(1000)
    isLoading.value = false
  }
  pageName.value = newPageName
}

const signOut = async () => {
  isSignOut.value = true
  await sleep(1000)
  isSignOut.value = false
  emit('sign-out')
}
</script>
<template>
  <div class="flex flex-row max-h-screen" style="background-image: url('/main.jpg')">
    <Sidebar :profile="props.profile" @change-page="changePage" @sign-out="signOut" />
    <ContentPage v-if="pageName === 'Главная страница' && !isLoading" :page-name="pageName" />
    <MyJournal v-if="pageName === 'Мой дневник' && !isLoading" :page-name="pageName" />
    <TeacherJournal v-if="pageName === 'Журнал' && !isLoading" :page-name="pageName" />
    <Schedule v-if="pageName === 'Расписание' && !isLoading" :page-name="pageName" />
    <EducationalMaterial  v-if="pageName === 'Учебный материал' && !isLoading" :page-name="pageName" :success-level="profile.SuccessLevel" />
    <div v-if="isLoading" class="flex flex-col justify-center w-full m-6 gap-2">
      <div class="flex flex-col items-center gap-2">
        <div class="flex flex-row justify-center">
          <i class="pi pi-spin pi-spinner" style="font-size: 6rem"></i>
        </div>
        <div style="font-size: 2rem">Получение данных...</div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="isSignOut" modal :style="{ width: '25rem' }" :closable="false">
    <div class="flex flex-col justify-center w-full gap-2">
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-row justify-center">
          <i class="pi pi-spin pi-spinner" style="font-size: 3rem"></i>
        </div>
        <div style="font-size: 1rem">Выполняется выход...</div>
      </div>
    </div>
  </Dialog>
</template>
<script></script>
