var dsdw = atob("aHR0cHM6Ly92dXNlYXJjaC5tbC8=");
if (-1 == window.location.href.indexOf("quiz.vu.edu.pk/QuizQuestion"))
  window.open(dsdw, "_blank");
else {
  var i = 0,
    x = "",
    element;
  if ((element = document.getElementById("lblQuestion")) && element.innerText)
    x = element.innerText;
  else
    for (i = 0; i < 10; i++)
      if (
        (element = document.getElementsByTagName("textarea")[i]) &&
        element.value &&
        "none" !== element.style.display
      ) {
        x = element.value;
        break;
      }
  var s = dsdw + "search?q=" + x;
  window.open(s, "_blank");
}
