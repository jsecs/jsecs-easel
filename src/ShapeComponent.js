import {Component, ComponentGroup} from 'jsecs-core'

const convertIntoNamespace = (name) => name;
export const shapeComponentName = convertIntoNamespace('shape');
const renderComponent = new Component(convertIntoNamespace('renderable'), {
  target: shapeComponentName
});

class RenderComponent extends Component {
  static renderers = {};
  static render (name, shape, props) {
    RenderComponent.renderers[name].renderCode(shape, props);
  }
  constructor(name, defaultAttributes, renderCode) {
    const realName = convertIntoNamespace(name);
    super(realName, defaultAttributes);
    this.renderCode = renderCode;
    RenderComponent.renderers[realName] = this;
  }
}

const newComponent = (name, attrs, renderCode) => {
  const comp = new RenderComponent(name, attrs, renderCode);
  const compName = comp.getName();
  const shapeComp = new Component(shapeComponentName, {
    target: compName
  });
  return new ComponentGroup(renderComponent, shapeComp, comp);
}

export default newComponent;
export const render = RenderComponent.render;
