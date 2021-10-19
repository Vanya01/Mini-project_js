
const mainBlock = document.getElementById('second_page')
const url = new URL(location)
const join = url.searchParams.get('user')
const user = JSON.parse(join)

let Div = document.createElement('div')
Div.classList.add('secondDiv')
Div.innerHTML = `<div id="wrap_info">

<div class="wrapper">

<div class="wrapper_in"><h3>ID:</h3><p>${user.id}</p></div>
<div class="wrapper_in"><h3> Name:</h3><p>${user.name}</p></div>
<div class="wrapper_in"><h3>Username:</h3><p>${user.username}</p></div>
<div class="wrapper_in"><h3>Email:</h3><p>${user.email}</p></div>
<div class="wrapper_in"><h3>Street:</h3><p>${user.address.street}</p></div>
<div class="wrapper_in"><h3>Zipcode:</h3><p>${user.address.zipcode}</p></div>
<div class="wrapper_in"><h3>Lat:</h3><p>${user.address.geo.lat}</p></div>
<div class="wrapper_in"><h3>Lng:</h3><p>${user.address.geo.lng}</p></div>
<div class="wrapper_in"><h3>Phone:</h3><p>${user.phone}</p></div>
<div class="wrapper_in"><h3>Website:</h3><p>${user.website}</p></div>
<div class="wrapper_in"><h3>Company name:</h3><p>${user.company.name}</p></div>
<div class="wrapper_in"><h3>Company cash:</h3><p>${user.company.catchPhrase}</p></div>
<div class="wrapper_in"><h3>Company BS:</h3><p>${user.company.bs}</p></div>

</div>
</div>
`

let btn_two = document.createElement('button')
btn_two.classList.add('second_button')
btn_two.innerText = 'Posts of current user'

btn_two.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                const block = document.getElementById('two')
                const empty_div_two = document.createElement('div')
                empty_div_two.classList.add('post_wrap')
                const empty_p = document.createElement('p')
                empty_p.classList.add('posts_p')
                const empty_title = document.createElement('h4')
                empty_title.classList.add('posts_block')
                empty_title.innerText = `${post.id} : ${post.title}`
                empty_p.innerText = `${post.body}`
                let btn_second = document.createElement('button')
                btn_second.classList.add('posts_btn')
                btn_second.innerText = 'Post details'
                btn_second.onclick = () => {
                    location.href = `Post-details.html?post=${JSON.stringify(post)}`
                }
                block.append(empty_div_two)
                empty_div_two.append(empty_title, empty_p, btn_second)
                mainBlock.appendChild(block)
            }
        })
}
mainBlock.append(Div)
mainBlock.appendChild(btn_two)



