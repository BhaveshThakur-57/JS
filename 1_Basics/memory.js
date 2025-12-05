// Stack (Primitive) , Heap (Non-Primitive)
// jitne bhi primitive values hai oo sab jaate hai stack ke andar
// and jab bhi hm stack mese kuch lete hai tab uska copy he milta hai
//and Heap me actual values he change hoti hai 
let myYoutubename = "bhaveshthakur"

let anothername = myYoutubename
anothername = "aa meri jaan"
console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"harsh@gmail.com",
    upi: "harsh@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);