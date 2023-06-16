
// 11

var namesArray = [
    ["John"],
    ["Jane"],
    ["Michael"]
  ];
  
  // Loop through the namesArray and print greetings
  for (var i = 0; i < namesArray.length; i++) {
    console.log("Hello " + namesArray[i][0]);
  }


//   12
// Array with subarrays of programming languages
var languagesArray = [
    ["JavaScript"],
    ["Python"],
    ["Java"],
    ["C++"],
    ["Ruby"]
  ];
  
  // Loop through the languagesArray and search for specific languages
  for (var i = 0; i < languagesArray.length; i++) {
    var currentLanguage = languagesArray[i][0];
    
    if (currentLanguage === "JavaScript") {
      console.log("JavaScript found");
    } else {
      console.log("Looking for " + currentLanguage);
    }
  }



//  13.1 

  var number = 10;

var countdownInterval = setInterval(function() {
  if (number === 0) {
    console.log("Happy New Year!");
    clearInterval(countdownInterval);
  } else {
    console.log(number);
    number--;
  }
}, 1000);


// 13.2

function calculateYearsToRetirement(pension) {
    var currentYear = new Date().getFullYear();
    var retirementAge = 65;
    var yearsToRetirement = retirementAge - pension;
    
    if (yearsToRetirement <= 0) {
      console.log("Congratulations! You can retire now!");
    } else {
      console.log("You have " + yearsToRetirement + " years until retirement.");
    }
  }
  

  calculateYearsToRetirement(25); 
  calculateYearsToRetirement(40); 
  

//   14

function findCharacter(name) {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].name === name) {
        console.log(`Name: ${characters[i].name}`);
        console.log(`Age: ${2023 - parseInt(characters[i].mass)}`);
        console.log(`Eye color: ${characters[i].eye_color}`);
        return;
      }
    }
    console.log("Sorry, the specified name was not found.");
  }
  
  
  findCharacter("Luke Skywalker"); 
  findCharacter("Darth Vader"); 
  findCharacter("Leia Organa"); 
  findCharacter("Anakin Skywalker"); 
  findCharacter("Obi-Wan")
  

//   15,1

function removeDuplicates(array) {
    const uniqueArray = [];
    array.forEach((element) => {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    });
    return uniqueArray;
  }
  
  const nums = [10, 15, 15, 20];
  const result = removeDuplicates(nums);
  console.log(result); // [10, 15, 20]

  
//   15,2

function validateData(firstName, lastName, age) {
    if (firstName.length > 20) {
      console.log('სახელი დასაშვებზე მეტია');
    }
    
    if (lastName.length > 40) {
      console.log('გვარი დასაშვებზე მეტია');
    }
    
    if (age > 18) {
      const fullName = `${firstName} ${lastName}`;
      console.log(`გამარჯობა ${fullName}`);
    }
  }
  
  const firstName = 'John';
  const lastName = 'Doe';
  const age = 25;
  validateData(firstName, lastName, age);

  
//   16

function getRemainingDaysOfWeek(currentDay) {
    let remainingDays = '';
  
    switch (currentDay) {
      case 'კვირასაც':
        remainingDays = 'სამშაბათი და ხუთშაბათი';
        break;
      case 'ორშაბათსაც':
        remainingDays = 'ხუთშაბათი';
        break;
      case 'სამშაბათსაც':
        remainingDays = 'ოთხშაბათი';
        break;
      case 'ოთხშაბათსაც':
        remainingDays = 'ხუთშაბათი';
        break;
      case 'ხუთშაბათსაც':
        remainingDays = 'კვირა';
        break;
      case 'პარასკევსც':
        remainingDays = 'შაბათი';
        break;
      case 'შაბათსაც':
        remainingDays = 'კვირა';
        break;
      default:
        remainingDays = 'დარჩენილი დღეები მხოლოდ სამუშაო დღეები და შაბათი';
        break;
    }
  
    return remainingDays;
  }
  
  const currentDay = 'კვირასაც';
  const remainingDaysOfWeek = getRemainingDaysOfWeek(currentDay);
  console.log(remainingDaysOfWeek); // სამშაბათი და ხუთშაბათი
  