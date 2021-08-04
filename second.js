// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// На странице user-details.html:
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

const mainBlock = document.getElementById('second_page')
const url = new URL(location)
const join = url.searchParams.get('user')
const user = JSON.parse(join)

let Div = document.createElement('div')
Div.innerText = ` Id - ${user.id}
Name - ${user.name}
Username - ${user.username}
Email - ${user.email}
Street - ${user.address.street}
Zipcode - ${user.address.zipcode}
Lat -  ${user.address.geo.lat}
Lng  - ${user.address.geo.lng}
Phone  - ${user.phone}
Website -  ${user.website}
Company name- ${user.company.name}
Company cash - ${user.company.catchPhrase}
Company BS - ${user.company.bs}
`

let btn_two = document.createElement('button')
btn_two.innerText = 'Posts of current user'

btn_two.onclick = function () {

    const empty = document.createElement('p')

      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
     .then(value => value.json())
     .then(posts => {
         for (const post of posts){
            const block = document.getElementById('two')
             block.innerText = ''
               const empty_p = document.createElement('p')
               const empty_title = document.createElement('h4')
             empty_title.innerText = `${post.id} : ${post.title}`
              empty_p.innerText = `${post.body}`
             let btn_second = document.createElement('button')
             btn_second.innerText = 'Post details'

             btn_second.href = `Post-details?post=${JSON.stringify(post)}`

             block.append(empty_title,empty_p,btn_second)
             mainBlock.appendChild(block)

         }
         })
}
mainBlock.append(Div)
mainBlock.appendChild(btn_two)


// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

