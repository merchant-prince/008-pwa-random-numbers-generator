<script setup lang="ts">
import { ref } from "vue";

const numberCount = ref(6);
</script>

<template>
  <main>
    <article data-test="random-numbers">
      <section
        v-for="index in [...Array(numberCount).keys()]"
        :key="index"
        :data-test="`random-number-${index}`"
      >
        {{ index }}
      </section>
    </article>

    <section data-test="controls">
      <input type="number" data-test="minimum-number" value="1" />
      <input type="number" data-test="maximum-number" value="40" />
      <input
        v-model.number="numberCount"
        type="number"
        data-test="number-count"
      />
      <button data-test="regenerate-random-numbers">regenerate</button>
    </section>
  </main>
</template>
