import {
  calculateRed,
  calcScale,
  calculateGreen,
  calculateBlue,
} from "./rgbCalcs";

test("Fraction of 0 should return 255 for red", () => {
  const val = calculateRed(0);
  expect(typeof val === "number");
  expect(val).toBe(255);
});

test("Fraction above 0.75 should return 255 for red", () => {
  const val = calculateRed(0.8);
  expect(typeof val === "number");
  expect(val).toBe(255);
});

test("Fraction below 0.15 should return 255 for red", () => {
  const val = calculateRed(0.14);
  expect(typeof val === "number");
  expect(val).toBe(255);
});

test("Fraction of 0.65 should return 85 for red", () => {
  const val = calculateRed(0.65);
  expect(typeof val === "number");
  expect(val).toBe(85);
});

test("Fraction of 0 should return 0 for green", () => {
  const val = calculateGreen(0);
  expect(typeof val === "number");
  expect(val).toBe(0);
});

test("Fraction of 0.45 should return 255 for green", () => {
  const val = calculateGreen(0.45);
  expect(typeof val === "number");
  expect(val).toBe(255);
});

test("Fraction of 1 should return 0 for green", () => {
  const val = calculateGreen(1);
  expect(typeof val === "number");
  expect(val).toBe(0);
});

test("Fraction of 0 should return 0 for blue", () => {
  const val = calculateBlue(0);
  expect(typeof val === "number");
  expect(val).toBe(0);
});

test("Fraction of 0.15 should return 255 for blue", () => {
  const val = calculateBlue(0.15);
  expect(typeof val === "number");
  expect(val).toBe(255);
});

test("Fraction of 0.6 should return 255 for blue", () => {
  const val = calculateBlue(0.6);
  expect(typeof val === "number");
  expect(val).toBe(255);
});

test("Fraction of 0.66 should return 102", () => {
  const val = calcScale(0.66, 0.6, 0.15, false);
  expect(typeof val === "number");
  expect(val).toBe(102);
});

test("Fraction of 0.20 should return 170", () => {
  const val = calcScale(0.2, 0.15, 0.15, true);
  expect(typeof val === "number");
  expect(val).toBe(170);
});

test("Fraction of 0.25 should return 85", () => {
  const val = calcScale(0.25, 0.15, 0.15, true);
  expect(typeof val === "number");
  expect(val).toBe(85);
});
