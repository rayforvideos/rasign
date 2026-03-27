<!-- src/components/DsAvatar.vue -->
<script setup lang="ts">
import styles from '@rasign/styles/components/avatar.module.scss';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const props = withDefaults(defineProps<{
  src?: string;
  alt?: string;
  initials?: string;
  size?: Size;
}>(), {
  size: 'md',
});
</script>

<template>
  <div :class="[styles.avatar, styles[props.size]]">
    <img v-if="props.src" :class="styles.image" :src="props.src" :alt="props.alt ?? ''" />
    <span v-else>{{ props.initials }}</span>
  </div>
</template>
