
<script setup lang="ts">
import data from "@/data.json";
import type { IDiscussion } from "@/types/IDiscussion.type";
import { onMounted, ref } from "vue";
import Comment from "../components/Comment/index.vue";
const comments = ref<IDiscussion[]>(data);
onMounted(() => {
  const commentsStorage = localStorage && localStorage.getItem("comments");
  if (!commentsStorage) {
    localStorage.setItem("comments", JSON.stringify(comments.value));
  } else {
    comments.value = JSON.parse(commentsStorage);
  }
});
</script>

<template>
  <main class="home_page">
    <div class="container">
      <Comment :comments="comments" />
    </div>
  </main>
</template>


<style lang="scss">
</style>
