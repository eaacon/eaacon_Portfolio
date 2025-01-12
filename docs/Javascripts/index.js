$(document).ready(function(){
    $("#openvideo").on('click', function(){
        console.log("Open Youtube Embed");
        $('.navbar').fadeOut(100);
        $('.modal').fadeIn(100, function(){
            $('.backdropvideo').addClass('blur')
        });
    });

    $('#closevideo').on('click', function(){
        console.log("Open Youtube Embed");
        $('.navbar').fadeIn(100);
        $('.modal').fadeOut(100, function(){
            $('.backdropvideo').removeClass('blur')
        });
    });

    $(document).on('keyup', function(event) {
        if (event.key == "Escape" && $('.modal').is(':visible')) {
            console.log("Close!");
            console.log("Close Youtube Embed");
            $('.navbar').fadeIn(100);
            $('.modal').fadeOut(100, function(){
                $('.backdropvideo').removeClass('blur')
            });
        }
    });

    $(document).on('mousemove', function(e){
        $('.tooltip').css({
            left: e.pageX + 16,
            top: e.pageY + 16
        })
    })
});

