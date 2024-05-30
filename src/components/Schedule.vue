<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ScrollPanel from 'primevue/scrollpanel'
import Paginator from 'primevue/paginator'
import { onMounted, ref } from 'vue'
import axios from 'axios'

interface Lesson {
  lessonNumber: number
  lessonName: string
  lessonClass: string
  lessonTeacher: string
  lessonStart: string
}
interface Schedule {
  dayLesson: string
  lesson: Lesson[]
}

const scheduleList = ref<Schedule[]>()

onMounted(async () => {
  await axios.get<Schedule[]>('/src/storage/scheduleList.json').then(res => {
    scheduleList.value = res.data
  })
})

const props = defineProps<{
  pageName: string
}>()
</script>
<template>
  <div class="flex flex-col w-full m-6 gap-2">
    <div class="flex flex-row">
      <div class="text-2xl">{{ props.pageName }}</div>
    </div>
    <ScrollPanel class="w-full h-full overflow-hidden">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <DataTable
          v-for="schedule in scheduleList"
          :key="schedule.dayLesson"
          :value="schedule.lesson"
          :pt="{ header: { class: 'bg-cyan-300' } }"
          striped-rows
          show-gridlines
        >
          <template #header>
            <div>{{ schedule.dayLesson }}</div>
          </template>
          <Column header="№" field="lessonNumber" :pt="{ headerCell: { class: 'bg-cyan-300' } }" />
          <Column header="Урок" field="lessonName" :pt="{ headerCell: { class: 'bg-cyan-300' } }" />
          <Column
            header="Кабинет"
            field="lessonClass"
            :pt="{ headerCell: { class: 'bg-cyan-300' } }"
          />
          <Column
            header="Учитель"
            field="lessonTeacher"
            :pt="{ headerCell: { class: 'bg-cyan-300' } }"
          />
          <Column
            header="Начало"
            field="lessonStart"
            :pt="{ headerCell: { class: 'bg-cyan-300' } }"
          />
        </DataTable>
      </div>
    </ScrollPanel>
    <Paginator :rows="10" :totalRecords="120"></Paginator>
  </div>
</template>
<style scoped></style>
