function validateSyntax() {
    let petInput = document.getElementById('petInput').value;
    //These variables indicates whether the prefix, birthyear and name are valid
    //Initialized as 'false'
    let petPrefixValid = false;
    let petBirthYearValid = false;
    let petNameValid = false;
    //Stores the result
    let result = ''; 
   
    //Converts input string to lowercase
    input = petInput.toLowerCase();

    //Checks the firts 4 characters and checks if "pet_" is included
    let prefix = input.slice(0, 4);
    petPrefixValid = prefix.includes("pet_");

    //Extracts characters representing the birth year of pet, converts to number and checks if it falls between 2000 to 2024
    let petBirthYear = input.slice(4, 8);
    petBirthYear = +petBirthYear;

    if (petBirthYear >= 2000 && petBirthYear <= 2024) {
        petBirthYearValid = true;
    }

    //Extracts character representing the pet name and chects if the length is greater than 0
    let petName = input.slice(8);
    if (petName.length > 0); {
        petNameValid = true;
    }

    //checks if the input field is empty. If yes it sets 'result' to inticate error
    //Checks if all validation are 'true' , if yes, sets 'result' to indicate valid syntax or invalid syntax
    if (petInput === "" || petInput == null) {
        result = "Error: Input Field Empty";
    }
    else if (petPrefixValid && petBirthYearValid && petNameValid) {
        result = "Valid Syntax";
    }
    else {
        result = "Invalid Syntax";
    }


    document.getElementById('result').innerText = result;
}


