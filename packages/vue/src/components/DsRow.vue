<!-- src/components/DsRow.vue -->
<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';
import styles from '@rasign/styles/components/row.module.scss';

type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

const alignMap: Record<Align, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
  baseline: styles.alignBaseline,
};

const justifyMap: Record<Justify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
  around: styles.justifyAround,
  evenly: styles.justifyEvenly,
};

const props = withDefaults(defineProps<{
  as?: string;
  gap?: string;
  align?: Align;
  justify?: Justify;
  wrap?: boolean;
}>(), {
  as: 'div',
});

const classes = computed(() => [
  styles.row,
  props.align && alignMap[props.align],
  props.justify && justifyMap[props.justify],
  props.wrap && styles.wrap,
].filter(Boolean));

const gapStyle = computed<CSSProperties>(() =>
  props.gap ? { gap: `var(--ds-spacing-${props.gap})` } : {},
);
</script>

<template>
  <component :is="props.as" :class="classes" :style="gapStyle">
    <slot />
  </component>
</template>
