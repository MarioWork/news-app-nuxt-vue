<template>
  <NuxtLink
    to="/article/details"
    class="no-text-decoration cursor-pointer"
    @click="onCardClick"
  >
    <v-card class="elevation-4 h-100">
      <v-img :src="articleThumbnail" cover class="dynamic-image"></v-img>
      <v-card-text class="text-h6 font-weight-bold">
        {{ article.title }}
      </v-card-text>
      <v-card-text>
        {{ article.description }}
      </v-card-text>
      <v-row>
        <v-col cols="6">
          <v-card-text>
            {{ article.author }}
          </v-card-text>
        </v-col>
        <v-col cols="6">
          <v-card-text class="text-right font-weight-bold">
            {{ formatDateToString(article.publishedAt) }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </NuxtLink>
</template>

<script allowJs:true setup>
import nuxtStorage from "nuxt-storage";
import { formatDateToString } from "~/utils/format-date";

const props = defineProps({
  article: { type: Object, required: true },
});

const { article } = toRefs(props);

const articleThumbnail = computed(() => {
  return article.value.urlToImage
    ? article.value.urlToImage
    : "https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?w=2000&t=st=1681428463~exp=1681429063~hmac=4079efc95881044810b96f8a70a191fbfa2d648d4295f75461fd67e71d804b8f";
});

const onCardClick = () => {
  nuxtStorage.localStorage.setData(
    "article",
    JSON.stringify(toRaw(article.value))
  );
};
</script>

<style scoped>
.no-text-decoration {
  text-decoration: none;
}

.cursor-pointer {
  cursor: pointer;
}

.dynamic-image {
  height: 400px;
}

@media only screen and (max-width: 966px) {
  .dynamic-image {
    height: 300px;
  }
}

@media only screen and (max-width: 320px) {
  .dynamic-image {
    height: 200px;
  }
}
</style>
