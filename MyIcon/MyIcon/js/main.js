(function() {
  'use strict';

  let stage = document.getElementById('stage');
  let ctx;

  let angle = 0;

  let WIDTH = stage.width; // 300
  let HEIGHT = stage.height; // 260

  function draw() {
    let r0 = 50;
    let r1 = 60;

    ctx.save();
    ctx.translate(WIDTH / 2, HEIGHT / 2);


    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 6;
    ctx.beginPath();

    ctx.moveTo(r0 * Math.cos(Math.PI / 180 * angle), r0 * Math.sin(Math.PI / 180 * angle));
    ctx.lineTo(r1 * Math.cos(Math.PI / 180 * angle), r1 * Math.sin(Math.PI / 180 * angle));

    ctx.stroke();

    ctx.restore();
  }

  function update() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    draw();
    angle += 12;
    setTimeout(function() {
      update();
    }, 60);
  }

  if (typeof stage.getContext === 'undefined') {
    return;
  }
  ctx = stage.getContext('2d');

  update();
})();
