function aCounter()
{
    var nb = $(".notification[data-seen='false']").length;
    $("#numberUnread").text(nb);
}

$(document).ready(function(){
    aCounter();
});

$("#setAllRead").click(function(){
    $(".notification[data-seen='false']").attr("data-seen", "true");
    aCounter();
});

$(".notification[data-seen='false']").on("click", function(){
    $(this).attr("data-seen", "true");
    aCounter();
});