<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'

interface Profile {
  FirstName: string
  LastName: string
  Patronymic: string
  RoleName: string
  SuccessLevel: number
}

const props = defineProps<{
  profile: Profile
}>()

const emit = defineEmits(['changePage', 'sign-out'])
</script>
<template>
  <div class="flex flex-col h-screen min-w-fit">
    <Card
      class="bg-slate-500 h-dvh"
      :pt="{ body: { class: 'h-full' }, content: { class: 'h-full' } }"
    >
      <template #title>
        <div class="flex flex-row gap-2">
          <Avatar icon="pi pi-user" class="mr-2" size="large" shape="circle" />
          <div class="flex flex-col">
            <div class="text-neutral-50">
              {{ props.profile.LastName }} {{ props.profile.FirstName[0] }}.
              {{ props.profile.Patronymic[0] }}.
            </div>
            <div class="text-neutral-50 text-xs">{{ props.profile.RoleName }}</div>
          </div>
        </div>
      </template>
      <template #subtitle>
        <Divider />
      </template>
      <template #content>
        <div class="flex flex-col w-full">
          <Button
            label="Главная страница"
            icon="pi pi-home"
            class="text-neutral-50 text-left"
            text
            @click="emit('changePage', 'Главная страница')"
          />
          <Button
            v-if="profile.SuccessLevel === 3"
            label="Мой дневник"
            icon="pi pi-book"
            class="text-neutral-50 text-left"
            text
            @click="emit('changePage', 'Мой дневник')"
          />
          <Button
            v-if="profile.SuccessLevel === 2"
            label="Журнал"
            icon="pi pi-book"
            class="text-neutral-50 text-left"
            text
            @click="emit('changePage', 'Журнал')"
          />
          <Button
            label="Расписание"
            icon="pi pi-list"
            class="text-neutral-50 text-left"
            text
            @click="emit('changePage', 'Расписание')"
          />
        </div>
      </template>
      <template #footer>
        <div class="flex flex-col gap-2">
          <Divider />
          <div class="flex flex-col">
            <Button
              label="Настройки"
              icon="pi pi-cog"
              class="text-neutral-50 text-left"
              text
              @click="emit('changePage', 'Мой дневник')"
            />
            <Button
              label="Выход"
              icon="pi pi-sign-out"
              class="text-neutral-50 text-left"
              text
              @click="emit('sign-out')"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<style scoped></style>
