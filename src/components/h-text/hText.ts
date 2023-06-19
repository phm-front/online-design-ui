import { commonDefaultProps } from '../utils/defaultProps';
import type { CommonProps } from '../utils/defaultProps';
import { without } from 'lodash-es';
import type { PropsToFormCommon } from '../utils/defaultProps';
import { getTargetValue } from '../../utils/commonFun';

export const textDefaultProps = {
  ...commonDefaultProps,
  text: '',
  tag: 'div',
  // 样式属性
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: 1,
  textAlign: 'left',
  color: '#000000',
  backgroundColor: ''
};

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'tag', 'text', 'actionType', 'url'
);

export interface TextProps {
  // text
  text: string;
  tag?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  lineHeight?: number;
  textAlign?: string;
  color?: string;
  backgroundColor?: string;
}

export type TextPropsType = TextProps & Partial<CommonProps>;

export type TextPropsFromMap = PropsToFormCommon<TextPropsType>;

export const textPropsFromMap: TextPropsFromMap = {
  text: {
    label: '文本：',
    component: 'a-textarea',
    extraProps: { rows: 3 },
    resultTransform: getTargetValue
  },
  fontSize: {
    label: '字号：',
    component: 'a-input-number',
    initialTransform: (value: string) => parseInt(value),
    resultTransform: (value: any) => value + 'px'
  },
  lineHeight: {
    label: '行高：',
    component: 'a-slider',
    extraProps: {
      min: 0,
      max: 3,
      step: 0.1
    }
  },
  textAlign: {
    label: '对齐：',
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    options: [
      { label: '左', value: 'left' },
      { label: '中', value: 'center' },
      { label: '右', value: 'right' }
    ],
    resultTransform: getTargetValue
  },
  fontFamily: {
    label: '字体：',
    component: 'a-select',
    subComponent: 'a-select-option',
    options: [
      { label: '默认', value: '' },
      { label: '宋体', value: '"SimSun","STSong"' },
      { label: '黑体', value: '"SimHei","STHeiTi"' },
      { label: '楷体', value: '"KaiTi","STKaiti"' },
      { label: '仿宋', value: '"FangSong","STFangsong"' },
    ]
  },
  color: {
    label: '文字颜色：',
    component: 'color-picker',
  }
}
