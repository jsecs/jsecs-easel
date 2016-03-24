import ComponentGenerator from './ComponentGenerator.js'
import ComponentRenderer from './ComponentRenderer.js'
import Filler from './utils/Filler.js'
import _ from 'lodash'

export default (name, drawer, strokeDrawer, moreProps) => {
  console.log(arguments);
  class CustomRenderer extends ComponentRenderer {
    constructor() {
      super(createjs.Shape, (shape, diff, props, renderer) => {
        var main = drawer(Filler(shape.graphics, props.fill, renderer), props, diff)
        shape.x = props.x;
        shape.y = props.y;
      });
    }
  }

  const finalProperties = _.assign({
    x: 0,
    y: 0,
    fill: '#FF0000',
    strokeFill: '#FF0000',
    strokeWidth: 0
  }, moreProps);

  return ComponentGenerator(name, new CustomRenderer(), finalProperties);
}
