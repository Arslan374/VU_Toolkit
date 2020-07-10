var screenshot = {
  content: document.createElement("canvas"),
  data: "",
  init: function () {
    this.initEvents();
  },
  saveScreenshot: function () {
    var image = new Image();
    (image.onload = function () {
      var canvas = screenshot.content,
        context;
      (canvas.width = image.width),
        (canvas.height = image.height),
        canvas.getContext("2d").drawImage(image, 0, 0);
      var link = document.createElement("a");
      (link.download = "Screenshot.png"),
        (link.href = screenshot.content.toDataURL()),
        link.click(),
        (screenshot.data = "");
    }),
      (image.src = screenshot.data);
  },
  initEvents: function () {
    chrome.tabs.captureVisibleTab(
      null,
      { format: "png", quality: 100 },
      function (data) {
        (screenshot.data = data), screenshot.saveScreenshot();
      }
    );
  },
};
let func = {
    case1: document.getElementById("btn_1"),
    case2: document.getElementById("btn_2"),
    case3: document.getElementById("btn_3"),
    case4: document.getElementById("btn_4"),
    case5: document.getElementById("share"),
    case6: document.getElementById("fb"),
    case7: document.getElementById("yt"),
    case8: document.getElementById("dd1"),
    case9: document.getElementById("dd2"),
  },
  lno = {
    sh: atob("aHR0cDovL2FsbG93cXVpemNvcHkubWwvc2hhcmU="),
    fa: atob("aHR0cDovL2FsbG93cXVpemNvcHkubWwvZmI="),
    yo: atob("aHR0cDovL2FsbG93cXVpemNvcHkubWwveXQ="),
    dz: atob("aHR0cHM6Ly93ZWIuZmFjZWJvb2suY29tL1pheW4uYWwuYWJpZGluLndyaXRl"),
    da: atob("aHR0cHM6Ly93ZWIuZmFjZWJvb2suY29tL2Fyc2xhbi5tYWhtb29kLjM3NC8="),
  };
(func.case1.onclick = function (element) {
  chrome.tabs.executeScript(null, { file: "script.js" });
}),
  (func.case2.onclick = function (element) {
    chrome.tabs.executeScript(null, { file: "squrey.js" });
  }),
  (func.case3.onclick = function (element) {
    chrome.tabs.executeScript(null, { file: "enonk.js" });
  }),
  (func.case4.onclick = function (element) {
    screenshot.init();
  }),
  (func.case5.onclick = function (element) {
    window.open(lno.sh, "_blank");
  }),
  (func.case6.onclick = function (element) {
    window.open(lno.fa, "_blank");
  }),
  (func.case7.onclick = function (element) {
    window.open(lno.yo, "_blank");
  }),
  (func.case8.onclick = function (element) {
    window.open(lno.dz, "_blank");
  }),
  (func.case9.onclick = function (element) {
    window.open(lno.da, "_blank");
  });
