import {
    renderMovieListFromMap
} from './render.js'

import{
    movieList,
    all,
    popular as mostValued,
    notpopular as leastValued
} from './normalize.js'

filter.addEventListener('change', function() {
    let result;
    switch (this.value) {
        case 'most-valued':
            result = renderMovieListFromMap(mostValued, movieList);
            break;
        case 'least-valued':
            result = renderMovieListFromMap(leastValued, movieList);
            break;
        default:
            result = renderMovieListFromMap(all, movieList);
    }
    console.log(result);
})