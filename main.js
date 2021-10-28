const LinksSocialMedia = {
  github: 'A-Chimanski',
  youtube: 'channel/UCGQWJ0qz3fkdBJ20PVU-sxA',
  facebook: 'ander.chimanski',
  twitter: 'chimanskiander',
  instagram: 'anderschimanski'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.facebook}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLink.textContent = data.Login
    })
}
getGitHubProfileInfos()
