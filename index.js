import ItemsService from './src/business/services/items.service';

let c = new ItemsService();
c.getItem('arco+demoniaco', 2).then(x => console.log(
    JSON.stringify(x))
);

c.getStores('%2B9+Arco+Demon%C3%ADaco+%5BCarta+Cavaleiro+do+Abismo%2A2%5D+%5B2%5D'
, 18125, 'Offline', 2, 'itemstore').then(x => console.log(x));