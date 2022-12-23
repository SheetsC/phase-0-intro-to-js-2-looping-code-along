const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);


function writeCards(names, event) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        cards.push(message)

    }
    return cards
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

// function wrapGifts(gift){
//     let i = 0
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow`);
//         i++
//     }
//     return gift
// }
// wrapGifts(gifts)

function countDown(){
    let count = 10
    while (count >= 0) console.log(count--)
}

countDown(4)