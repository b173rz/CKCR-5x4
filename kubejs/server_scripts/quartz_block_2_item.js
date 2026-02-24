ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:quartz', 4),//recipe input
        'minecraft:quartz_block'//recipe output
    )
})
