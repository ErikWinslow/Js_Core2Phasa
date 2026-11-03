
// task 1

/*

function ReplaceString (Str) {

    let start = Str[0].toUpperCase();

    let end = Str.slice(1).toLowerCase();


    return start + end;
}

console.log(ReplaceString("jAVASCRIPT"));

*/

// task 2

/*

function GetInitials (Str) {

   let start_word = Str[0].charAt().toUpperCase();

   let last_word = Str.split(" ")[1].at(0).toUpperCase();

    return `${start_word}.${last_word}`;
}

console.log(GetInitials("erik manukyan"));

*/

 // task 3

/*

function GetLastChar (Str) {

    let last_Char = Str.at(-1);

    return last_Char;

}

console.log(GetLastChar("Node"));

*/

 // task 4 

/* 

function MakeSlug( title ) {

    let make_slug = title.trim().replaceAll("Foo" , "foo");

    return make_slug.toLowerCase();

}

console.log(MakeSlug("   Foo   "));

*/


// task 5

/*

function GetUserName ( email ) {

    let get_user_name = email.indexOf('@');

     return email.slice(0 , get_user_name);

}

function GetDomain ( email )  {

    let get_Domain = email.indexOf('@');
    
    return email.slice(get_Domain);

}

console.log(GetUserName("Erik@gmail.com"));

console.log(GetDomain("Erik@gmail.com"));

*/

 // task 6

/*

function GetExtensions (Str) {

    let Extensions = Str.lastIndexOf(".");

     
    return Str.slice(Extensions);

}

console.log(GetExtensions("photo.final.png"))

*/

 // task 7

 /*

function isImage (FileName) {

   const name = FileName.toLowerCase();

   return name.endsWith(".png") || name.endsWith(".jpg");
   
}

console.log(isImage("CATS.jpg")) ;

*/

// task 8 

/*

function maskCard( cardNumber ) {

    return cardNumber.slice(-4).padStart(cardNumber.length, "*");

}

console.log (maskCard("1234567890")) ;

*/

 // task 9'

/*

function truncate ( text , maxLength ) {

    return text.length > maxLength ? text.slice(0 , maxLength) + "..." : text ;

}
console.log(truncate("Hello Javascript" , 5 ));

*/

// task 10

/*

function countChar (text , char) {

  return text.split(char).length - 1 ;

}

console.log(countChar("Hello" , "H"))

*/

// task 11

/*

function censor ( text , word ) {

    const stars = "*".repeat(word.length);

    return text.replaceAll(word , stars);

}

console.log(censor("bad day, bad mood" , "bad"));

*/

// task 12 

/*

function formatTime (hours , minutes) {

    const FormatedHours = String(hours).padStart(2, "0");

    const formatedMinutes = String(minutes).padStart(2 , "0");

    return `${FormatedHours}:${formatedMinutes}`;

}

console.log(formatTime( 9 , 5 )) ;

*/

// task 13

/*

function sameText (a , b) {

    if (a.trim().toLowerCase() === b.trim().toLowerCase() ) {

        return true ;

    } else {

        return false ;

    }

}

console.log(sameText(" Yerevan" , "YEREVAN" ));

*/

 //task 14

/*

function charCodeInfo (char) {

    let char_decimal = char.charCodeAt(0);

    let next_char = String.fromCharCode(char_decimal + 1);
    
     return `${char}-i cod-@ ${char_decimal} e hajord@ ${next_char}` ;

}

console.log(charCodeInfo("A"));

*/

 // Homework Number

 // task 1

 /*

function  compare (value) {

    return `isFinite: ${isFinite(value)} | Number.isFinite ${Number.isFinite(value)}`
     
}

console.log("15 Number -> " , compare(15));
// isFinite: true | Number.isFinite: true
// erkusnel tesnumen verjavor tiv

console.log(' "15"  String ->', compare("15"));
// isFinite: true | Number.isFinite: false
// inFinite tox@ avtomat darznum e tiv (15)

console.log(' null ->', compare(null));
// isFinite: true | Number.isFinite: false
// isFinite() null-@ veracum e 0 tvi Number.isFinite() tesnum e vor null-@ tvayin tip che veradarznume false

console.log(' true ->', compare(true));
// isFinite: true | Number.isFinite: false
// Boolean true-n tvi veracelis darnume 1  Global@ talise true, Number-in@ false

*/

 // task 2

 /*

function compareNaN (value) {

   return `isNaN : ${isNaN(value)} VS Number.isNaN ${Number.isNaN(value)}` ;

}
console.log(compareNaN("hello"));
// isNaN : true VS Number.isNaN false

*/

// task 3

/*

function isValidAge (value) {

  return Number.isInteger(value) && value >= 0 && value <= 150 ;

}

console.log (isValidAge(22));

*/

 // task 4

/* 

function roundTo (num , digits) {

    const Fixed_Number = num.toFixed(digits);

    return Number(Fixed_Number) ; 
}

console.log(roundTo(3.14159 , 2));

*/

// task 5

// chaskaca

/*

function areEqual (a , b) {

    return Math.abs(a - b) < Number.EPSILON;

}

console.log(areEqual(0.1 + 0.2 , 0.3));

*/

 // task 6 

/*

function toBinary( number ) {

   let binary = number.toString(2);

   return binary;

}
console.log(toBinary(10));

function fromBinary ( Str ) {

    let binary_str = Number.parseInt(Str , 2);

    return binary_str;

}

console.log(fromBinary("1010"));

*/

 // task 7

/*

function hexToDecimal (hex) {

   let hex_decimal = parseInt(hex , 16);

   return hex_decimal ;

}
console.log(hexToDecimal("ff"))

*/

 // task 8

 /*

function parsePrice ( text ) {
    
    let Exchange_str_wallet = parseInt(text , 10);

    return Number (Exchange_str_wallet) ;

}

console.log(parsePrice("1500 AMD"));

*/

 // task 9

/*

 function percent (part , total) {

     let result = (part / total) * 100 ;

     return `"${result.toFixed(1)}"`
 }

 console.log(percent(1 , 3))

*/


 // task 10

/*

function celsiusToFarenheit (C) {

    let F = C * 9 / 5 + 32 ;

    return F.toFixed(2) ;

}

console.log(celsiusToFarenheit(36.6))

*/

 // task 11

/*

function FormatMoney (amount) {

    let change_format = amount.toLocaleString("en-US");


    return `"${change_format}֏"` ;


}

console.log(FormatMoney(2500000));

*/

 // task 12

/*

 function SafeDivide (a , b) {

    let result = a / b ;

    return Number.isFinite(result) ? result : "Hnaravor che : " ;

 }

 console.log(SafeDivide(10 , 2));

 */

  // task 13

  /*

  function countDigits ( number ) {

    return Math.abs(number).toString().length;

  }
  console.log(countDigits(12345));

  */


  // task 14

  /*

  function inSafe ( number ) {

    return Number.isSafeInteger(number);
  }

  console.log(inSafe(9007199254740991));

  */

  // task 15

  /*

 function RandomNum (min , max) {

   return Math.floor( Math.random() * (max - min + 1)) + min ;


 }
 console.log(RandomNum(1 , 10));

 */

 // task 16

 /*

 function isCorrectChange (paid , price , change) {

    return Math.abs((paid - price) - change) < Number.EPSILON ;

 }

 console.log(isCorrectChange(5 , 2.5 , 2));

 */
