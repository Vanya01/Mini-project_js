// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// На странице user-details.html:
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

const  mainDiv = document.getElementById('about')

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
