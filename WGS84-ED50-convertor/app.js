import * as geolib from 'geolib';
const convertarea = document.querySelector(".convert-area")



Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}




const  matrixAlt =[[1,Math.radians(0.4738/3600),Math.radians(0.0003/3600)], [Math.radians(-0.4738/3600),1,Math.radians(0.0183/3600)],
[Math.radians(-0.0003/3600),Math.radians(-0.0183/3600),1]]


const matrix2 = [3869416.913,2830423.682,4192997.6984]


let allFixed = matrixAlt.map(el=>
    el.map((e)=>e.toFixed(20)))

console.log(allFixed);
console.log(matrix2);

const conParamtr = math.matrix(allFixed)
const convPara2 = math.matrix(matrix2)
let result = math.multiply(conParamtr,convPara2)

console.log(result._data);



