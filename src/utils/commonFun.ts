interface LikeEvent {
  target: {
    value: any;
  };
}
// 获取事件对象的值
export const getTargetValue = (value: LikeEvent) =>
  value.target.value;

// 获取图片原始宽高
export const getImgNaturalSize = (url: string | File) => {
  return new Promise<{ width: number, height: number }>((resolve, reject) => {
    const img = new Image();
    img.src = typeof url === 'string' ? url : URL.createObjectURL(url);
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.onerror = () => {
      reject('图片加载失败');
    };
  })
}
