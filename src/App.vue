<script setup lang="ts">
import { computed, ref } from "vue";

const numberCount = ref(6);

const minimumNumber = ref(1);
const maximumNumber = ref(40);

const generateRandomNumberBetween = (minimum: number, maximum: number) => {
  minimum = Math.ceil(minimum);
  maximum = Math.floor(maximum);

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

const randomNumbers = computed(() =>
  new Array(numberCount.value)
    .fill(undefined)
    .map(() =>
      generateRandomNumberBetween(minimumNumber.value, maximumNumber.value)
    )
);
</script>

<template>
  <main>
    <article data-test="random-numbers">
      <section
        v-for="(randomNumber, index) in randomNumbers"
        :key="index"
        :data-test="`random-number-${index}`"
      >
        {{ randomNumber }}
      </section>
    </article>

    <section data-test="controls">
      <input
        v-model.number="minimumNumber"
        type="number"
        data-test="minimum-number"
      />
      <input
        v-model.number="maximumNumber"
        type="number"
        data-test="maximum-number"
      />
      <input
        v-model.number="numberCount"
        type="number"
        data-test="number-count"
      />
      <button data-test="regenerate-random-numbers">regenerate</button>
    </section>
  </main>
</template>
