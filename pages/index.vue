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
    <div id="test">
      {{ news }}
    </div>
  </v-card>
</template>

<script setup>
const { categories, currentCategory, news } = await useNews();
console.log(news.value.totalResults);
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

#test {
  color: black;
}
</style>
