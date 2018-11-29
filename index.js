import ItemsCrawlerService from './src/crawler/services/itemsCrawler.service';

let c = new ItemsCrawlerService();
c.getSingleItemData(18125)
.then(elements => {
    
    console.log(elements);
    }).catch(error => {
    console.error('Search failed:', error)
});