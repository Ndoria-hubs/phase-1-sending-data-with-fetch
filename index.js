// Add your code here
// fetch(destinatiionURL, configurationObject);
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert('Bad things! Ragnarok!')
//         console.log(error.message);
//     })

  



function submitData(userName,userEmail) {
    const userData = {
        name: userName,
        email: userEmail,
    };
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify(userData)        
    })
    .then(resp => resp.json(userData))
    .then(data => {
        console.log('Response Data:', data)
        // return data;
        const idElement = document.createElement('div')
        idElement.textContent = `New ID: ${data.id}`
        document.body.append(idElement)
    })
    .catch(err => {
        console.error('Something went wrong, try again later', err);
        const errorMess = document.createElement('div')
        errorMess.innerHTML = err;
        document.body.append(errorMess);
    })
}
