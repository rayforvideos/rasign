<!-- src/components/DsSurface.vue -->
<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';
import styles from '@rasign/styles/components/surface.module.scss';

type Elevation = 'sm' | 'md' | 'lg' | 'xl';
type Rounded = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const elevationMap: Record<Elevation, string> = {
  sm: styles.elevationSm,
  md: styles.elevationMd,
  lg: styles.elevationLg,
  xl: styles.elevationXl,
};

const roundedMap: Record<Rounded, string> = {
  sm: styles.roundedSm,
  md: styles.roundedMd,
  lg: styles.roundedLg,
  xl: styles.roundedXl,
  full: styles.roundedFull,
};

const props = withDefaults(defineProps<{
  as?: string;
  elevation?: Elevation;
  rounded?: Rounded;
  bordered?: boolean;
  padding?: string;
}>(), {
  as: 'div',
});

const classes = computed(() => [
  styles.surface,
  props.elevation && elevationMap[props.elevation],
  props.rounded && roundedMap[props.rounded],
  props.bordered && styles.bordered,
].filter(Boolean));

const paddingStyle = computed<CSSProperties>(() =>
  props.padding ? { padding: `var(--ds-spacing-${props.padding})` } : {},
);
</script>

<template>
  <component :is="props.as" :class="classes" :style="paddingStyle">
    <slot />
  </component>
</template>
