$(document).ready(function(){
    $(".item").click(function(){
        $(".view-project .description").html("Nouveau texte");
        if($(this).hasClass("schoolapps")){
            $(".view-project .description").load("project_schoolapps.html");
            $(".view-project .capture").html("<img src='/img/schoolapps.png'>");
        }else if($(this).hasClass("vegandco")){
            $(".view-project .description").load("project_vegandco.html");
            $(".view-project .capture").html('<img src="img/vegandco.png">');
        }else if($(this).hasClass("pot2colle")){
            $(".view-project .description").load("project_pot2colle.html");
            $(".view-project .capture").html('<img src="img/refonte_pot2colle.png">');;
        }
    });
});