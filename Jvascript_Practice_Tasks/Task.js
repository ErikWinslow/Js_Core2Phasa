/*There are two kinds of tasks: 36 "What will be printed?" tasks and 24 "Write the code" tasks.
What will be printed? Explain why. Do not run the code first. Write your answer and one or two sentences explaining why. Then run the code. If your answer was wrong, write what the real output is and why.
Write the code. Write a program that does what the task says and prints the result with console.log.
Write everything in one file tasks.js. Before each task write a comment with its number, for example // Task 12. Write your predictions and explanations as comments.
*/

// task 1 

/*

const score = 75;
if (score >= 90) console.log("A");
else if (score >= 70) console.log("B");
else if (score >= 50) console.log("C");
else console.log("F");

*/

// Es mtacumem vor sa ktpi "B" qani vor 75 mec chi ev havasar chi 90 poxancvume hajord paymanin ev na e arden stugum.

// ========================================================================================================================================================

 // task 2 

/*

if ("0") console.log("A");
if (0) console.log("B");
if ([]) console.log("C");
if (null) console.log("D");

*/

// Es mtacumem vor ktpi A qani vor mnacac tarberakner@ havasarvumen 0-i ev heten veradarznum false bayc qani vor string@ datark che na veradarznume true tv tpum A-n

// Es sxaley ktpi A ev C im mtacelov zangvaci mej karox e linel undefined qani vor nra mej aknkalox arjeq chenq grel

// ========================================================================================================================================================

// task 3

/*

const x = 2;
switch (x) {
  case 1: console.log("one");
  case 2: console.log("two");
  case 3: console.log("three");
    break;
  default: console.log("other");
}

*/

// Es mtacumem vor ktpi case 2 qani vor mer popoxakani arjeq@ havasar e 2-i

// Tpec patasxan two three es haskaca qani vor mer arjeq@ 2-e 2-ic sksume mer patsaxan@ ev menq chenq arndznacrel patasxaner@ irar het dra patcharovel katarvel e hajord case-@

// ========================================================================================================================================================

// task 4

/*

const v = "1";
switch (v) {
  case 1: console.log("number"); break;
  case "1": console.log("string"); break;
  default: console.log("none");
}

*/

// indz tvume vor ktpi mez patasxan string qani vor mer arjeq@ string e ;

// ========================================================================================================================================================

// task 5 

/*

const score = 12 ;

function WordScore ( Score ) {
 
    if (Score >= 90) {

        return "A" ;

    } else if (Score >= 80 && 89 <= Score) {

        return "B" ;

    } else if (Score >= 70 && 79 <= Score) {

        return "C" ;

    } else if (Score >= 60 && 69 <= Score) {

        return "D" ;

    } else {

        return "F" ;

    }



}

console.log(WordScore(score)) ;

*/

// es chhasaca petqa stex bacatrem te inchia ashxatum ? 

// ========================================================================================================================================================

// task 6

/*

const a = 55 , b = 365 , c = 85 ;

function myMathMax (...args) {

 let new_arr = [...args] ;

    let Max_Number = 0 , trueMaxNumber = 0;

  for (let i = 0 ; i < new_arr.length ; ++i) {

     if (new_arr[i] >= new_arr.at(-1)) {

        Max_Number = new_arr[i] ;

     }
     
     if (Max_Number >= new_arr[i - 1]) {

        return Max_Number ;

     } else {

        trueMaxNumber = Max_Number ;

     }
  
   }

   return trueMaxNumber ;
 

}

console.log(myMathMax (a , b , c) ) ;

*/

// ESEEEMM GREEEE EEEEE ;

// ========================================================================================================================================================


// task 7 

/*

const a = 3 , b = 4 , c = 5 ;

function TriangleIsValid (a , b , c) {

 let sum = a + b ;

   return sum > c ? "Valid" : "invalid" ;

}

console.log (TriangleIsValid (a , b , c)) ;

*/

// ===================================<< Loops >>=====================================================================================================================

// task 8

/*

 function Loop () {

    let sum = 0 ;

    for (let i = 1 ; i <= 100 ; ++i) {

        let naxord_sum = sum

        console.log (`${naxord_sum} + ${i} = ${sum += i}`) ;

    }

 }

 Loop()

 */

 // task 9

// ========================================================================================================================================================

 /*

function multiply () {

      for (let i = 1; i <= 10 ; ++i) {

        console.log (`7 * ${i} = ${7 * i}`) ;

      }


} 

multiply() ;

*/


// task 10

/*
  
    for (let i = 1 ; i <= 15 ; ++i) {

        if (i % 3 === 0 && i % 5 === 0) {

            console.log ("FizzBuzz");

        } else if (i % 3 === 0) {

            console.log("Fizz")

        } else if (i % 5 === 0) {

            console.log ("Buzz");

        } else {

            console.log (i) ;

        }
    }

*/


// ========================================================================================================================================================

// task 11 

/*

function factorial (num) {

    let res = 1 ;

      for (let i = 1  ; i <= num ; ++i) {

         res *= i ;

      }

     return res;

}

console.log (factorial (6)) ;

*/

// ========================================================================================================================================================

// task 12

/*

function countNum (n) {

    let count = 0 ;

      while (n > 0) {

        n = Math.floor(n /  10) ;

        count++

      } 

      return count ;


}

console.log (countNum (90817)) ;

*/

// ========================================================================================================================================================

// task 13

/*

function ReverseNum (n)  {

    let reverse = 0 , last_digit = 0 ;

      while (n > 0) {

        last_digit = n % 10 ;

          reverse = reverse * 10 + last_digit ;

           n = Math.floor(n / 10); // Math.floor vorovhetev sovorakan x/= 10 berum e infinity

      }

      return reverse


}

console.log (ReverseNum(1234)) ;

*/

// task 14 chhaskaca vonc grem

// ========================================================================================================================================================

// task 15

/*

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

*/

// im haskanalov iteraciyan k hasni 0 1 2  qani vor iteracian sksume 0-ic  bayc chi hasnum 4-i qani vor payman ka vor petq e hasni 5-i ev cikl verjana


// ========================================================================================================================================================

// task 16


// for (let i = 0; i < 5; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }


// im karciqov klini 1 heto qani vor 2 zuyg tiv e payman@ ayd iteracian propusk kani dranic heto 3 ktpi 4-nel 2-ia bajanvum

// ========================================================================================================================================================


// taks 17

/*

let i = 0;
while (i < 3) {
  i++;
}
console.log(i);

*/

// qani vor while-@ vochmiban chi tpum arajin@ ira gorcoxutyun e katarvum i-n avelanum e amen angam ev dranic heto cuyc e talis console-um 3 mtacumem vor 3 e


// ========================================================================================================================================================


// taks 18

/*

let n = 10;
do {
  console.log(n);
  n++;
} while (n < 5);

*/

// im kartsiqov tpelu e 10 qani vor do {} katarvele bayc while-i payman@ false-exe ev cikl-@ chi karace iteracia anel u qani vor popoxakani haytararum-e exel heto tpvel nra ardyunq@


// ========================================================================================================================================================


// taks 19

// for (var j = 0; j < 3; j++) {}
// console.log(j)

// vochmiban chi tpelu qani vor console.log chi gtnvum for-i scope-um u iran anhayt e popoxakani masin kamel ktpi undefined

// es sxalveci pastoren var-@ durs e galis for-i scopic ev ira patasxan@ tpume 3

// inchqan gitem ka IIFE function-i tesak vor@ chi toxum varin durs gal local scope-ic durs galu


// ========================================================================================================================================================


// taks 20

// let count = 0;
// for (let i = 0; i < 3; i++) {
//   for (let k = 0; k < 4; k++) {
//     count++;
//   }
// }

// console.log (count)

// indz tvume ktpi 12 qani vor himnakan for-@ kanchume ir mej grvac for-@ 3 angam isk 3 * 4 = 12  :)

// ============================================ <<String Methods>> ============================================================================================================


// taks 21

// const s = "JavaScript";
// console.log(s.slice(4)); // ktoxi Java (Script kjnji)
// console.log(s.slice(-6, -3)); // ktri arajin@ Script heto -3 gtnvox sksac tarer@ kktri ( ipt )
// console.log(s.indexOf("a")); // kkarda string-@ kgtni arji "a" het kveradarzni nra iondex@
// console.log(s.lastIndexOf("a")); // verchic kkarda string-@ arajin @nkac "a" het kveradarzni nra iondex@

// ========================================================================================================================================================


// taks 22

// let str = "hello";
// str[0] = "H";
// console.log(str);// ktpi Hello qani vor string-i arajin indexi tak gtnvox tar@ poxelenq
// str.toUpperCase(); // ktpi HELLO qani vor ete menq poxelenq arajin tar@ mecatarov nran chi poxelu
// console.log(str); // eli HELLO popoxutyun@ katarvel e

// isk stex hetaqrqirer xi chi poxum ????? es mtacumem vor JS-um char chka string-e menak dra hamarel chi poxum

// kamel chgitem ogneq xndrumem 😭

// ========================================================================================================================================================


// taks 23

// console.log("a-b-c".split("-").join("+")); // mnalu e menak a-b-c 
// console.log("  hi  ".trim().length); // het e berum aranc white spaceri bayc nra length-@ mnum e nuyn@
// console.log("ab".repeat(3)); // 3 angam tpelu e ababab
// console.log("5".padStart(3, "0"));// tpelu e 0005 

// ========================================================================================================================================================


// taks 24

/*

function isPalindromeWord (word) {

  let original_word = word.toLowerCase() , new_word = [] ;

    for (let i = word.length - 1 ; i >= 0 ; i--) {
  
        new_word.push(original_word[i])

    }

   let reversed_word = new_word.join("")
   
    if (original_word === reversed_word) {

      return true;

    } else {

      return false;

    }


}

console.log (isPalindromeWord ("Level") ); 

*/

// ========================================================================================================================================================


// taks 25

/*

function Count (text) {

   let count = 0 ;

     let toLowercase =  text.toLowerCase() ;

     for (let i = 0 ; i < text.length ; ++i) {
 
      if (toLowercase[i] === "a" || toLowercase[i] === "e" || toLowercase[i] === "i" ||
         
          toLowercase[i] === "o" || toLowercase[i] === "u") {

             count++ ;
      }

   
    }

   return count ;


}

console.log (Count ("ABCDIOUE") )

*/

// ========================================================================================================================================================


// taks 26

function FirstSymbolUpperCase (text) {

   let new_arr = [] , words = text.split(" ");

    for (let i = 0 ; i < words.length ; ++i) {

      let word = words[i] ;

      let UpperCaseWord = word.charAt(0).toUpperCase() + word.slice(1);

      new_arr.push(UpperCaseWord)

    }
    
    return new_arr.join(" ");

}

console.log (FirstSymbolUpperCase ("hello from yerevan") )