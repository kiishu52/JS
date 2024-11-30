// console.log("Start")
// let scores = [ [100,200,300],[50,60,70]];
//  let sum=0;
// for(let i=0;i<scores.length;i++){
//     for(let j=0;j<scores[0].length;j++){
//         let num=scores[i][j];
//         sum+=num;
//     }
// }
// console.log(sum);
let sum=0;
function sumRow(matrix,row){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
           if(i==row){
            let num=scores[i][j];
            sum+=num;
        }
            
        }
    }
    console.log(sum);
}
 
sumRow(
    [1,2,3],[4,5,6],[7,8,9],2
)