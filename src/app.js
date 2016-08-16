var UI = require('ui');
var ajax = require('ajax');
var protocol = ''; //Insert connection protocol (HTTP/HTTPS) here
var username = ''; //Insert username here
var password = ''; //Insert password here
var URL = ''; //Insert control URL for the directions here, which should also include all GET data that should be sent by default
var directions = {
  //Insert all GET data here that is specific for the directions
  'left':'',
  'right':'',
  'up':'',
  'down':''
};

//Configure the main view
var card = new UI.Card({
  body: '                       UP ->\n\n     LEFT/RIGHT ->\n\n\n                 DOWN ->'
});
// Disable the action bar
card.action(false);
//Display main view
card.show();

//Register handlers for all four directions
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

//Control the camera through GET request
function controlCamera(button){
  ajax({
    url: protocol + '://' + username + ':' + password + '@' + URL + directions[button],
  });
}