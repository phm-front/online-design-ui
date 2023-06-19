import type { CommonProps } from './defaultProps';
import type { TextProps, TextPropsFromMap } from '../h-text/hText';
import type { ImgProps, ImgPropsFromMap } from '../h-picture/hPicture';


type ComponentProps = TextProps | ImgProps;

export type AllComponentType = Partial<CommonProps> & ComponentProps;

export type AllComponentTypeKeys = keyof AllComponentType;

export type PropsToFormCommonAll = TextPropsFromMap | ImgPropsFromMap;
