<!-- src/components/DsDivider.vue -->
<script setup lang="ts">
import styles from '@rayforvideos/styles/components/divider.module.scss';

type Orientation = 'horizontal' | 'vertical';

const props = withDefaults(
  defineProps<{
    orientation?: Orientation;
  }>(),
  {
    orientation: 'horizontal',
  },
);
</script>

<template>
  <hr
    :class="[styles.divider, styles[props.orientation]]"
    role="separator"
    :aria-orientation="props.orientation"
  />
</template>
