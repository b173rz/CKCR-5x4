//remove charcoal drop from campfire.


//Changes Crafting Recipe to two sticks, one planks, and a log.
ServerEvents.recipes(event => {
    event.remove({ output: "minecraft:campfire" });
    event.shapeless(
        Item.of("minecraft:campfire", 1),
            [
                "2x minecraft:stick",
                "#minecraft:planks",
                "#minecraft:logs_that_burn"
            ]
                    )
})

//when campfire is broken, set a supplementary ash block down.

/*
 *  event.shaped(
 *      Item.of("minecraft:campfire", 1),[
 *      " S ",
 *      "SOS"
 *      ],
 *  {
 *      S: "minecraft:stick",
 *      O: "#minecraft:logs_that_burn"
 *  }
)
*/
