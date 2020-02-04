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

console.log("Loaded.");