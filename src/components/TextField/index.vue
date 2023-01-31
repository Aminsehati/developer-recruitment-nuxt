<template>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      :placeholder="placehoder"
      v-model="value"
      @keyup.enter="$emit('on_enter')"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import "./style.scss";
const props = defineProps({
  placehoder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
</script>