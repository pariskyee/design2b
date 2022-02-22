$(document).ready(function() {
    //Write out functions for the sans-serif and monospace buttons and attach event listeners to them.
    
    $("#serif").click(makeSerif);

    $("#puppy").click(togglePuppy);
    $("#monspace").click(makeMonospace);

    function makeSerif() {
        $("p").css('font-family', 'serif');
    }
    function makeMonospace() {
        $("p").css('font-family', 'monospace');
    }
    function togglePuppy() {
        $(".image-container").toggleClass("toggled");
    }
});