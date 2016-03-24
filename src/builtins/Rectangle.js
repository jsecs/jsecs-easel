import ComponentGenerator from '../ComponentGenerator.js'
import ComponentRenderer from '../ComponentRenderer.js'

class RectangleRenderer extends ComponentRenderer {
  constructor() {
    super(createjs.Shape, (shape, diff, props) => {
      shape.graphics.beginFill(props.color).drawRect(0, 0, props.width, props.height);
      shape.x = props.x;
      shape.y = props.y;
    });
  }
}

const circle = ComponentGenerator('rectangle', new RectangleRenderer(), {
  x: 0,
  y: 0,
  width: 300,
  height: 100,
  color: 'blue',
});

export default circle;

