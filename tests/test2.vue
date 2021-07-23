<script setup lang="ts">
import { ref } from 'vue'
import Test1 from './test1.vue'

const message = ref('hello')
</script>
<template>
  <div>{{ message }}</div>
  <Test1 />
</template>
