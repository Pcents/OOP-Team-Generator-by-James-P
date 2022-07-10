// require something?
// how do i append?

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