var firebaseConfig = {
    apiKey: "AIzaSyCD573QSC33VHyAfO8rpMZw3qs0s2snxks",
    authDomain: "my-app-eed23.firebaseapp.com",
    databaseURL: "https://my-app-eed23.firebaseio.com",
    projectId: "my-app-eed23",
    storageBucket: "my-app-eed23.appspot.com",
    messagingSenderId: "1010908009444",
    appId: "1:1010908009444:web:f0958f4b2605f2ddff2df1",
  },
  cc = " ",
  op0 = " ",
  op1 = " ",
  op2 = " ",
  op3 = " ",
  i = 0,
  qe = "",
  element;
if ((element = document.getElementById("lblQuestion")) && element.innerText)
  qe = element.innerText;
else
  for (i = 0; i < 10; i++)
    if (
      (element = document.getElementsByTagName("textarea")[i]) &&
      element.value &&
      "none" !== element.style.display
    ) {
      qe = element.value;
      break;
    }
if (qe) {
  var el1 = document.getElementById("lblCourseCode"),
    el2 = document.getElementById("lblAnswer0"),
    el3 = document.getElementById("lblAnswer1"),
    el4 = document.getElementById("lblAnswer2"),
    el5 = document.getElementById("lblAnswer3");
  el1 && (cc = el1.innerText),
    el2 && (op0 = el2.value),
    el3 && (op1 = el3.value),
    el4 && (op2 = el4.value),
    el5 && (op3 = el5.value),
    (cc = cc.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_"));
  var mr = firebase.database().ref(cc),
    newmr = mr.push();
  newmr.set({ q: qe, op0: op0, op1: op1, op2: op2, op3: op3 });
}
