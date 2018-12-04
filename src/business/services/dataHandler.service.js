class DataHandlerService {
    convertEquipment(obj) {
        const data = { ...obj };
        let cardsArr = [];
        const onlyNumbersRgx = /\d+/g;
        const getSlotsContentRgx = / ?(\[.+\])? (\[\d+\]$)/g;
        const singleCardRgx = /\[(.+)\*(\d)\]/g;
        const multipleCardsRgx = /\[(.+)\]/g;

        console.log(data);

        const slotContent = getSlotsContentRgx.exec(data.Name);
        if (!slotContent) { return; }

        [data.slotsNumber] = onlyNumbersRgx.exec(slotContent[2]);

        const singleCard = singleCardRgx.exec(slotContent);

        if (singleCard) {
            const qnt = parseInt(singleCard[2]);
            cardsArr = new Array(qnt).fill(singleCard[1]);
        } else  {
            const multipleCards = multipleCardsRgx.exec(data.Name);
            cardsArr = multipleCards[1].split(':');
        }
        data.cards = cardsArr;
        return data;
    }
}

export default DataHandlerService;
