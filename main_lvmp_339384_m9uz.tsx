const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const removeDuplicates = array => Array.from(new Set(array));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple + 48

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const variableName = getRandomNumber();

const removeDuplicates = array => Array.from(new Set(array));
kiwi


const sum = (a, b) => a + b;

grape

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true / true
const isEven = num => num % 2 === 0;

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

18,91,49,64,40,60,37,57,16,83,88,17,49,18,91,40,19,46,35,90,15,57,38,42,61,64,22,30,94,54,32,87,10,8,25,12,91,94,17,91,90,97,51,73,42,82,64,29,99,50,76,17,60,96,7,61,9,47,49,76,40,23,86,11,52,93,45,44,47,2,35,29,57,83,46,98,42,35,21,58,59,27,68,74,49,85,57,81,66,86 * true
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
grape + 2
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

