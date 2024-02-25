<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import Badge from 'primevue/badge'
import { ref } from 'vue'
import Paginator from 'primevue/paginator'

interface Lesson {
  lessonName: string
  assessments: Assessment[]
}

interface Assessment {
  assessment: number
  date: string
}

const props = defineProps<{
  pageName: string
}>()

const lessonsList: Lesson[] = [
  {
    lessonName: 'Математика',
    assessments: [
      { assessment: 4, date: '03.01.2024' },
      { assessment: 5, date: '10.01.2024' },
      { assessment: 3, date: '17.01.2024' },
      { assessment: 4, date: '24.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Русский язык',
    assessments: [
      { assessment: 5, date: '04.01.2024' },
      { assessment: 4, date: '11.01.2024' },
      { assessment: 4, date: '18.01.2024' },
      { assessment: 5, date: '25.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Литературное чтение',
    assessments: [
      { assessment: 4, date: '04.01.2024' },
      { assessment: 3, date: '11.01.2024' },
      { assessment: 5, date: '18.01.2024' },
      { assessment: 4, date: '25.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Окружающий мир',
    assessments: [
      { assessment: 5, date: '03.01.2024' },
      { assessment: 4, date: '10.01.2024' },
      { assessment: 5, date: '17.01.2024' },
      { assessment: 3, date: '24.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Изобразительное искусство',
    assessments: [
      { assessment: 3, date: '04.01.2024' },
      { assessment: 4, date: '11.01.2024' },
      { assessment: 5, date: '18.01.2024' },
      { assessment: 4, date: '25.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Музыка',
    assessments: [
      { assessment: 5, date: '03.01.2024' },
      { assessment: 4, date: '10.01.2024' },
      { assessment: 3, date: '17.01.2024' },
      { assessment: 5, date: '24.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Физкультура',
    assessments: [
      { assessment: 5, date: '03.01.2024' },
      { assessment: 4, date: '10.01.2024' },
      { assessment: 5, date: '17.01.2024' },
      { assessment: 4, date: '24.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Технология',
    assessments: [
      { assessment: 4, date: '03.01.2024' },
      { assessment: 5, date: '10.01.2024' },
      { assessment: 4, date: '17.01.2024' },
      { assessment: 5, date: '24.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  },
  {
    lessonName: 'Информатика',
    assessments: [
      { assessment: 5, date: '04.01.2024' },
      { assessment: 4, date: '11.01.2024' },
      { assessment: 5, date: '18.01.2024' },
      { assessment: 2, date: '25.01.2024' }
      // Продолжайте добавлять оценки для каждого урока и соответствующие даты
    ]
  }
]

const studyDate = ref<string[]>([
  '03.01.2024',
  '04.01.2024',
  '10.01.2024',
  '11.01.2024',
  '17.01.2024',
  '18.01.2024',
  '24.01.2024',
  '25.01.2024',
  '31.01.2024'
])
</script>
<template>
  <div class="flex flex-col w-full m-6 gap-2">
    <div class="flex flex-row">
      <div class="text-2xl">{{ props.pageName }}</div>
    </div>
    <div class="flex flex-row w-full">
      <DataTable :value="lessonsList" showGridlines stripedRows class="w-full">
        <ColumnGroup type="header">
          <Row>
            <Column header="Предмет" :rowspan="2" :pt="{ headerCell: { class: 'bg-cyan-300' } }" />
            <Column
              header="Дата"
              :colspan="studyDate.length"
              :pt="{ headerCell: { class: 'bg-cyan-300' } }"
            />
          </Row>
          <Row>
            <Column
              v-for="day in studyDate"
              :key="day"
              :header="day"
              :pt="{ headerCell: { class: 'bg-cyan-300' } }"
            />
          </Row>
        </ColumnGroup>
        <Column field="lessonName" />
        <Column v-for="day in studyDate" :key="day">
          <template #body="slotProps">
            <div class="flex flex-row w-full h-full justify-center">
              <Badge
                :value="
                  slotProps.data.assessments.find((x: Assessment) => x.date === day) !== undefined
                    ? slotProps.data.assessments.find((x: Assessment) => x.date === day).assessment
                    : '+'
                "
                size="large"
                :severity="
                  slotProps.data.assessments.find((x: Assessment) => x.date === day) !==
                    undefined &&
                  slotProps.data.assessments.find((x: Assessment) => x.date === day).assessment ===
                    3
                    ? 'warning'
                    : slotProps.data.assessments.find((x: Assessment) => x.date === day) !==
                          undefined &&
                        slotProps.data.assessments.find((x: Assessment) => x.date === day)
                          .assessment === 2
                      ? 'danger'
                      : slotProps.data.assessments.find((x: Assessment) => x.date === day) ===
                          undefined
                        ? 'secondary'
                        : 'success'
                "
              >
              </Badge>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
    <Paginator :rows="10" :totalRecords="120"></Paginator>
  </div>
</template>
<style scoped></style>
