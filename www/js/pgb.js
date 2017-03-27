function init() {
	document.addEventListener("deviceready", onDeviceReady(), false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n')
}

function positionGet() {
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

function onError() {
    alert('onError!');
}