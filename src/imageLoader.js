export class ImageLoader {
  constructor() {
    this.DOM = {
      images: document.querySelectorAll("img[data-preload]")
    };
  }

  async preload() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });

    const done = await promise;

    return done;
  }
}
