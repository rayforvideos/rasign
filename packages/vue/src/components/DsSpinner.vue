<!-- src/components/DsSpinner.vue -->
<script setup lang="ts">
import styles from '@rayforvideos/styles/components/spinner.module.scss';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const props = withDefaults(
  defineProps<{
    size?: Size;
    label?: string;
  }>(),
  {
    size: 'md',
    label: 'Loading',
  },
);
</script>

<template>
  <div :class="[styles.spinner, styles[props.size]]" role="status" :aria-label="props.label" />
</template>
