// // set method 
// localStorage.setItem('test' , 1 )

// // get method

// alert(localStorage.getItem('test'))

// // clear  all

// // localStorage.clear()

// //  remove item 

// localStorage.removeItem('test')


// object type  access 

localStorage.test= 2 ;

// alert(localStorage.test)

// delete localStorage.test;

// access item loop dont use only test purpose 
// for(let  i = 0 ;  i < localStorage.length ;  i++){
//     let key = localStorage.key(i)
//     alert(`${key}: ${localStorage.getItem(key)}` )


// }
//  for in loop  right method 
// for (const key in localStorage) {
//     if (!localStorage.hasOwnProperty(key)) {
//        continue
        
//     }

//     alert(`${key}: ${localStorage.getItem(key)}`)
// }

localStorage.user1 = {name: 'Rakibul'}
// alert(localStorage.user);

//  we can store  data  in json and user it 
// when store data  local storage json.strigify
localStorage.user = JSON.stringify({name: "Rajiul"})

// if we  access first convert json.parse

let user = JSON.parse(localStorage.user)
alert(user.name)

alert(JSON.stringify(localStorage , null , 2 ))
