<script setup lang="ts">
import { ref } from 'vue'
import Test1 from './Test1.vue'

const props = defineProps<{ name: string }>()

const message = ref('hello')

const msg = 'test'
</script>
<template>
	<div>{{ message }}</div>
	<Test1 />
</template>
