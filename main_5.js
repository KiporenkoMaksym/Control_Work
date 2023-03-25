function checkForSpam(message){
    if (message.includes("spam") || message.includes("sale")){
            console.log(true);
    } else {
            console.log(false);
    }
    return message;
    }
       
console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
