import ComponentGenerator from '../ComponentGenerator.js'
import ComponentRenderer from '../ComponentRenderer.js'

class CircleRenderer extends ComponentRenderer {
  constructor() {
    super(createjs.Shape, (shape, diff, props) => {
      shape.graphics.beginFill(props.color).drawCircle(0, 0, props.radius);
      shape.x = props.x;
      shape.y = props.y;
    });
  }
}

const circle = ComponentGenerator('circle', new CircleRenderer(), {
  x: 0,
  y: 0,
  color: 'red',
  radius: 100
});

export default circle;

