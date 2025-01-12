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
});