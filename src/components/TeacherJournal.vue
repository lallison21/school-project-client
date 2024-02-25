<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'
import { ref } from 'vue'
import Paginator from 'primevue/paginator'

interface StudentAssessment {
  studentName: string
  assessments: Assessment[]
}

interface Assessment {
  assessment: string
  date: string
}
const studentAssessment = ref<StudentAssessment[]>([
  {
    studentName: 'Андреев А. О.',
    assessments: [
      { assessment: '2', date: '03.01.2024' },
      { assessment: '2', date: '04.01.2024' },
      { assessment: '5', date: '10.01.2024' },
      { assessment: '4', date: '11.01.2024' },
      { assessment: '4', date: '17.01.2024' },
      { assessment: 'Н', date: '18.01.2024' },
      { assessment: 'Б', date: '24.01.2024' },
      { assessment: '2', date: '25.01.2024' },
      { assessment: '2', date: '31.01.2024' }
    ]
  },
  {
    studentName: 'Абабкова М. М.',
    assessments: [
      { assessment: '+', date: '03.01.2024' },
      { assessment: '3', date: '04.01.2024' },
      { assessment: '4', date: '10.01.2024' },
      { assessment: '4', date: '11.01.2024' },
      { assessment: '2', date: '17.01.2024' },
      { assessment: 'Б', date: '18.01.2024' },
      { assessment: '4', date: '24.01.2024' },
      { assessment: '2', date: '25.01.2024' },
      { assessment: '+', date: '31.01.2024' }
    ]
  },
  {
    studentName: 'Ахметзянова А. Р.',
    assessments: [
      { assessment: '3', date: '03.01.2024' },
      { assessment: '+', date: '04.01.2024' },
      { assessment: '3', date: '10.01.2024' },
      { assessment: 'Б', date: '11.01.2024' },
      { assessment: '+', date: '17.01.2024' },
      { assessment: '5', date: '18.01.2024' },
      { assessment: '4', date: '24.01.2024' },
      { assessment: '5', date: '25.01.2024' },
      { assessment: '3', date: '31.01.2024' }
    ]
  },
  {
    studentName: 'Камалов К. Р.',
    assessments: [
      { assessment: '4', date: '03.01.2024' },
      { assessment: '2', date: '04.01.2024' },
      { assessment: 'Н', date: '10.01.2024' },
      { assessment: 'Н', date: '11.01.2024' },
      { assessment: '3', date: '17.01.2024' },
      { assessment: '4', date: '18.01.2024' },
      { assessment: '4', date: '24.01.2024' },
      { assessment: '3', date: '25.01.2024' },
      { assessment: '3', date: '31.01.2024' }
    ]
  },
  {
    studentName: 'Лихачев В. О.',
    assessments: [
      { assessment: '3', date: '03.01.2024' },
      { assessment: 'Б', date: '04.01.2024' },
      { assessment: '2', date: '10.01.2024' },
      { assessment: '4', date: '11.01.2024' },
      { assessment: '+', date: '17.01.2024' },
      { assessment: 'Б', date: '18.01.2024' },
      { assessment: 'Б', date: '24.01.2024' },
      { assessment: '+', date: '25.01.2024' },
      { assessment: 'Н', date: '31.01.2024' }
    ]
  },
  {
    studentName: 'Михалкова Ю. Н.',
    assessments: [
      { assessment: '+', date: '03.01.2024' },
      { assessment: 'Н', date: '04.01.2024' },
      { assessment: 'Б', date: '10.01.2024' },
      { assessment: '2', date: '11.01.2024' },
      { assessment: '5', date: '17.01.2024' },
      { assessment: 'Б', date: '18.01.2024' },
      { assessment: 'Б', date: '24.01.2024' },
      { assessment: '4', date: '25.01.2024' },
      { assessment: '+', date: '31.01.2024' }
    ]
  },
  {
    studentName: 'Нурминский А. А.',
    assessments: [
      { assessment: '2', date: '03.01.2024' },
      { assessment: '3', date: '04.01.2024' },
      { assessment: 'Б', date: '10.01.2024' },
      { assessment: '3', date: '11.01.2024' },
      { assessment: 'Н', date: '17.01.2024' },
      { assessment: '2', date: '18.01.2024' },
      { assessment: '+', date: '24.01.2024' },
      { assessment: 'Б', date: '25.01.2024' },
      { assessment: '5', date: '31.01.2024' }
    ]
  },
  {
    studentName: 'Окунев П. В.',
    assessments: [
      { assessment: 'Б', date: '03.01.2024' },
      { assessment: 'Н', date: '04.01.2024' },
      { assessment: '4', date: '10.01.2024' },
      { assessment: '4', date: '11.01.2024' },
      { assessment: '2', date: '17.01.2024' },
      { assessment: '4', date: '18.01.2024' },
      { assessment: '5', date: '24.01.2024' },
      { assessment: 'Б', date: '25.01.2024' },
      { assessment: 'Н', date: '31.01.2024' }
    ]
  }
])

const props = defineProps<{
  pageName: string
}>()

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

const assessmentList = ref([
  { assessmentLabel: 'Н', description: 'Отсутствовал' },
  { assessmentLabel: 'Б', description: 'Болел' },
  { assessmentLabel: '+', description: 'Присутствовал' },
  { assessmentLabel: '2', description: 'Плохо' },
  { assessmentLabel: '3', description: 'Удовлетворительно' },
  { assessmentLabel: '4', description: 'Хорошо' },
  { assessmentLabel: '5', description: 'Отлично' }
])

const selectedAssessment = ref()

const getStatusLabel = (status: string) => {
  switch (status) {
    case '5':
      return 'success'
    case '4':
      return 'success'
    case '3':
      return 'warning'
    case '2':
      return 'danger'
    default:
      return 'secondary'
  }
}
</script>
<template>
  <div class="flex flex-col w-full m-6 gap-2">
    <div class="flex flex-row">
      <div class="text-2xl">{{ props.pageName }}</div>
    </div>
    <DataTable :value="studentAssessment" showGridlines stripedRows class="w-full">
      <ColumnGroup type="header">
        <Row>
          <Column header="Ученик" :rowspan="2" :pt="{ headerCell: { class: 'bg-cyan-300' } }" />
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
      <Column field="studentName" />
      <Column v-for="day in studyDate" :key="day" field="assessments">
        <template #body="slotProps">
          <Dropdown
            v-model="slotProps.data.assessments.find((x: Assessment) => x.date === day).assessment"
            :options="assessmentList"
            option-label="assessmentLabel"
            option-value="assessmentLabel"
          >
            <template #value="slotPropsValue">
              <Tag :value="slotPropsValue.value" :severity="getStatusLabel(slotPropsValue.value)" />
            </template>
            <template #option="slotPropsOption">
              <Tag
                :value="slotPropsOption.option.assessmentLabel"
                :severity="getStatusLabel(slotPropsOption.option.assessmentLabel)"
              />
            </template>
          </Dropdown>
        </template>
      </Column>
    </DataTable>
    <Paginator :rows="10" :totalRecords="120"></Paginator>
  </div>
</template>
<style scoped></style>
