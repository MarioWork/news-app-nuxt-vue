<template>
  <v-card class="pa-6 elevation-4 h-100">
    <v-img :src="articleThumbnail" cover height="400"></v-img>
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
          {{ publishedAtString }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script allowJs setup>
const props = defineProps({
  article: { type: Object, required: true },
});

const { article } = toRefs(props);

const publishedAtString = computed(() => {
  const publishedAtDate = new Date(article.value.publishedAt);

  return [
    publishedAtDate.getUTCDate().toString().padStart(2, "0"),
    (publishedAtDate.getUTCMonth() + 1).toString().padStart(2, "0"),
    publishedAtDate.getUTCFullYear(),
  ].join("/");
});

const articleThumbnail = computed(() => {
  return article.value.urlToImage
    ? article.value.urlToImage
    : "https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?w=2000&t=st=1681428463~exp=1681429063~hmac=4079efc95881044810b96f8a70a191fbfa2d648d4295f75461fd67e71d804b8f";
});
</script>

<style scoped></style>
