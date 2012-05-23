// Create a "marker" overlay.
var markerImage = gapi.hangout.av.effects.createImageResource( 'https://donuthorns.appspot.com/static/x.png' )
  , marker = markerImage.createOverlay( {
        scale: {
            magnitude: 0.25
          , reference: gapi.hangout.av.effects.ScaleReference.HEIGHT
        }
    } );
marker.setVisible( true );

// Move the marker back and forth horizontally
var posX = 0, direction = 1;
setInterval( function() {
    if( posX <= -0.5 || posX >= 0.5 ) {
        direction = -direction;
    }

    posX += direction * 0.1;
    marker.setPosition( posX, 0 );
}, 100);
