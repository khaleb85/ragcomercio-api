import ItemsService from './src/business/services/items.service';

let c = new ItemsService();
c.getItem(18125).then(x => console.log(x));