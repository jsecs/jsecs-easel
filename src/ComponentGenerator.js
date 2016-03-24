import {Component, ComponentGroup} from 'jsecs-core'

const generateComponentGroup = (name, renderer, defaultProps) => {
  const easelComponent = new Component('easelRenderable', {
    rendererId: renderer.id,
    componentName: name
  });
  const rendererComponent = new Component(name, defaultProps);
  return new ComponentGroup(easelComponent, rendererComponent);
}

export default generateComponentGroup;
