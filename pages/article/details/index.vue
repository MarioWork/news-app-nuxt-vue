//TODO: Add date, source, back button
<template>
  <v-card class="remove-padding h-screen border-none">
    <v-row class="d-center">
      <v-col cols="12" lg="10" xl="5" class="w-100">
        <v-img :src="articleThumbnail" cover class="dynamic-image"> </v-img>
        <v-card-text v-if="article.title" class="text-h6 font-weight-bold">
          {{ article.title }}
        </v-card-text>
        <v-card-text v-if="article.publishedAt" class="text-h6">
          {{ formatDateToString(article.publishedAt) }}
        </v-card-text>
        <v-card-text v-if="article.description">
          {{ article.description }}
        </v-card-text>
        <v-card-text v-if="article.content">
          {{ article.content }}
        </v-card-text>
        <v-card-text v-if="article.author" class="text-h6">
          {{ article.author }}
        </v-card-text>
        <nuxt-link to="/" class="mr-2 pl-4">
          <v-btn color="black" rounded="lg" elevation="1">Back</v-btn>
        </nuxt-link>
        <nuxt-link :to="article.url" target="_blank">
          <v-btn color="black" rounded="lg" elevation="1">Original</v-btn>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";
import { formatDateToString } from "~/utils/format-date";

const article = ref(JSON.parse(nuxtStorage.localStorage.getData("article")));

const articleThumbnail = computed(() => {
  return article.value.urlToImage
    ? article.value.urlToImage
    : "https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?w=2000&t=st=1681428463~exp=1681429063~hmac=4079efc95881044810b96f8a70a191fbfa2d648d4295f75461fd67e71d804b8f";
});
</script>

<style scoped>
.remove-padding {
  padding: 0;
}

.border-none {
  border-radius: 0;
}

.d-center {
  justify-content: center;
}

.dynamic-image {
  max-height: 500px;
}
</style>
