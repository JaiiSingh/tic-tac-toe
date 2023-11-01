var state = true;
let btn = document.querySelectorAll(".btn");
Array.from(btn).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "") {
      if (state == true) {
        e.target.innerHTML = "X";
        state = false;
        player=1;
      } else {
        e.target.innerHTML = "O";
        state = true;
        player=2;
      }
    }
   
  });
  
});



// function checker() {
//   if (
//     btn[0].innerHTML == btn[1].innerHTML &&
//     btn[1].innerHTML == btn[2].innerHTML
//   ) {
//     if (btn[0].innerHTML != "") {
//       prompt("player"+player+"is winner");
//     }
//   } else if (
//     btn[0].innerHTML == btn[3].innerHTML &&
//     btn[3].innerHTML == btn[6].innerHTML
//   ) {
//     if (btn[0].innerHTML != "") {
//         prompt("player"+player+"is winner");
//     }
//   } else if (
//     btn[0].innerHTML == btn[4].innerHTML &&
//     btn[4].innerHTML == btn[8].innerHTML
//   ) {
//     if (btn[0].innerHTML != "") {
//         prompt("player"+player+"is winner");
//     }
//   } else if (
//     btn[6].innerHTML == btn[7].innerHTML &&
//     btn[7].innerHTML == btn[8].innerHTML
//   ) {
//     if (btn[6].innerHTML != "") {
//         prompt("player"+player+"is winner");
//     }
//   } else if (
//     btn[2].innerHTML == btn[5].innerHTML &&
//     btn[5].innerHTML == btn[8].innerHTML
//   ) {
//     if (btn[2].innerHTML != "") {
//         prompt("player"+player+"is winner");
//     }
//   } else if (
//     btn[3].innerHTML == btn[4].innerHTML &&
//     btn[4].innerHTML == btn[5].innerHTML
//   ) {
//     if (btn[3].innerHTML != "") {
//         prompt("player"+player+"is winner");
//     }
//   } else if (
//     btn[1].innerHTML == btn[4].innerHTML &&
//     btn[4].innerHTML == btn[7].innerHTML
//   ) {
//     if (btn[1].innerHTML != "") {
//         prompt("player"+player+"is winner");
//     }
//   } 
// }

let rstBtn = document.querySelector(".rstBtn");
rstBtn.addEventListener("click", function () {
  for (i = 0; i < btn.length; i++) {
    btn[i].innerHTML = "";
  }
  state=true;
});
