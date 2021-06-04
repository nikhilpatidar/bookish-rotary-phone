const blubEle = document.querySelector(".bulb");
const docEle = document.documentElement;

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("dark");
  docEle.setAttribute("data-user-color-scheme", "dark");
} else {
  console.log("light");
  docEle.setAttribute("data-user-color-scheme", "light");
}

blubEle.addEventListener("click", () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    docEle.toggleAttribute("dark")
  ) {
    console.log("dark");
    docEle.removeAttribute("data-user-color-scheme");
    docEle.setAttribute("data-user-color-scheme", "light");
  } else {
    console.log("light");
    docEle.removeAttribute("data-user-color-scheme");
    docEle.setAttribute("data-user-color-scheme", "dark");
  }
});
