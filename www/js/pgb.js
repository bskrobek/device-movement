function init() {
	document.addEventListener("deviceready",onSuccess(acceleration), false);
}

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n')
		  
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

function onError() {
    alert('onError!');
}