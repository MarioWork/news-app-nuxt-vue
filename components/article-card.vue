<template>
  <v-card class="pa-6 elevation-4 h-100">
    <v-img :src="article.urlToImage" cover height="400"></v-img>
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

const publishedAtDate = new Date(article.value.publishedAt);

const publishedAtString = [
  publishedAtDate.getUTCDate().toString().padStart(2, "0"),
  (publishedAtDate.getUTCMonth() + 1).toString().padStart(2, "0"),
  publishedAtDate.getUTCFullYear(),
].join("/");
</script>

<style scoped></style>
