import {Router} from "aurelia-router";

export class App {
  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = "Cloud Meetings";
      config.map([
        {route:  "", moduleId: "splash", nav: true, title: "This is the splash page"}
      ]);
    });
  }
}