# javascript 란
- 넷스케이프 커뮤니케이션스와 선 마이크로시스템즈가 공동 개발한 스크립트 언어(컴파일 하지 않고 바로 실행시킬 수 있음)
- 객체 지향적 언어로서 내장되어 있는 객체를 사용함
- 인터렉티브(상호작용) 웹 페에지 제작을 위해 사용함
- 소스코드를 HTML 문서에 포함하여 작성함
- 서버가 아닌 사용자 측 웹 부러우저에서 직접 번역되어 수행
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
3. <code>8,/,%,+,-</code>산술 연산자
4. <code>>>,<<,>>></code>시프트 연산자
5. <code>>,<,>=,<=,==,!==</code>비교 연산자
6. <code>&,^,|</code>비트 연산자
7. <code>&&, ||</code>논리 연산자
8. <code>=,+=,-=</code>대입연산자

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
