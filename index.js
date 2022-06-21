// 01 - Comparaison
// const test = 143
// const bis = 219

// console.log(test > bis, test < bis, test >= bis, test <= bis, test !== bis)

// 02 - Condition
// const limit = 50
// const score = 219

// if(score >= limit){
//     console.log("Ok good !")
// } else{
//     console.log("Oh nooo ...")
// }

// 03 - Condition II
// const password = "azerty"

// if(password.length > 5){
//     console.log("The password is secure ")
// } else{
//     console.log("The password is not secured")
// }

// 04 - Condition III
// const limit = 50
// const score = 219
// const password = "azerty"

// if(score > limit && password.length > 5){
//     console.log("Everything is good")
// } else if(score > limit || password.length > 5){
//     console.log("Something is good")
// } else{
//     console.log("Nothing is good")
// }

// 05 - Random
// const random = Math.floor(Math.random() * 6) + 1

// if(random === 6){
//     console.log("Yes I win ! ")
// }else{
//     console.log("So close ... :" + random)
// }

// 06 - Month
// var month = "June"

// switch(month){
//     case "January":
//         console.log("Winter")
//         break
//     case "February":
//         console.log("Winter")
//         break
//     case "March":
//         console.log("Spring")
//         break
//     case "April":
//         console.log("Spring")
//         break
//     case "May":
//         console.log("Spring")
//         break
//     case "June":
//         console.log("Summer")
//         break
//     case "July":
//         console.log("Summer")
//         break
//     case "August":
//         console.log("Summer")
//         break
//     case "September":
//         console.log("Fall")
//         break
//     case "October":
//         console.log("Fall")
//         break
//     case "November":
//         console.log("Fall")
//         break
//     case "December":
//         console.log("Winter")
//         break
//     default:
//         console.log("It's not a month")
// }

// 07 - Rounded but better
// var roundedNumber = 12.4

// if((roundedNumber - Math.floor(roundedNumber)) < (Math.ceil(roundedNumber) - roundedNumber)){
//     console.log(Math.floor(roundedNumber))
// }else{
//     console.log(Math.ceil(roundedNumber))
// }

// 08 - Rounded but better, Méthode 2
// let number = 3.5
// let decimalString = ""
// let decimal = 0
// let res = 0

// number = number.toString()
// let index = number.indexOf(".")

// decimalString = number.substring(index)
// decimal = parseFloat(decimalString)

// if(decimal < 0.5){
//     console.log(number - decimal)
// } else{
//     number = parseFloat(number)
//     res = 1-decimal + number
//     console.log(res)
// }

// 09 - Rounded but better, Méthode 3
// let roundedNumber = 3.3
// let decimalNumber = roundedNumber.toString()
// let word = decimalNumber.split("")[2]

// if(parseInt(word) < 5){
//     console.log(Math.floor(roundedNumber))
// }else{
//     console.log(Math.ceil(roundedNumber))
// }


