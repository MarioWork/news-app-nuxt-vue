<template>
  <v-container class="h-screen">
    <v-row class="h-25"> </v-row>
    <v-row class="h-75">
      <v-col cols="12">
        <div>{{ state }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const state = useState("article");
</script>

<style lang="scss" scoped></style>
