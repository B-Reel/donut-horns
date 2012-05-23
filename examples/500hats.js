for( var i = 0, hat, hatOverlay; i < 500; i++ ) {
    hat = gapi.hangout.av.effects.createImageResource( this.assetBase + 'topHat.png?' + Math.random() );
    hatOverlay = hat.createOverlay( {
        scale: {
            magnitude: 0.15
          , reference: gapi.hangout.av.effects.ScaleReference.HEIGHT
        }
    } );
    hatOverlay.setPosition( -0.4 + Math.random(), -0.4 + Math.random() );
    hatOverlay.setVisible( true );
}
