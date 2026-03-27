<!-- src/components/DsInput.vue -->
<script setup lang="ts">
import styles from '@rasign/styles/components/input.module.scss';

const props = withDefaults(
  defineProps<{
    error?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
  }>(),
  {},
);

const model = defineModel<string>({ default: '' });
</script>

<template>
  <input
    v-model="model"
    :class="[styles.input, props.error && styles.error, props.fullWidth && styles.fullWidth]"
    :disabled="props.disabled"
    v-bind="$attrs"
  />
</template>
