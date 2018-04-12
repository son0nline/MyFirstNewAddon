if (window.getSelection().toString() != "")
{
    //console.log(window.getSelection().toString());
    var win = window.open('https://translate.google.com/?hl=vi#auto/vi/' + encodeURI(window.getSelection().toString().trim()), '_blank');
    win.focus();
}
else
if (window.location.hostname == "www.youtube.com") {
    if (typeof pauseFlg == 'undefined')
        var pauseFlg = false;

    if (pauseFlg)
        document.getElementsByTagName('video')[0].play();
    else {
        //document.getElementsByTagName('video')[0].pause();
        $("video")[0].pause();
    }
    pauseFlg = !pauseFlg;

    if ($("video") != null) {
        $("video")[0].style = "width: 20px; height: 12px;";
        $(".ytp-iv-video-content")[0].style = "width: 20px; height: 12px;";
        $("#player-container")[0].style = "width: 20px; height: 12px;";
        var subscribe = document.getElementById('subscribe-button');
        subscribe.parentNode.remove(subscribe);
    }
}
else
if (window.location.hostname == "vozforums.com") {    
    if ($("a[rel=next]").length > 0)
        $("a[rel=next]")[0].click();
}

