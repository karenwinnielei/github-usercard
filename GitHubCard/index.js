/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const gitContainer = document.querySelector('.cards')

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(githubAttr){
  const {imageUrl, name, username, location, githubUrl, followers, following, bio} = githubAttr

  const gitCard = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const gitUser = document.createElement('p')
  const userLocation = document.createElement('p')
  const gitProfile = document.createElement('p')
  const gitLink = document.createElement('a')
  const followerCount = document.createElement('p')
  const followingCount = document.createElement('p')
  const userBio = document.createElement('p')

  gitCard.appendChild(img)
  gitCard.appendChild(cardInfo)
  cardInfo.appendChild(h3)
  cardInfo.appendChild(gitUser)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(gitProfile)
  gitProfile.appendChild(gitLink)
  cardInfo.appendChild(followerCount)
  cardInfo.appendChild(followingCount)
  cardInfo.appendChild(userBio)

  gitCard.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  gitUser.classList.add('username')

  img.src = imageUrl
  h3.textContent = `${username}`
  gitUser.textContent = `${name}`
  userLocation.textContent = `Location: ${location}`
  gitLink.textContent = `Profile: ${githubUrl}`
  followerCount.textContent = `Followers: ${followers}`
  followingCount.textContent = `Following: ${following}`
  userBio.textContent = `Bio: ${bio}`




  

  return gitCard
}

axios.get(`https://api.github.com/users/karenwinnielei`)
.then(response => {
  const githubArr = response.data
  console.log(githubArr)
  // console.log(githubArr['avatar_url'])
    const gitCard = cardMaker({imageUrl: githubArr['avatar_url'], name: githubArr['name'], username: githubArr['login'], location: githubArr['location'], githubUrl: githubArr['url'], followers: githubArr['followers'], following: githubArr['following'], bio: githubArr['bio']})
    gitContainer.appendChild(gitCard)
})
.catch(error => {
  console.log(error)
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

function getGit(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(response => {
    const githubObj = response.data
    console.log(githubObj)
    // Object.keys(githubObj).forEach(info => {
      const gitCard = cardMaker({imageUrl: githubObj['avatar_url'], name: githubObj['name'], username: githubObj['login'], location: githubObj['location'], githubUrl: githubObj['url'], followers: githubObj['followers'], following: githubObj['following'], bio: githubObj['bio']})
      gitContainer.appendChild(gitCard)
  })
    // })
      
  .catch(error => {
    console.log(error)
  })
}

followersArray.forEach(username =>{
  getGit(username)
})
