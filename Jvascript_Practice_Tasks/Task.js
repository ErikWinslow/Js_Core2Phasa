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

/*

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

*/

// ========================================================================================================================================================


// taks 27

/*

function reverseWord (text) {

  let new_arr = []  , words = text.split(" ");

   for (let i = 0 ; i < text.length ; ++i) {

    let word = words[i] ;

      new_arr.push(word)

   }

   let new_string = new_arr.reverse().join(" ").trim();

   return new_string ;


}

console.log (reverseWord ("I Love JS"))

*/


// ========================================================================================================================================================


// taks 28

/*

console.log(Math.round(2.5)); // ktpi 3 qani vor ays method@ veradarznume kloracvac tiv iran motiki
console.log(Math.round(-2.5)); // -2.5 depqum k kloracni -2
console.log(Math.floor(-2.5)); // ays method@ kveradarzni hakarak@ 3 tiv@
console.log(Math.ceil(-2.5)); // cuyc kta -2 qani vor ays method@ evs kloracnume tiv@
console.log(Math.trunc(-2.5)); // ays method-nel nunpes kloracnume kstananq -2

*/

// ========================================================================================================================================================


// taks 29

// console.log(parseInt("42px")); // ksaqri 42 isk px kjnji
// console.log(parseInt("px42"));// NaN qani vor parseInt tesankyunits petqe arajn@ tiv ga bayc ays depqqum galis e tar
// console.log(parseFloat("3.14.15")); // indz tvume kveradarzni 3.14
// console.log(Number("42px")); // NaN qani vor Number chi karox poxel tar@ tvi
// console.log(parseInt("0x1A")); // sarqelu e tasnvecakan hamakargi tiv



// ========================================================================================================================================================


// taks 30

/*

console.log((1.005).toFixed(2)); // 1.00 qani vor na vekalelu e ketic heto arajin 2 tiv@
console.log((12.345).toFixed(1)); // nuyn logikan vekalelu ketic heto arajin tiv@
console.log(typeof (5).toFixed(2)); // veradarznelu Number qani vor JS bolor tarberaki tver@ Number type-en

*/


// ========================================================================================================================================================


// taks 31

/*

console.log(Number.isInteger(5.0)); // true qani vor sa Integer tipie bayc float e
console.log(Number.isInteger("5")); // false qani vor ays tiv@ nerkayacvace vorpes string
console.log(isNaN("abc")); // true qani vor iroqic ays tver@ tar chen
console.log(Number.isNaN("abc")); // false qani vor ays tarer@ tiv chen nerkayacnum irencic

*/

// ========================================================================================================================================================


// taks 32

/*

function RandomInegerNumber (max) {

  let RandomNumber = Math.floor(Math.random(1) * max)

  console.log (`Ваше рандомное число ${RandomNumber}`) ;

}

RandomInegerNumber(6) ;

*/

// Joxovurd ete es ruserenem grum okeya es hamarya bolor C cragrery ruserenem grel bayc qomentner@ hayeren kgrem

// chmtaceq vor AI-em arel

// ========================================================================================================================================================


// taks 33

/*

const arr = [1, 2, 3];
arr[5] = 6;
console.log(arr.length); // sra length klini 5 bayc bac toxvac element-@ 4 element@ klini empty
console.log(arr[4]); //  empty kamel undefined

*/


// ========================================================================================================================================================


// taks 34

/*

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a.length); // a - i length@ nuyn klini 
console.log(a === [1, 2, 3, 4]); // vsCode stex error-e talis bayc b-i u a-i chap@ tarber e

*/


// ========================================================================================================================================================


// taks 35

/*

const nums = [10, 20, 30, 40, 50];
const part = nums.slice(1, 3); // stex 1 index-ic minchev 3 index@ kpahi 10 50 ktrelu e pahvelu e part popoxakani mej part klni 20 30 
console.log(part, nums.length); // stex klni 20 30 part-@ num-i length-@ nuyn kmna
const removed = nums.splice(1, 2); // jnjelu e 1-ic sksvox element@ 2 idex-i het
console.log(removed, nums);// stex klni 10 40 50

*/


// ========================================================================================================================================================


// taks 36

/*

console.log([1, NaN].includes(NaN)); // kta true stugume zangvaci mej ka NaN te che
console.log([1, NaN].indexOf(NaN)); // kveradarzni NaN-i index@ 

*/

// es sxalveci -1 k beri bayc xi ?


// ========================================================================================================================================================


// taks 37

/*

console.log([10, 1, 5, 100].sort());// stex kberi 1 , 5 , 10 , 100
console.log([10, 1, 5, 100].sort((a, b) => a - b)); //  sa chaskaca

*/

// MDN-ov kardaci haskaca vor sort-@ tver@ sarquma string Unicode-i table-ov sharvum en @st iranc achi 

// to est hakarak zevov e hamametvum orinak "80" gnume araj "9"-ic


// ========================================================================================================================================================


// taks 38

// function minMaxNumber (arr) {

//   let Max_num = arr[0], Min_num = arr[0];

//     for (let i = 0 ; i < arr.length ; ++i) {

//       if (arr[i] > Max_num) {

//         Max_num = arr[i];

//       } 

//       if (Min_num > arr[i]) {

//         Min_num = arr[i] ;

//       }

//     }

//    // return Min_num ;

//     return Max_num ;


// }

// console.log(minMaxNumber( [4 , 17 , 2 , 9 , 11] ) ) ;

// ========================================================================================================================================================


// taks 39

// function averageGrade (arr) {

//  let average = 0 ;

//   for (let i = 0 ; i < arr.length ; ++i) {

//     average += arr[i];

//   }

//   average /= arr.length ;

//   return average


// }

// console.log (averageGrade ([85 , 92 , 78 , 95 , 88]) ) ;

// ========================================================================================================================================================


// taks 40

/*

function NoneDuplicate (arr) {

 let new_arr = [] ;

  for (let i = 0 ; i < arr.length ; ++i) {

     if (!new_arr.includes(arr[i])) {

      new_arr.push(arr[i])

     }

  }


  return new_arr;

}

console.log (NoneDuplicate ([1 , 2 , 2, 3 ,1 , 4]) ) ;

// mi jam gluxs jardumey heto hisha vor metodov kareli e stugel zangvacum ka ayd et element@ te che?

*/

// ========================================================================================================================================================


// taks 41

/*

function countIsEven (arr) {

  let count = 0;

    for (let i = 0 ; i < arr.length ; ++i) {

      if (arr[i] % 2 === 0) {

        count++

      }

    }

    return count ;

}

console.log (countIsEven ( [3 , 8 , 12 , 5 , 6] ) ) 

*/

// ========================================================================================================================================================


// taks 42


// function DifferentNumber (arr) {

//   let new_arr = [] ;

//     for (let i = 0 ; i < arr.length ; ++i) {

//       if (!new_arr.includes(arr[i])) {

//         new_arr.push(arr[i]) ;

//       }
//     }

//    new_arr.sort( (a , b) => a - b)

//    let DiffNum = new_arr.at(-2) ;
  

//     return DiffNum ;

// }

// console.log (DifferentNumber ([5 , 1, 9, 3, 9, 7]) )

// ogtagorceci hin method@ haneci bolor duplicate-ner@ ev sortavoreci dranic heto vercreci naxaverjin element@\


// ================================================== <<<Objects>> ======================================================================================================


// taks 43

// const user = { name: "Ani", age: 20 };
// const key = "name";
// console.log(user.key); // tpelu e Ani qani vor key pahum e object-i propert-in
// console.log(user[key]); // aystexel tpleu e Ani qani vor arden vercnumenq key-@ isk key-i mej property anun@
// console.log(user["age"]); // aystexel linelu e 20 qani vor aranc mijnord popoxakani miangamic xndrumenq nra arjeq@

// 1 tarberakum sxalveci qani vor key-@ aranc qarakusi paqagcerov e ev menq miangamic uzumenq key-i value isk mer object-um key anunov property chka


// ========================================================================================================================================================


// taks 44

// const a = { x: 1 };
// const b = { x: 1 };
// const c = a;
// console.log(a === b); // True qani vor V8-@ ete tenum e vor nuyn propert-in unen ays erku object-ner@ u vor arandzin hishoxutyun chzbaxecni hxumner@ sarqum e nuyn@ 
// console.log(a === c); // stexel True
// c.x = 5;
// console.log(a.x); // stex kta 5 qani vor ete copy arvac object-@ ete poxenq k poxvi original@

// 1 tarberakum tvec false chaskaca xi


// ========================================================================================================================================================


// taks 45

// const car = { brand: "BMW" }; 
// car.brand = "Audi"; // stex brand poxvelu e Audi
// car.year = 2020; // stex avelacvelu e nor property vori anun@ year
// delete car.brand; // stex jnjvelu e brand-@
// console.log(car); //  mnalu e menak year-@



// ========================================================================================================================================================


// taks 46

// const o = { a: 1, b: 2 };
// console.log(Object.keys(o));// cuyce talu objecti key-er@
// console.log(Object.values(o).length); // cuyc e talu value-neri erkarutyun@
// console.log(Object.entries(o)[1]); // cuyce talu objecti 1 indexi tak gtnvox property-n ev value


// ========================================================================================================================================================


// taks 47

// const o = { a: undefined };
// console.log("a" in o); // true qani vor ays object-um ka a property-n
// console.log(o.a === undefined); // true ayo ays propert-i um ka value undefined
// console.log("b" in o); // false objectum chka b anunov property
// console.log(o.b === undefined); // false chka b anunov property ev arjeq undefined ays property-um

// 4 tarberakum es sxalveci qani vor iroqic chkar aknkalox arjeq@ dra hamar true


// ========================================================================================================================================================


// taks 48

// function CountWord (word) {

//   let objCount = {} ;

//   for (let i = 0 ; i < word.length ; ++i) {

//     let letter = word[i] ;

//     if (objCount[letter]) {

//       objCount[letter] += 1 ;

//     } else {

//       objCount[letter] = 1 ;

//     }

//   }

//   return  objCount;

// }

// const word = "Banana" ;

// console.log (CountWord (word) ) ;

// ========================================================================================================================================================


// taks 49

/*

function TotalSalaries (salaries) {

  let sum = 0 ;

    for (let i in salaries) {

      sum += salaries[i] ;

    }

    return sum ;

}

function NameHighSalary (Namehighsal) {

  let name = "" , salary = 0;

  for (let i in Namehighsal) {

    if (Namehighsal[i] > salary) {

      salary = Namehighsal[i] ;

      name = i ;

    }

  }

  return name ;

}


const salaries = { Ani: 500000, Aram: 650000, Lilit: 720000 };

console.log(TotalSalaries (salaries) ) ;

console.log(NameHighSalary (salaries) ) ;
*/


// ============================================<< Functions >>============================================================================================================


// taks 50

// function greet(name = "Guest") {
//   return "Hi, " + name;
// }
// console.log(greet());// Hi Guest
// console.log(greet(undefined));// Hi undefined
// console.log(greet(null)); // Hi Null
// console.log(greet("")); // Hi

// sxalveci menak 2 tarberakum bayc chhaskaca xi

// ========================================================================================================================================================


// taks 51


// function add(a, b) {
//   a + b;
// }
// const mul = (a, b) => { a * b; };
// const sub = (a, b) => a - b;
// console.log(add(2, 3)); // undefined
// console.log(mul(2, 3)); // undefined
// console.log(sub(5, 2)); // 3

// qani vor menq chenq veradarzrel mer arjeq@ JS-@ avtomat mer arjeqner@ dnume return undefined

// isk erord tarberakum menq miangamic hetenq berum patasxan@


// ========================================================================================================================================================


// taks 52

// function f() {
//   return
//     42;
// }
// console.log(f()); // vochmiban het chi berelu qani vor returni toxi vra che kamel returni scope-i mej chi {}


// ========================================================================================================================================================


// taks 53

// function f(a, b, c) {
//   return c;
// }
// console.log(f(1, 2)); // undefined qani vor menq poxancumenq 3 argumenti tex@ 2 
// console.log(f(1, 2, 3, 4));// vercnelu e menak a b c bayc 4 anteselu e ev het e veradarznelu menak c
// console.log(f.length); // stacox argumentner@ klinen menak dra hamar length = 3



// ========================================================================================================================================================


// taks 54

/*

function isPrime (n) {

  let is_Prime = 1 ;

    if (is_Prime <= 1) {

      is_Prime = 0

    }

    for (let i = 2 ; i < n ; ++i) {

      if (n % i === 0) {

        is_Prime = 0 ;

        break

      }

    }

    if (is_Prime) {

      return true ;

    } else {

      return false ;

    }


}

console.log (isPrime(5))
console.log (isPrime(2))
console.log (isPrime(29))
console.log (isPrime(15))

*/


// ========================================================================================================================================================


// taks 55

/*

function power (base , exp) {

  let result = 1 ;

    for (let i = 0 ; i < exp ; ++i) {

      result *= base ;

    }

    return result ;

}

console.log(power(5)) ;

*/

// ========================================= <<Scope and Hoisting>> ===============================================================================================================


// taks 56

// console.log(a); 
 // undefined qani vor JS-i compiler-@ kardaluc popoxakaner barcracnume verev ev Sarqume TDZ
 // Ev qani vor Var aveli hin tarberakne popoxakan haytararelu dra hamar chi @nknum TDZ ev mnum undefined
// var a = 1;
// console.log(b); 
 // ReferanceError qani vor let aveli nor tarberakne popoxakani haytararelu na helnume verev (Hoisting) darnume undefined
 // @nknume TDZ (Templore Dead Zone) ev erbvor uzumenq nran ogtagorcel ReferanceError qani vor hxum@ TDZ-um e
// let b = 2;


// ========================================================================================================================================================


// taks 57

// let x = 1;

// function show() {

//   let x = 2;
  
//   if (true) {
//     let x = 3;
//   }
  
//   console.log(x);
// }

// show(); 
// arajin@ tpvelu e 3 heto 1 qani vor JS-i Compiler@ byteCode veraceluc heto poxancume interpritator-in
//interpritator@ kardaluc ichnume ev tenume global tiruytum haytararvac x hishume ev tenume haytararvac function bayc chkanchac
// function-ic heto tenum e vor function@ kanchume ev miangamic katarum e function-i kod@
// ev verjum katareluc heto tesnum e console.log(x) global tiruytic vor@ kopit asac kanchace ev tpum e mek
// isk if-block scope-um x poxakerpvele dra hamarel 3 

// console.log(x); 

// ========================================================================================================================================================


// taks 58

// console.log(sum(2, 3));
// function sum(a, b) { return a + b; } // Ays kod@ kkatarvi qani vor nra anun@ hastatun-e ev minchev kopit asac nra stexcel@ kareli e nran kanchel
// console.log(mult(2, 3));
// var mult = function (a, b) { return a * b; }; // undefined qani vor var-ov function-Expression enq haytararac

// kxmmmm mult function-@ berec type error aselov vor sa function chi 
// es haskaca menq nran vorpes artahaytutyunenq haytararel dra hamarel TypeError

// ========================================================================================================================================================


// taks 59

// function setValue() {
//   value = 10;
// }
// setValue();
// // vochmiban chi berelu qani vor menq function@ console.log-ov chenq kanche ev chenq tpel
// // kamel ete console.log-ov kancheynq k veradarzner undefined qani vor popoxakan@ return chenq arel
// console.log(value) // undefined qani vor global scope-um value artahaytutyun@ chi haytararavac

// aaa es haskaca ete value-n aranc let var const-enq haytararum na avtomat @nknume global scope

// ========================================================================================================================================================


// taks 60


// var count = 1;
// function test() {
//   console.log(count);
//   var count = 2;
// }
// test(); //  undefined qani vor c.l stugume ir scope-um ira nman popoxakan chka ev na qcume undefined

