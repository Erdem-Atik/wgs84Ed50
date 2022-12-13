// import * as geolib from 'geolib';
// const convertarea = document.querySelector(".convert-area")

Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

const rotPar = [[1, Math.radians(0.4738/3600), Math.radians(0.0003/3600)], 
                [Math.radians(-0.4738/3600), 1, Math.radians(0.0183/3600)],
                [Math.radians(-0.0003/3600), Math.radians(-0.0183/3600), 1]]

const wgs84coord = [3869416.913, 2830423.682, 4192997.6984]

const scaleWgs84 = -1.0347/1000000

const offsetXYZt = [84.003, 102.315, 129.879]

const rotatedCoord = math.multiply(rotPar,wgs84coord);

const scaledCoord = wgs84coord.map(el=>el*scaleWgs84)

const sum1= math.add(rotatedCoord, scaledCoord, offsetXYZt)

console.log(sum1);






// const rotParResult = (math.multiply(rotPar,wgs84coord))

// const scaledCoord = wgs84coord.map(el=>el*scaleWgs84)

// const res = math.add(rotParResult,scaledCoord)

// console.log(res);









// const result = rotParDec.map(row => {
//     // Multiply the values in the current row of matrixA by the values in matrixB
//     const multipliedRow = row.map((value, index) => value * wgs84coord[0][index]);

//     // Return the resulting row
//     return multipliedRow;
// });

// // Print the result
// console.log(result);

