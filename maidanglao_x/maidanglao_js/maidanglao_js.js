//? getElementById....getElementsByClassName...getElementsByName...弄清区别。
//  四种产品切换
drink_re = document.getElementById("drink_represent");

snack_re = document.getElementById("snack_represent");

dessert_re = document.getElementById("dessert_represent");

hamburg_re = document.getElementById("hamburg_represent");
// 四个商品列表
sons = document.getElementsByClassName("son");
// 四个商品切换栏
nav = document.getElementsByClassName("foods_title");
// 四个商品切换栏的图标
re_img = document.getElementsByClassName("foods_re_img");
// function start_in() {
//   for (var i = 0; i < nav.length; i++) {
//     if (sons[i].style.display != "none") {
//       nav[i].style.color = "red";
//       re_img[i].style.backgroundColor = "grey";
//     }
//   }
// }
// start_in();
function all_recover() {
  for (var i = 0; i < sons.length; i++) {
    sons[i].style.display = "none";
    nav[i].style.color = "gold";
    re_img[i].style.backgroundColor = "burlywood";
  }
}

function change_(i) {
  sons[i].style.display = sons[i].style.display != "flex" ? "flex" : "none";
  nav[i].style.color = sons[i].style.display == "flex" ? "red" : "gold";
  re_img[i].style.backgroundColor =
    sons[i].style.display == "flex" ? "grey" : "burlywood";
  // nav[i].style.backgroundcolor =
  //   sons[i].style.display == "flex" ? "gray" : "burlywood";
}

drink_re.addEventListener("click", function () {
  all_recover();
  change_(0);
});
hamburg_re.addEventListener("click", function () {
  all_recover();
  change_(1);
});
dessert_re.addEventListener("click", function () {
  all_recover();
  change_(2);
});
snack_re.addEventListener("click", function () {
  all_recover();
  change_(3);
});

//
