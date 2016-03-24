import ShapeRendererGenerator from '../ShapeRendererGenerator.js'

const drwawer = (shape, props, diff) => {
  return shape.drawRect(0, 0, props.width, props.height);
}

const strokeDrawer = (shape, props, diff) => {
  return shape;
}

export default ShapeRendererGenerator('rectangle', drwawer, strokeDrawer, {
  width: 300,
  height: 100
});
