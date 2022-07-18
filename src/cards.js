
const manCards = (answers) => {
return `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-subtitle mb-2">${answers.name}</h5>
  <h5 class="card-title">Manager</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${answers.id}</li>
    <li class="list-group-item">
    <div class="card-link">Email <a href="mailto:${answers.email}">${answers.email}</a>
    </div>
    </li>
    <li class="list-group-item">Office Number ${answers.officeNumber}</li>
  </ul>
  
  </div>
</div>`
}

const engCards = (answers) => {
return `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-subtitle mb-2">${answers.name}</h5>
    <h5 class="card-title">Engineer</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID; ${answers.id}</li>
      <li class="list-group-item">
      <div class="card-link">Email <a href="mailto:${answers.email}">${answers.email}</a>
      </div>
      </li>
      <li class="list-group-item">
      <div class="card-link">Github: <a href="https://github.com/${answers.github}" target="_blank">${answers.github}</a>
      </div>
      </li>
    </ul>
    </div>
    </div>`
    
    }

  const intCards = (answers) => {
  return `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-subtitle mb-2">${answers.name}</h5>
        <h5 class="card-title">Intern</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID ${answers.id}</li>
          <li class="list-group-item">
          <div class="card-link">Email <a href="${answers.email}">${answers.email}</a>
          </div>
          </li>
          <li class="list-group-item">School ${answers.school}</li>
        </ul>      
        </div>
        </div>`
        
        }

// this function will create the cards above and put them into my big template
function teamCards(employees){
  console.log(employees)
  // loop through array and create a card for each employee
  let loopedCards = ``;
employees.forEach(function(employee){
  console.log(employee)
  if (employee.getRole() === "Manager"){
    let manager = manCards(employee)
    loopedCards += manager
  } else if (employee.getRole() === "Engineer"){
    let engineer = engCards(employee)
    loopedCards += engineer
  } else if (employee.getRole() === "Intern"){
    let intern = intCards(employee)
    loopedCards += intern
  }
})
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    <title>Team OOP</title>
</head>
<body>
    <header>The Squad</header>
${loopedCards}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
    </script>
    </body>
    </html>  `
  };
  module.exports = teamCards;
