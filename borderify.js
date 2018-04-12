
var subscribe = document.getElementById('subscribe-button');
subscribe.parentNode.remove(subscribe);

if ($("video") != null) {
    $("video")[0].style = "width: 20px; height: 12px;";
    $(".ytp-iv-video-content")[0].style = "width: 20px; height: 12px;";
    $("#player-container")[0].style = "width: 20px; height: 12px;";
    var subscribe = document.getElementById('subscribe-button');
    subscribe.parentNode.remove(subscribe);
}