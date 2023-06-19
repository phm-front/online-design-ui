<template>
  <component
    :is="tag"
    :style="styleProps"
    class="h-text"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>
<script setup lang="ts">
import { useComponentCommon } from '../../hooks/useComponentCommon';
import { textDefaultProps, textStylePropNames } from './hText';
import type { TextPropsType } from './hText';

defineOptions({ name: 'HText' });

const props = withDefaults(
  defineProps<TextPropsType>(),
  textDefaultProps
);

const { styleProps, handleClick } = useComponentCommon<TextPropsType>(
  props,
  textStylePropNames
);
</script>
