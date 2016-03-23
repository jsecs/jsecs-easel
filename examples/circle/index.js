import EaselRenderer from '../../src/index.js'
import {ECS} from 'jsecs-core'

const engine = new ECS();
const Renderer = new EaselRenderer(engine);

console.log(Renderer);
