// callbacks: pass function as a argument to another function
// callback is simple a function

const greetUser = (username, callback) => {
    if(callback)
        console.log(callback(username));
    else 
        console.log(username);
}

greetUser("james", (username)=> { return "hello "+username})

greetUser("james", (username)=> "hello "+username)

const cb = (username) => "lebron " + username;
greetUser("james",cb)