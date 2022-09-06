$(document).ready(function(){
    $(".item").click(function(){
        $(".view-project .description").html("Nouveau texte");
        if($(this).hasClass("vegandco")){
            $(".view-project .description").load("project_vegandco.html");
        }
    });
});