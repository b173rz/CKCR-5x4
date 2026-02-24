LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:campfire").removeLoot("minecraft:charcoal");
});

LootJS.modifiers((event) => {
    event
    .addBlockLootModifier("minecraft:campfire")
    .randomChance(1.2)
    .addLoot("supplementaries:ash");
});
