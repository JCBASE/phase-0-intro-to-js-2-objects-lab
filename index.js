// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
 }
 /*console.log(employee.name)
 console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'));
 console.log(employee["11 Broadway"]);*/

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
/*console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'));
console.log(employee);*/

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
/*let newEmployee = deleteFromEmployeeByKey(employee, "name");
console.log(newEmployee["name"]);
console.log(typeof newEmployee);
deleteFromEmployeeByKey(employee, "name");
console.log(employee["name"]);*/

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
/*let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(newEmployee["name"]);
console.log(employee["name"]);
console.log(employee);*/