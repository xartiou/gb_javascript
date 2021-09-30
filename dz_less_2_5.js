"use strict"
/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение*/

/**
 * Функция сложения имеет два параметра
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function operationAddition(a, b) {
    return a + b;
}


/**
 * Функция вычитания имеет два параметра, из а вычитает b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function operationSubtraction(a, b) {
    return a - b;
}

/**
 * Функция деления имеет два параметра,  а делит на b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function operationDivision(a, b) {
    return a / b;
}

/**
 * Функция умножения имеет два параметра,  а умножает на b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function operationMultiplication(a, b) {
    return a * b;
}


/**
 * Функция с тремя параметрами, выполняет одну из арифметических операций
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @throws {Error} если передана не поддерживаемая операция , то будет выдана ошибка.
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return operationAddition(arg1, arg2);
        case "-":
            return operationSubtraction(arg1, arg2);
        case "*":
            return operationMultiplication(arg1, arg2);
        case "/":
            return operationDivision(arg1, arg2);
        default:
            throw new Error("Нет такой операции у нас сейчас.");
    }
}
console.log(mathOperation(8, 4, "+"));
console.log(mathOperation(8, 4, "-"));
console.log(mathOperation(8, 4, "*"));
console.log(mathOperation(8, 4, "/"));
console.log(mathOperation(8, 4, "track"));
