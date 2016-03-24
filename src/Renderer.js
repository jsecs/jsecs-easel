import {System} from 'jsecs-core'
import {shapeComponentName, render as shapeRender} from './ShapeComponent.js'
const convertIntoNamespace = (name) => name;

var lastEvent = null;

export default class Renderer {
  constructor(engine, id){
    this.engine = engine;
    this.domId = id;
    this.stage = new createjs.Stage(this.domId);
    this.shapes = {};
    this.stage.update();

    const renderSystem = new System(this.engine, (entities) => {
      entities.forEach((entity) => {
        const type = entity[convertIntoNamespace('renderable')].target;
        const id = entity.id;
        switch(type) {
          case shapeComponentName:
            const finalTarget = entity[shapeComponentName].target;
            const props = entity[finalTarget];
            if (typeof this.shapes[id] === 'undefined') {
              this.shapes[id] = new createjs.Shape();
              this.stage.addChild(this.shapes[id]);
            }
            const shape = this.shapes[id];
            shapeRender(finalTarget, shape, props);
            shape.x = props.x;
            shape.y = props.y;
            break;
          default: 
            throw "Unknown render target"
        }
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
}
