<template>
  <img
    :style="styleProps"
    @click.prevent="handleClick"
    :src="src"
    class="h-picture"
  >
</template>
<script setup lang="ts">
import { useComponentCommon } from '../../hooks/useComponentCommon';
import { imgDefaultProps, imgStylePropNames } from './hPicture';
import type { ImgPropsType } from './hPicture';

defineOptions({ name: 'HPicture' })

const props = withDefaults(
  defineProps<ImgPropsType>(),
  imgDefaultProps
);

const { styleProps, handleClick } = useComponentCommon<ImgPropsType>(
  props,
  imgStylePropNames
);
</script>
