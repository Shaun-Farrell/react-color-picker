// Red RULES
// red varies between 0.6 and 0.75 upward
// red varies between 0.3 and 0.15 downward
// red below 0.15 is 255
// red above 0.75 is 255
export const calculateRed = (fraction: number) => {
  return fraction >= 0.75 || fraction <= 0.15
    ? 255
    : fraction > 0.6 && fraction < 0.75
    ? calcScale(fraction, 0.6, 0.15, false)
    : fraction > 0.15 && fraction <= 0.3
    ? calcScale(fraction, 0.15, 0.15, true)
    : 0;
};

// Green RULES
// green varies between 0.3 and 0.45 upward
// green varies between 0.75 and 1 downwards
// green below 0.3 is 0
// otherwise 255
export const calculateGreen = (fraction: number) => {
  return fraction > 0.3 && fraction <= 0.45
    ? calcScale(fraction, 0.3, 0.15, false)
    : fraction > 0.75 && fraction <= 1
    ? calcScale(fraction, 0.75, 0.25, true)
    : fraction <= 0.3
    ? 0
    : 255;
};

// Blue RULES
// green varies between 0 and 0.15 upwards
// green varies between 0.45 and 6 downwards
// green above 0.6 is 0
// otherwise 255
export const calculateBlue = (fraction: number) => {
  return fraction >= 0 && fraction < 0.15
    ? calcScale(fraction, 0, 0.15, false)
    : fraction > 0.45 && fraction < 0.6
    ? calcScale(fraction, 0.45, 0.15, true)
    : fraction > 0.6
    ? 0
    : 255;
};

// Full example
// 0.65 red
// 0.05 above the lower point (0.6)
// 0.05/0.15 = 0.33 (or 33%)
// 0.33 * 255 = 85
export const calcScale = (
  fraction: number,
  lower: number,
  range: number,
  inverse: boolean
) => {
  // How much above the lower range are we
  const delta = fraction - lower;
  // How much is this as a fraction of the total range.
  const newFraction = delta / range;
  // Return that fraction of the total (255)
  const rounded = Math.round(newFraction * 255);
  return inverse ? 255 - rounded : rounded;
};

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const rgbToHex = (r: number, g: number, b: number) => {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const adjustForXMovement = (target: number[], fraction: number) => {
  const diff = [255 - target[0], 255 - target[1], 255 - target[2]];
  return [
    255 - Math.round(diff[0] * fraction),
    255 - Math.round(diff[1] * fraction),
    255 - Math.round(diff[2] * fraction),
  ];
};

export const adjustForYMovement = (target: number[], fraction: number) => {
  const diff = [target[0], target[1], target[2]];
  return [
    target[0] - Math.round(diff[0] * fraction),
    target[1] - Math.round(diff[1] * fraction),
    target[2] - Math.round(diff[2] * fraction),
  ];
};
