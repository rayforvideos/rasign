<!-- src/components/DsSwitch.vue -->
<script setup lang="ts">
import { useId } from 'vue';
import styles from '@rasign/styles/components/switch.module.scss';

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
      role="switch"
      :class="styles.hiddenInput"
      :disabled="props.disabled"
    />
    <span :class="styles.track">
      <span :class="styles.thumb" />
    </span>
    <span :class="styles.label">{{ props.label }}</span>
  </label>
</template>
