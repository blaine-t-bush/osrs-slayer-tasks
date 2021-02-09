const slayerMasters: Array<{ id: string, name: string, slayerReq: number, combatReq: number, questReqId: string }> = [
    { id: 'turael', name: 'Turael', slayerReq: 1, combatReq: 3, questReqId: null },
    { id: 'spria', name: 'Spria', slayerReq: 1, combatReq: 5, questReqId: 'aPorcineOfInterest' },
    { id: 'krystilia', name: 'Krystilia', slayerReq: 1, combatReq: 3, questReqId: null },
    { id: 'mazchna', name: 'Mazchna', slayerReq: 1, combatReq: 20, questReqId: 'priestInPeril' },
    { id: 'vannaka', name: 'Vannaka', slayerReq: 1, combatReq: 40, questReqId: null },
    { id: 'chaeldar', name: 'Chaeldar', slayerReq: 1, combatReq: 70, questReqId: 'lostCity' },
    { id: 'konar', name: 'Konar quo Maten', slayerReq: 1, combatReq: 75, questReqId: null },
    { id: 'nieve', name: 'Nieve/Steve', slayerReq: 1, combatReq: 85, questReqId: null },
    { id: 'duradel', name: 'Duradel', slayerReq: 50, combatReq: 100, questReqId: 'shiloVillage' },
];

const slayerMonsters: Array<{ id: string, name: string }> = [
    { id: 'aberrantSpectre', name: 'Aberrant spectres' },
    { id: 'abyssalDemon', name: 'Abyssal demons' },
    { id: 'adamantDragon', name: 'Adamant dragons' },
    { id: 'ankou', name: 'Ankou' },
    { id: 'aviansie', name: 'Aviansie' },
    { id: 'bandit', name: 'Bandits' },
    { id: 'banshee', name: 'Banshees' },
    { id: 'basilisk', name: 'Basilisks' },
    { id: 'bat', name: 'Bats' },
    { id: 'bear', name: 'Bears' },
    { id: 'bird', name: 'Birds' },
    { id: 'blackDemon', name: 'Black demons' },
    { id: 'blackDragon', name: 'Black dragons' },
    { id: 'blackKnight', name: 'Black knights' },
    { id: 'bloodveld', name: 'Bloodvelds' },
    { id: 'blueDragon', name: 'Blue dragons' },
    { id: 'boss', name: 'Boss' },
    { id: 'brineRat', name: 'Brine rats' },
    { id: 'bronzeDragon', name: 'Bronze dragons' },
    { id: 'catablepon', name: 'Catablepon' },
    { id: 'caveBug', name: 'Cave bugs' },
    { id: 'caveCrawler', name: 'Cave crawlers' },
    { id: 'caveHorror', name: 'Cave horrors' },
    { id: 'caveKraken', name: 'Cave krakens' },
    { id: 'caveSlime', name: 'Cave slimes' },
    { id: 'chaosDruid', name: 'Chaos druids' },
    { id: 'cockatrice', name: 'Cockatrices' },
    { id: 'cow', name: 'Cows' },
    { id: 'crawlingHand', name: 'Crawling hands' },
    { id: 'crocodile', name: 'Crocodiles' },
    { id: 'dagannoth', name: 'Dagannoths' },
    { id: 'darkBeast', name: 'Dark beasts' },
    { id: 'darkWarrior', name: 'Dark warriors' },
    { id: 'dog', name: 'Dogs' },
    { id: 'drake', name: 'Drakes' },
    { id: 'dustDevil', name: 'Dust devils' },
    { id: 'dwarf', name: 'Dwarves' },
    { id: 'earthWarrior', name: 'Earth warriors' },
    { id: 'elf', name: 'Elves' },
    { id: 'ent', name: 'Ents' },
    { id: 'feverSpider', name: 'Fever spiders' },
    { id: 'fireGiant', name: 'Fire giants' },
    { id: 'fleshCrawler', name: 'Flesh crawler' },
    { id: 'fossilIslandWyvern', name: 'Fossil Island wyverns' },
    { id: 'gargoyle', name: 'Gargoyles' },
    { id: 'ghost', name: 'Ghosts' },
    { id: 'ghoul', name: 'Ghouls' },
    { id: 'goblin', name: 'Goblins' },
    { id: 'greaterDemon', name: 'Greater demons' },
    { id: 'greenDragon', name: 'Green dragons' },
    { id: 'harpieBugSwarm', name: 'Harpie bug swarms' },
    { id: 'hellhound', name: 'Hellhounds' },
    { id: 'hillGiant', name: 'Hill giants' },
    { id: 'hobgoblin', name: 'Hobgoblins' },
    { id: 'hydra', name: 'Hydras' },
    { id: 'iceGiant', name: 'Ice giants' },
    { id: 'iceWarrior', name: 'Ice warriors' },
    { id: 'icefiend', name: 'Icefiends' },
    { id: 'infernalMage', name: 'Infernal mages' },
    { id: 'ironDragon', name: 'Iron dragons' },
    { id: 'jelly', name: 'Jellies' },
    { id: 'jungleHorror', name: 'Jungle horrors' },
    { id: 'kalphite', name: 'Kalphites' },
    { id: 'killerwatt', name: 'Killerwatts' },
    { id: 'kurask', name: 'Kurasks' },
    { id: 'lavaDragon', name: 'Lava dragons' },
    { id: 'lesserDemon', name: 'Lesser demons' },
    { id: 'lizardman', name: 'Lizardmen' },
    { id: 'lizard', name: 'Lizards' },
    { id: 'magicAxe', name: 'Magic axes' },
    { id: 'mammoth', name: 'Mammoths' },
    { id: 'minionOfScabaras', name: 'Minions of Scabaras' },
    { id: 'minotaur', name: 'Minotaurs' },
    { id: 'mithrilDragon', name: 'Mithril dragons' },
    { id: 'mogre', name: 'Mogres' },
    { id: 'molanisk', name: 'Molanisks' },
    { id: 'monkey', name: 'Monkeys' },
    { id: 'mossGiant', name: 'Moss giants' },
    { id: 'mutatedZygomite', name: 'Mutated zygomites' },
    { id: 'nechryael', name: 'Nechryaels' },
    { id: 'ogre', name: 'Ogres' },
    { id: 'otherworldlyBeing', name: 'Otherworldly beings' },
    { id: 'pirate', name: 'Pirates' },
    { id: 'pyrefiend', name: 'Pyrefiends' },
    { id: 'rat', name: 'Rats' },
    { id: 'redDragon', name: 'Red dragons' },
    { id: 'revenant', name: 'Revenants' },
    { id: 'rockslug', name: 'Rockslugs' },
    { id: 'rogue', name: 'Rogues' },
    { id: 'runeDragon', name: 'Rune dragons' },
    { id: 'scorpion', name: 'Scorpions' },
    { id: 'seaSnake', name: 'Sea snakes' },
    { id: 'shade', name: 'Shades' },
    { id: 'shadowWarrior', name: 'Shadow warriors' },
    { id: 'skeletalWyvern', name: 'Skeletal wyverns' },
    { id: 'skeleton', name: 'Skeletons' },
    { id: 'smokeDevil', name: 'Smoke devils' },
    { id: 'sourhog', name: 'Sourhogs' },
    { id: 'spider', name: 'Spiders' },
    { id: 'spiritualCreature', name: 'Spiritual creatures' },
    { id: 'steelDragon', name: 'Steel dragons' },
    { id: 'suqah', name: 'Suqahs' },
    { id: 'terrorDog', name: 'Terror dogs' },
    { id: 'troll', name: 'Trolls' },
    { id: 'turoth', name: 'Turoths' },
    { id: 'tzHaar', name: 'TzHaar' },
    { id: 'vampyre', name: 'Vampyres' },
    { id: 'wallBeast', name: 'Wall beasts' },
    { id: 'waterfiend', name: 'Waterfiends' },
    { id: 'werewolf', name: 'Werewolves' },
    { id: 'wildernessBoss', name: 'Wilderness Bosses' },
    { id: 'wolf', name: 'Wolves' },
    { id: 'wyrm', name: 'Wyrms' },
    { id: 'zombie', name: 'Zombies' },
];

const slayerQuests: Array<{ id: string, name: string }> = [
    { id: 'boneVoyage', name: 'Bone Voyage' },
    { id: 'cabinFever', name: 'Cabin Fever' },
    { id: 'contact', name: 'Contact!' },
    { id: 'deathPlateau', name: 'Death Plateau' },
    { id: 'deathToTheDorgeshuun', name: 'Death to the Dorgeshuun' },
    { id: 'desertTreasure', name: 'Desert Treasure' },
    { id: 'dragonSlayerI', name: 'Dragon Slayer I' },
    { id: 'dragonSlayerIi', name: 'Dragon Slayer II' },
    { id: 'elementalWorkshopI', name: 'Elemental Workshop I' },
    { id: 'ernestTheChicken', name: 'Ernest the Chicken' },
    { id: 'hauntedMine', name: 'Haunted Mine' },
    { id: 'horrorFromTheDeep', name: 'Horror from the Deep' },
    { id: 'legendsQuest', name: 'Legends\' Quest' },
    { id: 'lostCity', name: 'Lost City' },
    { id: 'lunarDiplomacy', name: 'Lunar Diplomacy' },
    { id: 'mourningsEndPartIi', name: 'Mourning\'s End Part II' },
    { id: 'olafsQuest', name: 'Olaf\'s Quest' },
    { id: 'aPorcineOfInterest', name: 'A Porcine of Interest' },
    { id: 'priestInPeril', name: 'Priest in Peril' },
    { id: 'regicide', name: 'Regicide' },
    { id: 'royalTrouble', name: 'Royal Trouble' },
    { id: 'rumDeal', name: 'Rum Deal' },
    { id: 'skippyAndTheMogres', name: 'Skippy and the Mogres' },
    { id: 'shiloVillage', name: 'Shilo Village' },
];

const slayerRewards: Array<{ id: string, name: string, description: string }> = [
    { id: 'seeingRed', name: 'Seeing red', description: 'Konar, Duradel, and Nieve will be able to assign you red dragons' },
    { id: 'iHopeYouMithMe', name: 'I hope you mith me', description: 'Konar, Duradel, and Nieve will be able to assign you mithril dragons' },
    { id: 'watchTheBirdie', name: 'Watch the birdie', description: 'Konar, Duradel, Nieve, and Chaeldar will be able to assign you aviansies' },
    { id: 'hotStuff', name: 'Hot stuff', description: 'Duradel, Nieve, and Chaeldar will be able to assign you TzHaar' },
    { id: 'reptileGotRipped', name: 'Reptile got ripped', description: 'Konar, Duradel, Nieve, and Chaeldar will be able to assign you lizardmen' },
    { id: 'likeABoss', name: 'Like a boss', description: 'Konar, Duradel, Krystilia, and Nieve will be able to assign you boss monsters' },
    { id: 'basilocked', name: 'Basilocked', description: 'Konar, Duradel, and Nieve will be able to assign you basilisks' },
    { id: 'actualVampyreSlayer', name: 'Actual Vampyre Slayer', description: 'Konar, Duradel, Nieve, and Chaeldar will be able to assign you Vampyres' },
];

const slayerTasks: Array<{ id: number, masterId: string, monsterId: string, combatReq: number, slayerReq: number, questReqId: string, unlockReqId: string, agilityReq: number, defenceReq: number, firemakingReq: number, magicReq: number, strengthOrAgilityReq: number, ancientCavernReq: boolean, weight: number }> = [
    { id: 1, masterId: 'nieve', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 2, masterId: 'duradel', monsterId: 'aberrantSpectre', combatReq: null, slayerReq: 60, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 3, masterId: 'vannaka', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 4, masterId: 'chaeldar', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 5, masterId: 'konar', monsterId: 'aberrantSpectre', combatReq: 65, slayerReq: 60, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 6, masterId: 'nieve', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 7, masterId: 'duradel', monsterId: 'abyssalDemon', combatReq: null, slayerReq: 85, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 8, masterId: 'vannaka', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 9, masterId: 'chaeldar', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 10, masterId: 'konar', monsterId: 'abyssalDemon', combatReq: 85, slayerReq: 85, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 11, masterId: 'nieve', monsterId: 'adamantDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 12, masterId: 'duradel', monsterId: 'adamantDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 13, masterId: 'konar', monsterId: 'adamantDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 14, masterId: 'krystilia', monsterId: 'ankou', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 15, masterId: 'vannaka', monsterId: 'ankou', combatReq: 40, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 16, masterId: 'konar', monsterId: 'ankou', combatReq: 40, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 17, masterId: 'nieve', monsterId: 'ankou', combatReq: 40, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 18, masterId: 'duradel', monsterId: 'ankou', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 19, masterId: 'krystilia', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 7 },
    { id: 20, masterId: 'konar', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 21, masterId: 'nieve', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 22, masterId: 'duradel', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 23, masterId: 'chaeldar', monsterId: 'aviansie', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'watchTheBirdie', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 24, masterId: 'krystilia', monsterId: 'bandit', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 25, masterId: 'mazchna', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 26, masterId: 'turael', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 27, masterId: 'spria', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 28, masterId: 'vannaka', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 29, masterId: 'chaeldar', monsterId: 'banshee', combatReq: 20, slayerReq: 15, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 30, masterId: 'konar', monsterId: 'basilisk', combatReq: null, slayerReq: 40, questReqId: null, unlockReqId: 'basilocked', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 31, masterId: 'nieve', monsterId: 'basilisk', combatReq: null, slayerReq: 40, questReqId: null, unlockReqId: 'basilocked', agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 32, masterId: 'duradel', monsterId: 'basilisk', combatReq: null, slayerReq: 40, questReqId: null, unlockReqId: 'basilocked', agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 33, masterId: 'vannaka', monsterId: 'basilisk', combatReq: 40, slayerReq: 40, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 34, masterId: 'chaeldar', monsterId: 'basilisk', combatReq: 40, slayerReq: 40, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 35, masterId: 'mazchna', monsterId: 'bat', combatReq: 5, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 36, masterId: 'turael', monsterId: 'bat', combatReq: 5, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 37, masterId: 'spria', monsterId: 'bat', combatReq: 5, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 38, masterId: 'turael', monsterId: 'bear', combatReq: 13, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 39, masterId: 'spria', monsterId: 'bear', combatReq: 13, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 40, masterId: 'krystilia', monsterId: 'bear', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 41, masterId: 'mazchna', monsterId: 'bear', combatReq: 13, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 42, masterId: 'turael', monsterId: 'bird', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 43, masterId: 'spria', monsterId: 'bird', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 44, masterId: 'krystilia', monsterId: 'blackDemon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 45, masterId: 'chaeldar', monsterId: 'blackDemon', combatReq: 80, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 46, masterId: 'konar', monsterId: 'blackDemon', combatReq: 80, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 47, masterId: 'nieve', monsterId: 'blackDemon', combatReq: 80, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 48, masterId: 'duradel', monsterId: 'blackDemon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 49, masterId: 'krystilia', monsterId: 'blackDragon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 50, masterId: 'konar', monsterId: 'blackDragon', combatReq: 80, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 51, masterId: 'nieve', monsterId: 'blackDragon', combatReq: 80, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 52, masterId: 'duradel', monsterId: 'blackDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 53, masterId: 'krystilia', monsterId: 'blackKnight', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 54, masterId: 'krystilia', monsterId: 'bloodveld', combatReq: null, slayerReq: 50, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 4 },
    { id: 55, masterId: 'vannaka', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 56, masterId: 'chaeldar', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 57, masterId: 'konar', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 58, masterId: 'nieve', monsterId: 'bloodveld', combatReq: 50, slayerReq: 50, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 59, masterId: 'duradel', monsterId: 'bloodveld', combatReq: null, slayerReq: 50, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 60, masterId: 'vannaka', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 61, masterId: 'chaeldar', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 62, masterId: 'konar', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 63, masterId: 'nieve', monsterId: 'blueDragon', combatReq: 65, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 64, masterId: 'duradel', monsterId: 'blueDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 65, masterId: 'konar', monsterId: 'boss', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'likeABoss', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 66, masterId: 'nieve', monsterId: 'boss', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'likeABoss', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 67, masterId: 'duradel', monsterId: 'boss', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'likeABoss', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 68, masterId: 'vannaka', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReqId: 'olafsQuest', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 69, masterId: 'chaeldar', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReqId: 'olafsQuest', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 70, masterId: 'nieve', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReqId: 'olafsQuest', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 71, masterId: 'konar', monsterId: 'brineRat', combatReq: 45, slayerReq: 47, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 72, masterId: 'chaeldar', monsterId: 'bronzeDragon', combatReq: 75, slayerReq: 10, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11 },
    { id: 73, masterId: 'vannaka', monsterId: 'bronzeDragon', combatReq: 75, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 74, masterId: 'konar', monsterId: 'bronzeDragon', combatReq: 75, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 75, masterId: 'mazchna', monsterId: 'catablepon', combatReq: 35, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 76, masterId: 'turael', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 77, masterId: 'spria', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 78, masterId: 'mazchna', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 79, masterId: 'vannaka', monsterId: 'caveBug', combatReq: null, slayerReq: 7, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 80, masterId: 'chaeldar', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 81, masterId: 'turael', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 82, masterId: 'spria', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 83, masterId: 'mazchna', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 84, masterId: 'vannaka', monsterId: 'caveCrawler', combatReq: 10, slayerReq: 10, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 85, masterId: 'chaeldar', monsterId: 'caveHorror', combatReq: 85, slayerReq: 58, questReqId: 'cabinFever', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 86, masterId: 'nieve', monsterId: 'caveHorror', combatReq: 85, slayerReq: 58, questReqId: 'cabinFever', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 87, masterId: 'duradel', monsterId: 'caveHorror', combatReq: null, slayerReq: 58, questReqId: 'cabinFever', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 88, masterId: 'chaeldar', monsterId: 'caveKraken', combatReq: 80, slayerReq: 87, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 89, masterId: 'konar', monsterId: 'caveKraken', combatReq: 80, slayerReq: 87, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 90, masterId: 'nieve', monsterId: 'caveKraken', combatReq: 80, slayerReq: 87, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 91, masterId: 'duradel', monsterId: 'caveKraken', combatReq: null, slayerReq: 87, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 50, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 92, masterId: 'turael', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 93, masterId: 'spria', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 94, masterId: 'mazchna', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 95, masterId: 'vannaka', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 96, masterId: 'chaeldar', monsterId: 'caveSlime', combatReq: 15, slayerReq: 17, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 97, masterId: 'krystilia', monsterId: 'chaosDruid', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 98, masterId: 'mazchna', monsterId: 'cockatrice', combatReq: 25, slayerReq: 25, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 99, masterId: 'vannaka', monsterId: 'cockatrice', combatReq: 25, slayerReq: 25, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: 20, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 100, masterId: 'chaeldar', monsterId: 'cockatrice', combatReq: 25, slayerReq: 25, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: 20, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 101, masterId: 'turael', monsterId: 'cow', combatReq: 5, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 102, masterId: 'spria', monsterId: 'cow', combatReq: 5, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 103, masterId: 'turael', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 104, masterId: 'spria', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 105, masterId: 'mazchna', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 106, masterId: 'vannaka', monsterId: 'crawlingHand', combatReq: null, slayerReq: 5, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 107, masterId: 'vannaka', monsterId: 'crocodile', combatReq: 50, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 108, masterId: 'vannaka', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReqId: 'horrorFromTheDeep', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 109, masterId: 'chaeldar', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReqId: 'horrorFromTheDeep', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11 },
    { id: 110, masterId: 'konar', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReqId: 'horrorFromTheDeep', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 111, masterId: 'nieve', monsterId: 'dagannoth', combatReq: 75, slayerReq: null, questReqId: 'horrorFromTheDeep', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 112, masterId: 'duradel', monsterId: 'dagannoth', combatReq: null, slayerReq: null, questReqId: 'horrorFromTheDeep', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 113, masterId: 'konar', monsterId: 'darkBeast', combatReq: 90, slayerReq: 90, questReqId: 'mourningsEndPartIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 114, masterId: 'nieve', monsterId: 'darkBeast', combatReq: 90, slayerReq: 90, questReqId: 'mourningsEndPartIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 115, masterId: 'duradel', monsterId: 'darkBeast', combatReq: null, slayerReq: 90, questReqId: 'mourningsEndPartIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11 },
    { id: 116, masterId: 'krystilia', monsterId: 'darkWarrior', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 117, masterId: 'turael', monsterId: 'dog', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 118, masterId: 'spria', monsterId: 'dog', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 119, masterId: 'mazchna', monsterId: 'dog', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 120, masterId: 'konar', monsterId: 'drake', combatReq: null, slayerReq: 84, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 121, masterId: 'nieve', monsterId: 'drake', combatReq: null, slayerReq: 84, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 122, masterId: 'duradel', monsterId: 'drake', combatReq: null, slayerReq: 84, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 123, masterId: 'vannaka', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReqId: 'desertTreasure', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 124, masterId: 'chaeldar', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReqId: 'desertTreasure', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 125, masterId: 'konar', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReqId: 'desertTreasure', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 126, masterId: 'nieve', monsterId: 'dustDevil', combatReq: 70, slayerReq: 65, questReqId: 'desertTreasure', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 127, masterId: 'duradel', monsterId: 'dustDevil', combatReq: null, slayerReq: 65, questReqId: 'desertTreasure', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 128, masterId: 'turael', monsterId: 'dwarf', combatReq: 6, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 129, masterId: 'spria', monsterId: 'dwarf', combatReq: 6, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 130, masterId: 'krystilia', monsterId: 'earthWarrior', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 131, masterId: 'mazchna', monsterId: 'earthWarrior', combatReq: 35, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 132, masterId: 'vannaka', monsterId: 'earthWarrior', combatReq: 35, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: 15, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 133, masterId: 'vannaka', monsterId: 'elf', combatReq: 70, slayerReq: null, questReqId: 'regicide', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 134, masterId: 'chaeldar', monsterId: 'elf', combatReq: 70, slayerReq: null, questReqId: 'regicide', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 135, masterId: 'nieve', monsterId: 'elf', combatReq: 70, slayerReq: null, questReqId: 'regicide', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 136, masterId: 'duradel', monsterId: 'elf', combatReq: null, slayerReq: null, questReqId: 'regicide', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 137, masterId: 'krystilia', monsterId: 'ent', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 138, masterId: 'chaeldar', monsterId: 'feverSpider', combatReq: 40, slayerReq: 42, questReqId: 'rumDeal', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 139, masterId: 'vannaka', monsterId: 'feverSpider', combatReq: 40, slayerReq: 42, questReqId: 'rumDeal', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 140, masterId: 'krystilia', monsterId: 'fireGiant', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 141, masterId: 'chaeldar', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 142, masterId: 'vannaka', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 143, masterId: 'konar', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 144, masterId: 'nieve', monsterId: 'fireGiant', combatReq: 65, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 145, masterId: 'duradel', monsterId: 'fireGiant', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 146, masterId: 'mazchna', monsterId: 'fleshCrawler', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 147, masterId: 'chaeldar', monsterId: 'fossilIslandWyvern', combatReq: 60, slayerReq: 66, questReqId: 'boneVoyage,elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 148, masterId: 'konar', monsterId: 'fossilIslandWyvern', combatReq: 60, slayerReq: 66, questReqId: 'boneVoyage,elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 149, masterId: 'nieve', monsterId: 'fossilIslandWyvern', combatReq: 60, slayerReq: 66, questReqId: 'boneVoyage,elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 150, masterId: 'duradel', monsterId: 'fossilIslandWyvern', combatReq: null, slayerReq: 66, questReqId: 'boneVoyage,elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 151, masterId: 'vannaka', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 152, masterId: 'chaeldar', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11 },
    { id: 153, masterId: 'konar', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 154, masterId: 'nieve', monsterId: 'gargoyle', combatReq: 80, slayerReq: 75, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 155, masterId: 'duradel', monsterId: 'gargoyle', combatReq: null, slayerReq: 75, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 156, masterId: 'turael', monsterId: 'ghost', combatReq: 13, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 157, masterId: 'spria', monsterId: 'ghost', combatReq: 13, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 158, masterId: 'mazchna', monsterId: 'ghost', combatReq: 13, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 159, masterId: 'mazchna', monsterId: 'ghoul', combatReq: 25, slayerReq: null, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 160, masterId: 'vannaka', monsterId: 'ghoul', combatReq: 25, slayerReq: null, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 161, masterId: 'turael', monsterId: 'goblin', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 162, masterId: 'spria', monsterId: 'goblin', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 163, masterId: 'krystilia', monsterId: 'greaterDemon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 164, masterId: 'chaeldar', monsterId: 'greaterDemon', combatReq: 70, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 165, masterId: 'konar', monsterId: 'greaterDemon', combatReq: 75, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 166, masterId: 'nieve', monsterId: 'greaterDemon', combatReq: 75, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 167, masterId: 'duradel', monsterId: 'greaterDemon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 168, masterId: 'krystilia', monsterId: 'greenDragon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 169, masterId: 'vannaka', monsterId: 'greenDragon', combatReq: 52, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 170, masterId: 'vannaka', monsterId: 'harpieBugSwarm', combatReq: 45, slayerReq: 33, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: 33, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 171, masterId: 'chaeldar', monsterId: 'harpieBugSwarm', combatReq: 45, slayerReq: 33, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: 33, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 172, masterId: 'krystilia', monsterId: 'hellhound', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 173, masterId: 'chaeldar', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 174, masterId: 'vannaka', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 175, masterId: 'konar', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 176, masterId: 'nieve', monsterId: 'hellhound', combatReq: 75, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 177, masterId: 'duradel', monsterId: 'hellhound', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 178, masterId: 'krystilia', monsterId: 'hillGiant', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 179, masterId: 'vannaka', monsterId: 'hillGiant', combatReq: 25, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 180, masterId: 'mazchna', monsterId: 'hillGiant', combatReq: 25, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 181, masterId: 'mazchna', monsterId: 'hobgoblin', combatReq: 20, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 182, masterId: 'vannaka', monsterId: 'hobgoblin', combatReq: 20, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 183, masterId: 'konar', monsterId: 'hydra', combatReq: null, slayerReq: 95, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 184, masterId: 'krystilia', monsterId: 'iceGiant', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 185, masterId: 'vannaka', monsterId: 'iceGiant', combatReq: 50, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 186, masterId: 'krystilia', monsterId: 'iceWarrior', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 187, masterId: 'mazchna', monsterId: 'iceWarrior', combatReq: 45, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 188, masterId: 'vannaka', monsterId: 'iceWarrior', combatReq: 45, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 189, masterId: 'turael', monsterId: 'icefiend', combatReq: 20, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 190, masterId: 'spria', monsterId: 'icefiend', combatReq: 20, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 191, masterId: 'vannaka', monsterId: 'infernalMage', combatReq: 40, slayerReq: 45, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 192, masterId: 'chaeldar', monsterId: 'infernalMage', combatReq: 40, slayerReq: 45, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 193, masterId: 'chaeldar', monsterId: 'ironDragon', combatReq: 80, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 194, masterId: 'konar', monsterId: 'ironDragon', combatReq: 80, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 195, masterId: 'nieve', monsterId: 'ironDragon', combatReq: 80, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 196, masterId: 'duradel', monsterId: 'ironDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 197, masterId: 'vannaka', monsterId: 'jelly', combatReq: 57, slayerReq: 52, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 198, masterId: 'chaeldar', monsterId: 'jelly', combatReq: 57, slayerReq: 52, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 199, masterId: 'konar', monsterId: 'jelly', combatReq: 57, slayerReq: 52, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 200, masterId: 'vannaka', monsterId: 'jungleHorror', combatReq: 65, slayerReq: null, questReqId: 'cabinDever', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 201, masterId: 'chaeldar', monsterId: 'jungleHorror', combatReq: 65, slayerReq: null, questReqId: 'cabinFever', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 202, masterId: 'chaeldar', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11 },
    { id: 203, masterId: 'turael', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 204, masterId: 'spria', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 205, masterId: 'mazchna', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 206, masterId: 'vannaka', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 207, masterId: 'konar', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 208, masterId: 'nieve', monsterId: 'kalphite', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 209, masterId: 'duradel', monsterId: 'kalphite', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 210, masterId: 'mazchna', monsterId: 'killerwatt', combatReq: 50, slayerReq: 37, questReqId: 'ernestTheChicken', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 211, masterId: 'vannaka', monsterId: 'killerwatt', combatReq: 50, slayerReq: 37, questReqId: 'ernestTheChicken', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 212, masterId: 'vannaka', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 213, masterId: 'chaeldar', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 214, masterId: 'nieve', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 215, masterId: 'duradel', monsterId: 'kurask', combatReq: null, slayerReq: 70, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 216, masterId: 'konar', monsterId: 'kurask', combatReq: 65, slayerReq: 70, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 217, masterId: 'krystilia', monsterId: 'lavaDragon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 218, masterId: 'krystilia', monsterId: 'lesserDemon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 219, masterId: 'vannaka', monsterId: 'lesserDemon', combatReq: 60, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 220, masterId: 'chaeldar', monsterId: 'lesserDemon', combatReq: 60, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 221, masterId: 'chaeldar', monsterId: 'lizardman', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 222, masterId: 'konar', monsterId: 'lizardman', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 223, masterId: 'nieve', monsterId: 'lizardman', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 224, masterId: 'duradel', monsterId: 'lizardman', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'reptileGotRipped', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 225, masterId: 'turael', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 226, masterId: 'spria', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 227, masterId: 'mazchna', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 228, masterId: 'vannaka', monsterId: 'lizard', combatReq: null, slayerReq: 22, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 229, masterId: 'chaeldar', monsterId: 'lizard', combatReq: 22, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 230, masterId: 'krystilia', monsterId: 'magicAxe', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 231, masterId: 'krystilia', monsterId: 'mammoth', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 232, masterId: 'nieve', monsterId: 'minionOfScabaras', combatReq: 85, slayerReq: null, questReqId: 'contact', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 233, masterId: 'turael', monsterId: 'minotaur', combatReq: 7, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 234, masterId: 'spria', monsterId: 'minotaur', combatReq: 7, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 235, masterId: 'konar', monsterId: 'mithrilDragon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'iHopeYouMithMe', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 5 },
    { id: 236, masterId: 'nieve', monsterId: 'mithrilDragon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'iHopeYouMithMe', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 5 },
    { id: 237, masterId: 'duradel', monsterId: 'mithrilDragon', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'iHopeYouMithMe', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 9 },
    { id: 238, masterId: 'chaeldar', monsterId: 'mogre', combatReq: 30, slayerReq: 32, questReqId: 'skippyAndTheMogres', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 239, masterId: 'mazchna', monsterId: 'mogre', combatReq: 30, slayerReq: 32, questReqId: 'skippyAndTheMogres', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 240, masterId: 'vannaka', monsterId: 'mogre', combatReq: 30, slayerReq: 32, questReqId: 'skippyAndTheMogres', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 241, masterId: 'vannaka', monsterId: 'molanisk', combatReq: 50, slayerReq: 39, questReqId: 'deathToTheDorgeshuun', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 242, masterId: 'chaeldar', monsterId: 'molanisk', combatReq: 50, slayerReq: 39, questReqId: 'deathToTheDorgeshuun', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 243, masterId: 'turael', monsterId: 'monkey', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 244, masterId: 'spria', monsterId: 'monkey', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 245, masterId: 'krystilia', monsterId: 'mossGiant', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 246, masterId: 'vannaka', monsterId: 'mossGiant', combatReq: 40, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 247, masterId: 'chaeldar', monsterId: 'mutatedZygomite', combatReq: 60, slayerReq: 57, questReqId: 'lostCity', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 248, masterId: 'konar', monsterId: 'mutatedZygomite', combatReq: 60, slayerReq: 57, questReqId: 'lostCity', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 249, masterId: 'nieve', monsterId: 'mutatedZygomite', combatReq: 60, slayerReq: 57, questReqId: 'lostCity', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 250, masterId: 'duradel', monsterId: 'mutatedZygomite', combatReq: null, slayerReq: 57, questReqId: 'lostCity', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 251, masterId: 'vannaka', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 252, masterId: 'chaeldar', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 12 },
    { id: 253, masterId: 'konar', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 254, masterId: 'nieve', monsterId: 'nechryael', combatReq: 85, slayerReq: 80, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 255, masterId: 'duradel', monsterId: 'nechryael', combatReq: null, slayerReq: 80, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 256, masterId: 'vannaka', monsterId: 'ogre', combatReq: 40, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 257, masterId: 'vannaka', monsterId: 'otherworldlyBeing', combatReq: 40, slayerReq: null, questReqId: 'lostCity', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 258, masterId: 'krystilia', monsterId: 'pirate', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 259, masterId: 'mazchna', monsterId: 'pyrefiend', combatReq: 25, slayerReq: 30, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 260, masterId: 'vannaka', monsterId: 'pyrefiend', combatReq: 25, slayerReq: 30, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 261, masterId: 'chaeldar', monsterId: 'pyrefiend', combatReq: 25, slayerReq: 30, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 262, masterId: 'turael', monsterId: 'rat', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 263, masterId: 'spria', monsterId: 'rat', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 264, masterId: 'konar', monsterId: 'redDragon', combatReq: 68, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: 'seeingRed', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 265, masterId: 'nieve', monsterId: 'redDragon', combatReq: 68, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: 'seeingRed', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 266, masterId: 'duradel', monsterId: 'redDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: 'seeingRed', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 267, masterId: 'krystilia', monsterId: 'revenant', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 268, masterId: 'mazchna', monsterId: 'rockslug', combatReq: 20, slayerReq: 20, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 269, masterId: 'vannaka', monsterId: 'rockslug', combatReq: 20, slayerReq: 20, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 270, masterId: 'chaeldar', monsterId: 'rockslug', combatReq: 20, slayerReq: 20, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 271, masterId: 'krystilia', monsterId: 'rogue', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 272, masterId: 'nieve', monsterId: 'runeDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 273, masterId: 'duradel', monsterId: 'runeDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 2 },
    { id: 274, masterId: 'konar', monsterId: 'runeDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerIi', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 275, masterId: 'krystilia', monsterId: 'scorpion', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 276, masterId: 'mazchna', monsterId: 'scorpion', combatReq: 7, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 277, masterId: 'turael', monsterId: 'scorpion', combatReq: 7, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 278, masterId: 'spria', monsterId: 'scorpion', combatReq: 7, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 279, masterId: 'vannaka', monsterId: 'seaSnake', combatReq: 50, slayerReq: 40, questReqId: 'royalTrouble', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 280, masterId: 'mazchna', monsterId: 'shade', combatReq: 30, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 281, masterId: 'vannaka', monsterId: 'shade', combatReq: 30, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 282, masterId: 'vannaka', monsterId: 'shadowWarrior', combatReq: 60, slayerReq: null, questReqId: 'legendsQuest', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 283, masterId: 'chaeldar', monsterId: 'shadowWarrior', combatReq: 60, slayerReq: null, questReqId: 'legendsQuest', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 284, masterId: 'chaeldar', monsterId: 'skeletalWyvern', combatReq: 70, slayerReq: 72, questReqId: 'elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 285, masterId: 'konar', monsterId: 'skeletalWyvern', combatReq: 70, slayerReq: 72, questReqId: 'elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 286, masterId: 'nieve', monsterId: 'skeletalWyvern', combatReq: 70, slayerReq: 72, questReqId: 'elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 287, masterId: 'duradel', monsterId: 'skeletalWyvern', combatReq: null, slayerReq: 72, questReqId: 'elementalWorkshopI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 288, masterId: 'krystilia', monsterId: 'skeleton', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 289, masterId: 'turael', monsterId: 'skeleton', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 290, masterId: 'spria', monsterId: 'skeleton', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 291, masterId: 'mazchna', monsterId: 'skeleton', combatReq: 15, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 292, masterId: 'nieve', monsterId: 'smokeDevil', combatReq: 85, slayerReq: 93, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 293, masterId: 'duradel', monsterId: 'smokeDevil', combatReq: null, slayerReq: 93, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 294, masterId: 'konar', monsterId: 'smokeDevil', combatReq: 85, slayerReq: 93, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 295, masterId: 'turael', monsterId: 'sourhog', combatReq: null, slayerReq: null, questReqId: 'aPorcineOfInterest', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 296, masterId: 'spria', monsterId: 'sourhog', combatReq: null, slayerReq: null, questReqId: 'aPorcineOfInterest', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 297, masterId: 'krystilia', monsterId: 'spider', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 298, masterId: 'turael', monsterId: 'spider', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 299, masterId: 'spria', monsterId: 'spider', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 300, masterId: 'krystilia', monsterId: 'spiritualCreature', combatReq: null, slayerReq: 68, questReqId: 'deathPlateau', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 6 },
    { id: 301, masterId: 'vannaka', monsterId: 'spiritualCreature', combatReq: 60, slayerReq: 63, questReqId: 'deathPlateau', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 8 },
    { id: 302, masterId: 'chaeldar', monsterId: 'spiritualCreature', combatReq: 60, slayerReq: 63, questReqId: 'deathPlateau', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 12 },
    { id: 303, masterId: 'nieve', monsterId: 'spiritualCreature', combatReq: 60, slayerReq: 63, questReqId: 'deathPlateau', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 6 },
    { id: 304, masterId: 'duradel', monsterId: 'spiritualCreature', combatReq: null, slayerReq: 63, questReqId: 'deathPlateau', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: 60, ancientCavernReq: false, weight: 7 },
    { id: 305, masterId: 'chaeldar', monsterId: 'steelDragon', combatReq: 85, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 9 },
    { id: 306, masterId: 'konar', monsterId: 'steelDragon', combatReq: 85, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 307, masterId: 'nieve', monsterId: 'steelDragon', combatReq: 85, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 5 },
    { id: 308, masterId: 'duradel', monsterId: 'steelDragon', combatReq: null, slayerReq: null, questReqId: 'dragonSlayerI', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 309, masterId: 'nieve', monsterId: 'suqah', combatReq: 85, slayerReq: null, questReqId: 'lunarDiplomacy', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 310, masterId: 'duradel', monsterId: 'suqah', combatReq: null, slayerReq: null, questReqId: 'lunarDiplomacy', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 311, masterId: 'vannaka', monsterId: 'terrorDog', combatReq: 60, slayerReq: 40, questReqId: 'hauntedMine', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 312, masterId: 'vannaka', monsterId: 'troll', combatReq: 60, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 313, masterId: 'chaeldar', monsterId: 'troll', combatReq: 60, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 11 },
    { id: 314, masterId: 'konar', monsterId: 'troll', combatReq: 60, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 315, masterId: 'nieve', monsterId: 'troll', combatReq: 60, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 316, masterId: 'duradel', monsterId: 'troll', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 317, masterId: 'vannaka', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 318, masterId: 'chaeldar', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 319, masterId: 'konar', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 320, masterId: 'nieve', monsterId: 'turoth', combatReq: 60, slayerReq: 55, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 321, masterId: 'chaeldar', monsterId: 'tzHaar', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'hotStuff', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 322, masterId: 'nieve', monsterId: 'tzHaar', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'hotStuff', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 323, masterId: 'duradel', monsterId: 'tzHaar', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'hotStuff', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 324, masterId: 'vannaka', monsterId: 'vampyre', combatReq: 35, slayerReq: null, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 325, masterId: 'chaeldar', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 326, masterId: 'konar', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 4 },
    { id: 327, masterId: 'nieve', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 328, masterId: 'duradel', monsterId: 'vampyre', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: 'actualVampyreSlayer', agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 329, masterId: 'mazchna', monsterId: 'vampyre', combatReq: 35, slayerReq: null, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 330, masterId: 'vannaka', monsterId: 'wallBeast', combatReq: 30, slayerReq: 35, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: 5, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 331, masterId: 'chaeldar', monsterId: 'wallBeast', combatReq: 30, slayerReq: 35, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: 5, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 332, masterId: 'mazchna', monsterId: 'wallBeast', combatReq: 30, slayerReq: 35, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: 5, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 333, masterId: 'duradel', monsterId: 'waterfiend', combatReq: null, slayerReq: 62, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 2 },
    { id: 334, masterId: 'konar', monsterId: 'waterfiend', combatReq: 75, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: true, weight: 2 },
    { id: 335, masterId: 'vannaka', monsterId: 'werewolf', combatReq: 60, slayerReq: null, questReqId: 'priestInPeril', unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 336, masterId: 'krystilia', monsterId: 'wildernessBoss', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 337, masterId: 'turael', monsterId: 'wolf', combatReq: 20, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 338, masterId: 'spria', monsterId: 'wolf', combatReq: 20, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 339, masterId: 'mazchna', monsterId: 'wolf', combatReq: 20, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 340, masterId: 'chaeldar', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 6 },
    { id: 341, masterId: 'konar', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 10 },
    { id: 342, masterId: 'nieve', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 343, masterId: 'duradel', monsterId: 'wyrm', combatReq: null, slayerReq: 62, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 8 },
    { id: 344, masterId: 'krystilia', monsterId: 'zombie', combatReq: null, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 3 },
    { id: 345, masterId: 'turael', monsterId: 'zombie', combatReq: 10, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 346, masterId: 'spria', monsterId: 'zombie', combatReq: 10, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
    { id: 347, masterId: 'mazchna', monsterId: 'zombie', combatReq: 10, slayerReq: null, questReqId: null, unlockReqId: null, agilityReq: null, defenceReq: null, firemakingReq: null, magicReq: null, strengthOrAgilityReq: null, ancientCavernReq: false, weight: 7 },
];

class Slayer {
    slayerMaster: {
        id: string,
        name: string,
        slayerReq: number,
        combatReq: number,
        questReqId: string
    };
    
    characterLevels: {
        combat: number,
        slayer: number,
        agility: number,
        defence: number,
        firemaking: number,
        magic: number,
        strength: number
    };

    completedQuests: {
        boneVoyage: boolean,
        cabinFever: boolean,
        contact: boolean,
        deathPlateau: boolean,
        deathToTheDorgeshuun: boolean,
        desertTreasure: boolean,
        dragonSlayerI: boolean,
        dragonSlayerIi: boolean,
        elementalWorkshopI: boolean,
        ernestTheChicken: boolean,
        hauntedMine: boolean,
        horrorFromTheDeep: boolean,
        legendsQuest: boolean,
        lostCity: boolean,
        lunarDiplomacy: boolean,
        mourningsEndPartIi: boolean,
        olafsQuest: boolean,
        aPorcineOfInterest: boolean,
        priestInPeril: boolean,
        regicide: boolean,
        royalTrouble: boolean,
        rumDeal: boolean,
        skippyAndTheMogres: boolean,
        shiloVillage: boolean,
    };

    unlockedRewards: {
        seeingRed: boolean,
        iHopeYouMithMe: boolean,
        watchTheBirdie: boolean,
        hotStuff: boolean,
        reptileGotRipped: boolean,
        likeABoss: boolean,
        basilocked: boolean,
        actualVampyreSlayer: boolean,
    };

    miscellaneousUnlocks: {
        ancientCavern: boolean,
        lumbridgeEliteDiary: boolean,
    };

    blockList: {
        aberrantSpectre: boolean,
        abyssalDemon: boolean,
        adamantDragon: boolean,
        ankou: boolean,
        aviansie: boolean,
        bandit: boolean,
        banshee: boolean,
        basilisk: boolean,
        bat: boolean,
        bear: boolean,
        bird: boolean,
        blackDemon: boolean,
        blackDragon: boolean,
        blackKnight: boolean,
        bloodveld: boolean,
        blueDragon: boolean,
        boss: boolean,
        brineRat: boolean,
        bronzeDragon: boolean,
        catablepon: boolean,
        caveBug: boolean,
        caveCrawler: boolean,
        caveHorror: boolean,
        caveKraken: boolean,
        caveSlime: boolean,
        chaosDruid: boolean,
        cockatrice: boolean,
        cow: boolean,
        crawlingHand: boolean,
        crocodile: boolean,
        dagannoth: boolean,
        darkBeast: boolean,
        darkWarrior: boolean,
        dog: boolean,
        drake: boolean,
        dustDevil: boolean,
        dwarf: boolean,
        earthWarrior: boolean,
        elf: boolean,
        ent: boolean,
        feverSpider: boolean,
        fireGiant: boolean,
        fleshCrawler: boolean,
        fossilIslandWyvern: boolean,
        gargoyle: boolean,
        ghost: boolean,
        ghoul: boolean,
        goblin: boolean,
        greaterDemon: boolean,
        greenDragon: boolean,
        harpieBugSwarm: boolean,
        hellhound: boolean,
        hillGiant: boolean,
        hobgoblin: boolean,
        hydra: boolean,
        iceGiant: boolean,
        iceWarrior: boolean,
        icefiend: boolean,
        infernalMage: boolean,
        ironDragon: boolean,
        jelly: boolean,
        jungleHorror: boolean,
        kalphite: boolean,
        killerwatt: boolean,
        kurask: boolean,
        lavaDragon: boolean,
        lesserDemon: boolean,
        lizardman: boolean,
        lizard: boolean,
        magicAxe: boolean,
        mammoth: boolean,
        minionOfScabaras: boolean,
        minotaur: boolean,
        mithrilDragon: boolean,
        mogre: boolean,
        molanisk: boolean,
        monkey: boolean,
        mossGiant: boolean,
        mutatedZygomite: boolean,
        nechryael: boolean,
        ogre: boolean,
        otherworldlyBeing: boolean,
        pirate: boolean,
        pyrefiend: boolean,
        rat: boolean,
        redDragon: boolean,
        revenant: boolean,
        rockslug: boolean,
        rogue: boolean,
        runeDragon: boolean,
        scorpion: boolean,
        seaSnake: boolean,
        shade: boolean,
        shadowWarrior: boolean,
        skeletalWyvern: boolean,
        skeleton: boolean,
        smokeDevil: boolean,
        sourhog: boolean,
        spider: boolean,
        spiritualCreature: boolean,
        steelDragon: boolean,
        suqah: boolean,
        terrorDog: boolean,
        troll: boolean,
        turoth: boolean,
        tzHaar: boolean,
        vampyre: boolean,
        wallBeast: boolean,
        waterfiend: boolean,
        werewolf: boolean,
        wildernessBoss: boolean,
        wolf: boolean,
        wyrm: boolean,
        zombie: boolean,
    };

    blockArray: Array<string>;

    questPoints: number;

    ignoreCombatLevelReqs: boolean;
    
    constructor() {
        // Initialize a character with base stats, no unlocks, and the lowest-level slayer master.
        this.characterLevels = {
            combat: 3,
            slayer: 1,
            agility: 1,
            defence: 1,
            firemaking: 1,
            magic: 1,
            strength: 1,
        };

        this.completedQuests = {
            boneVoyage: false,
            cabinFever: false,
            contact: false,
            deathPlateau: false,
            deathToTheDorgeshuun: false,
            desertTreasure: false,
            dragonSlayerI: false,
            dragonSlayerIi: false,
            elementalWorkshopI: false,
            ernestTheChicken: false,
            hauntedMine: false,
            horrorFromTheDeep: false,
            legendsQuest: false,
            lostCity: false,
            lunarDiplomacy: false,
            mourningsEndPartIi: false,
            olafsQuest: false,
            aPorcineOfInterest: false,
            priestInPeril: false,
            regicide: false,
            royalTrouble: false,
            rumDeal: false,
            skippyAndTheMogres: false,
            shiloVillage: false,
        };

        this.unlockedRewards = {
            seeingRed: false,
            iHopeYouMithMe: false,
            watchTheBirdie: false,
            hotStuff: false,
            reptileGotRipped: false,
            likeABoss: false,
            basilocked: false,
            actualVampyreSlayer: false,
        };

        this.miscellaneousUnlocks = {
            ancientCavern: false,
            lumbridgeEliteDiary: false,
        };

        this.blockList = {
            aberrantSpectre: false,
            abyssalDemon: false,
            adamantDragon: false,
            ankou: false,
            aviansie: false,
            bandit: false,
            banshee: false,
            basilisk: false,
            bat: false,
            bear: false,
            bird: false,
            blackDemon: false,
            blackDragon: false,
            blackKnight: false,
            bloodveld: false,
            blueDragon: false,
            boss: false,
            brineRat: false,
            bronzeDragon: false,
            catablepon: false,
            caveBug: false,
            caveCrawler: false,
            caveHorror: false,
            caveKraken: false,
            caveSlime: false,
            chaosDruid: false,
            cockatrice: false,
            cow: false,
            crawlingHand: false,
            crocodile: false,
            dagannoth: false,
            darkBeast: false,
            darkWarrior: false,
            dog: false,
            drake: false,
            dustDevil: false,
            dwarf: false,
            earthWarrior: false,
            elf: false,
            ent: false,
            feverSpider: false,
            fireGiant: false,
            fleshCrawler: false,
            fossilIslandWyvern: false,
            gargoyle: false,
            ghost: false,
            ghoul: false,
            goblin: false,
            greaterDemon: false,
            greenDragon: false,
            harpieBugSwarm: false,
            hellhound: false,
            hillGiant: false,
            hobgoblin: false,
            hydra: false,
            iceGiant: false,
            iceWarrior: false,
            icefiend: false,
            infernalMage: false,
            ironDragon: false,
            jelly: false,
            jungleHorror: false,
            kalphite: false,
            killerwatt: false,
            kurask: false,
            lavaDragon: false,
            lesserDemon: false,
            lizardman: false,
            lizard: false,
            magicAxe: false,
            mammoth: false,
            minionOfScabaras: false,
            minotaur: false,
            mithrilDragon: false,
            mogre: false,
            molanisk: false,
            monkey: false,
            mossGiant: false,
            mutatedZygomite: false,
            nechryael: false,
            ogre: false,
            otherworldlyBeing: false,
            pirate: false,
            pyrefiend: false,
            rat: false,
            redDragon: false,
            revenant: false,
            rockslug: false,
            rogue: false,
            runeDragon: false,
            scorpion: false,
            seaSnake: false,
            shade: false,
            shadowWarrior: false,
            skeletalWyvern: false,
            skeleton: false,
            smokeDevil: false,
            sourhog: false,
            spider: false,
            spiritualCreature: false,
            steelDragon: false,
            suqah: false,
            terrorDog: false,
            troll: false,
            turoth: false,
            tzHaar: false,
            vampyre: false,
            wallBeast: false,
            waterfiend: false,
            werewolf: false,
            wildernessBoss: false,
            wolf: false,
            wyrm: false,
            zombie: false,
        };

        this.blockArray = [
            null,
            null,
            null,
            null,
            null,
            null,
        ];

        this.questPoints = 0;

        this.ignoreCombatLevelReqs = false;

        this.slayerMaster = slayerMasters.find(master => master.id === 'turael');
    }

    get combatLevel(): number {
        return this.characterLevels.combat;
    }

    set combatLevel(combatLevel: number) {
        if (combatLevel < 3) {
            throw new Error('Combat level must be at least 3');
        } else if (combatLevel > 126) {
            throw new Error('Combat level must be at most 126');
        } else {
            this.characterLevels.combat = combatLevel;
        }
    }

    get slayerLevel(): number {
        return this.characterLevels.slayer;
    }

    set slayerLevel(slayerLevel: number) {
        if (slayerLevel < 1) {
            throw new Error('Slayer level must be at least 1');
        } else if (slayerLevel > 99) {
            throw new Error('Slayer level must be at most 99');
        } else {
            this.characterLevels.slayer = slayerLevel;
        }
    }

    get agilityLevel(): number {
        return this.characterLevels.agility;
    }

    set agilityLevel(agilityLevel: number) {
        if (agilityLevel < 1) {
            throw new Error('Agility level must be at least 1');
        } else if (agilityLevel > 99) {
            throw new Error('Agility level must be at most 99');
        } else {
            this.characterLevels.agility = agilityLevel;
        }
    }

    get defenceLevel(): number {
        return this.characterLevels.defence;
    }

    set defenceLevel(defenceLevel: number) {
        if (defenceLevel < 1) {
            throw new Error('Defence level must be at least 1');
        } else if (defenceLevel > 99) {
            throw new Error('Defence level must be at most 99');
        } else {
            this.characterLevels.defence = defenceLevel;
        }
    }

    get firemakingLevel(): number {
        return this.characterLevels.firemaking;
    }

    set firemakingLevel(firemakingLevel: number) {
        if (firemakingLevel < 1) {
            throw new Error('Firemaking level must be at least 1');
        } else if (firemakingLevel > 99) {
            throw new Error('Firemaking level must be at most 99');
        } else {
            this.characterLevels.firemaking = firemakingLevel;
        }
    }

    get magicLevel(): number {
        return this.characterLevels.magic;
    }

    set magicLevel(magicLevel: number) {
        if (magicLevel < 1) {
            throw new Error('Magic level must be at least 1');
        } else if (magicLevel > 99) {
            throw new Error('Magic level must be at most 99');
        } else {
            this.characterLevels.magic = magicLevel;
        }
    }

    get strengthLevel(): number {
        return this.characterLevels.strength;
    }

    set strengthLevel(strengthLevel: number) {
        if (strengthLevel < 1) {
            throw new Error('Strength level must be at least 1');
        } else if (strengthLevel > 99) {
            throw new Error('Strength level must be at most 99');
        } else {
            this.characterLevels.strength = strengthLevel;
        }
    }

    masterNameById(slayerMasterId: string): string {
        let slayerMaster = slayerMasters.find(master => master.id === slayerMasterId);
        return slayerMaster.name;
    }

    monsterNameById(slayerMonsterId: string): string {
        let slayerMonster = slayerMonsters.find(monster => monster.id === slayerMonsterId);
        return slayerMonster.name;
    }

    questNameById(questId: string): string {
        let quest = slayerQuests.find(quest => quest.id === questId);
        return quest.name;
    }

    rewardNameById(rewardId: string): string {
        let reward = slayerRewards.find(reward => reward.id === rewardId);
        return reward.name;
    }

    completeQuest(questId: string): boolean {
        // Verify that questId exists on the completedQuests object before attempting to update.
        if (this.completedQuests.hasOwnProperty(questId)) {
            this.completedQuests[questId] = true;
            return true;
        } else {
            return false;
        }
    }

    uncompleteQuest(questId: string): boolean {
        // Verify that questId exists on the completedQuests object before attempting to update.
        if (this.completedQuests.hasOwnProperty(questId)) {
            this.completedQuests[questId] = false;
            return true;
        } else {
            return false;
        }
    }

    toggleQuest(questId: string): boolean {
        // Verify that questId exists on the completedQuests object before attempting to update.
        if (this.completedQuests.hasOwnProperty(questId)) {
            if (this.completedQuests[questId]) {
                return this.uncompleteQuest(questId);
            } else {
                return this.completeQuest(questId);
            }
        } else {
            return false;
        }
    }

    completeAllQuests() {
        this.questPoints = 279;

        for (const questId in this.completedQuests) {
            this.completeQuest(questId);
        }
    }

    uncompleteAllQuests() {
        this.questPoints = 0;
        
        for (const questId in this.completedQuests) {
            this.uncompleteQuest(questId);
        }
    }

    unlockReward(rewardId: string): boolean {
        // Verify that rewardId exists on the unlockedRewards object before attempting to update.
        if (this.unlockedRewards.hasOwnProperty(rewardId)) {
            this.unlockedRewards[rewardId] = true;
            return true;
        } else {
            return false;
        }
    }

    lockReward(rewardId: string): boolean {
        // Verify that rewardId exists on the unlockedRewards object before attempting to update.
        if (this.unlockedRewards.hasOwnProperty(rewardId)) {
            this.unlockedRewards[rewardId] = false;
            return true;
        } else {
            return false;
        }
    }

    toggleReward(rewardId: string): boolean {
        // Verify that rewardId exists on the unlockedRewards object before attempting to update.
        if (this.unlockedRewards.hasOwnProperty(rewardId)) {
            if (this.unlockedRewards[rewardId]) {
                return this.lockReward(rewardId);
            } else {
                return this.unlockReward(rewardId);
            }
        } else {
            return false;
        }
    }

    unlockAllRewards() {
        for (const rewardId in this.unlockedRewards) {
            this.unlockReward(rewardId);
        }
    }

    lockAllRewards() {
        for (const rewardId in this.unlockedRewards) {
            this.lockReward(rewardId);
        }
    }

    unlockAllMiscellaneous() {
        for (const miscId in this.miscellaneousUnlocks) {
            this.miscellaneousUnlocks[miscId] = true;
        }
    }

    maxAllRequiredSkills() {
        this.combatLevel = 126;
        this.slayerLevel = 99;
        this.agilityLevel = 99;
        this.defenceLevel = 99;
        this.firemakingLevel = 99;
        this.magicLevel = 99;
        this.strengthLevel = 99;
    }

    get blockedTaskCount(): number {
        let blockedTaskCount = 0;
        for (const monsterId in this.blockList) {
            if (this.blockList[monsterId]) {
                blockedTaskCount++;
            }
        }

        return blockedTaskCount;
    }

    get availableBlockCount(): number {
        let availableBlockCount = 0;

        if (this.miscellaneousUnlocks.lumbridgeEliteDiary) {
            availableBlockCount = 6;
        } else if (this.questPoints >= 250) {
            availableBlockCount = 5;
        } else if (this.questPoints >= 200) {
            availableBlockCount = 4;
        } else if (this.questPoints >= 150) {
            availableBlockCount = 3;
        } else if (this.questPoints >= 100) {
            availableBlockCount = 2;
        } else if (this.questPoints >= 50) {
            availableBlockCount = 1;
        } else {
            availableBlockCount = 0;
        }

        return availableBlockCount;
    }

    blockTask(monsterId: string, index: number = null): boolean {
        // Verify that block list isn't already full.
        if (this.blockedTaskCount >= this.availableBlockCount) {
            return false;
        }

        // Verify that monsterId exists on the blockList object.
        if (!this.blockList.hasOwnProperty(monsterId)) {
            return false;
        }

        // Verify that task isn't already blocked.
        if (this.blockList[monsterId]) {
            return false;
        }

        // Update the blockList object and the blockArray array.
        this.blockList[monsterId] = true;
        if (index === null) {
            // No index specified. Find first available null value in array and replace it with monsterId.
            for (let i = 0; i < this.blockArray.length; i++) {
                if (this.blockArray[i] === null) {
                    this.blockArray[i] = monsterId;
                    break;
                }
            }
        } else {
            // Index is specified. If value is null, replace it with monsterId. If value is not null, unblock it and then replace it with monsterId.
            if (this.blockArray[index] !== null) {
                this.unblockTask(this.blockArray[index]);
            }
            this.blockArray[index] = monsterId;
        }

        return true;
    }

    unblockTask(monsterId: string): boolean {
        // Verify that monsterId exists on the blockList object.
        if (!this.blockList.hasOwnProperty(monsterId)) {
            return false;
        }

        // Verify that task isn't already unblocked.
        if (!this.blockList[monsterId]) {
            return false;
        }

        // Update the blockList object and the blockArray array.
        this.blockList[monsterId] = false;
        for (let i = 0; i < this.blockArray.length; i++) {
            if (this.blockArray[i] === monsterId) {
                this.blockArray[i] = null;
            }
        }
        return true;
    }

    unblockTaskByIndex(index: number) {
        // Verify that index is valid.
        if (index < 0 || index > 5) {
            return false;
        }

        // Verify that given index has an associated monster.
        let monsterId = this.blockArray[index];
        if (monsterId === null) {
            return false;
        }

        return this.unblockTask(monsterId);
    }

    toggleBlock(monsterId: string): boolean {
        // Verify that monsterId exists on the blockList object.
        if (!this.blockList.hasOwnProperty(monsterId)) {
            return false;
        }

        if (this.blockList[monsterId]) {
            return this.unblockTask(monsterId);
        } else {
            return this.blockTask(monsterId);
        }
    }

    unblockAllTasks(): boolean {
        for (const monsterId in this.blockList) {
            this.unblockTask(monsterId);
        }

        return true;
    }

    updateSlayerMaster(slayerMasterIdOrName: string) {
        // Search slayer masters using the argument, first by ID and then by name.
        let slayerMaster = slayerMasters.find(master => master.id === slayerMasterIdOrName);
        if (slayerMaster === undefined) {
            slayerMaster = slayerMasters.find(master => master.name === slayerMasterIdOrName);
            if (slayerMaster === undefined) {
                // No slayer master found by that ID or name.
                throw new Error(`No slayer master '${slayerMasterIdOrName}' found`);
            }
        }

        // If a match is found, next check that character qualifies for selected master.
        if (slayerMaster.combatReq > this.combatLevel) {
            // Character does not meet slayer master combat level requirement.
            throw new Error(`Character combat level ${this.combatLevel} does not meet ${slayerMaster.name} combat requirement of ${slayerMaster.combatReq}`);
        } else if (slayerMaster.slayerReq > this.slayerLevel) {
            // Character does not meet slayer master slayer level requirement.
            throw new Error(`Character slayer level ${this.slayerLevel} does not meet ${slayerMaster.name} slayer requirement of ${slayerMaster.slayerReq}`);
        } else if (slayerMaster.questReqId !== null && !this.completedQuests[slayerMaster.questReqId]) {
            // Character has not completed the quest required for using this slayer master.
            throw new Error(`Character does not meet ${slayerMaster.name} quest requirement of '${slayerMaster.questReqId}'`);
        }

        this.slayerMaster = slayerMaster;
        return slayerMaster;
    }

    get strengthOrAgilityLevel(): number {
        return Math.max(this.characterLevels.agility, this.characterLevels.strength);
    }

    get masterTasks(): Array<{ id: number, masterId: string, monsterId: string, combatReq: number, slayerReq: number, questReqId: string, unlockReqId: string, agilityReq: number, defenceReq: number, firemakingReq: number, magicReq: number, strengthOrAgilityReq: number, ancientCavernReq: boolean, weight: number }> {
        return slayerTasks.filter(task => task.masterId === this.slayerMaster.id);
    }

    get availableTasks(): Array<{ id: number, masterId: string, monsterId: string, combatReq: number, slayerReq: number, questReqId: string, unlockReqId: string, agilityReq: number, defenceReq: number, firemakingReq: number, magicReq: number, strengthOrAgilityReq: number, ancientCavernReq: boolean, weight: number }> {
        // Start with task list for select slayer master.
        let tasks = this.masterTasks;

        // Filter out all tasks which have unmet requirements.
        // There are four categories of requirements:
        //  - Levels (combat, slayer, and various skills)
        //  - Quests
        //  - Slayer reward unlocks
        //  - Miscellaneous (e.g. has visited a specific location)

        // First, filter based on character skill and combat levels:
        tasks = tasks.filter(task => task.combatReq === null || this.ignoreCombatLevelReqs || task.combatReq <= this.combatLevel);
        tasks = tasks.filter(task => task.slayerReq === null || task.slayerReq <= this.slayerLevel);
        tasks = tasks.filter(task => task.agilityReq === null || task.agilityReq <= this.agilityLevel);
        tasks = tasks.filter(task => task.defenceReq === null || task.defenceReq <= this.defenceLevel);
        tasks = tasks.filter(task => task.firemakingReq === null || task.firemakingReq <= this.firemakingLevel);
        tasks = tasks.filter(task => task.magicReq === null || task.magicReq <= this.magicLevel);
        tasks = tasks.filter(task => task.strengthOrAgilityReq === null || task.strengthOrAgilityReq <= this.strengthOrAgilityLevel);

        // Second, filter based on completed quests:
        tasks = tasks.filter(function(task) {
            if (task.questReqId === null) {
                // If task does not have quest requirements, do not filter it out.
                return true;
            } else {
                // If task does have quest requirements, loop through them.
                // There may be more than one quest requirement. If so, it's a comma-separated string.
                let questReqIds: Array<string> = task.questReqId.split(',');
                // Loop through each required quest. If the quest is not completed, filter the task out.
                for (let i = 0; i < questReqIds.length; i++) {
                    if (!this.completedQuests[questReqIds[i]]) {
                        return false;
                    }
                }
                // If all of the quests are completed, do not filter the task out.
                return true;
            }
        }, this);

        // Third, filter based on unlocked slayer rewards:
        tasks = tasks.filter(task => task.unlockReqId === null || this.unlockedRewards[task.unlockReqId]);

        // Finally, filter based on other miscellaneous requirements:
        tasks = tasks.filter(task => !task.ancientCavernReq || this.miscellaneousUnlocks.ancientCavern);

        return tasks;
    }

    get unblockedTasks(): Array<{ id: number, masterId: string, monsterId: string, combatReq: number, slayerReq: number, questReqId: string, unlockReqId: string, agilityReq: number, defenceReq: number, firemakingReq: number, magicReq: number, strengthOrAgilityReq: number, ancientCavernReq: boolean, weight: number }> {
        // Start with task list for select slayer master.
        let tasks = this.masterTasks;

        // Filter out all tasks that are on the blocked list.
        tasks = tasks.filter(task => !this.blockList[task.monsterId]);

        return tasks;
    }

    get totalWeight() {
        let masterTasks = this.masterTasks;
        let availableTasks = this.availableTasks;
        let unblockedTasks = this.unblockedTasks;
        
        // Get total weight.
        let totalWeight: number = 0;
        for (let i = 0; i < masterTasks.length; i++) {
            let masterTask = masterTasks[i];
            if (availableTasks.some(availableTask => availableTask.id === masterTask.id) && unblockedTasks.some(unblockedTask => unblockedTask.id === masterTask.id)) {
                totalWeight += masterTask.weight;
            }
        }

        return totalWeight;
    }

    get tasks(): Array<{ id: number, masterId: string, monsterId: string, combatReq: number, slayerReq: number, questReqId: string, unlockReqId: string, agilityReq: number, defenceReq: number, firemakingReq: number, magicReq: number, strengthOrAgilityReq: number, ancientCavernReq: boolean, weight: number, available: boolean, unblocked: boolean, probability: number }> {
        // Return all tasks for selected master, with booleans representing whether task is blocked and whether task is available.
        let masterTasks = this.masterTasks;
        let availableTasks = this.availableTasks;
        let unblockedTasks = this.unblockedTasks;
        let totalWeight = this.totalWeight;
        let tasks: Array<{ id: number, masterId: string, monsterId: string, combatReq: number, slayerReq: number, questReqId: string, unlockReqId: string, agilityReq: number, defenceReq: number, firemakingReq: number, magicReq: number, strengthOrAgilityReq: number, ancientCavernReq: boolean, weight: number, available: boolean, unblocked: boolean, probability: number }> = [];

        // Loop through all tasks for selected slayer master.
        for (let i = 0; i < masterTasks.length; i++) {
            // For each task, add all its properties and also denote whether it is available and whether it is unblocked.
            let masterTask = masterTasks[i];
            let isAvailable = availableTasks.some(availableTask => availableTask.id === masterTask.id);
            let isUnblocked = unblockedTasks.some(unblockedTask => unblockedTask.id === masterTask.id);

            tasks.push({
                id: masterTask.id,
                masterId: masterTask.masterId,
                monsterId: masterTask.monsterId,
                combatReq: masterTask.combatReq,
                slayerReq: masterTask.slayerReq,
                questReqId: masterTask.questReqId,
                unlockReqId: masterTask.unlockReqId,
                agilityReq: masterTask.agilityReq,
                defenceReq: masterTask.defenceReq,
                firemakingReq: masterTask.firemakingReq,
                magicReq: masterTask.magicReq,
                strengthOrAgilityReq: masterTask.strengthOrAgilityReq,
                ancientCavernReq: masterTask.ancientCavernReq,
                weight: masterTask.weight,
                available: isAvailable,
                unblocked: isUnblocked,
                probability: isAvailable && isUnblocked ? masterTask.weight / totalWeight : 0,
            });
        }

        return tasks;
    }

    taskProbability(monsterIdOrName: string): number {
        // Get current task list.
        let tasks = this.tasks;

        // Look up monster, first by ID and then by name.
        let task = tasks.find(task => task.monsterId === monsterIdOrName);
        if (task === undefined) {
            task = tasks.find(task => this.monsterNameById(task.monsterId) === monsterIdOrName);
            if (task === undefined) {
                // No slayer task found by that ID or name.
                throw new Error(`No slayer task '${monsterIdOrName}' found`);
            }
        }

        // If found, return that task's probability.
        return task.probability;
    }
}

module.exports = {
    Slayer: Slayer,
    slayerMasters: slayerMasters,
    slayerMonsters: slayerMonsters,
    slayerQuests: slayerQuests,
    slayerRewards: slayerRewards,
    slayerTasks: slayerTasks,
}