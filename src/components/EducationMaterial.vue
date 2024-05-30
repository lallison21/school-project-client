<script setup lang="ts">
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Paginator from 'primevue/paginator'
import InputText from 'primevue/inputtext'
import ScrollPanel from 'primevue/scrollpanel'
import Textarea from 'primevue/textarea'
import Card from 'primevue/card'
import { onMounted, ref } from 'vue'
import axios from 'axios'

interface EducationMaterial {
  Image: string;
  Title: string;
  Subtitle: string;
  Description: string;
}

onMounted(async () => {
  await axios.get<EducationMaterial[]>('/src/storage/educationMaterial.json').then(res => {
    eduContent.value = res.data
  })
})

const props = defineProps<{
  pageName: string
  successLevel: number
}>()

const visible = ref(false)

const eduContent = ref<EducationMaterial[]>();
const editedEduContent = ref<EducationMaterial>();

const backgroundImageStyle = (edu: EducationMaterial) => {
  return { backgroundImage: `url(${edu.Image})` }
}
</script>
<template>
  <div class="flex flex-col w-full m-6 gap-2">
    <div class="flex flex-row">
      <div class="text-2xl">{{ props.pageName }}</div>
    </div>
    <ScrollPanel class="w-full h-full overflow-hidden">
      <div class="grid grid-cols-3 gap-4">
        <Card v-for="edu in eduContent" :key="edu.Title" style="width: 25rem; overflow: hidden">
          <template #header>
            <div class="bg-cover bg-center" style="height: 25rem" :style="backgroundImageStyle(edu)"></div>
          </template>
          <template #title>{{ edu.Title }}</template>
          <template #subtitle>{{ edu.Subtitle }}</template>
          <template #content>{{ edu.Description }}</template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button
                v-if="props.successLevel <= 2"
                aria-label="Edit"
                severity="secondary"
                icon="pi pi-pencil"
                @click="() => {
                  visible = true
                  editedEduContent = edu
                }" />
              <Button label="Перейти" icon="pi pi-arrow-right" class="grow" />
            </div>
          </template>
        </Card>
      </div>
    </ScrollPanel>
    <Paginator :rows="10" :totalRecords="120"></Paginator>
    
    <Dialog v-model:visible="visible" modal header="Изменение учебного материала" :style="{ width: '40rem' }">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label for="title">Название учебного материала</label>
          <InputText id="title" v-model="editedEduContent!.Title" aria-describedby="username-help" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="subtitle">Тематика учебного материала</label>
          <InputText id="subtitle" v-model="editedEduContent!.Subtitle" aria-describedby="username-help" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="description">Краткое описание учебного материала</label>
          <Textarea id="description" autoResize v-model="editedEduContent!.Description" rows="5" cols="30" />
        </div>
        <Button label="Сохранить изменения" class="w-full" />
      </div>
    </Dialog>
  </div>
</template>
<style scoped>
</style>