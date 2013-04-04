function onPhotoDataSuccess() {
	//
}

function onFail() {
	//
}

function testCam() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL 
	});
}

var app = {
    // Application Constructor
    initialize: function() {
    	console.log('initializing...');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        navigator.notification.alert(
		        'Cordova is ready!',       // message
		        function() {},  // callback
		        'Congratulations',            // title
		        'Done'                      // buttonName
		       );
    }
};
$('map area').each(function(){ // Loop through all the image map <area> tags
    // Set a default transition
    var DEFAULT_TRANSITION = 'slide';
    // Hijack image map click events to fix transitions and reverse direction
    $(this).bind('tap',function(e){
        // Prevent default action
        e.preventDefault();
        // Check for the data-transition attribute on the area tag
        var transition = ($(this).data().hasOwnProperty('transition')) ? $(this).data().transition : DEFAULT_TRANSITION;
        // Call the changePage method, including the transition slug
        $.mobile.changePage($(this).attr('href'),{transition:transition});
     });
});