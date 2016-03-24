import ShapeRendererGenerator from '../ShapeRendererGenerator.js'

const drwawer = (shape, props, diff) => {
  return shape.drawCircle(0, 0, props.radius);
}

const strokeDrawer = (shape, props, diff) => {
  return shape;
}

export default ShapeRendererGenerator('circle', drwawer, strokeDrawer, {
  radius: 50
});
