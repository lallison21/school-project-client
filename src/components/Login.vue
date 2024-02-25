<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

interface Login {
  login: string
  password: string
}

interface Profile {
  FirstName: string
  LastName: string
  Patronymic: string
  RoleName: string
  SuccessLevel: number
}

const toast = useToast()
const emit = defineEmits(['singIn'])

const validProfile = ref<Login[]>([
  { login: 'ivanov.ivan@student.school.ru', password: 'qwerty' },
  { login: 'afanasieva.anna@teacher.school.ru', password: 'qwerty' }
])

const login = ref()
const password = ref()

const isLoading = ref(false)

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const validateLogin = async () => {
  let profile: Login = { login: '', password: '' }

  validProfile.value.forEach((element: Login) => {
    if (element.login === login.value) {
      profile = element
    }
  })

  if (profile.login !== login.value) {
    toast.add({
      severity: 'error',
      summary: 'Не верный логин',
      detail:
        'При входе был указан не верный логин. Если забыли логин обратитесь к администрации школы',
      life: 3000
    })
    return
  }
  if (profile.password !== password.value) {
    toast.add({
      severity: 'error',
      summary: 'Не верный пароль',
      detail:
        'При входе был указан не верный пароль. Если забыли пароль обратитесь к администрации школы',
      life: 3000
    })
    return
  }

  if (profile.login === 'ivanov.ivan@student.school.ru') {
    const ivan: Profile = {
      FirstName: 'Иван',
      LastName: 'Иванов',
      Patronymic: 'Иванович',
      RoleName: 'Ученик 3-А класса',
      SuccessLevel: 3
    }
    isLoading.value = true
    await sleep(1000)
    isLoading.value = false
    emit('singIn', ivan)
  }

  if (profile.login === 'afanasieva.anna@teacher.school.ru') {
    const anna: Profile = {
      FirstName: 'Анна',
      LastName: 'Афанасьева',
      Patronymic: 'Иоановна',
      RoleName: 'Учитель информатики и математики',
      SuccessLevel: 2
    }
    isLoading.value = true
    await sleep(1000)
    isLoading.value = false
    emit('singIn', anna)
  }
}
</script>
<template>
  <div
    class="flex flex-row justify-center items-center h-screen"
    style="background-image: url('/login.svg')"
  >
    <Card v-if="isLoading === false" style="width: 33rem" class="shadow-xl">
      <template #title>
        <div class="text-2xl">Войти</div>
      </template>
      <template #subtitle>
        <div class="text-sm">Введите логин и пароль предоставленный админимтрацией школы</div>
      </template>
      <template #content>
        <div class="grid mt-2 gap-8">
          <FloatLabel>
            <InputText id="username" v-model="login" class="w-full" />
            <label for="username">Логин</label>
          </FloatLabel>
          <FloatLabel>
            <InputText id="username" v-model="password" class="w-full" />
            <label for="username">Пароль</label>
          </FloatLabel>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button
            :disabled="
              login === undefined ||
              login.length === 0 ||
              password === undefined ||
              password.length === 0
            "
            label="Войти"
            class="w-full"
            @click="validateLogin"
          />
        </div>
      </template>
    </Card>
    <Card v-else style="width: 33rem" class="shadow-xl">
      <template #content>
        <div class="flex flex-row justify-center w-full mt-8 mb-8">
          <div class="flex flex-col gap-4">
            <div class="flex flex-row justify-center w-full">
              <i class="pi pi-spin pi-spinner" style="font-size: 6rem" />
            </div>
            <div style="font-size: 2rem">Загрузка...</div>
          </div>
        </div>
      </template>
    </Card>
  </div>

  <Toast />
</template>
<style scoped></style>
