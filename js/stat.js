'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var TEXT_PADDING_X = 210;
var TEXT_VICTORY_Y = 50;
var TEXT_LIST_Y = 70;
var GAP = 50;
var COLUMN_WIDTH = 40;
var GISTOGRAM_HEIGHT = 150;
var GISTOGRAM_TOP_PADDING = 240;
var TIMES_TOP_PADDING = 235;
var LABELS_TOP_PADDING = 260;
var CLOUD_X = 110;
var CLOUD_Y = 10;


var renderCloud = function (x, y, color, ctx) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i]>max){
      max = arr[i];
    }
  }
  return max;
};


window.renderStatistics = function (ctx, names, times) {
 renderCloud(CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0,0,0,0.7)', ctx);
 renderCloud(CLOUD_X, CLOUD_Y,'#fff', ctx);
 ctx.fillStyle = '#000';
 ctx.font = '16px PT Mono';
 ctx.fillText('Ура вы победили!', TEXT_PADDING_X, TEXT_VICTORY_Y);
 ctx.fillText('Список результатов:', TEXT_PADDING_X, TEXT_LIST_Y);

 var maxTime = Math.round(getMaxElement(times));
 var height = [];
 for (var i = 0; i < names.length; i++ ) {

   height[i] = (Math.round(times[i])*GISTOGRAM_HEIGHT / maxTime);

    if (names[i] === 'Вы') {
     ctx.globalAlpha = 1;
     ctx.fillStyle = 'rgba(255, 0, 0, 1)'; }

    else {
     ctx.globalAlpha = Math.random();
     ctx.fillStyle = 'blue'; }

   ctx.fillText(Math.round(times[i]), TEXT_PADDING_X + i*GAP, TIMES_TOP_PADDING-height[i]);

   ctx.fillRect(TEXT_PADDING_X + i*GAP, GISTOGRAM_TOP_PADDING-height[i], COLUMN_WIDTH, height[i]);

   ctx.fillText(names[i], TEXT_PADDING_X + i*GAP, LABELS_TOP_PADDING);

  }

};
