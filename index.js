function greetUser(name="Guest"){
     yourName=prompt("Enter your name");
     if(yourName){
        name=yourName;
     }
    console.log(`Hello, ${name}!`);
    }
    greetUser();