<script setup lang="ts">
import { computed, ref } from "vue";

const numberCount = ref(6);

const minimumNumber = ref(1);
const maximumNumber = ref(40);

const regenerationSwitch = ref(true);

const randomNumbers = computed(() => {
  regenerationSwitch.value;

  return new Array(Math.abs(maximumNumber.value - minimumNumber.value) + 1)
    .fill(minimumNumber.value)
    .map((value, index) => value + index)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, numberCount.value);
});

const isRotating = ref(false);

const rotateFor = (duration: number) => {
  if (!isRotating.value) {
    isRotating.value = true;
    setTimeout(() => {
      isRotating.value = false;
    }, duration);
  }
};

const regenerateRandomNumbers = () => {
  rotateFor(300);

  regenerationSwitch.value = !regenerationSwitch.value;
};
</script>

<template>
  <main class="w-full h-full flex flex-col justify-center items-center">
    <article
      class="flex-1 flex items-center lg:items-end"
      data-test="random-numbers"
    >
      <div
        class="grid grid-cols-6 gap-2"
        :class="{
          'sm:grid-cols-8': numberCount > 6,
          'md:grid-cols-10': numberCount > 8,
          'lg:grid-cols-12': numberCount > 10,
        }"
      >
        <section
          v-for="(randomNumber, index) in randomNumbers"
          :key="index"
          class="p-3 rounded-lg bg-primary-500 drop-shadow-bold text-center"
          :data-test="`random-number-${index}`"
        >
          {{ randomNumber }}
        </section>
      </div>
    </article>

    <section
      class="w-80 sm:w-96 md:w-1/2 lg:w-1/3 px-3 py-2 flex lg:flex-1 justify-between lg:justify-top"
      data-test="controls"
    >
      <div class="flex space-x-4">
        <div class="flex items-center space-x-2">
          <input
            v-model.number="minimumNumber"
            type="number"
            class="w-12 p-1 border-2 border-secondary-800 rounded hide-number-controls focus:outline-none"
            data-test="minimum-number"
          />
          <span>&#8211;</span>
          <input
            v-model.number="maximumNumber"
            type="number"
            class="w-12 p-1 border-2 border-secondary-800 rounded hide-number-controls focus:outline-none"
            data-test="maximum-number"
          />
        </div>
        <div class="flex space-x-1 items-center">
          <p class="text-secondary-800">#</p>
          <input
            v-model.number="numberCount"
            type="number"
            class="w-12 p-1 border-2 border-secondary-800 rounded hide-number-controls focus:outline-none"
            data-test="number-count"
          />
        </div>
      </div>
      <button
        class="focus:outline-none"
        data-test="regenerate-random-numbers"
        @click="regenerateRandomNumbers"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 -scale-x-100 text-secondary-800 cursor-pointer"
          :class="
            isRotating ? 'transition duration-500 rotate-180 text-blue-800' : ''
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </section>
  </main>
</template>
