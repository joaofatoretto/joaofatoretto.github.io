<template>
  <section class="case-section" :class="{ 'case-section--reversed': reversed }">
    <div class="case-section__content">
      <h2 class="case-section__title">{{ title }}</h2>
      <p class="case-section__text">{{ text }}</p>
      <CommonButton class="case-section__button" text="Conhecer mais" :icon="Icons.imported.faPlay" size="medium" />
    </div>
    <img class="case-section__image" :src="image" :alt="imageAlt" />
  </section>
</template>

<script setup lang="ts">
import CommonButton from './CommonButton.vue'
import { Icons } from '../font-awesome'

defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  reversed: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.case-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 128px;
}

.case-section--reversed {
  flex-direction: row-reverse;
}

.case-section__content {
  max-width: 500px;
}

.case-section__title {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 32px;
}

.case-section__text {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 48px;
}

.case-section__button {
  width: 100%;
}

.case-section__image {
  max-width: 500px;
  height: auto;
  object-fit: cover;
  object-position: center;
}
</style>
