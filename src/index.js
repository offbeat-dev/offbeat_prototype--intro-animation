import "./styles.css";
import { IntroAnimator } from "./introAnimator";
import { ImageLoader } from "./imageLoader";
import { animate } from "motion";
// initialize the menu
const loader = new ImageLoader();
const introAnim = new IntroAnimator(document.querySelector(".intro-wrapper"));

loader.preload().then(() => {
  console.log("---->", "PRELOADING DONE");
  const preloadWrappers = document.querySelectorAll("[data-is-preloading]");
  animate(preloadWrappers, { opacity: 1 }, { duration: 1 }).finished.then(
    () => {
      preloadWrappers.forEach((w) => w.removeAttribute("data-is-preloading"));
    }
  );

  introAnim.animateDOM();
});
