export default {
    BaseUrl: 'https://www.ragcomercio.com',
    OnlineTable: '#results > div > table:nth-child(3)',
    OfflineTable: '#results > div > table:nth-child(7)',
    TableColumns: {
        Name: 'td:nth-child(3) > a.itemdropdown',
        Quantity: 'td:nth-child(2)',
        MinPrice: 'td > span.label.label-success',
        AvgPrice: 'td > span.label.label-piscina',
        MaxPrice: 'td > span.label.label-danger',
    },
};
