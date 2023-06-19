export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type 
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
}

export type CommonProps = {
  actionType: string;
  url: string;
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  boxShadow: string;
  opacity: number;
  position: string;
  left: string;
  top: string;
  right: string;
}

export type PropsToFormCommon<T> = {
  [key in keyof T]: {
    label?: string;
    component: string;
    subComponent?: string;
    options?: { label: string; value: any }[];
    valuePropName?: string;
    value?: any;
    extraProps?: { [key: string]: any };
    eventName?: string;
    initialTransform?: (value: any) => any;
    resultTransform?: (value: any) => any;
  }
}
