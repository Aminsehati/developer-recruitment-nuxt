<template>
  <div :class="['badge', { 'badge_active': props.active }]" @click="$emit('onClick')">
    <slot />
  </div>
</template>

<script  lang="ts" setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss">
.badge {
  background: #f1f5f9;
  padding: 8px 25px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  i {
    margin-left: 8px;
    font-size: 16px;
  }
  &.badge_active{
    background: #6366f1;
    color: #fff;
  }
}
</style>