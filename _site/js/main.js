// // API Section

// Axios Fetch Example using SWAPI
// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESPONSE: ", res);
//     })
//     .catch((e) => {
//         console.log("ERROR ", e);
//     });

// Axios Fetch Example_REFACTORED
// const getStarWarsPerson = async () => {
//     const res = await axios.get("https://swapi.dev/api/people/1/")
//     console.log(res.data)
// };

// getStarWarsPerson();

// Axios Fetch Example_REFACTORED WITH ID
// const getStarWarsPerson = async (id) => {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log(res.data)
// };
// getStarWarsPerson(5);



// WP API using Axios
// const wpEndPoint = 'http://wdb.waj.mybluehost.me/wp-json'; //this is currently a dummy site to be replaced by noblelivingco.com
// const wpAPI = {
//     settings: `${wpEndPoint}/wp/v2/settings`,
//     posts: `${wpEndPoint}/wp/v2/posts`,
//     pages: `${wpEndPoint}/wp/v2/pages`,
//     postTypes: `${wpEndPoint}/wp/v2/types`,
//     acf: `${wpEndPoint}/acf/v3/posts`
// }

// const getWpPosts = async () => {
//     const res = await axios.get(wpAPI.posts)
//     const postData = res.data;
//     console.log(postData);
//     for (let post of postData) {
//         console.log(post.title.rendered);
//     }
// };
// getWpPosts();



// WP API using basic FETCH function
const wpEndPoint = 'http://wdb.waj.mybluehost.me/wp-json'; //this is currently a dummy site to be replaced by noblelivingco.com
const wpAPI = {
    settings: `${wpEndPoint}/wp/v2/settings`,
    posts: `${wpEndPoint}/wp/v2/posts`,
    pages: `${wpEndPoint}/wp/v2/pages`,
    postTypes: `${wpEndPoint}/wp/v2/types`,
    acf: `${wpEndPoint}/acf/v3/posts`
}

const posts = {
    postPerPage: 10,
    currentPage: 1,
    results: null
};

//create these classes in blog/index.html
const pagination = document.querySelector('.pages');
const output = document.querySelector('.output');

const init = function (res) {
    console.log('ready', res);
    const url = `${wpEndPoint}/wp/v2/posts?per_page=100`;
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data);
        posts.results = data.results;
        loadPage(1);
    }).catch(function (error) {
        console.log(error);
    })
}

const loadPage = function (pg) {
    posts.currentPage = pg;
    pagination.innerHTML = '';
    let startPost = (posts.currentPage - 1) * posts.postPerPage;
    let totalPages = Math.ceil(posts.results.length / posts.postPerPage);
    let endPost = startPost + posts.postPerPage > posts.results.length ?
        posts.results.length : startPost + posts.postPerPage;
    output.innerHTML = `<h1>Page ${posts.currentPage}</h1>`;
    let pageOutput = document.createElement('div');
    for (let x = 0; x < totalPages; x++) {
        let span = document.createElement('span');
        span.textContent = (x + 1);
        span.classList.add('icons');
        span.addEventListener('click', function () {
            loadPage(x + 1);
        })
        if (x + 1 === posts.currentPage) {
            span.classList.add('active');
        }
        pageOutput.appendChild(span);
    }
    for (let x = startPost; x < endPost; x++) {
        let div = document.createElement('div');
        div.classList.add('postTitle');
        let main = posts.results[x];
        let postTitle = main.title.rendered;
        div.innerHTML = `<h3>main.title.rendered</h3>`;
        let details = document.createElement('div');
        details.classList.add('details');
        details.textContent = ``;
        div.appendChild(details);
        let img = document.createElement('img');
        img.src = main.picture.thumbnail;
        div.appendChild(img);
        output.appendChild(div);
    }
    pagination.appendChild(pageOutput);
}
const capMe = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
window.addEventListener('load', function () {
    init();
})




// Home Hero Img Parallax
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('#hero-img');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .4 + 'px)';
});

