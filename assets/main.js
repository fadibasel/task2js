

async function getUsers(){
    const response= await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data =await response.json();
    const result = data.map(function(user){

        return `
        <div class="users">
         <h2>${user.name}</h2>
         <p>${user.username}</p>
         <p>${user.id}</p>
         <p>${user.email}</p>
         <p>${user.address.street}</p>
         <p>${user.address.suite}</p>
         <p>${user.address.city}</p>
         <p>${user.address.zipcode}</p>
         <p>${user.phone}</p>
         <p>${user.website}</p>
        <p>${user.company.name}</p>





        </div>

        `
    }).join(' ');
document.querySelector(".users-container").innerHTML=result;
console.log(result);
}
getUsers();