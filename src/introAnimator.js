import { OverflowTextAnimator } from "./overflowTextAnimator";

import { timeline } from "motion";

export class IntroAnimator {
  constructor(el) {
    // .text element
    this.DOM = { el: el };
    this.DOM.images = this.DOM.el.querySelectorAll("img");
    this.DOM.text = this.DOM.el.querySelector(".text");
    // some default options for the animation's speed and easing
    this.ease = "ease-out";
    // setup text animator
    this.textAnimator = new OverflowTextAnimator(this.DOM.text);
    // setup anim sequence
    this.setupAnimation();
  }

  setupAnimation() {
    this.sequence = [];
    this.sequence.push([
      this.DOM.images,
      { transform: ["scale(1.2)", "scale(1)"] },
      { duration: 1, at: 0, ease: this.ease }
    ]);
    this.sequence.push({ name: "text-in", at: "-0.75" });
    this.sequence.push(
      this.textAnimator.getSequenceStep({
        duration: 0.5,
        at: "text-in",
        ease: this.ease
      })
    );
  }

  animateDOM() {
    timeline(this.sequence, { duration: 2.5 });
  }
}
