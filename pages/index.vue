<template>
  <v-card class="card">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">{{ currentCategory.title }} News</h1>
    </v-card-title>

    <v-tabs
      v-model="currentCategory"
      bg-color="transparent"
      color="white"
      grow
      fixed-tabs
    >
      <v-tab
        v-for="category in categories"
        :key="category.id"
        :value="category"
      >
        {{ category.title }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
const categories = [
  { id: 1, title: "General", value: "general" },
  { id: 2, title: "Technology", value: "technology" },
  { id: 3, title: "Business", value: "business" },
  { id: 3, title: "Entertainment", value: "entertainment" },
  { id: 3, title: "Science", value: "science" },
  { id: 3, title: "Health", value: "health" },
  { id: 4, title: "Sports", value: "sports" },
];
const currentCategory = ref(categories[0]);
</script>

<style scope>
* {
  color: white;
  font-weight: bold;
}

.card {
  background-color: #219ebc;
  border-radius: 0;
}
</style>
