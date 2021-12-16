// Varibale declaration
// let a = 100; // JAvascript syntax

/**
 * Syntax: 
 * 
 * let variable_name: data-type = value
 * const variable_name: data-type = value
 */
let a: number = 1000;

/**
 * 
 * @param name IS A STRING DATA TYPE 
 * @param age IS A NUMBER DATA TYPE
 * @param isWorking IS A BOOLEAN DATA TYPE
 * @param salary IS A NUMBER DATA
 * 
 * Option parameter:
 * -----------------
 * - To make option parameter -> keep ? for the argument which u want to make optional.
 * example: salary?: number
 * - Rule: Optional parameter in functions should define at the ending
 * - If we don't pass a value to an optional parameter, by default it consider as undefined.
 */
function printDetails(name: string, age: number, isWorking: boolean, salary?: number): void {
    console.log(`name: ${name}, age: ${age}, isWorking: ${isWorking}, salary: ${salary}`);
}

printDetails("Jack", 30, true, 50000);

printDetails("xddsds", 50, true);



