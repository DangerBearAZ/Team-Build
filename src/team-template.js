const fs = require('fs');

function startHtml() {
    const html =
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="card-group"> 
    
    `;
    fs.writeFile("../output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        } 
    });
    console.log("start");
}
    

function fillCard(member) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let newCard = "";
    if (role === "Engineer") {
        const gitHub = member.getGithub();
        fillCard =
            `<div class="card">
    <div class="card-body">
    <h5 class="card-header">${name}<br /><br />${role}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email Address: ${email}</li>
         <li class="list-group-item">GitHub: ${gitHub}</li> 
    </ul> 
    </div>
</div> 
</div>
</div> 
</body>
    </html> `
    }
    else if (role === "Intern") {
        const school =  member.getSchool();
        fillCard =  `<div class="card">
        <div class="card-body">
        <h5 class="card-header">${name}<br /><br />${role}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
             <li class="list-group-item">School: ${school}</li> 
        </ul> 
        </div>
    </div> 
    </div>
    </div> 
    </body>
        </html> `
    } else {
        fillCard =  `<div class="card">
        <div class="card-body">
        <h5 class="card-header">${name}<br /><br />${role}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
             <li class="list-group-item">Office: ${office}</li> 
        </ul> 
        </div>
    </div> 
    </div>
    </div> 
    </body>
        </html> `
    }
    console.log('adding Employee');
    fs.appendFile("../output/team.html", fillCard, function(err) {
        if (err) {
            console.log(err);
        };
        console.log('finished');
    });
      
}

module.exports = {startHtml, fillCard}
