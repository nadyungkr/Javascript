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
document.write(1 + 1);
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

- 숫자는 정수, 소수를 모두 사용 가능
- string 문자는 "" 따옴표를 사용하여 작성
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

- x는 변수로서 정의되며 x에 6이라는 값이 할당된다
- JavaScript에서 연산자는 변수에 값을 할당하는 데 사용된다.
- 자바스크립트에서 표현식은 값으로 계산된다
````html
<p id="ex"></p>
<p id="example">></p>
<script>
    var x;
    x = 6;
    y = 5;
    document.getElementById("ex").innerHTML = x;
    document.getElementById("example").innerHTML = x + y;
</script>
````

- 연산도 가능하다
- 1 + 1 + "1"은 21이다
````html
<p id="ex"></p>
<script>
document.getElementById("ex").innerHTML = 1+1+"1";
</script>
````


- 주석은 // 를 사용하여 표현한다
- 대소문자를 구분하여 사용한다
