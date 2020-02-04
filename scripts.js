console.log("Loading..");

for (var i = 100; i > 0; i--) {
    var btn = accuse(i);
    btn;
}

function accuse(index) {
    var friends = ['Odo', 'Rufus', 'Horace', 'Justin', 'Isabel'];
    var locations = ['cloak room', 'antechamber', 'mud room', 'root cellar', 'library', 'study', 'formal dining room', 'den', 'shower stall', 'boudoir'];
    var weapons = ['hammer', 'revolver', 'antique sword', 'letter opener', 'fire extinguisher', 'bag of potatoes', 'brick', 'large trout', 'fish bone', 'banana', 'lamp', 'paperweight', 'bookend', 'fishing rod', 'arsenic', 'noxious odor', 'pestilence', 'halitosis', 'shard of broken mirror', 'ugly look'];
    $('#container').prepend(`<h3 id="${i}">Accusation ${i}</h3>`);
    $(`#${i}`).click(function() {
        alert("I accuse: " + friends[index % friends.length] + " in the " + locations[index % locations.length] + " with the " + weapons[index % weapons.length] + "!");
    });
}

// old.

// for (var i = 100; i > 0; i--) {
//     var index = logIndex(i); // capture i with closure.
//     // console.log(index);
//     var accusation = mkAccuse(index); // this function does the heavy lifting.
//     accusation; // instantiate the accusation.
// }

// // capture i through closure.
// function logIndex(index) {
//     return index;
// }

// function mkAccuse(index) {
//     var friends = ['Odo', 'Rufus', 'Horace', 'Justin', 'Isabel'];
//     var locations = ['cloak room', 'antechamber', 'mud room', 'root cellar', 'library', 'study', 'formal dining room', 'den', 'shower stall', 'boudoir'];
//     var weapons = ['hammer', 'revolver', 'antique sword', 'letter opener', 'fire extinguisher', 'bag of potatoes', 'brick', 'large trout', 'fish bone', 'banana', 'lamp', 'paperweight', 'bookend', 'fishing rod', 'arsenic', 'noxious odor', 'pestilence', 'halitosis', 'shard of broken mirror', 'ugly look'];
//     var cFriend = friends[index % friends.length];
//     var cLocation = locations[index % locations.length];
//     var cWeapon = weapons[index % weapons.length];
//     var h3 = mkH3(index, cFriend, cLocation, cWeapon);
//     h3;
// }

// function mkH3(i, f, l, w) {
//     var fullTag = `<h3 id="${i}">Accusation ${i}</h3>`;
//     $('body').prepend(fullTag);
//     $(`#${i}`).click(function() {
//         alert(`I accuse: ${f} in the ${l} with the ${w}!`);
//     })
// }

console.log("Loaded.");