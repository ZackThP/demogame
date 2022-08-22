window.PizzaTypes = {
    normal : "normal",
    spicy : "spicy",
    veggie : "veggie",
    fungi : "fungi",
    chill : "chill",
}

window.Pizzas = {
    "s001" : {
        name : "Slice Samurai",
        type: PizzaTypes.spicy,
        src : "s001.png",
        icon : "spicy.png",
        actions: [ "saucyStatus","clumsyStatus", "damage1" ],
    },
    "v001" : {
        name : "Call me Kale",
        type: PizzaTypes.veggie,
        src : "v001.png",
        icon : "veggie.png",
        actions: [ "damage1" ],
    },
    "f001" : {
        name : "Portobello Express",
        type: PizzaTypes.fungi,
        src : "f001.png",
        icon : "fungi.png",
        actions: [ "damage1" ],
    },

}
