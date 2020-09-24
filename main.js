let url = "https://api.github.com/users/ckwhitted11"
const targetEl = document.querySelector('#user-name')


fetch (url)
.then (response => response.json())
.then (data => {
    console.log (data)
})

const orgUrl = "https://api.github.com/users/ckwhitted11"

fetch(orgUrl)
    .then(res => res.json())
    .then(data => {
        let h2 = document.createElement ('h2')
        h2.innerText = data.login
        targetEl.appendChild(h2)
        
    }
        )

    let websiteUrl = document.createElement (url)
    url = data.url
    targetEL.appendChild(url)
    
    let trueStory = document.createElement (The-Story)
    trueStory.innerText = data.bio
    targetEl.appendChild(trueStory)

    let company = document.createElement (company)
    company.innerText = data.company
    targetEl.appendChild(company)

    let email = document.createElement (email)
    email.innerText = data.email
    targetEl.appendChild(email)
