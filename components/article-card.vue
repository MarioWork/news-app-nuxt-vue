<template>
  <v-card>
    <v-img :src="article.urlToImage" cover></v-img>
    <v-card-text>
      {{ article.title }}
    </v-card-text>
    <v-card-subtitle>
      {{ article.description }}
    </v-card-subtitle>
  </v-card>
</template>

<script setup>
const props = defineProps({
  article: { type: Object, required: true },
});

const { article } = toRefs(props);
</script>

<style scoped></style>
