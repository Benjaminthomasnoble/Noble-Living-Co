const EleventyFetch = require("@11ty/eleventy-fetch");

const wpEndPoint = 'http://wdb.waj.mybluehost.me/wp-json';

module.exports = () =>
    EleventyFetch(`${wpEndPoint}/wp/v2/posts?per_page=100`, {
        duration: "1m",
        type: "json"
    });