<script lang="ts" setup>
import { computed } from 'vue';

type ButtonProps = {
  label: string,

  size: 'small' | 'normal' | 'big',

  icon: string,

  iconPosition: 'left' | 'right' | 'top' | 'bottom',

  href: string,

  to: string | object,

  disabled: boolean,

  outline: boolean,

  link: boolean,

  rounded: boolean,

  loading: boolean,
};

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'normal',
  iconPosition: 'left',
});

const classes = computed(() => ({
  'ak-button': true,
  'ak-button--disabled': props.disabled,
  'ak-button--outline': props.outline,
  'ak-button--rounded': props.rounded,
  'ak-button--link': props.link,
  'ak-button--loading': props.loading,
}));

const rootComponent = computed(() => {
  if (props.href) return 'a';
  if (props.to) return 'router-link';
  return 'button';
});
</script>

<template>
  <component
    :is="rootComponent"
    :class="classes"
  >
    <slot>
      <component :is="icon" />
      {{ label }}
    </slot>
  </component>
</template>