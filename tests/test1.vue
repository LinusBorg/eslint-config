<template>
  <div>
    <ul>
      <li v-for="x in items" :key="x">
        {{ x }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      items: [1, 2, 3],
    }
  },
})
</script>
