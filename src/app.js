var UI = require('ui');
var ajax = require('ajax');
var URL = 'http://username:password@url.com/nphControlCamera?Resolution=160x120&Direction=';
var directions = {'left':'PanLeft', 'right':'PanRight', 'up':'TiltUp', 'down':'TiltDown'};
var card = new UI.Card({
  body: '                       UP ->\n\n     LEFT/RIGHT ->\n\n\n                 DOWN ->'
});

// Disable the action bar
card.action(false);
card.show();

card.on('click', 'up', function() {
  controlCamera('up');
});

card.on('click', 'down', function() {
  controlCamera('down');
});

card.on('click', 'select', function() {
  controlCamera('left');
});

card.on('longClick', 'select', function() {
  controlCamera('right');
});

function controlCamera(button){
  ajax({
    url: URL + directions[button],
  });
}