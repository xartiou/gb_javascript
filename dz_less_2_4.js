"use strict"
/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
    параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
    и возвращать результат.
    Обязательно использовать оператор return
    */

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
