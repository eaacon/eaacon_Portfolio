$(document).ready(function(){
    $("#openvideo").on('click', function(){
        console.log("Open Youtube Embed");
        $('.navbar').fadeOut(100);
        $('.modal').fadeIn(100);
    });

    $('#closevideo').on('click', function(){
        console.log("Open Youtube Embed");
        $('.navbar').fadeIn(100);
        $('.modal').fadeOut(100);
    });

    $(document).on('keyup', function(event) {
        if (event.key == "Escape" && $('.modal').is(':visible')) {
            console.log("Close!");
            console.log("Close Youtube Embed");
            $('.navbar').fadeIn(100);
            $('.modal').fadeOut(100);
        }
    });
});

