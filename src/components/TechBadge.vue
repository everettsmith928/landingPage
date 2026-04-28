<template>
  <span class="tech-badge">
    <svg
      v-if="iconPath"
      class="tech-badge__icon"
      :viewBox="iconViewBox"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      :aria-label="iconTitle"
    >
      <title>{{ iconTitle }}</title>
      <path :d="iconPath" fill="currentColor" />
    </svg>
    <span v-if="showLabel" class="tech-badge__label">{{ iconTitle }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue';
import {
  siVuedotjs,
  siDocker,
  siNodedotjs,
  siTypescript,
  siGoogle,
  siExpress,
} from 'simple-icons';

const SLUG_TO_SIMPLE_ICON = {
  vue: siVuedotjs,
  docker: siDocker,
  node: siNodedotjs,
  typescript: siTypescript,
  google: siGoogle,
  express: siExpress,
};

// Simple Icons does not ship Amazon/AWS marks; provide custom monochrome SVGs here.
const CUSTOM_ICONS = {
  aws: {
    title: 'AWS',
    viewBox: '0 0 24 24',
    path: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
  },
};

const props = defineProps({
  slug: { type: String, required: true },
  label: { type: String, default: '' },
  showLabel: { type: Boolean, default: true },
});

const resolved = computed(() => {
  if (CUSTOM_ICONS[props.slug]) return CUSTOM_ICONS[props.slug];
  const icon = SLUG_TO_SIMPLE_ICON[props.slug];
  return icon ? { title: icon.title, viewBox: '0 0 24 24', path: icon.path } : null;
});

const iconPath = computed(() => resolved.value?.path ?? null);
const iconViewBox = computed(() => resolved.value?.viewBox ?? '0 0 24 24');
const iconTitle = computed(() => props.label || resolved.value?.title || props.slug);
</script>

<style scoped lang="scss">
.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  padding: .35rem .7rem;
  border: 1px solid $palm-leaf;
  border-radius: 999px;
  background-color: rgba($palm-leaf, 0.08);
  color: $palm-leaf;
  font-family: $font-sans-serif;
  font-size: .8rem;
  line-height: 1;
  white-space: nowrap;
}

.tech-badge__icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  display: block;
}

.tech-badge__label {
  font-weight: 500;
  letter-spacing: .02em;
}
</style>
