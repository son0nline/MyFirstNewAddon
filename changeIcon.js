var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'http://www.stackoverflow.com/favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);
document.getElementsByTagName("title")[0].innerText = "Stack Overflow - Where Developers Learn, Share, & Build Careers";
var logo = document.getElementById('logo-icon-container');
logo.parentNode.remove(logo);

var subscribe = document.getElementById('subscribe-button');
subscribe.parentNode.remove(subscribe);

if ($("video") != null) {
    $("video")[0].style = "width: 20px; height: 12px;";
    $(".ytp-iv-video-content")[0].style = "width: 20px; height: 12px;";
    $("#player-container")[0].style = "width: 20px; height: 12px;";
    var subscribe = document.getElementById('subscribe-button');
    subscribe.parentNode.remove(subscribe);
}