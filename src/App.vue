<template>
  <yg-button v-for="item in arr" ::key="item.color" :color="item.color" :icon="item.icon">{{ item.color }}</yg-button>
</template>
<script setup>
import { ref } from "vue";

const arr = ref([
  { color: "blue", icon: "search" },
  { color: "green", icon: "edit" },
  { color: "gray", icon: "check" },
  { color: "yellow", icon: "message" },
  { color: "red", icon: "delete" },
]);
</script>
