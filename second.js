const mainBlock = document.getElementById('second_page')
const url = new URL(location)
const join = url.searchParams.get('user')
const user = JSON.parse(join)

let Div = document.createElement('div')
Div.classList.add('secondDiv')
Div.innerHTML = `<div id="wrap_info">

<div class="wrapper">
<h3 style="margin: 0">ID:${user.id}</h3></br>
Name: ${user.name} </br>
Username: ${user.username}</br>
Email: ${user.email}</br>
Street: ${user.address.street}</br>
Zipcode: ${user.address.zipcode} </br>
Lat: ${user.address.geo.lat} </br>
Lng: ${user.address.geo.lng} </br>
Phone: ${user.phone} </br>
Website: ${user.website} </br>
Company name: ${user.company.name}</br>
Company cash: ${user.company.catchPhrase}</br>
Company BS: ${user.company.bs}</p></br>
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



