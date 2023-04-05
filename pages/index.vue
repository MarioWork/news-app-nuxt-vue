<template>
  <v-container fluid style="padding: 0">
    <v-toolbar class="card">
      <v-toolbar-title style="color: black" class="text-center">
        <h1 class="py-6">{{ currentCategory.title }} News</h1>
      </v-toolbar-title>

      <template #extension>
        <v-tabs
          v-model="currentCategory"
          bg-color="transparent"
          grow
          fixed-tabs
        >
          <v-tab
            v-for="category in categories"
            :key="category.id"
            :value="category"
            style="color: black"
          >
            {{ category.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-container>
</template>

<script setup>
const categories = [
  { id: 1, title: "All" },
  { id: 2, title: "Tech" },
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
}
</style>
