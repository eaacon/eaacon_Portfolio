$(".wall img").click(function(){
    //Fullview($(this).attr("src"));

    $("#fullimg").attr("src",$(this).attr("src"));
    $("#modal").css("display", "block");
});

$("#close").click(function(){
    CloseModal();
});

//modal

function CloseModal()
{
    document.getElementById("modal").style.display = "none";
}