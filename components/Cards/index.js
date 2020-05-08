// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(responce => {
    console.log(responce.data.articles)
    const articles = document.querySelector('.cards-container')
    responce.data.articles.bootstrap.forEach(article => {
        articles.appendChild(creatingCard(article))
    })
    responce.data.articles.javascript.forEach(article => {
        articles.appendChild(creatingCard(article))
    })
    responce.data.articles.technology.forEach(article => {
        articles.appendChild(creatingCard(article))
    })
    responce.data.articles.node.forEach(article => {
        articles.appendChild(creatingCard(article))
    })
    responce.data.articles.jquery.forEach(article => {
        articles.appendChild(creatingCard(article))
    })
})
.catch(error => {
    console.log(error)
})

function creatingCard(articles) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const image = document.createElement('div')
    const www = document.createElement('img')
    const name = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(image)
    image.appendChild(www)
    author.appendChild(name)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    image.classList.add('img-container')

    headline.textContent = articles.headline
    name.textContent = articles.authorName
    www.setAttribute ('src', articles.authorPhoto)

    return card
}

