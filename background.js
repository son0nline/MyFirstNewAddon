/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
  console.log("injecting");

  // browser.tabs.create({
  //   "url": "http://google.com.vn"
  // });


  // var executing = browser.tabs.executeScript({
  //   file: "/borderify.js",
  //   allFrames: true
  // });

  // var makeItGreen = "document.getElementsByTagName('video')[0].play(); ";
  // if (pauseFlg){
  //   makeItGreen = "document.getElementsByTagName('video')[0].pause(); ";
  // }
  // pauseFlg = !pauseFlg;

  // var executing = browser.tabs.executeScript({
  //   code: makeItGreen
  // });

  var executing = browser.tabs.executeScript({
    file: "/content-script.js",
    allFrames: true
  });

  executing.then(onExecuted, onError);

  // var gettingCurrent = browser.tabs.getCurrent();
  // gettingCurrent.then(function onGot(tabInfo) {
  //   console.log(tabInfo);
  // }, function onError(error) {
  //   console.log(`Error: ${error}`);
  // });

}


var pauseFlg = false;

function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);