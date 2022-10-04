const result = document.getElementById('result');


async function fetchUsers() {
    try {
        
        const url = 'https://3000-rafatalamsai-expressapi-va1igakgs4u.ws-us67.gitpod.io/users'
        let resp = await fetch(url)
        const users = await resp.json()

        showUsersOnUi(users)

        console.log(users)
    } catch (error) {
        console.error(error)
        
    }
}

function showUsersOnUi(users) {

    users.map(user=>{
        const li = document.createElement('li');
        li.innerHTML = user.name + `<button onclick="deleteUser(${user.id})"> Delete</button>`
        result.appendChild(li)
    })
}

async function deleteUser(id) {
    console.log(id)
    const url = 'https://3000-rafatalamsai-expressapi-va1igakgs4u.ws-us67.gitpod.io/users/'+id
    let resp = await fetch(url, {
        method: 'delete'
    })
    const jsonRsp  = await resp.json()
    console.log(jsonRsp)


}