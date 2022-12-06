import * as geolib from 'geolib';
const convertarea = document.querySelector(".convert-area")



Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

console.log(Math.radians(-0.4738/3600));

const  matrix1 = [[1, Math.radians(-0.4738/3600), Math.radians(-0.0003/3600)],[Math.radians(0.4738/3600), 1 ,Math.radians(-0.0183/3600)],
[Math.radians(0.0003/3600) , Math.radians(0.0183/3600), 1 ]]

console.log(typeof(Math.radians(-0.4738/3600)));


const matrix2 = [3869416.913,2830423.6819,4192997.6984]
console.log((1*3869416.913)+Math.radians(-0.4738/3600)*2830423.6819+ Math.radians(-0.0003/3600)*4192997.6984);
console.log(matrix1);
console.log(matrix2);
const conParamtr = math.matrix(matrix1)

const convPara2 = math.matrix(matrix2)
let result = math.multiply(conParamtr,convPara2)






console.log(result._data);



