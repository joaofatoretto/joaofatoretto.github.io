<script setup lang="ts">
import CommonButton from './CommonButton.vue';
import { Icons } from '../font-awesome';
</script>

<template>
  <div class="hero-section">
    <h1>Se não for pra mergulhar de cabeça, eu nem vou.</h1>
    <CommonButton text="Conhecer mais" :icon="Icons.imported.faPlay" size="large"></CommonButton>
  </div>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--semantic-primary-default);
  gap: 48px;
  height: 700px;
  padding: 128px;
}

h1 {
  color: #000;
  font-weight: 900;
  font-size: 64px;
  text-align: center;
  line-height: 64px;
}
</style>
