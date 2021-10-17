const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayBookResalt(data.docs));
}


const displayBookResalt = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    const result = document.getElementById('result');
    let resultShow = result.innerText;

 if (docs.length === 0) {
    result.innerText = 'Search Not Found ';
 } else{
    result.innerText = 'Search Found ' + docs.length;
    docs.forEach(docs=>{
        const cover = `https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${cover}" class="card-img-top" alt="${docs.cover_i}">
                <div class="card-body">
                    <h6 class="card-title">${docs.title}</h6>
                </div>
                    <p class="card-text ">Author: ${docs.author_name}</p>
                    <p class="card-text ">First publish year: ${docs.first_publish_year}</p>
            </div>
        `;
        searchResult.appendChild(div);
    }) 
 }
    
}