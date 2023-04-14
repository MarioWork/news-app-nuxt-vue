<template>
  <v-app-bar class="primary-color w-100" extended height="100">
    <h1
      v-if="categorySelected?.title"
      class="font-weight-bold text-center text-white w-100 text-xl-h2 text-lg-h2 text-md-h2 text-sm-h2 text-h3"
    >
      {{ categorySelected.title }} News
    </h1>

    <template #extension>
      <v-container>
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
      </v-container>
    </template>
  </v-app-bar>
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

const emit = defineEmits(["onCategorySelected"]);

watch(categorySelected, (newValue) => {
  emit("onCategorySelected", newValue);
});
</script>

<style lang="scss" scoped>
.primary-color {
  background-color: #219ebc;
}

.text-white {
  color: white;
}
</style>
