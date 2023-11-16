const nav = document.querySelector('.navbar')

fetch("/navbar.html")
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data;

    $(".collection").on("click", function(){
        var navdd = $(this).children(".nav-drop-out");

        if($(navdd).css("grid-template-rows") == "0px")
        {
            $(navdd).css("grid-template-rows", "1fr");
        }else{
            $(navdd).css("grid-template-rows", "0fr");
        }
    });

    $(".collection").hover(function(){
        var navdd = $(this).children(".nav-drop-out");
        $(navdd).css("grid-template-rows", "1fr");
    }, function(){
        var navdd = $(this).children(".nav-drop-out");
        $(navdd).css("grid-template-rows", "0fr");
    });

    $(".burger").click(function(){
        if($("nav").css("display") == "none"){
            $("nav").css("display", 'block');
        }else{
            $("nav").css("display", 'none');
        }
    });
})
