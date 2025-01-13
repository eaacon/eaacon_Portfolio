$.fn.togvid = function(action){
    if (action == "in"){
        console.log("Open Youtube Embed");
        $('.navbar').fadeOut(100);
        this.fadeIn(100, function(){
            $('.backdropvideo').addClass('blur')
        });
    }
    if (action == "out"){
        console.log("Open Youtube Embed");
        $('.navbar').fadeIn(100);
        this.fadeOut(100, function(){
            $('.backdropvideo').removeClass('blur')
        });

        var v_src = $('#vid').attr("src");
        $('#vid').attr("src", v_src);  
    }
};



$(document).ready(function(){
    
    updateBGVideo();

    $("#openvideo").on('click', function(){
        $('.modal').togvid("in");
    });

    $('#closevideo').on('click', function(){
        $('.modal').togvid("out");
    });

    $(document).on('keyup', function(event) {
        if (event.key == "Escape" && $('.modal').is(':visible')) {
            $('.modal').togvid("out");
        }
    });

    $(document).on('mousemove', function(e){
        $('.tooltip').css({
            left: e.pageX + 16,
            top: e.pageY + 16
        })
    })

    $( window ).on( "resize", updateBGVideo);
});

function updateBGVideo(){
    var source = $('.backdropvideo source').first();
        var mobile_vid = "Videos/Highlights_Mobile.mp4";
        var desktop_vid = "Videos/VFX_Portfolio_Highlights_3000.mp4";

        //console.log(window.innerWidth/window.innerHeight);
        if($('.hero').width()/$('.hero').height() <= .7){
            if(source.attr("src") != mobile_vid){
                source.attr("src", mobile_vid);
                $('.backdropvideo')[0].load();
                $('.backdropvideo')[0].play();
                console.log("mobile bg");
            }
        }
        else{
            if(source.attr("src") != desktop_vid){
                source.attr("src", desktop_vid);
                $('.backdropvideo')[0].load();
                $('.backdropvideo')[0].play();
                console.log("desktop bg");
            }
        }
}