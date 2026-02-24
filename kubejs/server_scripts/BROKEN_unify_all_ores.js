//  const stones = event.get('forge:stone').getObjectIds()
//  const blacklist = Ingredient.of(/.*diorite.*/)
//  stones.forEach(stone => {
//      if (!blacklist.test(stone)) event.add('c:stone', stone)
//  })



/*
//make global structure of all non deepslate ore blocks.
ServerEvents.tags('item', event => {
    const all_ore_blocks = event.get('c:ores').getObjectIds()
    const minecraft_blacklist = Ingredient.of('@minecraft')
    const modded_ores = []


    all_ore_blocks.forEach(ore => {
        if (!minecraft_blacklist.test(ore)) modded_ores.push(ore)
    })
})

modded_ores.forEach(ore => {


    LootJS.modifiers((event) => {
        const oreWhenFortune =
            LootEntry.of(ore)
                .applyOreBonus("minecraft:fortune")
                .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));


            event
            .removeLoot(Ingredient.all)


            .addBlockLootModifier(ore)
            .addLoot("minecraft:gunpowder");
    })
})
*/
