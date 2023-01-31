<template>
  <div
    v-for="(comment, index) in props.comments"
    :key="index"
    class="comment_item"
  >
    <div class="user_info">
      <img :src="comment && comment.user.avatar" />
      <span class="">
        {{ comment.user.name }}
      </span>
    </div>
    <p class="text-gray-400 font-400">
      {{ comment.text }}
    </p>
    <div class="action_comment">
      <span
        class="text-primary font-600 font-14 cursor-pointer mr-10"
        @click="replyCommentItem(comment)"
      >
        Reply
      </span>
      <Badge :active="comment.iLikedIt" @onClick="likeComment(comment)">
        {{ comment.likes }}
        <i class="fa-solid fa-thumbs-up"></i>
      </Badge>
    </div>
    <div class="reply_wrapper">
      <div
        v-for="(reply, index) in comment.replies"
        :key="index"
        class="reply_item"
      >
        <div class="reply_user_info">
          <img :src="reply.user.avatar" />
          <span class="text-gray-800 font-600 font-15">
            {{ reply.user.name }}
          </span>
        </div>
        <p class="text-gray-400 font-400">
          {{ reply.text }}
        </p>
        <div class="action_comment">
          <Badge :active="reply.iLikedIt" @onClick="likeCommentReply(reply)">
            {{ reply.likes }}
            <i class="fa-solid fa-thumbs-up"></i>
          </Badge>
        </div>
      </div>
    </div>
    <TextField
      placehoder="Reply"
      v-if="id_reply === comment.id"
      v-model="keyword"
      @on_enter="addReplyComment(comment)"
    />
  </div>
</template>

<script lang="ts" setup>
import {  ref } from "vue";
import Badge from "../Badge/index.vue";
import TextField from "../TextField/index.vue";
import type { IDiscussion } from "@/types/IDiscussion.type";
const props = defineProps({
  comments: {
    type: Array,
    default: [],
  },
});

const likeComment = (comment: any) => {
  comment.iLikedIt = !comment.iLikedIt;
  comment.likes = comment.iLikedIt ? ++comment.likes : --comment.likes;
  localStorage.setItem("comments", JSON.stringify(props.comments));
};
const likeCommentReply = (reply: any) => {
  reply.iLikedIt = !reply.iLikedIt;
  reply.likes = reply.iLikedIt ? ++reply.likes : --reply.likes;
  localStorage.setItem("comments", JSON.stringify(props.comments));
};
const id_reply = ref<number>(0);
const replyCommentItem = (comment: any) => {
  if (id_reply.value) {
    id_reply.value = 0;
  } else {
    id_reply.value = comment.id;
  }
};
const keyword = ref<string>("");
const addReplyComment = (comment: any) => {
  comment.replies.push({
    iLikedIt: false,
    id: new Date(),
    likes: 0,
    replies: [],
    text: keyword.value,
    user: {
      name: "Amin Sehati",
      avatar:
        "http://cdn.skanetplus.ir/upload/admin/Image/user/1401-08-1517-1670931951649-375321619.jpeg",
    },
  });
  localStorage.setItem("comments", JSON.stringify(props.comments));
  keyword.value = "";
  id_reply.value = 0;
};
</script>
<style lang="scss">
.comment_item {
  &:not(:last-child) {
    margin-bottom: 15px;
    border-bottom: 1px solid #ececec;
    padding-bottom: 15px;
  }
}
.home_page {
  margin-top: 40px;
}
.user_info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  span {
    color: #1e293b;
    font-weight: 600;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 15px;
  }
}
.reply_wrapper {
  margin-top: 25px;
  margin-bottom: 20px;
  padding-left: 30px;
}
.reply_item {
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  .reply_user_info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 15px;
    }
  }
}
.action_comment {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
</style>