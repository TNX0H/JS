// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты?
// Из-за преффисксных и постфиксных операторво. c = ++a; alert(c); - сначала мы увеличиваем значение а и после этого мы его выводим.  
// d = b++; alert(d) - а здесь, сначала мы выводим значение b, а потом увеличиваем на 1.
// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
var a = -10, b = 5;
if (a > 0 && b > 0)
    console.log(a + b)
else if (a < 0 && b < 0)
    console.log(a * b)
else if (a >= 0 || b >= 0)
    console.log(a + b)
// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a = 4
switch (a) {
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
}
// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function sum(x, y) {
    return (x + y)
}
function dif(x, y) {
    return (x - y)
}
function mul(x, y) {
    return (x * y)
}
function div(x, y) {
    return (x / y)
}
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).function sum(x, y) {
function sum(x, y) {
    return (x + y)
}
function dif(x, y) {
    return (x - y)
}
function mul(x, y) {
    return (x * y)
}
function div(x, y) {
    return (x / y)
}
function mathOperation(arg1, arg2, operation) {
    if (operation == sum)
        return (sum(arg1, arg2))
    else if (operation == dif)
        return (dif(arg1, arg2))
    else if (operation == mul)
        return (mul(arg1, arg2))
    else if (operation == div)
        return (div(arg1, arg2))
}