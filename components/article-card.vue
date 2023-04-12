<template>
  <v-card class="pa-6 elevation-4 h-100">
    <v-img :src="article.urlToImage" cover height="400"></v-img>
    <v-card-text class="text-h6">
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
        <v-card-text class="text-right">
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

const publishedAtDate = new Date(article.value.publishedAt);

const publishedAtString = [
  publishedAtDate.getDay().toString().padStart(2, "0"),
  publishedAtDate.getMonth().toString().padStart(2, "0"),
  publishedAtDate.getFullYear(),
].join("/");
</script>

<style scoped></style>
