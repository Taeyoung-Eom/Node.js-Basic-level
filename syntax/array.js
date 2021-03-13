//C R U D
//Create Read Update Delete
//배열은 대괄호로 시작해서 대괄호로 끝난다. 

//1번째 Creat
var arr = ['A','B','C','D'];
console.log(arr[1]);
console.log(arr[3]);

//2번쨰 Read
// 터미널에서 node Syntax/array.js를 입력한다.

//3번째 Update
arr[2] = 3;
console.log(arr);

//배열이 안에 몇 개가 들어있는지 확인하는 방법.  4가 출력됨.
console.log(arr.length);

//배열 뒤에 Update하는 방법.
arr.push('E');
console.log(arr);

//4번째 Delete
