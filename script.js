if (-1 == window.location.href.indexOf("quiz.vu.edu.pk/QuizQuestion"))
  window.alert("No Question Found.\nThis extention only works on VU Quizzes.");
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
  x
    ? window.prompt("You can copy the Question from here.", x)
    : window.alert("No Question Found.");
}
