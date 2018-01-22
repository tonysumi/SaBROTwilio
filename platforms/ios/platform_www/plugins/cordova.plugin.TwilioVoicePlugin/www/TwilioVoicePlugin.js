cordova.define("cordova.plugin.TwilioVoicePlugin.TwilioVoicePlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'TwilioVoicePlugin', 'coolMethod', [arg0]);
};

});
