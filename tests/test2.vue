<script setup lang="ts">
import { ref } from 'vue'
import Test1 from './Test1.vue'

defineProps<{ name: string }>()

const message = ref('hello')
</script>
<template>
  <div>{{ message }}</div>
  <Test1 />
</template>
