$(document).ready(function(){
    if ($('.mobile-sensor').css("position") != "absolute")
    {
        VanillaTilt.init(document.querySelector(".panel"), {
            perspective: 1500,
            speed: 1000
        });
    }
        
    $('.mail').on("click", function(){
        var copyText =  $('#address').first().text();
        navigator.clipboard.writeText(copyText);
        //alert('copied text: ' + copyText); 
    });

    if ($('.mobile-sensor').css("position") != "absolute")
    {
        $('.mail').hover(function(){
            $('.tooltip').fadeIn(100);
        }, function(){
            $('.tooltip').fadeOut(200);
        });
    }

    $(".mail").on("click", function(){
        $('#address').text("e-mail copied!");
        setTimeout(() => {
            $('#address').text("andrewgychen@gmail.com")
        }, 2000);
    });

    $(document).on('mousemove', function(e){
        $('.tooltip').css({
            left: e.pageX + 16,
            top: e.pageY + 16
        })
    })
});