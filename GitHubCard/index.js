/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/wilcoxva")
  .then((res) => {
    // this probably returns a 200 status code
      console.log(res);
      const card = createCard(res);
      cards.appendChild(card);
      followersArray.forEach((string) => {
        axios
          .get(`https://api.github.com/users/${string}`)
          .then((res) => {
            console.log(res);
            cards.appendChild(createCard(res))
          })
          .catch((err) => {
            console.log(err);
          })
        
      });
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


const cards = document.querySelector('.cards');

function createCard(object) {
  const newCard = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  newCard.classList.add('card');
  img.src = object.data.avatar_url;
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = object.data.name;
  userName.classList.add('username');
  userName.textContent = object.data.login;
  location.textContent = "Location: " + object.data.location;
  profile.textContent = "Profile: " + object.data.html_url;
  followers.textContent = "Followers: " + object.data.followers;
  following.textContent = "Following: " + object.data.following;
  bio.textContent = "Bio: " + object.data.bio;
 
  newCard.appendChild(img);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return newCard;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
