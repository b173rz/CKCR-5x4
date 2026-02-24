
//define list of animals that should drop bones
const bonedroppers =
[
  "minecraft:entities/pig",
  "minecraft:entities/cow",
  "minecraft:entities/sheep",
  "minecraft:entities/horse",
  "minecraft:entities/panda",
  "minecraft:entities/polar_bear",
  "minecraft:entities/llama",
  "minecraft:entities/wolf",
  "minecraft:entities/dolphin",
  "minecraft:entities/goat",
  "minecraft:entities/donkey"
]

//itereate through list. element will change to next mob every iteration
bonedroppers.forEach((element) =>{

  //LootJS.modifiers being passed a local object 'event'
    LootJS.modifiers((event) => {
      event
      .addLootTableModifier(element) //element is passed to function to modify its loot with...
      .randomChance(0.5)
      .addLoot("minecraft:bone")//this function, which is passed the bone item id, adding bones to every mob in the list

    });
});
