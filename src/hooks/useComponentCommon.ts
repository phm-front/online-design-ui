import { pick } from 'lodash-es';
import type { CommonProps } from '../components/utils/defaultProps';
import type { StyleValue, ComputedRef } from 'vue';
import { computed } from 'vue';


export const useComponentCommon = <T extends CommonProps | Partial<CommonProps>>(
  props: T,
  pickerNames: string[]
) => {
  const styleProps = computed(() => pick(props, pickerNames)) as ComputedRef<StyleValue>;

  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.open(props.url, '_self')
    }
  };
  return {
    styleProps,
    handleClick
  };
};
