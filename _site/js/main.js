// // API Section

// Axios Fetch Example
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



// WP API
const wpEndPoint = 'http://wdb.waj.mybluehost.me/wp-json'; //this is currently a dummy site to be replaced by noblelivingco.com
const wpAPI = {
    settings: `${wpEndPoint}/wp/v2/settings`,
    posts: `${wpEndPoint}/wp/v2/posts`,
    pages: `${wpEndPoint}/wp/v2/pages`,
    postTypes: `${wpEndPoint}/wp/v2/types`,
    acf: `${wpEndPoint}/acf/v3/posts`
}

const getWpPosts = async () => {
    const res = await axios.get(wpAPI.posts)
    const postData = res.data;
    console.log(postData);
    for (let post of postData) {
        console.log(post.title.rendered);
    }
};
getWpPosts();




// Home Hero Img Parallax
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('#hero-img');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .4 + 'px)';
});

