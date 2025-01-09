var selectedImage = null;

$(function(){
    $('.modal-assets').children().css("display", "none");
 });


$(".wall li").click(function(){
    selectedImage = $(this).index()+ 1;

    $("#modal").css("display", "block");
    console.log('.modal-assets li:nth-child(' + selectedImage + ')')
    $('.modal-assets li:nth-child(' + selectedImage + ')').css("display", "grid");
    //$('.modal-assets').css("display", "block");
});

$("#close").click(function(){
    $('.modal-assets').children().css("display", "none");
    $("#modal").css("display", "none");
    //$('.modal-assets').css("display", "none");
});