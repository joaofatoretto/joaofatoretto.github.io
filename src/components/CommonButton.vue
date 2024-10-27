<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineProps, type PropType } from 'vue';

const props = defineProps({
  icon: {
    type: Object as PropType<IconDefinition>,
    default: null,
  },
  text: {
    type: String,
    default: "",
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: "medium",
  }
});

</script>

<template>
  <button class="common-button" :class="{
    'common-button--small': props.size === 'small',
    'common-button--medium': props.size === 'medium',
    'common-button--large': props.size === 'large'
  }">
    <FontAwesomeIcon class="button-icon" v-if="icon" :icon="icon"></FontAwesomeIcon>
    <span class="button-text">{{ props.text }}</span>
  </button>
</template>

<style scoped>
.common-button {
  display: flex;
  align-items: center;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 8px;
}

.common-button--small {
  font-size: 12px;
  padding: 8px 24px;
  gap: 8px;
}

.common-button--medium {
  font-size: 14px;
  padding: 16px 48px;
  gap: 10px;
}

.common-button--large {
  font-size: 18px;
  padding: 24px 64px;
  gap: 12px;
}

.common-button:hover {
  background-color: var(--color-border-hover);
}

.button-icon img {
  width: 20px;
  height: 20px;
}
</style>
