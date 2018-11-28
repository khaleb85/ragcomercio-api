import Crawler from './src/crawler';

var c = new Crawler();
c.getItem(18125)
.then(elements => {
    
    console.log(elements);
    }).catch(error => {
    console.error('Search failed:', error)
});