import { animate } from "motion";

export class OverflowTextAnimator {
  constructor(el) {
    // .text element
    this.DOM = { el: el };
    // some default options for the animation's speed and easing
    this.animationDefaults = { duration: 1, delay: 1.5, easing: "ease-out" };
  }

  animateDOM() {
    animate(
      this.DOM.el,
      { transform: ["translate(0, 100px)", "translate(0, 0)"] },
      this.animationDefaults
    );
  }

  getSequenceStep(stepConfig) {
    return [
      this.DOM.el,
      { transform: ["translate(0, 100px)", "translate(0, 0)"] },
      stepConfig
    ];
  }
}
