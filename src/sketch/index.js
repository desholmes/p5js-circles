import * as dat from "dat.gui";
import { randomIntBetween } from "./utils";

export default function sketch(p) {

  let options = {
    name: "Circles",
    backgroundColour: "#1e1e1e",
    circleCount: 3,
    strokeWeight: 6,
    strokeColour: "#f2f2f2",
    minSize: 50,
    maxSize: 283,
    minX: 250,
    maxX: window.innerWidth*0.5,
    minY: 250,
    maxY: window.innerHeight*0.5,

    // TODO remove dat.GUI hack
    redraw: () => {
      console.log("redraw");
      p.clear();
      p.redraw();
    }
  };
  
  const gui = new dat.GUI();
  gui.add(options, "name");
  gui.addColor(options, "backgroundColour").onFinishChange(options.redraw);
  gui.add(options, "circleCount").min(1).max(10).step(1).onFinishChange(options.redraw);
  gui.add(options, "minSize").min(5).max(100).step(1).onFinishChange(options.redraw);
  gui.add(options, "maxSize").min(50).max(500).step(1).onFinishChange(options.redraw);
  gui.add(options, "minX").min(0).max(options.maxX).step(1).onFinishChange(options.redraw);
  gui.add(options, "minY").min(0).max(options.maxY).step(1).onFinishChange(options.redraw);
  gui.add(options, "strokeWeight").min(1).max(10).step(1).onFinishChange(options.redraw);
  gui.addColor(options, "strokeColour").onFinishChange(options.redraw);
  gui.add(options, "redraw");

  /* P5js functions */

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.noFill();
    p.noLoop();
  };
  
  p.draw = () => {
    p.background(options.backgroundColour);

    let x, y, size = 0;
    
    for (let i = 0; i < options.circleCount; i++) {
      x = randomIntBetween(options.minX,options.maxX);
      y = randomIntBetween(options.minY,options.maxY);
      size = randomIntBetween(options.minSize,options.maxSize);
      p.stroke(options.strokeColour);
      p.strokeWeight(options.strokeWeight);
      p.circle(x, y, size);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    options.maxX = window.innerWidth*0.5;
    options.maxY = window.innerHeight*0.5;
  }

}
