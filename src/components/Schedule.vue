<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ScrollPanel from 'primevue/scrollpanel'
import Paginator from 'primevue/paginator'
import { ref } from 'vue'

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

const scheduleList = ref<Schedule[]>([
  {
    dayLesson: 'Понедельник 26.02.2024',
    lesson: [
      {
        lessonNumber: 1,
        lessonName: 'Математика',
        lessonClass: '103',
        lessonTeacher: 'Афанасьева А. И.',
        lessonStart: '8:00'
      },
      {
        lessonNumber: 2,
        lessonName: 'Физика',
        lessonClass: '105',
        lessonTeacher: 'Латипов Л. Р.',
        lessonStart: '8:50'
      },
      {
        lessonNumber: 3,
        lessonName: 'Физ-ра',
        lessonClass: '102',
        lessonTeacher: 'Гавриилов Е. М.',
        lessonStart: '9:40'
      },
      {
        lessonNumber: 4,
        lessonName: 'Русский',
        lessonClass: '104',
        lessonTeacher: 'Михалкова М. Г.',
        lessonStart: '10:30'
      },
      {
        lessonNumber: 5,
        lessonName: '',
        lessonClass: '',
        lessonTeacher: '',
        lessonStart: ''
      },
      {
        lessonNumber: 6,
        lessonName: '',
        lessonClass: '',
        lessonTeacher: '',
        lessonStart: ''
      }
    ]
  },
  {
    dayLesson: 'Вторник 27.02.2024',
    lesson: [
      {
        lessonNumber: 1,
        lessonName: 'Информатика',
        lessonClass: '201',
        lessonTeacher: 'Афанасьева А. И.',
        lessonStart: '8:00'
      },
      {
        lessonNumber: 2,
        lessonName: 'Химия',
        lessonClass: '202',
        lessonTeacher: 'Сидорова Н. П.',
        lessonStart: '8:50'
      },
      {
        lessonNumber: 3,
        lessonName: 'Литература',
        lessonClass: '203',
        lessonTeacher: 'Петрова О. В.',
        lessonStart: '9:40'
      },
      {
        lessonNumber: 4,
        lessonName: 'Физ-ра',
        lessonClass: '205',
        lessonTeacher: 'Гавриилов Е. М.',
        lessonStart: '10:30'
      },
      {
        lessonNumber: 5,
        lessonName: 'Музыка',
        lessonClass: '204',
        lessonTeacher: 'Иванов И. И.',
        lessonStart: '11:20'
      },
      {
        lessonNumber: 6,
        lessonName: '',
        lessonClass: '',
        lessonTeacher: '',
        lessonStart: ''
      }
    ]
  },
  {
    dayLesson: 'Среда 28.02.2024',
    lesson: [
      {
        lessonNumber: 1,
        lessonName: 'История',
        lessonClass: '305',
        lessonTeacher: 'Иванов И. И.',
        lessonStart: '8:00'
      },
      {
        lessonNumber: 2,
        lessonName: 'География',
        lessonClass: '306',
        lessonTeacher: 'Петрова О. В.',
        lessonStart: '8:50'
      },
      {
        lessonNumber: 3,
        lessonName: 'Физ-ра',
        lessonClass: '310',
        lessonTeacher: 'Гавриилов Е. М.',
        lessonStart: '9:40'
      },
      {
        lessonNumber: 4,
        lessonName: 'Музыка',
        lessonClass: '308',
        lessonTeacher: 'Сидоров И. П.',
        lessonStart: '10:30'
      },
      {
        lessonNumber: 5,
        lessonName: 'Английский',
        lessonClass: '309',
        lessonTeacher: 'Браун М. И.',
        lessonStart: '11:20'
      },
      {
        lessonNumber: 6,
        lessonName: '',
        lessonClass: '',
        lessonTeacher: '',
        lessonStart: ''
      }
    ]
  },
  {
    dayLesson: 'Четверг 29.02.2024',
    lesson: [
      {
        lessonNumber: 1,
        lessonName: 'Биология',
        lessonClass: '205',
        lessonTeacher: 'Сидоров Н. П.',
        lessonStart: '8:00'
      },
      {
        lessonNumber: 2,
        lessonName: 'Французский',
        lessonClass: '202',
        lessonTeacher: 'Дюма А. В.',
        lessonStart: '8:50'
      },
      {
        lessonNumber: 3,
        lessonName: 'Информатика',
        lessonClass: '201',
        lessonTeacher: 'Афанасьева А. И.',
        lessonStart: '9:40'
      },
      {
        lessonNumber: 4,
        lessonName: 'Химия',
        lessonClass: '203',
        lessonTeacher: 'Иванов И. П.',
        lessonStart: '10:30'
      },
      {
        lessonNumber: 5,
        lessonName: 'Литература',
        lessonClass: '204',
        lessonTeacher: 'Петрова Е. И.',
        lessonStart: '11:20'
      },
      {
        lessonNumber: 6,
        lessonName: '',
        lessonClass: '',
        lessonTeacher: '',
        lessonStart: ''
      }
    ]
  },
  {
    dayLesson: 'Пятница 01.03.2024',
    lesson: [
      {
        lessonNumber: 1,
        lessonName: 'История',
        lessonClass: '307',
        lessonTeacher: 'Иванов И. П.',
        lessonStart: '8:00'
      },
      {
        lessonNumber: 2,
        lessonName: 'География',
        lessonClass: '308',
        lessonTeacher: 'Смирнов П. В.',
        lessonStart: '8:50'
      },
      {
        lessonNumber: 3,
        lessonName: 'Физ-ра',
        lessonClass: '309',
        lessonTeacher: 'Гавриилов Е. М.',
        lessonStart: '9:40'
      },
      {
        lessonNumber: 4,
        lessonName: 'Музыка',
        lessonClass: '310',
        lessonTeacher: 'Сидоров И. П.',
        lessonStart: '10:30'
      },
      {
        lessonNumber: 5,
        lessonName: 'Английский',
        lessonClass: '311',
        lessonTeacher: 'Браун М. И.',
        lessonStart: '11:20'
      },
      {
        lessonNumber: 6,
        lessonName: '',
        lessonClass: '',
        lessonTeacher: '',
        lessonStart: ''
      }
    ]
  },
  {
    dayLesson: 'Суббота 02.03.2024',
    lesson: [
      {
        lessonNumber: 1,
        lessonName: 'Физика',
        lessonClass: '312',
        lessonTeacher: 'Латипов Л. Р.',
        lessonStart: '8:00'
      },
      {
        lessonNumber: 2,
        lessonName: 'Химия',
        lessonClass: '313',
        lessonTeacher: 'Сидоров Н. П.',
        lessonStart: '8:50'
      },
      {
        lessonNumber: 3,
        lessonName: 'История',
        lessonClass: '314',
        lessonTeacher: 'Иванов И. П.',
        lessonStart: '9:40'
      },
      {
        lessonNumber: 4,
        lessonName: 'Биология',
        lessonClass: '315',
        lessonTeacher: 'Иванова Е. А.',
        lessonStart: '10:30'
      },
      {
        lessonNumber: 5,
        lessonName: 'Литература',
        lessonClass: '316',
        lessonTeacher: 'Петрова Е. И.',
        lessonStart: '11:20'
      },
      {
        lessonNumber: 6,
        lessonName: 'Физ-ра',
        lessonClass: '317',
        lessonTeacher: 'Гавриилов Е. М.',
        lessonStart: '12:10'
      }
    ]
  }
])

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
