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
        src : "/game/img/characters/pizzas/s001.png",
        icon : "/game/img/icons/spicy.png",
        actions: [ "saucyStatus","clumsyStatus", "damage1" ],
    },
    "v001" : {
        name : "Call me Kale",
        type: PizzaTypes.veggie,
        src : "/game/img/characters/pizzas/v001.png",
        icon : "/game/img/icons/veggie.png",
        actions: [ "damage1" ],
    },
    "f001" : {
        name : "Portobello Express",
        type: PizzaTypes.fungi,
        src : "/game/img/characters/pizzas/f001.png",
        icon : "/game/img/icons/fungi.png",
        actions: [ "damage1" ],
    },

}