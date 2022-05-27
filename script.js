/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showBtn=document.getElementById("btn")
const output=document.getElementById("output")










fetch(ENDPOINT)
.then(response=>response.json())
.then(data=>{

showBtn.addEventListener("click", function(){
output.innerHTML=""
loadUsers(data)
})


    console.log(data)
})
.catch(error=>console.log(error))



function loadUsers(data){
    data.forEach(x => {
        let korta= document.createElement("div")
        korta.classList.add("card")
        korta.innerHTML=
        `
        <h3>${x.login}</h3>
        <img src="${x.avatar_url}" alt="">
        `
        output.append(korta)
    });
    

}