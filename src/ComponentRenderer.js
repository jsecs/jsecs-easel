export default class ComponentRenderer {
  static renderers = {};
  static lastId = 0;

  constructor(constructor, renderCallback) {
    this.constructor = constructor;
    this.renderCallback = renderCallback;
    this.id = ComponentRenderer.lastId++;
    ComponentRenderer.renderers[this.id] = this;
  }

  construct () {
    return new this.constructor();
  }

  applyChanges(easelObject, changes, props) {
    this.renderCallback(easelObject, changes, props);
  }

  getId() {
    return this.id;
  }
  static getRenderer(id) {
    return ComponentRenderer.renderers[id];
  }
}
