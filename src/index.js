import p5 from "p5";

import sketch from "./sketch";

new p5(sketch);

const init = () => {
  if (window.location.hostname == "dholmes.co.uk") {
    document.querySelector(".home-link").classList.remove("hide");
  }
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
