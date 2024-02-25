<script setup lang="ts">
import ScrollPanel from 'primevue/scrollpanel'
import Image from 'primevue/image'
import Panel from 'primevue/panel'
import { ref } from 'vue'

interface News {
  Id: number
  Title: string
  Description: string
  Photo: string
  LikeCount: number
  LikeStatus: boolean
}

const props = defineProps<{
  pageName: string
}>()

const newsList = ref<News[]>([
  {
    Id: 1,
    Title: 'Внимание! Изменения в расписании на следующей неделе',
    Description:
      'Пожалуйста, обратите внимание на изменения в расписании занятий на следующей неделе. Новые детали доступны в приложении школы.',
    Photo: 'photo.jpg',
    LikeCount: 25,
    LikeStatus: false
  },
  {
    Id: 2,
    Title: 'Приглашаем на школьный спортивный праздник!',
    Description:
      'Не пропустите наш школьный спортивный праздник, который пройдет в следующую пятницу на стадионе школы. Приглашаем всех учеников и их родителей!',
    Photo: 'photo1.jpg',
    LikeCount: 30,
    LikeStatus: false
  },
  {
    Id: 3,
    Title: 'Важное сообщение от администрации',
    Description:
      'Администрация напоминает обязательность приносить подписанные родителями справки в школу до конца этой недели. Спасибо за сотрудничество!',
    Photo: 'photo2.jpg',
    LikeCount: 15,
    LikeStatus: false
  },
  {
    Id: 4,
    Title: 'Сбор пожертвований для благотворительной акции',
    Description:
      'Помните, что сбор пожертвований для нашей благотворительной акции продолжается. Ваши взносы помогут тем, кто в них нуждается. Спасибо за вашу поддержку!',
    Photo: 'photo3.jpg',
    LikeCount: 20,
    LikeStatus: false
  },
  {
    Id: 5,
    Title: 'Объявление о проведении внеклассного мероприятия',
    Description:
      'Предлагаем вашему вниманию внеклассное мероприятие посвященное Дню Здоровья, которое состоится в следующую субботу в нашей школе.',
    Photo: 'photo4.jpg',
    LikeCount: 18,
    LikeStatus: false
  },
  {
    Id: 6,
    Title: 'Изменение времени начала школьного собрания',
    Description:
      'Школьное собрание, запланированное на эту среду, начнется на 15 минут позже из-за неотложных обстоятельств. Пожалуйста, будьте внимательны к изменению времени.',
    Photo: 'photo5.jpg',
    LikeCount: 10,
    LikeStatus: false
  },
  {
    Id: 7,
    Title: 'Призыв к участию в экологической акции',
    Description:
      'Мы приглашаем всех учеников принять участие в экологической акции, которая состоится в следующую пятницу. Вместе мы можем сделать наш мир чище и здоровее!',
    Photo: 'photo6.jpg',
    LikeCount: 22,
    LikeStatus: false
  },
  {
    Id: 8,
    Title: 'Обновление библиотечного фонда',
    Description:
      'Библиотека школы пополнилась новыми книгами! Приглашаем всех учеников и преподавателей ознакомиться с нашими новыми поступлениями.',
    Photo: 'photo7.jpg',
    LikeCount: 27,
    LikeStatus: false
  },
  {
    Id: 9,
    Title: 'Поздравляем наших победителей олимпиады!',
    Description:
      'От всей души поздравляем наших учеников, которые достойно выступили на районной олимпиаде и принесли школе заслуженные победы!',
    Photo: 'photo8.jpg',
    LikeCount: 35,
    LikeStatus: false
  },
  {
    Id: 10,
    Title: 'Важное сообщение о безопасности',
    Description:
      'Пожалуйста, обратите внимание на важное сообщение о безопасности в школе. Просим всех учеников и преподавателей соблюдать правила безопасности и следовать инструкциям персонала.',
    Photo: 'photo9.jpg',
    LikeCount: 28,
    LikeStatus: false
  }
])
</script>
<template>
  <div class="flex flex-col w-full m-6 gap-2">
    <div class="flex flex-row">
      <div class="text-2xl">{{ props.pageName }}</div>
    </div>
    <ScrollPanel class="w-full h-full overflow-hidden">
      <div class="flex flex-col w-full gap-4">
        <Panel v-for="news in newsList" :key="news.Id" :header="news.Title">
          <div class="flex flex-row h-max gap-2">
            <Image :src="news.Photo" alt="Image" width="250" />
            <div class="flex flex-col grow justify-between">
              <div>{{ news.Description }}</div>
              <div class="flex flex-row justify-between">
                <div class="flex flex-row items-center">
                  <Button
                    class="text-slate-500"
                    :icon="news.LikeStatus === false ? `pi pi-heart` : `pi pi-heart-fill`"
                    text
                    rounded
                    @click="
                      () => {
                        if (news.LikeStatus === false) {
                          news.LikeStatus = true
                          news.LikeCount++
                        } else {
                          news.LikeStatus = false
                          news.LikeCount--
                        }
                      }
                    "
                  />
                  <div class="text-xs text-slate-500">{{ news.LikeCount }}</div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </ScrollPanel>
  </div>
</template>
<style scoped></style>
