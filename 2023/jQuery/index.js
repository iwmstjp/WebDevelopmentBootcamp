$("h1").addClass("big-title");
$("button").click(function(){
    // $("h1").css("color", "blue");
    $("h1").hide();
})
$("body").keydown(function(event){
    // $("h1").html(event.key);
    // console.log(event.key);
    $("h1").show();
})
$("h1").before("<button>New</button>");