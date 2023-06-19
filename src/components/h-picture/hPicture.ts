import { commonDefaultProps } from '../utils/defaultProps';
import { without } from 'lodash-es';

import type { CommonProps } from '../utils/defaultProps';
import type { PropsToFormCommon } from '../utils/defaultProps';

export const imgDefaultProps = {
  ...commonDefaultProps,
  src: '',
  // 样式属性
}

export const imgStylePropNames = without(
  Object.keys(imgDefaultProps),
  'src', 'actionType', 'url'
);

export interface ImgProps {
  // text
  src: string;
}

export type ImgPropsType = ImgProps & Partial<CommonProps>;

export type ImgPropsFromMap = PropsToFormCommon<ImgPropsType>;

export const imgPropsFromMap: ImgPropsFromMap = {
  src: {
    label: '图片路径：',
    component: 'a-input',
  },
  width: {
    label: '宽度：',
    component: 'a-input-number',
    initialTransform: (value: string) => parseInt(value),
    resultTransform: (value: any) => value + 'px'
  },
}
