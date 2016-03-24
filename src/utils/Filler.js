export default (obj, fillValue, renderer) => {
  if (fillValue[0] !== "#") {
    return obj.beginBitmapFill(renderer.loadQueue.getResult(fillValue));
  } else {
    return obj.beginFill(fillValue);
  }
}
