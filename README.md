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
- 변수선언은 var를 사용한다 (variable의 약자)
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

- 주석은 //를 사용하여 표현한다
- 여러줄은 /**/을 사용한다
- 대소문자를 구분하여 사용한다
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
1. 숫자로 시작하면 안된다. *alpha10 가능, 10alpha 불가능*
2. 공백 표시 안된다. alp ha 불가능
3. 소문자로 만든다. ALPHA 불가능
4. 사용가능한 특수문자 _와 $만 가능하다. *_alpha 가능, $alpha 가능*
5. 키워드, 예약어 사용 X *break, do, while 불가능*
6. 한글, 일본어, 한자 다 되지만 알파벳 쓰는 것이 관례
7. 의미없는 단어가 아닌 input output처럼 관계성이 있는 것 사용 권장
8. 생성자 함수 이름은 항상 **대문자**로 시작
9. 변수와 인스턴스, 함수, method 이름은 항상 **소문자**로 시작

## Array

1. Array는 배열이라는 뜻을 가지고 있다.

2. 배열 인덱스는 0부터 시작한다. 첫번째 항목은 [0]이다.

3. 주소(인덱스, index)를 이용해 각 엘리먼트에 접근이 가능하다.
 - 배열의 엘리먼트에 접근하는 방법은 대괄호 안에 인덱스를 사용한다.
 - <code>arr[0] = 1</code>
 - <code>console.log(arr[arr.length-1]);</code>

4. 값을 저장할 수 있는 엘리먼트(변수)의 연속된 공간이다.

5. 빈 배열은 <code>var arr=[];</code>이다.

6. 초기화 된 배열은 <code>var arr=[1,2,3,4,5];</code>

7. 엘리멘트에 어떤 자료형이든 저장될 수 있다.
  - <code> var mixed_arr = [ 1, true, 3.14, "string", {name:"object"}, [1,2,3,] ]; </code>

8. 배열의 길이는 <code>.length</code> 속성을 이용한다.

9. 배열의 정렬
 - <code>.reverse()</code> : 배열을 뒤집어 정렬하여 리턴
 - <code>.sort()</code> : 배열안의 값을 정렬하여 리턴

10. 배열에 엘리먼트 추가/삭제하기
 - <code>.push(element)</code> : 배열의 뒤에 엘리먼트를 추가
 - <code>.pop()</code> : 배열의 뒤에서 엘리먼트를 삭제하고 리턴
 - <code>.shift()</code> : 배열의 앞에서 엘리먼트를 삭제하고 리턴
 - <code>.unshift(element)</code> : 배열의 앞에 엘리먼트를 추가

11. 배열 붙이기, 검색하기
 - <code>arr1.concat(arr2)</code> : arr1과 arr2를 붙임
 - <code>arr.indexOf(element)</code> : arr에서 element가 있는 첫 위치를 검색
 - <code>arr.lastIndexOf(element)</code> : arr에서 element가 있는 마지막 위치를 검색

 12. 문자열 split 함수
  - 문자열을 구분자 (separator)로 나눠서 각각을 담은 배열을 반환하는 함수
  ````javascript
  var str = "1,2,3,4,5";
  arr = str.split(",");
  arr = ["1", "2", "3", "4", "5"];
  ````

### :cake: example
````html
<p id="fa"></p>
<script>
var favorite = ["떡볶이", "감자칩", "디자인", "행복"];
document.getElementById("fa").innerHTML = favorite[0];//떡볶이
</script>
````

### :cake: 배열에 들어갈 수 있는 것들
````javascript
var arr=[ 3.14, 365, "html", {name:"object"}, 7, {object:"name"}, 5 ];
console.log(arr);
// [3.14, 365, "html", {name:"object"}, 7, {object:"name"}, 5]
console.log(arr[0]);
// 3.14
console.log(arr[arr.length-1]);
// 5 
console.log(arr.length);
// 7
````

### :cake: 배열을 초기화 시키고, 함수도 만들어보기
````javascript
//빈 배열 arr를 길이가 5가 되도록 초기화 시키기
var arr;
var arr = ["a","b","c","d","e"];
console.log(arr);
//함수 solution을 수정해서 인자로 받는 배열 arr의 첫번째 엘리먼트를 return 하도록 만들기
function solution(arr){
  return arr[0];
}
var result = solution([1,2,3,4,5])
console.log(result);
// 1
````

### :cake: 배열의 정렬, 엘리먼트 추가/삭제
````javascript
var arr;
arr = [1, 2, 3, 9, 10, 11]
var arr1 = [12, 13]
arr.concat(arr1);
//[1, 2, 3, 9, 10, 11, 12, 13]
arr.indexOf(10);
//4
arr.lastIndexOf(3);
//2
arr.push(15); //배열의 뒤에 추가
//[1, 2, 3, 9, 10, 11, 15]
arr.unshift(0); //배열의 앞에 추가
//[0, 1, 2, 3, 9, 10, 11, 15]
arr.pop(); //배열 마지막 엘리먼트 삭제 후 리턴
//[0, 1, 2, 3, 9, 10, 11]
arr.shift(); //배열 첫번째 엘리먼트 삭제 후 리턴
//[1, 2, 3, 9, 10, 11]
arr.sort(); //알파벳 순서, 숫자는 암시적으로 문자열로 형변환 하기 때문에 숫자 1이 10보다 먼저 나온다. 
//[1, 10, 11, 2, 3, 9] 
arr.reverse();
//[9, 3, 2, 11, 10, 1]
````

## Object  

1. object는 array와 달리 순서는 중요하지 않다.

2. 변수에 입력할 값을 { }이 괄호 안에 작성한다.

3. 한 줄에도 작성할 수 있고 여러 줄에도 작성할 수 있다.

4. property를 변수명.property와 변수명["property"]로 쓸 수 있다.

5. 객체에 () 없이 접근하면 함수 정의가 반환된다.


### :cake: example 
````html
<p id="example"></p><!--Park HyeonJeong-->
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

## 문자열 다루기
- 특정 위치 문자열 나타내기 (charAt 함수이용, 대괄호 사용)
- 부분 문자열 구하기 (substring, substr 함수 이용)
  - substring(pos1,pos2) : pos1에서 pos2까지의 부분 문자열 반환, pos2를 생략시 pos1부터 마지막까지의 문자열 반환
  - substr(pos,length) : pos에서 length길이만큼 부분 문자열 반환, length 생략시 pos부터 마지막까지의 문자열 반환, pos가 음수인 경우 str.length - pos로 동작 
- 문자열 검색하기 (indexOf) : 사용하는 문자열이 있는경우 해당 시작위치를 반환시켜줌

### :cake: example 문자열 다루기
````javascript
//특정 위치 문자열 나타내기
var str = "abcdeabcde";
srt.charAt(0); //첫문자
//"a"
str.charAt(11);
//""
str.length;
//10
str.charAt(length-1); //마지막 문자
//"e"

//대괄호 사용하여 특정위치 문자열 나타내기
var str = "abcdeabcde";
str[0]; //첫문자
//"a"
str[str.length-1]; //마지막문자
//"e"
str[10];
//undefined

//부분 문자열 구하기 
var str = "abcdeabcde";
str.substring(2,4);
// "cd"
str.substr(2,4);
//  "cdea"
str.substring(2);
// "cdeabcde"
str.substr(2);
// "cdeabcde"
//substr pos가 음수인경우
str.substr(-7,2);
// str.substr(str.length - pos,2);
// str.substr(10-7,2);
// str.substr(3,2);
// "de"

//문자열 검색하기
var str = "abcdeabcde";
str.indexOf("bc") //첫번째 문자열 위치
// 1
str.lastIndexOf("bc"); //마지막 문자열 위치
// 6
str.indexOf("f") //사용하지 않은 문자열인 경우 -1로 반환
// -1
````

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
7. if, else if, else
````javascript
  if(/*조건식*/) {
    /*참인경우 실행될 코드*/
  } else if( /*조건식*/) {
    /*if 문의 조건이 거짓이고, 위의 조건식이 참인경우 실행될 코드*/
  } else if ( /*조건식*/ ){
    /*위의 if, else if문의 모든 조건이 거짓이고, 위의 조건식이 참인경우 실행될 코드*/
  }
  else {
    /*모든 if, else if 문이 모두 실행되지 않았을 때 실행될 코드*/
  }
````

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
*if 문에 따라오는 괄호에는 true/false라는 값을 직접 넣는 경우는 거의 없고, 관계연산자를 많이 사용한다. 관계를 알아보기 위한 것으로 true/false 예제를 사용하여 다음 콘솔에 출력되는 값을 아래와 같이 표현할 수 있다.*
````javascript

if ( true ){
  console.log("1");
} else if ( true ) {
  console.log("2");
} else if ( true ) {
  console.log("3");
} else {
  console.log("4");
}
//console에 출력되는 값 "1";

if ( false ){
  console.log("1");
} else if ( true ) {
  console.log("2");
} else if ( true ) {
  console.log("3");
} else {
  console.log("4");
}
//console에 출력되는 값 "2";

if ( false ){
  console.log("1");
} else if ( false ) {
  console.log("2");
} else if ( false ) {
  console.log("3");
} else {
  console.log("4");
}
//console에 출력되는 값 "3";

if ( false ) {
  console.log("1");
} else if ( false ) {
  console.log("2");
} else if ( false ) {
  console.log("3"); 
} else {
  console.log("4");
}
//console에 출력되는 값 "4";
````
*if문 예제, 관계연산자 사용*
- solution이라는 함수는 age가 20대인지를 확인하는데, 20대라면 true, 그렇지 않으면 false return 한다. 20대인지를 확인하기 위해서 20세 이상이면서 30세 미만인지를 체크하려고 할 때 if문을 어떻게 작성할 수 있을까? (논리연산 && 사용하기)
````javascript
function solution(age){
  //age가 20이상, 30 미만이면 20대
  if (20 <= age && age < 30) {
    return true;
  }
  else {
    return false;
  }
}
````
- 인자 year이 윤년인지 아닌지를 true, false로 반환하는 solutions 함수를 완성 하세요. (편의상, 4의 배수인 해는 모두 윤년이라고 생각하세요.)
````javascript
function solutions(year){
  if (year % 4 == 0){
    return true;
  } else {
    return false;
  }
}
````

## Switch (조건문)
1. switch문은 다른 조건에 따라 다른 작업을 수행하는데 사용됨
2. switch문은 한번 평가 됨
3. 표현식의 값은 각 사례의 값과 비교됨
4. 일치하는 코드가 있으면 관련 코드 블록이 실행됨
5. javascript가 break 키워드에 도달하면 스위치 블록에서 빠져나옴(블록내부 실행 중지)
6. 마지막 사례에서 break 를 할 필요는 없음. 어차피 끊어지게 됨.
7. default가 switch 블록의 마지막이 아니라면 default에도 break를 해주어야 함. 계속 반환되기 때문.
8.  공동 코드 블록을 사용할 수 있음.
9.  여러 사례가 사례 값과 일치하면 첫번째 사례가 선택 됨 (이미 들어가버리면 끝)
10. 일치하는 사례가 없으면 프로그램은 기본 레이블로 계속 진행됨
11. 기본 레이블이 없으면 프로그램은 전환 후에 명령문을 계속해서 진행
12. switch case는 (===)를 사용함
13. 값이 일치하려면 **동일한 유형**이어야 함
14. **피연산자가 동일한 유형**인 경우에만 엄격한 비교(===)가 가능함


### :cake: example
- console창에서 주문하기 
 ````javascript
 console.log("Menu");
 console.log("1, Ice Americano");
 console.log("2, Cafe Latte");
 console.log("3, Cappuccino");
 console.log("4, Tea");

 var choice = parseInt( prompt("메뉴를 선택해 주세요") );

 console.log( choice + "번 메뉴를 선택하셨습니다." );

 switch( choice ) {
  case 1:
    console.log("아이스 아메리카노는 1500원입니다");
    break;
  //1번 주문과 동시에 switch문 종료
  case 2:
    console.log("카페라떼는 1800원입니다");
    break;
    //2번 주문과 동시에 switch문 종료
  case 3:
    console.log("카푸치노는 2000원입니다");
    break;
    //3번 주문과 동시에 switch문 종료
  case 4:
    console.log("홍차는 1300원입니다");
    break;
    //4번 주문과 동시에 switch문 종료
  default:
    console.log("죄송합니다, 그런 메뉴는 없습니다");
    break;
 } 
 ````
 - 각 달을 month라는 인자로 받아 그 달이 몇일까지 있는지 반환하는 함수 solution 함수를 완성하세요 (2월은 28일까지 있다고 가정하세요)
````javascript 
function solution( month ) {
  switch ( month ) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return 31;
    //return의 경우 반환하는 즉시 끝나므로 break를 사용하지 않아도 된다. case는 콤마 없이 각각 case별로 나누어서 써주어야 한다. case 4,6,9,11 (X) case 4: case 6: (O)
  }
}
````

 ## Break와 Continue 더 자세히 알아보기 *while문, switch문에 추가 설명있음*
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
 1. 조건에 따라 프로그램의 일정 코드를 반복적으로 수행할 수 있도록 하는 구문
 2. 조건이 만족하는 동안 반복실행 될 코드를 계속 실행
 3. 
 ````javascript
 while (/*조건식*/){
   /* 반복 실행될 코드 */
 }
 ````
 4. continue: 남은 반복 실행될 코드를 모두 skip
 5. break: 반복문에서 즉시 탈출 

 ### :cake: example
 ````javascript
while(i < 10) {
  var i = 1;
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
- 함수 solution은 n을 인자로 받아서 1부터 n까지 더한 값을 return하는 함수입니다. 예를 들어 solution(3)을 호출하면 1+2+3인 6을 return합니다. 빈칸을 완성하여 solution을 완성하시오.
````javascript
function solution(n){
   var count = 1;
   var sum = 0;
   while (/*빈칸*/ n >= count ) {
     sum = sum + /*빈칸*/ count ;
     count++;
   }
   return sum; //반환하고 끝
}
````

## do while(반복문)
1. 한번은 코드가 실행되고, 이후에 반복실행이 될지 말지를 결정
2. 조건식이 거짓(False)일 때, While문: 한번도 실행되지 않음. do while문: 한번은 실행되고 종료됨

### :cake: do while
````javascript
var condition = false;
while (condition) {
  console.log("이 구문은 실행되지 않음");
} //실행되지 않음

do {
  console.log("이 구문은 한번은 실행됨");
} while(condition); //한번 실행되고 종료

do {
  var answer = parseInt( prompt("1+1=?"));
} while( answer != 2 );
  console.log("맞췄습니다");
  //2를 작성하는 순간 console.log("맞췄습니다")가 실행되고 종료.
  // 2를 제외한 답을 작성하는 경우 반복문이 계속 실행됨

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
12. *while문에서 continue;문을 만나면 반복실행 코드의 끝으로 이동한 다음, 바로 조건식을 검사. 중괄호{} 끝 구문으로 간 다음, 조건식을 확인하기전 업데이트 구문을 먼저 실행하고 조건식을 검사 한 후 반복 실행함*

### :cake: example
````javascript
var sum = 0;
for(var i = 0 ; i < 5 ; i++){
    sum = sum + i;
}
````

### while문을 for문으로 바꾸어보기
````javascript
var array = [1,2,3,4,5,6,7,8,9,10];
var i = 0; //반복문 진입 전 실행 될 초기 코드
while ( i < array.length ){
  //반복 실행될 코드
  console.log( array[i] );
  
  i++; // 반복문 코드가 한번 실행되고 나면 실행될 업데이트 구문
}
//콘솔에는 한 줄씩 출력됨 1,2,3,4,5,6,7,8,9,10
//while문을 for문으로 바꿔보기
var array = [1,2,3,4,5,6,7,8,9,10];

for ( var i = 0 ; i < array.length; i++ ) {
  //반복 실행될 코드
  console.log( array[i] );
}
````

### for문을 이용해 배열 cost의 값을 모두 더해 total_cost 변수에 저장하세요
````javascript
//문제
var cost = [ 85, 42, 37, 10, 22, 8, 15 ];
var total_cost = 0;
//문제 끝
for ( var i = 0 ; i < cost.length ; i++ ) {
  total_cost = total_cost + cost[i];
}
console.log(total_cost);
//219
````

### 문서 객체 배열 사용과 반복문 예제
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

## for in문
1. 객체(object)의 각 엘리먼트에 접근할 수 있는 반복문
2. 객체의 속성들을 출력하는 동일한 코드
3. for구문 사용
````javascript
var obj = {
  name:"object",
  weight:30,
  isObject:true,
  arr:[1,2,3],
  obj:{property:1}
};

var property_list = object.key(obj);

for ( var i=0 ; i < property_list.length ; i++ ) {
  var propertyName = property_list[i];
  console.log( "\t", propertyName, ": ", obj[propertyName] );
}
````
4. for in 구문 사용
````javascript
for ( var propertyName in obj ){
  console.log( "\t", propertyName, ": ", obj[propertyName] );
}
````
5. console에 in을 넣어 확인해보기
  - console.log("name" in obj); 결과 값 true *obj 객체 속성에 name이 있음*
  - console.log("age" in obj); 결과 값 false *obj 객체 속성에 age는 없음*

### 객체에 대한 for...in문
````javascript
var obj = {x:10, y:11, z:12};
for (property in obj){
    console.log("name: " + property + "; value: " + obj[property]);
}
//console >>
/*
name: x; value: 10
name: y; value: 11
name: z; value: 12
*/
````
### 배열에 대한 for...in문
````javascript
var array = [10,11,12];
for (property in array){
    console.log("name: " + property + "; value: " + array[property]);
}
//console >>
/*
name: 0; value: 10
name: 1; value: 11
name: 2; value: 12
*/
````


### :cake: for in문을 이용해서 obj의 속성 중, number 타입의 값을 모두 더해서 sum에 저장하도록 구문을 완성해보세요
````javascript
var obj = {
  name: "object",
  age : 10,
  weight : 5
}
var sum = 0;
for ( /* 빈칸 1*/ in /* 빈칸 2*/ ) {
  if ( typeof( /* 빈칸 3*/  ) == "number") {
      sum = sum + /* 빈칸 4*/ ;
  }
}
console.log("sum :", sum);
/*
빈칸 1 var propertyName
빈칸 2 obj
빈칸 3 obj[propertyName]
빈칸 4 obj[propertyName]
console >>  sum : 15
*/
var sum = 0;
for ( var propertyName in obj ) {
  if ( typeof(obj[propertyName]) == "number" ) {
      sum = sum + obj[propertyName];
  }
}
````
## 변수의 Scope
1. 선언한 변수가 유효한 영역
2. function scope
 - 선언된 변수는 선언된 함수 안에서 접근 가능
 - 선언된 함수 안에서 선언된 함수 (nested function)에서도 접근 가능
 ````javascript
function a() {
   var v_a = "a";
   
    function b() {
      var v_b = "b";
      console.log("b :", typeof(v), typeof(v_a), typeof(v_b));
    }

    b();

    console.log("a :", typeof(v), typeof(v_a), typeof(v_b));
}
 
var v = "v";
 
 a();

 console.log("v :", typeof(v), typeof(v_a), typeof(v_b));
//console >>
/*
b: string string string
a: string string undefined
v: string undefined undefined
*/
````

## 변수의 shadowing
1. 함수 안에서 밖에서도 선언 되었던 같은 이름의 변수를 사용하는 경우 
 -  함수 밖의 변수는 잠시 가려짐 (shadowing)
 -  함수 안에서는 해당 함수에서의 변수를 사용 (함수 밖 변수의 값은 변하지 않음)
 - 함수에서 빠져나오면 다시 해당 변수에 접근할 수 있음
2. 함수 안에서만 값이 유지되어야 하는 경우
 - 함수 안에서 var 키워드를 사용해 선언하고 사용
3. 여러 함수에서 값이 유지되면서 사용되는 변수의 경우
 - 함수를 포괄하는 곳에서 선언하고 사용
````javascript
function shadowing_example(){
  console.log("F", val);
  val++;
}

var val = 0;
shadowing_example();
console.log("O", val);
//console>>
/*
F 0
O 1
*/
````
- 함수 안에 val 값을 0으로 지정해주면?
```` javascript
function shadowing_example(){
  var val = 0;
  console.log("F", val);
  val++;
}

var val = 0;
shadowing_example();
console.log("O", val);
//console>>
/*
F 0
O 0
*/
````
- 2단부터 9단까지 출력하는 구구단 만들기 (변수의 shadowing)
````javascript
function printTimesTable(a){
    var i = 1;
    for( i = 1 ; i <= 9 ; i++ ){
        console.log( a + " * " + i + " = " + a*i );
    }
}

for( var i = 2 ; i <= 9 ; i++ ){
    printTimesTable(i);
}
//함수안에 var i  = 1을 선언해주지 않으면 2단만 출력이 됨.
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

## closure(클로저)
1. 함수, 함수가 선언될 때의 environment로 구성
2. 함수가 정의 될 때의 environment가 함께 closure로 결합되면서, 다양한 활용이 가능
````javascript
function makeCounterFunction(initVal){
  var count = initval;
  function Increase(){
    count++;
    console.log(count);
  }
    return Increase;
}
var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);
//consle 출력값
/*
1
11
*/
````
3. counter1의 closure
  - 함수: <code>function Increase(){}</code>
  - 환경: <code>var count = 0;</code>
4. counter2의 closure
  - 함수: <code>function Increase(){}</code>
  - 환경: <code>var count = 10;</code>

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

## Window object 추가 설명
1. javascript 실행시 가장 상위에 존재하는 객체
  - 변수를 선언하거나 함수 선언시 window 객체 안에서 선언 됨
2. 표시된 웹 페이지의 정보에 접근하거나 변경할 수 있음. window 객체가 제공하는 API를 알아보면 다음과 같음 
  - window.location : 현재 브라우저 창의 주소를 나타냄
  - window.location.href : 브라우저 창에 입력된 주소, 변경 가능
  - window.navigator : 브라우저 자체에 대한 정보
  - window.screen : 디스플레이 사이즈
  - window.document : 웹 페이지 문서의 HTML, CSS등에 접근 가능

## DOM + JS (Javascript)
> DOM (document Object Model, 문서 객체 모델) : 컴퓨터가 문서를 잘 처리할 수 있도록 문서에 대한 구조를 약속한 것
 >> Tree 형태를 따름 : 족보나 가계도와 비슷함. 부모 요소와 자식 요소 구분

1. Document Object
  - javascript에서 document로 접근 가능
  - children에는 문서의 최상위 엘리먼트인 html이 존재

2. Element API
  - 자식, 부모 엘리먼트에 접근하는 방법
    - .children : 해당 object의 자식 노드에 대한 배열
    - .parentNode : 부모 노드
    - .firstElementChild : 첫 자식 엘리먼트
    - .lastElementChild : 마지막 자식 엘리먼트
  - 같은 레벨의 형제 엘리먼트에 접근하는 방법
    - .nextElementSibling 
    - .previousElementSibling
  
3. 단일 Element 선택 
  - DOM API를 활용해 문서에서 엘리먼트를 선택하는 방법
    - document.getElementBy~ : 단일 엘리먼트를 선택하는 메소드
    - document.getElementsBy~ : 다중 엘리먼트를 선택하는 메소드
    - document.getElementById 메소드 : 인자로 HTML element 태그의 id를 전달하면 해당 엘리먼트가 반환됨
  - .innerHTML 속성
    - 엘리먼트 안의 HTML 코드를 변경
  - .innerText 속성
    - 엘리먼트 안의 텍스트를 변경
  - .style 속성
    - css를 변경 가능
  - getAttribute 메소드
    - element의 속성의 값을 얻어옴
    - 하나의 인자: attribute 이름을 받음
    - 직접 개체에 동기화하지 않는 속성에 대해서도 접근이 가능
  - setAttribute 메소드
    - element의 속성의 값을 설정함
    - 두개의 인자: attribute 이름, 설정할 속성의 값을 받음
    - 직접 개체에 동기화되지 않는 속성에 대해서도 값 설정이 가능

4. 다중 Element 선택
  - Document API
    - document.getElementsBy~ : 다중 엘리먼트를 선택하는 메소드. 배열형태로 값을 반환함
  - document.getElementsByTagName 메소드
    - 인자로 HTML element 태그의 이름을 전달하면 해당 엘리먼트들이 반환됨
  - document.getElementsClassName 메소드
    - 인자로 class의 이름을 전달하면, 해당 class의 모든 엘리먼트가 배열로 반환됨
  - document.getElementsByName 메소드
    - 인자로 name을 전달하면, 해당 name 속성을 가진 모든 엘리먼트가 배열로 반환됨.
  - Element API 
    - .value 속성: input element에 입력된 값은 .value를 통해 얻어올 수 있음
    - 주의해야 할 점: getAttribute 메소드로는 받아올 수 없음

5. CSS selector를 이용한 Element 선택
  - Document API
    - document.querySelector : css selector를 기반으로 엘리먼트를 선택
    - 조건에 부합하는 element가 여러개인 경우 첫 엘리먼트만 반환
    - document.querySelectorAll : css selector를 기반으로 만족하는 모든 엘리먼트를 선택
  - CSS Selector
    - <code>#</code> : name기반으로 선택
    - <code>.</code> : class 기반으로 선택
    - <code>,</code> : 여러개의 셀렉터를 사용

6. Element 추가/삭제
  - Document API
    - document.createElement() : 문자열 인자로 element tag를 입력하면 해당 엘리먼트가 생성돼 반환됨
  -  Element API
    - .appendChild(인자) : 추가할 element를 인자로 받아 호출된 element의 자식으로 인자를 추가함 (가장 마지막에)
    - .removeChild(인자) : 삭제할 element를 인자로 받아 호출된 element의 자식중에 해당 element를 삭제
    - .insertBefore(인자1, 인자2) : 인자 1로 받은 element를 호출된 element의 자식 중 인자 2의 이전에 추가함
    - .cloneNode() : 호출된 element를 복사해서 반환함

## Event + Js ()
 > Callback 함수
 >> 조건을 등록해두고 그 조건을 만족한 경우, 나중에 호출해주는 함수

 > 시간을 기반으로 콜백함수를 호출하는 명령
1. SetTimeout( function, time )
  - time 시간이 지난 경우 function 함수를 콜백하는 함수
  - time은 millisecond(1/1000초) 단위
  - timerId를 반환함
2. clearTimeout ( timed )
  - setTimeout 함수 호출의 결과로 반환된 timerId를 인자로 받아 예약되어 있던 function 호출을 취소
  - 이미 function이 호출 된 경우 (시간이 지나 이벤트가 발생한 경우)에는 효과가 없음
3. setInterval( function, time )
  - time 시간이 경과할때마다 function 함수를 콜백하는 함수
  - timerId를 반환함
4. clearInterval ( intervalId )
   - setInterval 함수 호출의 결과로 반환된 intervalId를 인자로 받아 주기적으로 호출되던 function 호출을 취소
5. timerId
  - setTimeout의 경우 timerId가 반환 될 경우 clearTimeout에 timerId를 넣어 호출을 취소 가능
  - setInterval의 경우 timerId가 반환 될 경우 clearInterval에 timerId를 넣어 호출을 취소 가능

### :cake: 콜백함수 example
````javascript
function callback() { console.log("callback function is called"); }
setTimeout( callback, 3000 );
// console에 출력되는 내용
/*
> 1 (여기서 1은 timerId이다) 
callback function is called
*/
setInterval( callback, 5000 );
//console에 출력되는 내용
/*
2 (여기서 2는 timerId이다)
(5초마다 1회씩 출력되는 숫자 증가) callback function is called
*/
clearInterval(2);
//clearInterval(2);를 입력하면 콘솔로그 앞에 증가되던 숫자가 멈추고 함수 호출이 취소됨
````

## 브라우저에서 발생하는 EVENT 종류
1. form event : HTML 문서의 form element에 변화가 생기거나 submit 버튼을 누르는 경우 등의 상황에서 발생
2. window event : 페이지가 모두 로드되었을 때 발생하는 onload event 등이 있음
3. mouse event : 사용자가 마우스를 조작했을 때 발생
4. key event : 사용자가 키보드를 조작했을 때 발생

## Event
1. click : mouse event로 HTML element를 마우스로 클릭한 경우 발생
2. change : form event로 form element의 내용이 변경된 경우 발생
3. keydown : key event로 key가 눌린 경우 발생

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

## HTML Tag의 속성으로 Event Handler 추가
1. Tag의 속성에 event handler 코드를 추가
  - onEvent 속성 사용 ( onclick, onchange, onkeydown..... )
````html
<h1 onclick="console.log('clicked');">...</h1>
<input type="text" onchange="console.log('changed');" onkeydown="console.log('typed')";>
````

## JS에서 EventHandler 설정
1. property에 직접 Handler 설정
  - Element의 "on" + "event"의 속성에 메소드를 직접 지정
````javascript
document.getElementById("form1").onsubmit = function eventHandler(){
  console.log("form property");
  return false; // 브라우저의 submit 처리 비활성
}
````
2. addEventListener 메소드
  - Element의 addEventListener(이벤트, 함수) 메소드를 호출해, eventHandler 등록
    - 여러개의 이벤트 핸들러를 등록할 수 있음
````javascript
document.getElementById("form1").addEventListener(
  "submit",
  function eventHandler(){
    console.log("form addEventListener");
    return false;
  }
);
````
3. removeEventListener 메소드
  - element의 removeEventListener(이벤트, 함수) 메소드를 호출해, eventHandler 삭제
4. return false
  - submit : form 태그의 submit 이벤트
    - EventHandler에서 return false시 브라우저 자체 기능(페이지 이동) 비활성
  - keydown: 키를 누른 경우 발생하는 이벤트
    - EventHandler에서 return false시 키 입력 비활성
    - 실제로는 keydown event → keypress event →  keyup event 순으로 이벤트가 발생하며 keypress event 발생시에 키가 입력됨
    - keydown event 에서 return false를 한 경우 keypress event가 이어서 발생하지 않음.

## AJAX
> AJAX ( Asynchronous Javascript and XML )
1. 브라우저에서 페이지를 이동하지 않고 자바스크립트를 통해 HTTP Request를 보내고 받아 JS에서 처리할 수 있음
2. 사용자에게 더 나은 사용 경험을 제공, 대부분의 웹사이트에서 사용되고 있는 기술
3. AJAX를 위한 객체 생성
````javascript
var req = nex XMLHttpRequest();
// HTTP 요청을 만들 수 있는 새로운 객체를 생성하는 명령
````
4. 요청의 방식과 URL 설정
````javascript
req.open("GET", "./data.txt");
// http request method와 url 설정
````
5. 요청 전송
````javascript
req.send();
````
6. 응답확인
- req.response에 저장됨
- 비동기 방식으로 요청하기 때문에 send 메소드 호출 후, 바로 코드에서 접근하면 데이터가 비어있음
- AJAX 진행에 따라 호출되는 callback 함수를 활용해야함
7. 브라우저 옵션
- *--disable-web-security 옵션*
  - 브라우저의 보안 정책을 우회하기 위해 사용하는 옵션
  - same-origin-policy 등을 비활성화 함

### :cake: AJAX - Request 보내기
````html
<!--작업하기 전에 크롬 속성 > 바로가기 > 대상 T에 .exe" 뒤에 --disable-web-security를 넣어서 보안을 비활성화 할것-->
<html>
  <head>
    <script>
      var req = nex XMLHttpRequest();
      req.open("GET", "./data.txt");
      req.send();
      //console.log(req.response);로 입력해도 바로 콘솔창에 출력되지 않음!!! 나중에 접근했을때만 확인 가능. 비동기로 요청하기 때문에 바로 접근할 수 없기 때문
    </script>
  </head>
  <body></body>
</html>
````
- 예제를 작업하기전 크롬 속성에 들어가서 보안을 비활성화 해야함
- 같은 폴더 내 위치한 (data.txt) 내용을 불러올것임
- f12 > console에 에러 메세지가 없다면 Network를 클릭한다
- HTML 파일 로드 뒤 이후 data.txt가 xhr에 의해 요청되어 응답이온 것을 볼 수 있음
- console에서 req.response를 입력하면 data.txt.에 저장된 내용이 console창에 출력됨

## AJAX Response 받아서 처리하기
1. readyState 속성
  - AJAX 요청에 따라 0~4까지 변화함
readyState|의미
|----------|----|
0|open 메소드 호출전
1|open 메소드 호출 후, send 메소드 호출 전
2|보낸 요청에 대해 응답 헤더가 수신 된 후
3|응답의 바디 부분이 수신중일 때
4|모든 응답이 수신 되었을 때

2. onreadystatechange 속성
  - readyState가 변할 때마다 호출되는 콜백 함수

3. status 속성
  - HTTP response의 응답 헤더에 기록된 코드
Response Code|의미
|------------|---|
200|OK
404|Not Found
500|Internet Error
...|...

4. 응답을 정상적으로 수신한 경우
  - readyState : 4
  - Status : 200

5. 기타 callback function 활용 가능한 속성
  - onloadstart
  - onprogress
  - onabort
  - onerror
  - onload
  - ontimeout
  - onloadend

### :cake: AJAX - response 받아서 처리하기
````html
<!--작업하기 전에 크롬 속성 > 바로가기 > 대상 T에 .exe" 뒤에 --disable-web-security를 넣어서 보안을 비활성화 할것-->
<html>
  <head>
    <script>
      var req = nex XMLHttpRequest();
      req.onreadystatechange = function a(){
        console.log(this.readyState, this.status);
        if ( this.readyState == 4 && this.stauts == 200 ){
            console.log(this.response);
        }
      }
      req.open("GET", "http://google.com");
      req.send();
      //console에 출력되는 내용은 1~4까지 순차적으로 출력이되는 것을 확인할 수 있음.
      //stauts는 응답 코드로 200, 404, 500 등의 코드로 출력됨 
      //if문을 통해 데이터가 콘솔에 정상적으로 출력되는 것을 볼 수 있음
    </script>
  </head>
  <body></body>
</html>
````

## JSON
> JSON : Javascript Object Notification
1. 자바스크립트의 객체를 문자열로 표현하는 방법
  - 프로그램 간에 전달하기 편리함 (서버 -> 브라우저)

2. JSON API
  - <code>JSON.stringify ( object )</code>
    - 인자로 받은 객체를 JSON 문자열로 반환함
  - <code>JSON.parse( string )</code>
    - 인자로 받은 문자열을 Javascript Object로 변경해 반환함
````javascript
var original_obj = { pi:3.14, str:"string" };

var json_str = JSON.stringify ( original_obj );
//반환 문자열 : { "pi" : 3.14 , "str" : "string" }

var parsed_obj = JSON.parse( json_Str );

console.log( original_obj ); // { pi : 3.14, str : "string" } 
console.log( parsed_obj ); // { pi :3 .14, str : "string" }
````

3. undefined, function은 반환되지 않음에 주의!

### :cake: example JSON 문자열 > 객체, 객체 > 문자열 해보기
````javascript

var arr = [
  "문자열", 3.14, true, null, undefined, function a(){ console.log("Hello world!") }
]
var t = JSON.stringify(arr);
//console에 t를 입력하면 출력되는 내용
/*
  "[ "문자열",3.14,true,null,null,null ]"
*/
//console에 JSON.parse(t);를 입력하면 출력되는 내용
/*
  [ "문자열",3.14,true,null,null,null ]
*/
var obj = {
  "str":"문자열",
  "num":3.14,
  "boolean":true,
  "null":null,
  "undefined":undefined,
  "method":function a(){ console.log("method") }
}
var t2 = JSON.stringify(obj);
//console에 t2 를 입력하면 출력되는 내용
/*
  "{"str":"문자열","num":3.14,"boolean":true,"null":null}"
  undefined와 function은 누락되었음
*/
//console에 JSON.parse(t2);를 입력하면 출력되는 내용
/*
Object { str:"문자열", nun:3.14, boolean:true, null:null }
*/
````

## AJAX를 통해 JSON 데이터를 받아오기
````javascript
var req = nex XMLHttpRequest();

req.onreadystatechange = function(){
    if ( this.readyState == 4 ) {
          // ...
    }
}

req.open( "GET", JSON_DATA_URL );
req.send();
````
- JSON.parse API를 이용해 받아온 JSON문자열 데이터를 Javascript 객체로 변환
````javascript
req.onreadystatechange = function(){
    if( this.readyState == 4 ){
        var data = JSON.parse(this.response);
        //....
    }
}
````
- 데이터를 처리하는 Javascript 프로그램 실행 (HTML 문서에 반영)
  - 데이터가 여러개인 경우 (배열 형태로 값을 받은 경우) 반복문으로 각각 데이터에 대해 처리
````javascript
for ( var i = 0 ; i < data.length ; i ++ ) {
    document.write(data[i].id, data[i].msg);
}

````

## :cake: AJAX + JSON 문자열을 객체로 변환하기
````html
<html>
  <head>
    <meta charset="utf-8">
    <style>
      .character{color:black;}
      .word{color:gray;}
    </style>

    <script>

      var req = new XMLHttpRequest();
      req.onreadystatechange = function a(){
        console.log(this.readyState, this.status);
        if ( this.readyState == 4 ){
          console.log(this.response);
          var data = JSON.parse(this.response);
          for ( var i in data ){
            var t = document.getElementById("template").cloneNode(true);
            t.removeAtrribute("id");
            t.children[0].innerText = data[i].id;
            t.children[1].innerText = data[i].msg;
            document.body.appendChild(t);
          }
        }
      }
      req.open("GET", "./json_data.txt");
      req.send();
    </script>
  </head>
  <body>
    <p id="template">
      <span class="character">주인공</span>
      :
      <span class="word">명대사</span>
    </p>
  </body>
</html>
````
-  html 내에 출력되는 내용은 주인공:명대사 밑으로 저장된 명대사 데이터들이 불러와진다