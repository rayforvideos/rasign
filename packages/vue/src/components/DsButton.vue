<!-- src/components/DsButton.vue -->
<script setup lang="ts">
import styles from '@rayforvideos/styles/components/button.module.scss';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    disabled?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
  },
);
</script>

<template>
  <button
    :class="[
      styles.button,
      styles[props.variant],
      styles[props.size],
      props.fullWidth && styles.fullWidth,
    ]"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>
