class DataHandlerService {
    convertEquipments(obj) {
        const data = {
            online: [],
            offline: [],
        };

        const onlineLength = obj.online.length;
        const offlineLength = obj.offline.length;

        for (let i = 0; i < Math.max(onlineLength, offlineLength); i++) {
            if (onlineLength > i) {
                const equip = this._convertEquipment(obj.online[i]);
                data.online.push(equip);
            }

            if (offlineLength > i) {
                const equip = this._convertEquipment(obj.offline[i]);
                data.offline.push(equip);
            }
        }
        return data;
    }

    _convertEquipment(item) {
        const data = { ...item };
        const getSlotsContentRgx = / ?(\[.+\])? (\[\d+\]$)/g;

        const slotContent = getSlotsContentRgx.exec(item.Name);
        if (!slotContent) { return; }

        data.refineLevel = this._getRefineLevel(data.Name);
        data.slotsNumber = this._getSlotsNumber(slotContent);
        data.cards = this._getCards(data.Name, slotContent);
        return data;
    }

    _getRefineLevel(itemName) {
        const overRgx = /^\+(\d+)/g;
        const matches = overRgx.exec(itemName);

        if (!matches) { return 0; }

        return parseInt(matches[1]);
    }

    _getSlotsNumber(slotContent) {
        const onlyNumbersRgx = /\d+/g;
        return onlyNumbersRgx.exec(slotContent[2])[0];
    }

    _getCards(itemName, slotContent) {
        let cardsArr = [];
        const singleCardRgx = /\[(.+)\*(\d)\]/g;
        const multipleCardsRgx = /\[(.+)\] /g;
        const singleCard = singleCardRgx.exec(slotContent[0]);

        if (singleCard) {
            const qnt = parseInt(singleCard[2]);
            cardsArr = new Array(qnt).fill(singleCard[1]);
        } else  {
            const multipleCards = multipleCardsRgx.exec(itemName);
            if (multipleCards) {
                cardsArr = multipleCards[1].split(':');
            }
        }
        return cardsArr;
    }
}

export default DataHandlerService;
