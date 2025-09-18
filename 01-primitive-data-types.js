// Day 01 - Assigment - Primitive data types

const { Console } = require("console");

// Variable declartion
var firstName;
var companyName;
var mobileNumber;
var isAutomation;
var hasPlaywright;

// Variable Initialzation
firstName = 'Chinmaya';
companyName = "New Company limited";
mobileNumber = 911234567890;
isAutomation = true

// print the variable values
console.log('\n%cDeclared and initialized variables:: \n','font-weight:bold')
console.log('firstName: ' +firstName, '\ncompanyName: ' +companyName,'\nMobilenumber: '  +mobileNumber, '\nis Automation: '+isAutomation);
//console.log('\n');

//Data Types
console.log('\n%cData types of the initialized variables:: \n','font-weight:bold')
console.log('Data type of firstName: ' +typeof firstName, '\nData type of companyName: ' +typeof companyName,'\nData type of Mobilenumber: '  +typeof mobileNumber, '\nData type of isAutomation: '+typeof isAutomation, '\nData type of hasPlaywright: '+typeof hasPlaywright)