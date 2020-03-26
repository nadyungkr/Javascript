# javascript 란
- 넷스케이프 커뮤니케이션스와 선 마이크로시스템즈가 공동 개발한 스크립트 언어(컴파일 하지 않고 바로 실행시킬 수 있음)
- 객체 지향적 언어로서 내장되어 있는 객체를 사용함
- 인터렉티브(상호작용) 웹 페에지 제작을 위해 사용함
- 소스코드를 HTML 문서에 포함하여 작성함
- 서버가 아닌 사용자 측 웹 브라우저에서 직접 번역되어 수행
- 인터프리터에 의해 실행되고 컴파일 과정이 없음
- 모든 운영체제, 하드웨어에서 사용할 수 있어 플랫폼에 독립적이며 이식성이 높음
- 문법이 간단해 비교적 손쉽게 프로그램을 만들 수 있음

## javascript를 사용하는 이유

1. javascript는 html 안에 작성하여 내용을 출력할 수 있다.  

2. html 태그 속성을 수정할 수 있다.  

3. css스타일을 변경할 수 있다.  

4. html의 요소를 숨기거나 숨겨진 것을 확인할 수 있다.  

## Javascript를 작성할 수 있는 곳

1. HTML 안에 head (자바스크립트를 바로 실행할 때)

2. HTML 안에 body (body안에 태그를 작성하고 그 태그에 대해 자바스크립트를 실행할 때) 

3. javascript 라는 file에서 불러와서
(확장명은 .js) 

4. javascript 라는 url에서 불러와서

5. javascript 라는 추가의 폴더를 불러와서  

### :cake: example

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


### :cake: example

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

## 변수의 종류
1. 전역변수
> - 함수 밖에서 선언됨
> - 프로그램 전체에서 사용됨
> - 변수 선언을 하지 않고 사용할 경우 전역 변수가 됨 
2. 지역변수
> - 'var'를 이용해 선언
> - 변수가 정의된 함수 내에서만 사용
> - 선언된 종괄호{}안에서만 사용됨

## 연산자 우선순위
1. <code>(), []</code>최우선 연산자
2. <code>++,--</code>증감 연산자
3. <code>*,/,%,+,-</code>산술 연산자
4. <code>>>,<<,>>></code>시프트 연산자
5. <code>>,<,>=,<=,==,!==</code>비교 연산자
6. <code>&,^,|</code>비트 연산자
7. <code>&&, ||</code>논리 연산자
8. <code>=,+=,-=</code>대입연산자
9. (정리) <code>NOT(!), * / % + -, > < <= >= == !=, and(&&), or(||)</code> 순서

````javascript
2 * 3 > 4 + 5 && 6 / 3 == 2 || !false
2 * 3 > 4 + 5 && 6 / 3 == 2 || true
6 > 9 && 2 == 2 || true
false && true || true
false || true
true
````

### :cake: example

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
    document.getElementById("ex").innerHTML = x;
        document.getElementById("example").innerHTML = x + y;
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
- 예외도 있지만 일반적으로는 하나의 변수에 한가지의 자료형만 들어갈 수 있다.
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

### :cake: example 문자열 더하기
- concat 사용하기
- concat 2번 이상 사용하기
- +(더하기 연산자) 사용하기
````javascript
var str = "Hello"
var str2 = " World"
str.concat(str2)
> "Hello World"
str.concat(" World")
> "Hello World"
"Hello".concat(str2)
> "Hello World"
"Hello".concat(" World")
> "Hello World"
str.concat(str2).concat("!")
> "Hello World!"
"Hello".concat(" World").concat("!")
> "Hello World!"
"Pi is " + 3.14 
> "Pi is 3.14"
3.14 + " is Pi"
> "3.14 is Pi"
//숫자와 문자를 더하기 연산자를 사용하면 숫자열이 문자열로 바뀌어 문자열로 나타난다
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

### :cake: example
````html
<p id="fa"></p>
<script>
var favorite = ["떡볶이", "감자칩", "디자인", "행복"];
document.getElementById("fa").innerHTML = favorite[0];//떡볶이
</script>
````



## Object  

1. object는 array와 달리 순서는 중요하지 않다.

2. 변수에 입력할 값을 { }이 괄호 안에 작성한다.

3. 한 줄에도 작성할 수 있고 여러 줄에도 작성할 수 있다.

4. property를 변수명.property와 변수명["property"]로 쓸 수 있다.

5. 객체에 () 없이 접근하면 함수 정의가 반환된다.


### :cake: example 
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

## 제어문
종류|설명
|------|----------------------------|
if-else|if의 조건을 검사하고, 만족되면 실행문을 처리 만족되지 않으면 else 처리
switch-case|switch에 입력된 값에 따라서 case구문으로 이동하여 처리
while|자바스크립트 반복문 조건이 만족되면 계속 실행, 조건이 만족 되지 않을때까지 실행
for|while 과 비슷하지만, for문은 초기값을 주고, 그 초기 값이 조건을 만족시키는 동안에만 반복실행
do-while|실행문이 최초에 한번 처리 된 후, 조건을 검사 하고 그 조건이 만족되지 않으면 계속 반복


## if문 (조건문)
1. if를 사용하여 지정된 조건에 해당하면 코드 블록을 실행할 수 있도록 지정할 수 있음
2. else를 사용하여 같은 조건이 거짓인 경우에는 코드 블록을 실행할 수 있도록 지정할 수 있음
3. else if 사용은 첫번째 조건이 false인 경우, 새로운 조건을 지정할 때
4. switch를 많이 실행해야 하는 경우 대체로 사용 됨
5. 문법은 if (condition) {} 으로 사용됨
6. if는 소문자로 사용해야 함. If 또는 IF는 오류를 생성함 
7. if (condition) {} //block of code to be executed if the condition is true
    else {} //block of code to be  executed if the condition is false
8. if (condition1) {} //block of code to be executed if the condtion1 is true
    else if (condition2) {} // block of code to be executed if the condition1 is false and condition2 is true
    else {} //block of code to be executed if the condition1 is flase and condition2 is false 

### :cake: example
````javascript
var name = "관리자"
var wifi = "둥이"

if(name == "관리자"){
  //관리자 일때만
  document.write("저는 관리자 입니다.")
}

if(name == "관리자"){
  //관리자 일때만
}
  else if(wifi == "둥이"){
  //둥이일때만
}
  else{
  //관리자도 아니고 둥이도 아닐때
}
//하나의 if문에 들어가면 뒤의 else if나 else는 실행하지 않음

if(name == "관리자" && wifi == "둥이"){
  //관리자이면서 둥이일때
}

if(name == "관리자" || wifi == "둥이"){
  //관리자일때 또는 둥이일때 
}
````

## Switch (조건문)
1. switch문은 다른 조건에 따라 다른 작업을 수행하는데 사용됨
2. switch문은 한번 평가 됨
3. 표현식의 값은 각 사례의 값과 비교됨
4. 일치하는 코드가 있으면 관련 코드 블록이 실행됨
5. javascript가 break 키워드에 도달하면 스위치 블록에서 빠져나옴(블록내부 실행 중지)
6. 마지막 사례에서 break 를 할 필요는 없음. 어차피 끊어지게 됨.
7. default가 switch 블록의 마지막이 아니라면 default에도 break를 해주어야 함
8.  공동 코드 블록을 사용할 수 있음.
9.  여러 사례가 사례 값과 일치하면 첫번째 사례가 선택 됨 (이미 들어가버리면 끝)
10. 일치하는 사례가 없으면 프로그램은 기본 레이블로 계속 진행됨
11. 기본 레이블이 없으면 프로그램은 전환 후에 명령문을 계속해서 진행
12. switch case는 (===)를 사용함
13. 값이 일치하려면 **동일한 유형**이어야 함
14. **피연산자가 동일한 유형**인 경우에만 엄격한 비교(===)가 가능함


### :cake: example
````javascript
var age = 25;

switch(age){
  case 15:
  //age가 15이면
  break;

  case 25:
  //age가 25이면
  break;
}
//현재 age가 25이기때문에 case 25를 실행한다.

switch(new Date().getDay)){
  case 4:
  case 5:
    text = "soon it is weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
// 4와 5는 동일한 코드 블록을 공유하고, 0과 6도 코드 블록을 공유

var x = "0";
switch (x) {
  case 0:
    text = "0ff";
    break;
  case 1:
    text = "0n";
    break;
  default :
    text = "No value found";

}

/*이 경우에서는 x와 일치 하지 않음 그래서 기본 값인 No value found가 나오게 됨 
"0" 은 string, case 0: 이 뜻은 case가 숫자 0일때 라는 뜻이므로
동일한 유형이 아니라 엄격한 비교가 불.가.능 */
 ````

 ## Break와 Continue 더 자세히 알아보기 //continue 추후 수정
 1. switch에서 점프 하는 기능
 2. loop를 뛰어넘기 위해 사용

### :cake: example
````javascript
var text = "" ;
var i;
for (i = 0; i < 10; i++){
  if (i===3) {break;}
  text += "The number is" + i + "<br>";
}
document.getElementById("example").innerHTML = text;
// html 태그에 id 에 example을 줬다고 가정하면
//The numeber is 0
//The number is 1
//The number is 2

````

 ## while(반복문)
 1. 지정된 조건이 true 라면 loop는 코드 블록을 실행할 수 있음
 2. 지정된 조건에 해당하는만큼 코드 블록을 반복함
 3. while (condition) {} // code block to be executed

 ### :cake: example
 ````javascript

var i = 1;

while(조건식){
  //조건이 참이면 실행
}

while(i < 10) {
  text += "The number is" + i;
  i++;
}
//변수 (i)가 10보다 작으면 루프의 코드가 계속 반복해서 실행됨
/*
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/
//조건에 사용된 변수를 늘리는것을 잊어버리면 이 loop는 계속 끝나지 않을 것이고 browser가 다운됨
````


## for(반복문)
1. 매번 다른 값으로 동일한 코드를 반복해서 실행하려면 loop가 필요함
2. 배열로 작업할 때도 많이 쓰임
3. for 반복문은 코드 블록을 여러번 반복함
4. for 루프의 구문은 
  for (statement 1; statement 2; statement 3){
    //code block to be executed
  }
5. 명령문 1은 코드 블록을 실행하기 전에 **한 번** 실행됨
6. 명령문 2는 코드 블록을 실행하기 위한 **조건을 정의**
7. 코드 블록이 실행 된 후 **(매번) 명령문 3이 실행됨**
8. 일반적으로 명령문 1을 사용하여 루프에 사용된 변수를 초기화 함(i=0) 항상 그런것은 아니지만 명령문 1은 선택 사항이며 많은 값을 시작할 수 있음. 쉼표로 구분이 가능하다
9. 명령문 2는 종종 조기 변수의 조건을 평가하는데 사용됨 명령문 2도 선택사항이며 true를 반환하면 루프가 다시 시작되고 false를 반환하면 루프가 종료됨.
10. 명령문 2을 생략하려면 루프 내부에 break를 제공해야함. 그렇지 않으면 루프가 끝나지 않음. 브라우저가 다운되게 됨
11. 명령문 3은 종종 초기 변수 값을 증가 시킴. 명령문 3은 선택사항이며 음수 증분(i--), 양수 증분 (i=i + 15) 또는 기타 다른 작업도 수행이 가능. 루프 내에서 값을 증가시킬 때와 같이 명령문 3도 생략이 가능

### :cake: example
````javascript
for(var i = 0 ; i < 5 ; i++){
    text += "the number is" + i + "<br>";
}
// 명령문 1은 루프가 시작되기 전 변수를 설정 (var i = 0)
// 명령문 2는 루프 실행 조건을 정의 (i는 10보다 작다)
// 명령문 3은 루프의 코드블록이 실행될 떄마다 값 (i++) 을 증가시킴 
/*
the number is 0
the number is 1
the number is 2
the number is 3
the number is 4까지만 실행되고 5부터는 루프 밖으로 나가게 됨
*/

````
문서 객체 배열 사용과 반복문 예제
````html
<head>
  <script>
      window.onload = function(){
          //변수 headers 만들고 태그이름 h1 가지고 오기
          var headers = document.getElementsByTagName('h1');
          //headers[0].innerHTML = "1 h1()";
          //headers[1].innerHTML = "2 h1()"; 아래 for문과 같이 작성할 수 있다.
          for(var i=0; i < headers.length; i++){
              headers[i].innerHTML = (i+1)+"h1";

          }
      };
  </script>
</head>
<body>
    <h1>제목1</h1>
    <h1>제목2</h1>
    <h1>제목3</h1>
    <h1>제목4</h1>
    <h1>제목5</h1>
    <h1>제목6</h1>
</body>
````
 
### :cake: example 
javascript로 style 지정 방법
````html
<head>
  <title>Document</title>
  <script>
    window.onload = function(){
        var header = document.getElementById("header");
        header.style.border = "2px solid red";
        header.style.color = "blue";
        header.style.fontFamily = "궁서";
        /*font-family처럼 끊어지는 글자는 대문자 써서 이어붙인다*/
    };
  </script>
</head>
<body>
    <h1 id="header">제목1</h1>
</body>
````

## HTML 요소를 추가하는 방법
- <code>createElement()</code>
- <code>createTextNode()</code>
- <code>appendChild()</code>

### :cake: example

- <code>.createElement('h1')</code>이라고 작성하였을 때 'h1'이라는 코드를 생성한다.
  ````html
  <h1></h1>
  ````
- <code>.createTextNode('My Text')</code>이라고 작성하였을 때 My text라는 문자열을 만든다.  
- <code>.appendchild()</code>이라고 작성하였을 때 자식요소를 추가한다.
  ````html
  <script>
    var btn = document.createElement("button");
    var btncheck = document.createTextNode("check");
    btn.appendChild(btncheck);
    document.body.appendChild(btn);
  </script>
  ````

## javascript 내장함수
- 함수(function)는 특정한 작업을 독립적으로 수행하는 단위
- 함수는 어떤 값을 매개변수를 통해 입력받을 수 있으며 결과 값을 반환함
- 객체에 속한 함수를 메소드라고함
- 내장함수는 이미 시스템에 정의되어 있는 함수로서 사용자가 함수의 정의 없이 사용할 수 있음

## 내장함수의 종류
종류|기능
|-------|------------------------|
alert()|메세지 창을 생성
eval()|문자열로 입력된 수식을 계산
parselnt()|문자열을 정수로 변환
parseFloat()|문자열을 실수(부동소수점)로 변환
confirm()|<code>[확인][취소]</code>버튼이 나타나는 메세지 창을 생성
escape()|문자의 ASCII값을 변환
setTimeout()|일정 시간이 지난 후 지정된 명령을 호출
setInterval()|일정 시간마다 지정된 명령을 반복 호출

## 자바스크립트 내장 객체
- 객체와 메소드
  > 1. 객체는 데이터의 조합으로서 속성(프로퍼티)과 메소드(함수)를 가리키는 단위임
  > 2. 속성(프로퍼티)은 객체가 가진 성질 또는 상태를 나타냄
  > 3. 메소드는 객체에 속한 함수로서 객체의 동작을 나타냄
  > 4. 객체는 객체의 상태 변화를 유발한 이벤트를 가질 수 있다.
  >> 예) documnet.bgColor="green"; - 객체, 속성
  >> 예) document.write("내용"); -객체, 메소드
  >> 위 예시처럼 속성은 값을 지정해줄 수 있음. html 태그 안에 속성처럼!
  >> 메소드는 객체에 속한 함수로서 명령이나 실행이 가능한 기능을 가지고 있음

- 내장객체
  > 1. 내장객체는 모든 자바스크립트 환경에서 이용가능한 핵심적인 객체로 자바스크립트에서 자체적으로 지원하는 것이다.
  > 2. Array Date String Math 객체 등이 있다.

  ## 내장객체
  객체|기능
  |---|----|
  Array|비슷한 종류의 데이터를 하나의 배열로 생성
  Date|날짜와 시간을 처리
  String|문자열을 처리
  Math|수학계산
  Number|문자로 되어 있는 숫자를 일반 숫자로 변경
  Screen|컴퓨터 화면 해상도, 화면 크기, 색상, 정보등을 알아낼 때 사용

  ## Array 객체의 메소드
  메소드|기능
  |----|----|
  join()|배열 요소들을 하나의 문자열로 반환
  concat(A)|현재 배열에 'A'배열을 합해 새로운 배열 반환
  reverse()|배열의 값을 역순으로 반환
  slice(a,e)|배열 중에서 a부터 e까지의 요소로 새로운 배열 생성
  sort(조건)|배열 요소들을 '조건'대로 정렬(조건이 없는 경우 오름차순 정렬)

  ## String 객체의 메소드
  메소드|기능
  |-------|----|
  split(분리자)|'분리자'를 이용하여 문자열을 분리함으로써 두 개 이상의 문자열로 반환
  replace()|특정 문자열을 지정한 문자열로 변경
  match()|일치하는 문자열 반환
  loLowerCase()|소문자 형태로 반환
  loUpperCase()|대문자 형태로 반환

## 자바스크립트 브라우저 내장 객체
1. 익스플로러와 같은 웹 브라우저 관련 객체를 브라우저 내장객체라고 함
2. 브라우저에 있는 창, 문서, 도구 모음, 상태표시줄 등에 해당하는 객체들의 정보를 제어
3. 계층 구조로 되어 있으며 상위 객체와 하위 객체가 있음
4. Window, Document, Frame, History, Location 객체 등이 있다.

## 브라우저 내장 객체
객체|설명
|----------|--------------------------------|
window 객체|웹 브라우저 창을 위한 속성과 메소드를 제공<br>하위 객체: Document, Frame, History, Location 객체
Documnet 객체|웹 브라우저에 실행되는 HTML 문서의 본문(BODY) 정보를 관리<br>하위 객체: Anchor, Area, Form, Image, Layer, Link 객체
Frame 객체|HTML 문서의 프레임 정보를 제공
History 객체|웹 브라우저의 히스토리 정보를 이용하여 이동
Location 객체|웹 브라우저 주소표시줄의 URL 주소 정보를 제공

## Window 객체의 속성
객체 속성|기능
|----------|--------------------------------|
Self/Window|자기 자신의 창
top|현재 프레임의 최상위 프레임 (자기 자신의 창을 가리킬 수 있음)
opener|현재 창을 열게 한(생성한)부모 창 참조
closed|창이 닫혀 있는 상태 식별
history/location|현재 창의 history 객체 / location(주소입력)객체

## Window 객체의 메소드
객체의 메소드|기능
|-----------|------------------------|
alert()|경고창을 보여줌
open()|새 창 열기
close()|창 닫기
confirm()|[확인] 대화상자
eval()|문자열을 숫자로 변환
focus|특정 객체에 포커스 실정
blur()|포커스 삭제
print()|화면 내용 프린트
setInterval()|일정 시간마다 지정된 처리를 반복 호출
setTimeout()|일정 시간 후 지정된 처리를 호출

## 이벤트 핸들러의 개념(Event Handler)
- 이벤트(하나의 행위) 발생 시 그 이벤트에 따른 반응을 하도록 하는 것
- 이벤트 핸들러의 종류  

이벤트 헨들러 종류|기능
|-------|-----------------------------|
onLoad()|html 문서를 읽는 경우
onUnload()|html 문서를 사라질 경우
onClick()|마우스로 클릭하는 경우
onKeyDown()|키보드의 키를 눌렀을 때
onkeyUp()|키보드의 키를 놓을 때
onMouseDown()|마우스 버튼을 누를 때
onMouseUp()|마우스 버튼을 누른 상태로 손을 뗄 때
onMouseMove()|마우스가 대상 영역 위에서 이동할 때
onMouseOut()|마우스가 대상에서 벗어날 때
onChange()|대상 값을 선택 혹은 변경하는 경우
onSelect()|문자열을 드래그 등으로 선택하는 경우
onFocus()|대상에 포커스가 들어왔을 때
onBlur()|대상이 포커스를 잃어버렸을 때

정리 끝