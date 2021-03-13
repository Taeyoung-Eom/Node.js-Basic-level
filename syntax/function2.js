console.log(Math.round(1.6)); //반올림을 해줘서 2가 출력
console.log(Math.round(1.4)); // 반올림을 햊숴 1리 출력

function sum(first,second){   //여기서 first를 매개변수라고한다.
    console.log('a');
    return (first+second);  //영어로는 parameter이라고한다.
    console.log('b');
} //return을 만나면 즉시 함수 실행이 종료된다.
// 그렇기 때문에 b는 출력되지 않는다.
// 리턴은 값을 출력한다는 의미와 함수를 종료시킨다는 두가지 의미를 가지고있다.
// 

console.log(sum(2,4)); //각각의 입력 값을 argument라고한다. '인자' 라고한다.

// 위 함수 sum은  console.log를 하지 않아도 쉽게 출력가능하다.
// 함수 안의 console.log가 포함되어 있기 때문이다.
