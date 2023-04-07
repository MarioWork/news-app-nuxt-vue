<template>
  <div>{{ article.title }}</div>
</template>

<script setup>
const props = defineProps({
  article: { type: Object, required: true },
});

const { article } = toRefs(props);
</script>

<style scoped></style>
