<template>
  <v-card class="card">
    <v-card-title class="text-center justify-center py-6 text-white">
      <h1 class="font-weight-bold">{{ categorySelected?.title }} News</h1>
    </v-card-title>

    <v-tabs
      v-model="categorySelected"
      bg-color="transparent"
      color="white"
      grow
      fixed-tabs
    >
      <v-tab
        v-for="category in categories"
        :key="category.id"
        :value="category"
        class="font-weight-bold text-white"
      >
        {{ category.title }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array.of(Object),
    required: true,
  },
});

const { categories } = toRefs(props);

const categorySelected = ref(categories[0]);

const emit = defineEmits(["categorySelected"]);

watch(categorySelected, (newValue) => {
  emit("categorySelected", newValue);
});
</script>

<style lang="scss" scoped>
.card {
  background-color: #219ebc;
  border-radius: 0;
}

.text-white {
  color: white;
}
</style>
