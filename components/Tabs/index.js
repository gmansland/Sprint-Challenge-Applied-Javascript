// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(best => {
    console.log(best.data.topics)

    best.data.topics.forEach(topicz => {
        topics.appendChild(createTab(topicz))
    })
})
.catch(error => {
    console.log(error)
})

const topics = document.querySelector('.topics')
console.log(topics)

function createTab(object) {
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = object
    return tab
}