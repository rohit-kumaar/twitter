/* ----------------------------- */
/* If length is greater than 0   */
/* ----------------------------- */
// Fresher
const isGreaterThenZeroFresher = [];
if (isGreaterThenZeroFresher.length > 0) {
  // Your code
}

// Experience
const isGreaterThenZeroExperience = [];
if (isGreaterThenZeroExperience.length) {
  // Your code
}

/* -------------------------------------------- */
/* One single line is condition with callback   */
/* -------------------------------------------- */
// Fresher
const isTrueFresher = true;
if (isTrueFresher) {
  callback();
}

// Experience
const isTrueExperience = true;
isTrueExperience && callback();

/* ------------------------------------------ */
/* Add keys in object, using de-structuring   */
/* ------------------------------------------ */
// Fresher
const isTrueConditionFresher = true;
const objFresher = {};
if (isFalseFresher) {
  objFresher.key = "value";
}

// Experience
const isTrueConditionExperience = true;
const objExperience = {
  ...(isTrueConditionExperience ? { key: "value" } : {}),
};

/* ----------------- */
/* Double NOT (!!)   */
/* ----------------- */
// Fresher
const stringFresher = "string";
const objectFresher = {};
const arrFresher = [];
if (stringFresher) {
  // Your code
}

if (objFresher) {
  // Your code
}

if (arrFresher) {
  // Your code
}

// Experience
const stringExperience = "string";
const objectExperience = {};
const arrExperience = [];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!
if (!!stringExperience) {
  // Your code
}

if (!!objExperience) {
  // Your code
}

if (!!arrExperience) {
  // Your code
}
