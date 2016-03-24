import EaselRenderer, {CreateShapeComponent} from '../../src/index.js'
import {ECS, System, Entity, PeriodicSystem} from 'jsecs-core'
import Circle from '../../src/builtins/Circle'
import Rectangle from '../../src/builtins/Rectangle'

const engine = new ECS();
const Renderer = new EaselRenderer(engine, "canvas");

const beginSystem = new System(engine, (entities) => {
  entities.add(new Entity().attachGroup(Circle));
  entities.add(new Entity().attachGroup(Rectangle));
});

const MoveSystem = new PeriodicSystem(engine, (entities) => {
  entities.forEach(({circle}) => {
    circle.x++;
    circle.color = '#'+Math.floor(Math.random()*16777215).toString(16);
  });

  entities.forEach(({rectangle}) => {
    rectangle.x += 3;
  });
}, 100);

MoveSystem.start();
beginSystem.runNow();
