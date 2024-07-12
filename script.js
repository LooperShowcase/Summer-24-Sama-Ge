function realPic() {
  let id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

let fakepic = "https://thispersondoesnotexist.com/";

function game() {
  let imgsCon = document.getElementById("images");
  let resCon = document.getElementById("results");
let streakCon = document.getElementById("streak");
let streak = 0;
  function draw() {
    imgsCon.innerHTML = "";
    resCon.innerHTML = "";

    let againBtn = document.createElement("button");
    againBtn.textContent = "next level !";
    againBtn.onclick = draw;
    let realOrFake = Math.random() > 0.5;
    let list = [realOrFake, !realOrFake];
    imgsCon.style.pointerEvents = "auto";
    for (let isReal of list) {
      let img = document.createElement("img");
      img.src = isReal ? realPic() : fakepic;
      img.onclick = function () {
        imgsCon.style.pointerEvents = "none";
        resCon.textContent = isReal
          ? "u are correct,gud 4 you"
          : "u are incorrect,get gud lil bro";
          streak = isReal ? streak +1: 0 ;
          streakCon.innerHTML = "streak: " + streak; 
          resCon.appendChild (againBtn)

        resCon.appendChild(againBtn);
      };

      imgsCon.appendChild(img);
    }
  }
  draw();
}

game();
