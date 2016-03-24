import EaselRenderer, {CreateShapeComponent} from '../../src/index.js'
import {ECS, System, Entity, PeriodicSystem} from 'jsecs-core'

const engine = new ECS();
const Renderer = new EaselRenderer(engine, "canvas");

const CircleComponent = CreateShapeComponent('circle', {
  color: 'red',
  x: 100,
  y: 200,
  radius: 50
}, (shape, that) => {
  shape.graphics.beginFill(that.color).drawCircle(0, 0, that.radius);
});

const beginSystem = new System(engine, (entities) => {
  entities.add(new Entity().attachGroup(CircleComponent));
});

const MoveSystem = new PeriodicSystem(engine, (entities) => {
  entities.forEach(({circle}) => {
    circle.x++;
  });
}, 100);

MoveSystem.start();

beginSystem.runNow();

console.log(Renderer, "canvas");
