<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(1)">最前页</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">上一页</a>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">下一页</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(totalPages)">最后页</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

const emits = defineEmits(['pageChanged']);

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emits('pageChanged', page);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.page-item {
  margin: 0 0.25rem;
}

.page-link {
  cursor: pointer;
  text-decoration: none;
  color: #007bff;
}

.page-item.disabled .page-link {
  cursor: not-allowed;
  color: #ccc;
}

.page-item.active .page-link {
  font-weight: bold;
  color: #333;
}
</style>