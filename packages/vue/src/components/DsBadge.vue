<!-- src/components/DsBadge.vue -->
<script setup lang="ts">
import styles from '@rayforvideos/styles/components/badge.module.scss';

type Variant = 'default' | 'success' | 'danger' | 'warning';

const props = withDefaults(
  defineProps<{
    variant?: Variant;
  }>(),
  {
    variant: 'default',
  },
);
</script>

<template>
  <span :class="[styles.badge, styles[props.variant]]">
    <slot />
  </span>
</template>
