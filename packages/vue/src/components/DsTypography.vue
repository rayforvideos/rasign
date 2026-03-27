<!-- src/components/DsTypography.vue -->
<script setup lang="ts">
import styles from '@rayforvideos/styles/components/typography.module.scss';

type Variant =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'code';

const variantClassMap: Record<Variant, string> = {
  'heading-xl': styles.headingXl,
  'heading-lg': styles.headingLg,
  'heading-md': styles.headingMd,
  'heading-sm': styles.headingSm,
  body: styles.body,
  'body-sm': styles.bodySm,
  caption: styles.caption,
  code: styles.code,
};

const props = withDefaults(
  defineProps<{
    as?: string;
    variant: Variant;
  }>(),
  {
    as: 'p',
  },
);
</script>

<template>
  <component :is="props.as" :class="[styles.typography, variantClassMap[props.variant]]">
    <slot />
  </component>
</template>
