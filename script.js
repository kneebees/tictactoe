let start = document.querySelector("input"),
    ff = document.querySelector("#ff"),
    fs = document.querySelector("#fs"),
    ft = document.querySelector("#ft"),
    sf = document.querySelector("#sf"),
    ss = document.querySelector("#ss"),
    st = document.querySelector("#st"),
    tf = document.querySelector("#tf"),
    ts = document.querySelector("#ts"),
    tt = document.querySelector("#tt"),
    player = document.querySelector("h6");

var xo = "x";

//if (ff !== "" && fs !== "" && ft !== "" && sf !== "" && ss !== "" && st !== "" && tf !== "" && ts !== "" && tt !== "")

function clickff() {
  let symbol = ff.innerHTML; 
  if (symbol === "") {
    symbol = xo;
    ff.innerHTML = symbol;
    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if (((ff.innerHTML === fs.innerHTML) && (ff.innerHTML === ft.innerHTML)) || ((ff.innerHTML === sf.innerHTML) && (ff.innerHTML === tf.innerHTML)) || ((ff.innerHTML === ss.innerHTML) && (ff.innerHTML === tt.innerHTML))) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clickfs() {
  let symbol = fs.innerHTML;
  if (symbol === "") {
    symbol = xo;
    fs.innerHTML = symbol;

    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if (ff.innerHTML === fs.innerHTML && ff.innerHTML === ft.innerHTML || fs.innerHTML === ss.innerHTML && fs.innerHTML === ts.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clickft() {
  let symbol = ft.innerHTML;
  if (symbol === '') {
    symbol = xo;
    ft.innerHTML = symbol;
    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if (ff.innerHTML === fs.innerHTML && ff.innerHTML === ft.innerHTML || ft.innerHTML === st.innerHTML && ft.innerHTML === tt.innerHTML || ft.innerHTML === ss.innerHTML && ft.innerHTML === tf.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clicksf() {
  let symbol = sf.innerHTML;
  if (symbol === '') {
    symbol = xo;
    sf.innerHTML = symbol;

    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if (sf.innerHTML === ss.innerHTML && sf.innerHTML === st.innerHTML || ff.innerHTML === sf.innerHTML && ff.innerHTML === tf.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clickss() {
  let symbol = ss.innerHTML;
  if (symbol === '') {
    symbol = xo;
    ss.innerHTML = symbol;

    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if (sf.innerHTML === ss.innerHTML && sf.innerHTML === st.innerHTML || fs.innerHTML === ss.innerHTML && fs.innerHTML === ts.innerHTML || ff.innerHTML === ss.innerHTML && ff.innerHTML === tt.innerHTML || ft.innerHTML === ss.innerHTML && ft.innerHTML === tf.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clickst() {
  let symbol = st.innerHTML;
  if (symbol === '') {
    symbol = xo;
    st.innerHTML = symbol;
    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if (sf.innerHTML === ss.innerHTML && sf.innerHTML === st.innerHTML || ft.innerHTML === st.innerHTML && ft.innerHTML === tt.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clicktf() {
  let symbol = tf.innerHTML;
  if (symbol === '') {
    symbol = xo;
    tf.innerHTML = symbol;

    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if (tf.innerHTML === ts.innerHTML && tf.innerHTML === tt.innerHTML || ff.innerHTML === sf.innerHTML && ff.innerHTML === tf.innerHTML || ft.innerHTML === ss.innerHTML && ft.innerHTML === tf.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clickts() {
  let symbol = ts.innerHTML;
  if (symbol === '') {
    symbol = xo;
    ts.innerHTML = symbol;

    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if ( tf.innerHTML === ts.innerHTML && tf.innerHTML === tt.innerHTML || fs.innerHTML === ss.innerHTML && fs.innerHTML === ts.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function clicktt() {
  let symbol = tt.innerHTML;
  if (symbol === "") {
    symbol = xo;
    tt.innerHTML = symbol;

    if (xo === "x") {
      xo = "o"
      player.innerHTML = "It's player o's turn!"
    }
    else {
      xo = "x"
      player.innerHTML = "It's player x's turn!"
    }

    if ( tf.innerHTML === ts.innerHTML && tf.innerHTML === tt.innerHTML || ft.innerHTML === st.innerHTML && ft.innerHTML === tt.innerHTML || ff.innerHTML === ss.innerHTML && ff.innerHTML === tt.innerHTML) {
      endgame();
      if (xo === "o") {
        document.body.style.backgroundColor = "lightBlue";
        player.innerHTML = "Player x wins!";
      }
      else {
        document.body.style.backgroundColor = "pink";
        player.innerHTML = "Player o wins!";
      }
    }
    else if (ff.innerHTML !== "" && fs.innerHTML !== "" && ft.innerHTML !== "" && sf.innerHTML !== "" && ss.innerHTML !== "" && st.innerHTML !== "" && tf.innerHTML !== "" && ts.innerHTML !== "" && tt.innerHTML !== "") {
      document.body.style.backgroundColor = "lightYellow";
      player.innerHTML = "It was a tie!";
      endgame();
    }
  }
}

function endgame() {
  start.disabled = false;
  start.value = "Play Again";
  ff.removeEventListener("click", clickff);
  fs.removeEventListener("click", clickfs);
  ft.removeEventListener("click", clickft);
  sf.removeEventListener("click", clicksf);
  ss.removeEventListener("click", clickss);
  st.removeEventListener("click", clickst);
  tf.removeEventListener("click", clicktf);
  ts.removeEventListener("click", clickts);
  tt.removeEventListener("click", clicktt);
}

function startgame() {

  start.disabled = "true"
  document.body.style.backgroundColor = "white";
  ff.innerHTML = "";
  fs.innerHTML = "";
  ft.innerHTML = "";
  sf.innerHTML = "";
  ss.innerHTML = "";
  st.innerHTML = "";
  tf.innerHTML = "";
  ts.innerHTML = "";
  tt.innerHTML = "";
  player.innerHTML = "Player 1 uses x and Player 2 uses o. It's Player x's turn.";
  ff.addEventListener("click", clickff);
  fs.addEventListener("click", clickfs);
  ft.addEventListener("click", clickft);
  sf.addEventListener("click", clicksf);
  ss.addEventListener("click", clickss);
  st.addEventListener("click", clickst);
  tf.addEventListener("click", clicktf);
  ts.addEventListener("click", clickts);
  tt.addEventListener("click", clicktt);
}

start.addEventListener("click", startgame)
