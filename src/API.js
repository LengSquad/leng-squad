//http://media.blizzard.com/wow/icons/56/   18  36

const baseURL = 'https://eu.api.battle.net/wow/';
const key = 'kwcpzkt7cbbbm4naadthqv4ev6sbufnj';

export function getGuildInfoAll(callback) {
    fetchFromServer('guild/outland/leng%20squad?fields=members,news&').then(data => {
        callback(data);
    });
}

export function getGuildMembers(callback) {
   fetchFromServer('guild/outland/leng%20squad?fields=members&').then(data => {
       callback(data);
   });
}

export function getGuildFeed(callback) {
    fetchFromServer('guild/outland/leng%20squad?fields=news&').then(data => {
        callback(data);
    })
}

export function getCharacterInfo(name, callback) {
    const query = 'character/outland/' + name + '?fields=audit';

    fetchFromServer(query).then(data => {
        callback(data)
    });
}

export function getItemInfo(id, context, bonusLists, callback) {
    let query = 'item/' + id + "/" + context + "?bl=" + bonusLists + "&";

    if (context === "") {
        query = 'item/' + id + "?bl=" + bonusLists + "&";
    }

    fetchFromServer(query).then(data => {
        callback(data)
    });
}

export function getSlotItem(id) {
    const slots = ['Head', 'Neck', 'Shoulder', 'Shirt', 'Chest', 'Waist', 'Legs', 'Feet', 'Wrist', 'Hands', 'Finger 1', 'Finger 2', 'Trinket 1', 'Trinket 2', 'Back', 'Main hand', 'Off Hand', 'Ranged', 'Tabard', 'First bag', 'Second bag', 'Third bag', 'Fourth bag'];
    return slots[id];
}

export function isEnchantable(id) {
    const slots = ['1', '2', '10', '11', '14'];
    return slots.indexOf(id) > -1;
}

export function getErrorType(slot, type) {

    const errorList = ['Shoulder'];

    if (type == 'enchant') {
        if (errorList.indexOf(slot) > -1) {
            return 'error';
        }
    }
    return 'warning';
}

function fetchFromServer(query) {
    return fetch(baseURL + query + 'locale=en_GB&apikey=' + key, {
        credentials: "same-origin"
    }).then(response => {
        if (response.status >= 400) {
            throw new Error(response.status);
        }
        return response.json();
    }).then(function(result) {
        if(result.error || result.length === 0) {
            console.log("This query gave an empty result or threw an error:\n" + query);
            return [];
        }
        else {
            return result;
        }
    });
}