import { run } from './engine';

const init = () => {};
const update = () => {};
const draw = ctx => {
  ctx.globalCompositeOperation = 'source-over';
  ctx.save();
  ctx.clearRect(0, 0, 128, 128);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(1, 1);

  ctx.fillStyle = '#09F';
  ctx.fillRect(30, 30, 30, 30);

  ctx.print('bounceback 1.0', 40, 40, 'red');

  // set composite mode
  this.ctx.globalCompositeOperation = 'source-in';

  this.ctx.fillStyle = fillColor;
  this.ctx.fillRect(0, 0, this.width, this.height);

  // fill background in canvas itself
  this.ctx.globalCompositeOperation = 'destination-over';
};

run(init, update, draw);
