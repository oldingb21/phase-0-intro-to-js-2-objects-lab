const employee = {
    name: "Sam",
    streetAddress: "23 Pratt St",
}
function updateEmployeeWithKeyAndValue(employee, streetAddress, value ) {
    const newEmployee = {...employee};
    newEmployee[streetAddress] = value
    return newEmployee
}
updateEmployeeWithKeyAndValue(employee, streetAddress, "11 Broadway")
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value ) {
    employee[streetAddress] = value;
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, "12 Broadway");
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
}
deleteFromEmployeeByKey(empployee, "name")
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = employee
    delete newEmployee.name
    return newEmployee
}