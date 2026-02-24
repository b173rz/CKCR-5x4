ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('quality_food:blacklist', 'rusticdelight:cotton')
    event.add('quality_food:blacklist', 'rusticdelight:cotton_boll')
    event.add('quality_food:blacklist', 'rusticdelight:cotton_seeds')
    event.add('quality_food:blacklist', 'rusticdelight:wild_cotton')
    event.remove
})
