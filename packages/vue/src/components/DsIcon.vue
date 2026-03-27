<!-- src/components/DsIcon.vue -->
<script setup lang="ts">
import styles from '@rasign/styles/components/icon.module.scss';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const props = withDefaults(
  defineProps<{
    size?: Size;
    label: string;
  }>(),
  {
    size: 'md',
  },
);
</script>

<template>
  <span :class="[styles.icon, styles[props.size]]" role="img" :aria-label="props.label">
    <slot />
  </span>
</template>
