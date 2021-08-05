// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const  mainDiv = document.getElementById('block_three')
const get = document.getElementById('last_wrap')
const url = new URL(location)
const join = url.searchParams.get('post')
const post = JSON.parse(join)


let postId =  document.getElementsByClassName('com_wrap').innerText = `ID - ${post.id}`
let postBody =  document.getElementsByClassName('com_wrap').innerText = ` Post - ${post.body}`


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        const newBlock = document.createElement('div')
        newBlock.classList.add('newBlock')
        for (const comment of comments) {
            let threeDiv = document.createElement('div')
            threeDiv.classList.add('com_div')
            threeDiv.innerText = 'Comment:' + ' ' + comment.body
            newBlock.appendChild(threeDiv)
        }

        get.append(postId,postBody)
        document.body.appendChild(newBlock)
    })
