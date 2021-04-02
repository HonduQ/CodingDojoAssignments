$(function(){

    $("img").on("click", function(){
        $(this).attr('src',$(this).attr('data-alt-src'))
        $(this).attr('data-alt-src', $(this).attr('data-alt-src-temp'))
        $(this).attr('data-alt-src-temp', $(this).attr('src'))
    })
    

})