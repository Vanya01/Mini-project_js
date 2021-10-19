const mainDiv = document.getElementById('about')

fetch(` https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let inDiv = document.createElement('div')
            inDiv.className = 'wrap_first'
            let an = document.createElement('a')
            inDiv.innerText = user.name
            an.innerText = ' Get info '
            an.href = `user-details.html?user=${JSON.stringify(user)}`
            mainDiv.appendChild(inDiv)
            inDiv.appendChild(an)
        }
    })
