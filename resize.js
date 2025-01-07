function checkWindowSize1() {
  const text2 = document.querySelector(".text2");
  const text1 = document.querySelector(".text1");
  if (window.innerWidth <= 475) {
    text1.style.display = "none";
  } else {
    text1.style.display = "block";
  }
  if (window.innerWidth <= 400) {
    text2.style.display = "none";
  } else {
    text2.style.display = "block";
  }
}

checkWindowSize1();
window.addEventListener("resize", checkWindowSize1);

function checkWindowSize2() {
  const text2 = document.querySelector(".text2");
  if (window.innerWidth >= 500) {
    text2.style.display = "none";
  } else {
    text2.style.display = "block";
  }
}

checkWindowSize2();
window.addEventListener("resize", checkWindowSize2);
