//http://media.blizzard.com/wow/icons/56/   18  36

const baseURL = 'https://eu.api.battle.net/wow/';
const key = 'kwcpzkt7cbbbm4naadthqv4ev6sbufnj';

export function getGuildMembers(callback) {
   fetchFromServer('guild/outland/leng%20squad?fields=members').then(data => {
       callback(data);
   });
}

export function getCharacterInfo(name, callback) {

    const query = 'character/outland/' + name + '?fields=audit';

    fetchFromServer(query).then(data => {
        callback(data)
    });
}

export function getClassColor(id) {
    let classColor = '#000000';
    switch (id) {
        case 1:
            classColor = '#C79C6E';
            break;
        case 2:
            classColor = '#F58CBA';
            break;
        case 3:
            classColor = '#ABD473';
            break;
        case 4:
            classColor = '#FFF569';
            break;
        case 5:
            classColor = '#FFFFFF';
            break;
        case 6:
            classColor = '#C41F3B';
            break;
        case 7:
            classColor = '#0070DE';
            break;
        case 8:
            classColor = '#69CCF0';
            break;
        case 9:
            classColor = '#9482C9';
            break;
        case 10:
            classColor = '#00FF96';
            break;
        case 11:
            classColor = '#FF7D0A';
            break;
        case 12:
            classColor = '#A330C9';
            break;
    }
    return classColor;
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
    return fetch(baseURL + query + '&locale=en_GB&apikey=' + key, {
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