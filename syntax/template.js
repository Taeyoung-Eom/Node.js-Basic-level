var name = 'xodud2972';
// var letter = 'Lorem ipsum dolor sit amet,' +name+'\n\
// adipisicing elit. Veritatis, beatae doloribus taeyoung \
// recusandae voluptatum placeat voluptatibus quo ad \
// accusamus '+name+'\n\  pariatur quae? Nostrum \
// reprehenderit quae, voluptatem pariatur optio assumenda!';
// console.log(letter);

// 줄바꿈은 역슬래쉬인 \를 사용한다. 대신 코드상에서만 줄바꿈이고 문자가 표현될때는
// 다르지 않다. 그래서 두가지 다 변경하려면 \n\ 을 사용하는것이 제일 좋다.


var letter = `Lorem ipsum dolor sit amet, ${name}

adipisicing elit. Veritatis, beatae doloribus taeyoung
recusandae voluptatum placeat ${1+1} voluptatibus quo ad
accusamus ${name} pariatur quae? Nostrum reprehenderit quae, volup`;
console.log(letter);
// Tab키 위에 있는 `를 사용하자 영문 일떄만 사용이 가능하다.
// `를 사용하면 띄어쓰기는 그냥 하면 되고 name과 같은 변수들도 ${}로 쉽게 표현이 가능하다.