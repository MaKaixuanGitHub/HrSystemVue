<template>
  <div v-if="visible" :class="`alert alert-${type}`" role="alert">
    <button type="button" class="btn-close" aria-label="Close" @click="closeAlert"></button>
    {{ message }}
  </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'danger', // 默认类型为错误提示 info warn
  },
  message: {
    type: String,
    required: true, // 提示框的消息内容
  },
  duration: {
    type: Number,
    default: 5000, // 默认5秒后自动关闭
  },
});

const visible = ref(true);

// 监听 message 属性的变化，重置 visible 状态
watch(() => props.message, () => {
    console.log("watch" + props.message)
  visible.value = true;
  startAutoCloseTimer();
});

const closeAlert = () => {
  visible.value = false;
};

const startAutoCloseTimer = () => {
  setTimeout(() => {
    closeAlert();
  }, props.duration);
};

startAutoCloseTimer();
</script>

<style scoped>
.alert {
  position: relative;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.btn-close {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  background: none;
  border: none;
}
</style>