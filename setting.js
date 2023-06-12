$(function(){
    var countChild = $("#item-list-todo").children().length;
    $("#but-"+countChild-1).click(function(){
        $("#menu-"+countChild-1).slideToggle(500);
    });
});