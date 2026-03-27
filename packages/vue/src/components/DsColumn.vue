<!-- src/components/DsColumn.vue -->
<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';
import styles from '@rayforvideos/styles/components/column.module.scss';

type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between';

const alignMap: Record<Align, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
};

const justifyMap: Record<Justify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const props = withDefaults(
  defineProps<{
    as?: string;
    gap?: string;
    align?: Align;
    justify?: Justify;
  }>(),
  {
    as: 'div',
  },
);

const classes = computed(() =>
  [
    styles.column,
    props.align && alignMap[props.align],
    props.justify && justifyMap[props.justify],
  ].filter(Boolean),
);

const gapStyle = computed<CSSProperties>(() =>
  props.gap ? { gap: `var(--ds-spacing-${props.gap})` } : {},
);
</script>

<template>
  <component :is="props.as" :class="classes" :style="gapStyle">
    <slot />
  </component>
</template>
