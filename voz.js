var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'http://www.stackoverflow.com/favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);
document.getElementsByTagName("title")[0].innerText = "Stack Overflow - Where Developers Learn, Share, & Build Careers";
var logo = document.getElementById('logo-icon-container');
logo.parentNode.remove(logo);

var alist = document.getElementsByTagName("a");
for (i = 0; i < alist.length; i++) {
    alist[i].href.replace("https://vozforums.com/redirect/index.php?link=","");
}
