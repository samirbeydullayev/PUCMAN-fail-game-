


var div = document.querySelector(".kvad");
var div2 = document.querySelector(".kvad2")
var dis = document.querySelector(".dis");

var count = 0
var a = 2;
var s = 0;
var x = 2;
var y = 0;

window.addEventListener("keydown", function (event) {
  //  RIGHT-FUNCTION
  if (event.keyCode == 39) {
    a++;
    s = a + "%"
    div.style.left = s;
    div.children[0].style.transform = "rotate(0deg)"
    console.log(div.style.left)
    if (div.style.left > 94 + "%") {
      dis.style.border = "1px solid red"
      dis.style.animation = "anima 3s linear 0s infinite reverse"
      final.style.display = "block";
      final.style.borderColor = "red"
      finalP.innerHTML = "You Lose :(";
      finalP.style.color = "red"
      div.style.display = "none";
      lose.play();
      pacmanAudio.pause()


    }



//  LEFT-FUNCTION
  } else if (event.keyCode == 37) {
    a--;
    s = a + "%";
    div.style.left = s;
    div.children[0].style.transform = "rotateY(180deg)"
    if (div.style.left < 0 + "%") {
      dis.style.border = "1px solid red"
      dis.style.animation = "anima 3s linear 0s infinite reverse"
      final.style.display = "block";
      final.style.borderColor = "red"
      finalP.innerHTML = "You Lose :(";
      finalP.style.color = "red"
      div.style.display = "none"
      lose.play();
      pacmanAudio.pause()
    }

  }



// TOP-FUNCTION
  if (event.keyCode == 38) {
    x--;
    y = x + "%"
    div.style.top = y;
    div.children[0].style.transform = "rotate(270deg)"
    if (div.style.top < 0 + "%") {
      dis.style.border = "1px solid red"
      dis.style.animation = "anima 3s linear 0s infinite reverse"
      final.style.display = "block";
      final.style.borderColor = "red"
      finalP.innerHTML = "You Lose :(";
      finalP.style.color = "red"
      div.style.display = "none"
      lose.play();
      pacmanAudio.pause()
    }

    // BOTTOM-FUNCTION
  } else if (event.keyCode == 40) {
    x++;
    y = x + "%";
    div.style.top = y;
    div.children[0].style.transform = "rotate(90deg)"
    if (div.style.top > 94 + "%") {
      dis.style.border = "1px solid red"
      dis.style.animation = "anima 3s linear 0s infinite reverse"
      final.style.display = "block";
      final.style.borderColor = "red"
      finalP.innerHTML = "You Lose :(";
      finalP.style.color = "red"
      div.style.display = "none"
      lose.play();
      pacmanAudio.pause()
    }

  }


// EATEN FUNCTION
  if (div.style.left == div2.style.left) {
    count++
    div2.style.top = Math.floor((Math.random() * 94) + 1) + "%";
    div2.style.left = Math.floor((Math.random() * 94) + 1) + "%";
    var pre = document.createElement("div");
    pre.classList.add("pre");
    pre.style.display = "none"
    eatAudio.play()
    var dead = document.querySelector(".dead")
    dead.innerHTML = count;

  }

})







var play = document.querySelector(".btn1");
var cover = document.querySelector(".cover");
var timer = document.querySelector(".timer");
var final = document.querySelector(".final");
var finalP = document.querySelector(".final p")
var score = document.querySelector(".final p span");
var eatAudio = document.querySelector("#eat");
var pacmanAudio = document.querySelector("#pacman");
var lose = document.querySelector("#lose");
var menuIco = document.querySelector(".option .menuIcon");
var menuIco = document.querySelector(".option .menuIcon");
var songIco = document.querySelector(".option .songIcon");
var endAudio = document.querySelector("#gameEnd");
var mainMenu = document.querySelector(".Mainmenu");
var cek = 0;





menuIco.addEventListener("click", function () {
  cover.style.opacity = "1";
  cover.style.zIndex = "12";
  window.location.reload(1);
})

songIco.addEventListener("click", function () {
  if (cek % 2 == 0) {
    songIco.children[0].style.display = "none";
    songIco.children[1].style.display = "inline-block";
    pacmanAudio.pause()
    cek++

  } else {
    songIco.children[1].style.display = "none";
    songIco.children[0].style.display = "inline-block";
    pacmanAudio.play()

    cek++

  }


})


var tm = 60;



play.addEventListener("click", function () {
  pacmanAudio.play()

  cover.style.opacity = "0";
  cover.style.zIndex = "0";

  div2.style.top = Math.floor((Math.random() * 94) + 1) + "%";
  div2.style.left = Math.floor((Math.random() * 94) + 1) + "%";


  setInterval(function () {

    tm--;
    timer.innerHTML = tm;

    if (tm == 0) {

      final.style.display = "block";
      pacmanAudio.pause();
      endAudio.play()

      div.style.display = "none"
      score.innerHTML = count;
    }
  }, 1000)

})


mainMenu.addEventListener("click", function () {
  cover.style.opacity = "1";
  cover.style.zIndex = "12";
  final.style.display = "none"
  window.location.reload(1);
})


  //  MAIN-OPTION

var optionBtn = document.querySelector(".menu .btn .btn2");
var optionMain = document.querySelector(".mainOption");
var optionClose = document.querySelector(".mainOption .close");
var optionPucBtn = document.querySelector(".mainOption .pacman")
var optionBugBtn = document.querySelector(".mainOption .buggy")
var bodyPuc = document.querySelector(".mainOption .body");
var bodyBuggy = document.querySelector(".mainOption .body2");
var pucs = document.querySelectorAll(".mainOption .body  span img")
var buggies = document.querySelectorAll(".mainOption .body2  span img")


optionBtn.addEventListener("click", function () {
  optionMain.style.display = "block"
})

optionClose.addEventListener("click", function () {
  optionMain.style.display = "none"
})

optionBugBtn.addEventListener("click", function () {
  bodyPuc.style.display = "none";
  bodyBuggy.style.display = "block";
  optionBugBtn.style.backgroundColor = "rgba(173, 255, 47,0.1)";
  optionPucBtn.style.backgroundColor = "black"
})
optionPucBtn.addEventListener("click", function () {
  bodyBuggy.style.display = "none";
  bodyPuc.style.display = "block";
  optionPucBtn.style.backgroundColor = "rgba(173, 255, 47,0.1)";
  optionBugBtn.style.backgroundColor = "black"
})

for (var i = 0; i < pucs.length; i++) {
  pucs[i].addEventListener("click", function () {
    var att = this.getAttribute("src");
    div.children[0].setAttribute("src", att)

  })
}

for (var i = 0; i < buggies.length; i++) {
  buggies[i].addEventListener("click", function () {
    var atr = this.getAttribute("src");
    div2.style.backgroundImage = "url(" + atr + ")"

  })
}

// MAIN-OPTION-END
































































