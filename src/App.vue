<template>
  <main>
    <article data-test="random-numbers">
      <section
        v-for="index in [...Array(6).keys()]"
        :key="index"
        :data-test="`random-number-${index}`"
      >
        {{ index }}
      </section>
    </article>

    <section data-test="controls">
      <input type="number" data-test="minimum-number" value="1" />
      <input type="number" data-test="maximum-number" value="40" />
      <input type="number" data-test="number-count" value="6" />
      <button data-test="regenerate-random-numbers">regenerate</button>
    </section>
  </main>
</template>
