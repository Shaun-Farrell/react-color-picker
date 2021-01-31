import {
  calculateRed,
  calculateBlue,
  calculateGreen,
  rgbToHex,
  adjustForXMovement,
  adjustForYMovement,
} from "./rgbCalcs";

export const setTargetColor = (
  e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  setTarget: any,
  setHex: any,
  setCursorPnl: any,
  resetCursor: any,
  height: number
) => {
  e.preventDefault();
  let y = e.nativeEvent.offsetY;
  y = y < 0 ? 0 : y > height ? height : y; // handle border
  const num = y / height;
  const r = calculateRed(num);
  const g = calculateGreen(num);
  const b = calculateBlue(num);
  setTarget([r, g, b]);
  setCursorPnl({ y: y - 10 });
  resetCursor();
  setHex(`#${rgbToHex(r, g, b)}`);
};

export const setHexInput = (
  e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  setHex: any,
  setCursor: any,
  target: number[],
  height: number,
  width: number
) => {
  e.preventDefault();
  let x = e.nativeEvent.offsetX;
  let y = e.nativeEvent.offsetY;
  y = y < 0 ? 0 : y > height ? height : y; // handle border
  x = x < 0 ? 0 : x > width ? width : x; // handle border
  const xAdjusted = adjustForXMovement(target, x / width);
  const yAdjusted = adjustForYMovement(xAdjusted, y / height);
  setHex(`#${rgbToHex(yAdjusted[0], yAdjusted[1], yAdjusted[2])}`);
  setCursor({ x: x - 10, y: y - 10 });
};

export const addGradient = (
  context: CanvasRenderingContext2D,
  start: number,
  diff: number[],
  width: number
) => {
  const gradientBig = context.createLinearGradient(
    0,
    0,
    0,
    context.canvas.height
  );
  const multiplier = (width / 255) * start;
  const r = 255 - diff[0] * (multiplier / 255);
  const g = 255 - diff[1] * (multiplier / 255);
  const b = 255 - diff[2] * (multiplier / 255);
  gradientBig.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
  gradientBig.addColorStop(1, "rgb(0, 0, 0)");
  context.fillStyle = gradientBig;
  context.fillRect(start, 0, 1, context.canvas.height);
};
