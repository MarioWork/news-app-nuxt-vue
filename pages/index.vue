<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title
        ><h1 class="text-center py-6">{{ currentCategory }} News</h1>
      </v-toolbar-title>
      <template #extension>
        <v-tabs v-model="currentCategory" align-tabs="center" grow>
          <v-tab value="All"> All </v-tab>
          <v-tab value="Tech"> Tech </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script setup>
const currentCategory = ref("All");
</script>
