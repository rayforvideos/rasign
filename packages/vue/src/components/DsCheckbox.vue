<!-- src/components/DsCheckbox.vue -->
<script setup lang="ts">
import { useId } from 'vue';
import styles from '@rasign/styles/components/checkbox.module.scss';

const props = defineProps<{
  label: string;
  disabled?: boolean;
}>();

const model = defineModel<boolean>({ default: false });
const id = useId();
</script>

<template>
  <label :class="[styles.wrapper, props.disabled && styles.disabled]" :for="id">
    <input
      :id="id"
      v-model="model"
      type="checkbox"
      :class="styles.checkbox"
      :disabled="props.disabled"
    />
    <span :class="styles.label">{{ props.label }}</span>
  </label>
</template>
