import {System} from 'jsecs-core'
import ComponentRenderer from './ComponentRenderer.js'

var lastEvent = null;

export default class Renderer {
  constructor(engine, id){
    this.engine = engine;
    this.domId = id;
    this.stage = new createjs.Stage(this.domId);
    this.renderables = {};

    this.loadQueue = new createjs.LoadQueue(true);

    const renderSystem = new System(this.engine, (entities) => {
      entities.forEach(({easelRenderable}) => {
        const entity = easelRenderable.getEntity();
        const entityId = entity.id;
        const {rendererId, componentName} = easelRenderable;
        const renderer = ComponentRenderer.getRenderer(rendererId);
        if (typeof this.renderables[entityId] === 'undefined') {
          this.renderables[entityId] = renderer.construct();
          this.stage.addChild(this.renderables[entityId]);
        }
        const easelObject = this.renderables[entityId];
        const props = entity[componentName];
        renderer.applyChanges(easelObject, props, props, this) // not computing diff at the moment
      });
      this.stage.update(lastEvent);
    });

    createjs.Ticker.addEventListener("tick", (event) => {
      if (!event.paused) {
        lastEvent = event;
        renderSystem.runNow();
      }
    });
  }

  loadFile(id, src) {
    this.loadQueue.loadFile({
      id, src
    });
  }
}
