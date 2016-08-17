var UI = require('ui');
var ajax = require('ajax');
var Settings = require('settings');
var Platform = require('platform');

//Define configuration page
Settings.config({
  url: 'https://stuiterveer.com/pebbleconfig/202143fc-2f98-4f6b-87b8-af6ee27eea7b/index.html'
});

//Initialize the main view
var card = new UI.Card();
//Create the body of the main view depending on the platform version (round models have a different screen layout)
if (Platform.version() === 'chalk'){
  card.body('                      UP ->\n\n             LEFT/RIGHT ->\n\n              DOWN ->');
} else {
  card.body('                       UP ->\n\n     LEFT/RIGHT ->\n\n\n                 DOWN ->');
}
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
    url: Settings.option('protocol') + '://' + Settings.option('username') + ':' + Settings.option('password') + '@' + Settings.option('URL') + Settings.option(button)
  });
}