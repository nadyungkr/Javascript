# javascript를 사용하는 이유

1. javascript는 html 안에 작성하여 내용을 출력할 수 있다.  

2. html 태그 속성을 수정할 수 있다.  

3. css스타일을 변경할 수 있다.  

4. html의 요소를 숨기거나 숨겨진 것을 확인할 수 있다.  

## Javascript를 작성할 수 있는 곳

1. HTML 안에 <head>  

2. HTML 안에 <body>  

3. javascript 라는 file에서 불러와서 

4. javascript 라는 url에서 불러와서

5. javascript 라는 추가의 폴더를 불러와서  

### example

````html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("hi").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>JavaScript in Head</h2>
<p id="hi">A Paragraph.</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
````

````html
<body>
<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</body>
````

````html
<button type="button" onclick="myFunction()">Try it</button>
<script src="myScript.js"></script>
````

````html
<script src="https://www.w3schools.com/js/myScript.js"></script>
````

## javascript를 출력하기 

1. html에 출력한다  

2. html 요소에 작성한다  

3. 경고창 상자에 작성한다  

4. 브라우저 콘솔에 작성한다  


### example

````html
<script>
document.write(1 + 1); //2로 경고창이 뜬다
</script>
````

````html
<script>
document.getElementById("demo").innerHTML = 1 + 1;
</script>
````

````html
<script>
window.alert(1 + 1);
</script>

````

````html
<script>
console.log(1 + 1);
</script>

````

## javascript 기본 문법  

1. 기본 문법  

2. 번호  

3. 문자열  

4. 변수  

5. 연산자  

6. 키워드  

7. 주석  

8. 대소문자 구별  

### example

- 명령문은 브라우저에 대한 명령이다
- 자바스크립트의 코드는 일련의 명령문이다
- 숫자는 정수, 소수를 모두 사용 가능
- string 문자는 "" 나 ''를 사용하여 작성
````html
    <p id="example"></p>
    <script>
        var x, y, z;
        x = 5;
        y = 10;
        z = x + y;

        document.getElementById("example").innerHTML = "The value of z is " + z + ".";
    </script>
````

- JavaScript에서 연산자는 변수에 값을 할당하는 데 사용된다.
- 변수선언은 var를 사용한다 (variable의 약자) //아래 설명 추가
- 자바스크립트에서 표현식은 값으로 계산된다
- 자바스크립트 블록을 코드 블록으로 그룹화가 가능하다
- . 연산자 또는 쉼표뒤에 코드 행을 끊을 수 있다
- 명령문은 세미콜론 ; 으로 구분한다
- 한줄에 여러 명령문이 허용된다
````html
<p id="ex"></p>
<p id="ex2"></p>
<p id="example">></p>
<script>
    var x;
    x = 6;
    y = 5;
    document.getElementById("ex").innerHTML = x;
    document.getElementById("example").innerHTML = x + y;
    document.getElementById("ex2").innerHTML = 
    "x";
    document.getElementById("ex").innerHTML = x; // 6
    document.getElementById("example").innerHTML = x + y; // 11
    document.getElementById("ex2").innerHTML = 
    "x"; // 6
</script>
````

- 연산도 가능하다
- (1 + 1) + "1"은 21이다
- "5" + 2 + 1 은 521이다
- "5" + (2 + 1) 은 53이다
- 2 + "2" + (2 + 1)은 223이다
- 2 + "2" + 2 + 1 은 2221이다
- 2 + 2 + "2" + 2 + 1 은 4221이다
- "I am" + "happy"는 I amhappy이다(띄어쓰기도 같이)
- string은 "" '' 잘못 매치 되지 않기만 하면 ""로 ''를 감쌀 수 있다.
- 자주 사용하는 이스케이프 문자 |t 수평탭 |n줄바꿈 |'작은따옴표 |"큰따옴표 ||역슬래시
- 작은 따옴표 안에 또 작은 따옴표가 들어가야 한다면 '내용 |'내용|' 내용'
- 대소문자를 구분하여 사용한다
````html
<p id="ex"></p>
<p id="ex2"></p>
<p id="ex3"></p>
<script>
document.getElementById("ex").innerHTML = 1 + 1 + "1";
var lastname, lastName
lastname = "ex2"
lastName = "ex3"
document.getElementById("ex2").innerHTML = lastname; //ex2
document.getElementById("ex3").innerHTML = lastName; //ex3
</script>
````


- 주석은 // 를 사용하여 표현한다
- 대소문자를 구분하여 사용한다
- 여러줄은 /**/을 사용한다
- 하나의 명령문으로 많은 변수를 선언 가능하다
````html
<p id="hj"></p>
<script>
var hyeonjeong = "hyeonjeong", favorite = "cheese";
document.getElementById("hj").innerHTML = favorite; //cheese
</script>
````

- 변수를 재선언할 수 있다
- 값을 주지 않고 선언할 경우 그 값은 undefined
- +(덧셈), -(뺄셈), *(곱셈), /(나눗셈), %(나머지) 산수가 가능하다
- 복합대입연산자와 단항연산자
````html
<head>
  <script>
var num = 10 ;
document.getElementById("ex2").innerHTML = num++; //10
document.getElementById("ex3").innerHTML = num++; //11
document.getElementById("ex4").innerHTML = ++num; //13
document.getElementById("ex5").innerHTML = ++num; //14

var x = 10;
x += 5;
document.getElementById("ex1").innerHTML = x; //15
  </script>
</head>
<body>
  <pre>

  > 복합대입연산자
  연산자: +=, -=, *=, /=, %=
  피연산자: 문자, 숫자

  += 기존 변수의 값에 값을 더한다.
  -= 기존 변수의 값에 값을 뺀다.
  *= 기존 변수의 값에 값을 곱한다.
  /= 기존 변수의 값에 값을 나눈다.
  %= 기존 변수의 값에 나머지를 구한다.

  >  단항연산자
  연산자: ++, --  
  피연산자: 변수(숫자)
  변수++ 기존의 변수 값에 1을 더한다. (후위)
  ++변수 기존의 변수 값에 1을 더한다. (전위)
  변수-- 기존의 변수 값에 1을 뺀다. (후위)
  --변수 기존의 변수 값에 1을 뺀다. (전위)

  > 비교연산자
  연산자:
  <,>,<=,>=,==(같다)
  !=(다르다)
  ===(데이터 형식까지 같다)
  !==(데이터 형식까지 다르다)
  피연산자: 숫자, 문자

  </pre>
  <p id="ex1"></p>
  <p id="ex2"></p>
  <p id="ex3"></p>
  <p id="ex4"></p>
  <p id="ex5"></p>
</body>
````  

## 키워드
break, else, instanceof, true, case, false, new. try, catch, finally, null, typeof, continue, for, return, var, defalut, function, switch, void, delete, if this, while, do, in, throw, with


## 식별자 규칙
1. 숫자로 시작하면 안된다. /*alpha10 가능, 10alpha 불가능*/
2. 공백 표시 안된다. alp ha 불가능
3. 소문자로 만든다. ALPHA 불가능
4. 사용가능한 특수문자 _와 $만 가능하다. /*_alpha 가능, $alpha 가능*/
5. 키워드, 예약어 사용 X /*break, do, while 불가능*/
6. 한글, 일본어, 한자 다 되지만 알파벳 쓰는 것이 관례
7. 의미없는 단어가 아닌 input output처럼 관계성이 있는 것 사용 권장
8. 생성자 함수 이름은 항상 **대문자**로 시작
9. 변수와 인스턴스, 함수, method 이름은 항상 **소문자**로 시작

## Array

1. Array는 배열이라는 뜻을 가지고 있다.

2. 배열 인덱스는 0부터 시작한다.

3. 첫번째 항목은 [0]이다.

### example
````html
<p id="fa"></p>
<script>
var favorite = ["떡볶이", "감자칩", "디자인", "행복", "감사"];
document.getElementById("fa").innerHTML = favorite[0];//떡볶이
</script>
````



## Object  

1. object는 array와 달리 순서는 중요하지 않다.

2. 변수에 입력할 값을 { }이 괄호 안에 작성한다.

3. 한 줄에도 작성할 수 있고 여러 줄에도 작성할 수 있다.

4. property를 변수명.property와 변수명["property"]로 쓸 수 있다.

5. 객체에 () 없이 접근하면 함수 정의가 반환된다.


### example
````html
<p id="example"></p>//Park HyeonJeong
<script>
var hyeonjeong = {
firstName: "Park",
lastName: "HyeonJeong",
fullName: function() {
  return this.firstName + " " + this.lastName;
  }
};
//display data from the object :
document.getElementById("example").innerHTML = hyeonjeong.fullName();
//() 없이 작성할 경우 함수의 정의는 그대로 반환된다.
document.getElementById("example").innerHTML = hyeonjeong.fullName;
/*function() {return this.firstName + " " + this.lastName;} 이대로 나타나게 된다*/
</script>
````

## typeof 자료형

1. typeof는 변수 또는 표현식의 유형을 알려준다.

2. typeof 0 은 number

3. typeof "김"은 string

4. 값이 없는 변수의 데이터 유형은 undefined이다.

5. ""로 된 비어있는 **문자열**은 유효한 값과 유형을 갖는다.


## funtions

1. Function Declarations  
> function functionName(parameters) {  
  // 실행할 코드
}


2. Function Expressions  
> var x = function (a, b) {return a * b};  
> 함수는 식을 사용하여 정의할 수 있다.
> var x = function (a, b) {return a * b};
> var z = x(4, 3);
