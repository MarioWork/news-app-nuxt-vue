<template>
  <v-card class="pa-6 elevation-4 h-100">
    <v-img :src="article.urlToImage" cover height="400"></v-img>
    <v-card-text class="text-h6">
      {{ article.title }}
    </v-card-text>
    <v-card-text>
      {{ article.description }}
    </v-card-text>
  </v-card>
</template>

<script allowJs setup>
const props = defineProps({
  article: { type: Object, required: true },
});

const { article } = toRefs(props);
</script>

<style scoped></style>
