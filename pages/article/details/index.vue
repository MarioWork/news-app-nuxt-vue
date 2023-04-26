//TODO: Add date, source, back button
<template>
  <v-card class="remove-padding border-none">
    <v-container class="w-100 h-screen remove-padding">
      <v-row class="d-center">
        <v-col cols="12" lg="6" xl="4" class="w-100">
          <v-img :src="articleThumbnail" cover class="dynamic-image"> </v-img>
          <v-card-text class="text-h6 font-weight-bold">
            {{ article.title }}
          </v-card-text>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
          <v-card-text>
            {{ article?.content }}
          </v-card-text>
          <nuxt-link :to="article.url" target="_blank">
            <v-btn>Go to Article</v-btn>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

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
</style>
