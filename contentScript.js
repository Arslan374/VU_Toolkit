var firebaseConfig = {
    apiKey: "AIzaSyCD573QSC33VHyAfO8rpMZw3qs0s2snxks",
    authDomain: "my-app-eed23.firebaseapp.com",
    databaseURL: "https://my-app-eed23.firebaseio.com",
    projectId: "my-app-eed23",
    storageBucket: "my-app-eed23.appspot.com",
    messagingSenderId: "1010908009444",
    appId: "1:1010908009444:web:f0958f4b2605f2ddff2df1",
  },
  cc = "",
  op0 = "",
  op1 = "",
  op2 = "",
  op3 = "",
  i = 0,
  qe = "",
  element;
firebase.initializeApp(firebaseConfig);
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
  var el1 = document.getElementById("lblCourseCode");
  var el2 = document.getElementById("lblAnswer0");
  var el3 = document.getElementById("lblAnswer1");
  var el4 = document.getElementById("lblAnswer2");
  var el5 = document.getElementById("lblAnswer3");
  if (el1) cc = el1.innerText;
  if (el2) op0 = el2.value;
  else {
    el2 = document.getElementById("lblExpression0");
    if (el2) op0 = el2.innerText;
  }
  if (el3) op1 = el3.value;
  else {
    el3 = document.getElementById("lblExpression1");
    if (el3) op1 = el3.innerText;
  }
  if (el4) op2 = el4.value;
  else {
    el4 = document.getElementById("lblExpression2");
    if (el4) op2 = el4.innerText;
  }
  if (el5) op3 = el5.value;
  else {
    el5 = document.getElementById("lblExpression3");
    if (el5) op3 = el5.innerText;
  }
  cc = cc.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_");
  var mr = firebase.database().ref(cc),
    newmr = mr.push();
  newmr.set({ q: qe, op0: op0, op1: op1, op2: op2, op3: op3 });
}
