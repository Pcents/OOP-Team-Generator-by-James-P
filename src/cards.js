// require something?
// how do i append?
const maCards = document.querySelector('manager')
const enCards = document.querySelector('engineer')
const inCards = document.querySelector('intern')
const arrayImp = require('./index.js')
// have to link the email
const manCards = manager => {
return `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-subtitle mb-2">${answers.name}</h5>
  <h5 class="card-title"Manager</h5>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID ${answers.id}</li>
  <li class="list-group-item">Email ${answers.email}</li>
  <li class="list-group-item">Office Number ${answers.officeNumber}</li>
</ul>
  <a href="#" class="card-link">Card link</a>

</div>
</div>`
}
function appCards (){

for (i = 0; i < assembleTeam.length; i++){
  // append stuff here
}
}
// have to link href on card for github
const engCards = engineer => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-subtitle mb-2">${answers.name}</h5>
      <h5 class="card-title"Manager</h5>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID ${answers.id}</li>
      <li class="list-group-item">Email ${answers.email}</li>
      <li class="list-group-item">GitHub Username ${answers.github}</li>
    </ul>
      <a href="#" class="card-link">Card link</a>
    
    </div>
    </div>`
    
    }

    const intCards = intern => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-subtitle mb-2">${answers.name}</h5>
          <h5 class="card-title"Manager</h5>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID ${answers.id}</li>
          <li class="list-group-item">Email ${answers.email}</li>
          <li class="list-group-item">School ${answers.school}</li>
        </ul>
          <a href="#" class="card-link">Card link</a>
        
        </div>
        </div>`
        
        }