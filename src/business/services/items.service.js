import CrawlerService from '../../crawler/services/itemsCrawler.service';
import DataHandlerService from './dataHandler.service';

class ItemsService {
    constructor(params) {
        this.crawlerService = new CrawlerService(params);
        this.dataHandlerService = new DataHandlerService();
    }

    getItem(identifier) {
        this.crawlerService.getSingleItemData(identifier)
            .then(item => {
                const obj = this.dataHandlerService.convertEquipment(item);
                console.log(obj);
            });
    }
}

export default ItemsService;
