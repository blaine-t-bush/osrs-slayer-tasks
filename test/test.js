var expect = require('chai').expect;
const index = require('../dist/index.js');
const epsilon = 0.00001;

// Insantiate a new character. It should be of minimum level with Turael as the selected master.
describe('New character', () => {
    it('should instantiate min-level character with Turael as master', () => {
        let slayer = new index.Slayer;

        expect(slayer.slayerMaster).to.be.a('object');
        expect(slayer.slayerMaster.id).to.equal('turael');
        expect(slayer.slayerMaster.name).to.equal('Turael');
        
        expect(slayer.combatLevel).to.equal(3);
        expect(slayer.slayerLevel).to.equal(1);
        expect(slayer.agilityLevel).to.equal(1);
        expect(slayer.defenceLevel).to.equal(1);
        expect(slayer.firemakingLevel).to.equal(1);
        expect(slayer.magicLevel).to.equal(1);
        expect(slayer.strengthLevel).to.equal(1);
        expect(slayer.strengthOrAgilityLevel).to.equal(1);
    });

    it('should only have birds, goblins, monkeys, rats, and spiders as tasks', () => {
        let slayer = new index.Slayer;
        let tasks = slayer.tasks;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            if (['bird', 'goblin', 'monkey', 'rat', 'spider'].includes(task.monsterId)) {
                expect(task.available).to.equal(true);
            } else {
                expect(task.available).to.equal(false);
            }
        }
    });

    it('should have task probabilities sum to 1', () => {
        let slayer = new index.Slayer;
        let tasks = slayer.tasks;
        let totalProbability = 0;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            totalProbability += task.probability;
        }

        expect(totalProbability).to.be.a('number');
        expect(totalProbability).to.be.lessThan(1 + epsilon);
        expect(totalProbability).to.be.greaterThan(1 - epsilon);
    });
});

describe('Switching to Spria', () => {
    it('should disallow switching to Spria without quest or level requirements', () => {
        let slayer = new index.Slayer;
        expect(() => slayer.updateSlayerMaster('spria')).to.throw();
    });

    it('should disallow switching to Spria without quest requirements', () => {
        let slayer = new index.Slayer;
        slayer.combatLevel = 5;
        expect(() => slayer.updateSlayerMaster('spria')).to.throw();
    });

    it('should disallow switching to Spria without level requirements', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.aPorcineOfInterest = true;
        expect(() => slayer.updateSlayerMaster('spria')).to.throw();
    });

    it('should allow switching to Spria with requirements', () => {
        let slayer = new index.Slayer;
        slayer.combatLevel = 5;
        slayer.completedQuests.aPorcineOfInterest = true;
        expect(() => slayer.updateSlayerMaster('spria')).to.not.throw();
    });

    it('should only have birds, goblins, monkeys, rats, spiders, bats, cows, and sourhogs as tasks', () => {
        let slayer = new index.Slayer;
        slayer.combatLevel = 5;
        slayer.completedQuests.aPorcineOfInterest = true;
        slayer.updateSlayerMaster('spria');
        let tasks = slayer.tasks;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            if (['bird', 'goblin', 'monkey', 'rat', 'spider', 'bat', 'cow', 'sourhog'].includes(task.monsterId)) {
                expect(task.available).to.equal(true);
            } else {
                expect(task.available).to.equal(false);
            }
        }
    });

    it('should have task probabilities sum to 1', () => {
        let slayer = new index.Slayer;
        slayer.combatLevel = 5;
        slayer.completedQuests.aPorcineOfInterest = true;
        slayer.updateSlayerMaster('spria');
        let tasks = slayer.tasks;
        let totalProbability = 0;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            totalProbability += task.probability;
        }

        expect(totalProbability).to.be.a('number');
        expect(totalProbability).to.be.lessThan(1 + epsilon);
        expect(totalProbability).to.be.greaterThan(1 - epsilon);
    });
});

describe('Switching to Duradel with minimum requirements', () => {
    it('should disallow switching to Duradel without quest or level requirements', () => {
        let slayer = new index.Slayer;
        expect(() => slayer.updateSlayerMaster('duradel')).to.throw();
    });

    it('should disallow switching to Duradel without level requirements', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        expect(() => slayer.updateSlayerMaster('duradel')).to.throw();
    });

    it('should disallow switching to Duradel without slayer level requirement', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 100;
        expect(() => slayer.updateSlayerMaster('duradel')).to.throw();
    });

    it('should disallow switching to Duradel without combat level requirement', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.slayerLevel = 50;
        expect(() => slayer.updateSlayerMaster('duradel')).to.throw();
    });

    it('should allow switching to Duradel with requirements', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 100;
        slayer.slayerLevel = 50;
        expect(() => slayer.updateSlayerMaster('duradel')).to.not.throw();
    });

    it('should have task probabilities sum to 1', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 100;
        slayer.slayerLevel = 50;
        slayer.updateSlayerMaster('duradel');
        let tasks = slayer.tasks;
        let totalProbability = 0;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            totalProbability += task.probability;
        }

        expect(totalProbability).to.be.a('number');
        expect(totalProbability).to.be.lessThan(1 + epsilon);
        expect(totalProbability).to.be.greaterThan(1 - epsilon);
    });
});

describe('Switching to Duradel with all requirements', () => {
    it('should allow unlocking all quests', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');

        expect(() => slayer.completeAllQuests()).to.not.throw();
        slayer.completeAllQuests();
        for (const key in slayer.completedQuests) {
            expect(slayer.completedQuests[key]).to.equal(true);
        }
    });

    it('should allow unlocking all rewards', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');

        expect(() => slayer.unlockAllRewards()).to.not.throw();
        slayer.unlockAllRewards();
        for (const key in slayer.unlockedSlayerRewards) {
            expect(slayer.unlockedSlayerRewards[key]).to.equal(true);
        }
    });

    it('should make every task available', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');
        slayer.completeAllQuests();
        slayer.unlockAllRewards();
        slayer.maxAllRequiredSkills();
        slayer.unlockAllMiscellaneous();

        let tasks = slayer.tasks;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            expect(task.available).to.equal(true);
        }
    });

    it('should have task probabilities sum to 1', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');
        slayer.completeAllQuests();
        slayer.unlockAllRewards();
        slayer.unlockAllMiscellaneous();

        let tasks = slayer.tasks;
        let totalProbability = 0;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            totalProbability += task.probability;
        }

        expect(totalProbability).to.be.a('number');
        expect(totalProbability).to.be.lessThan(1 + epsilon);
        expect(totalProbability).to.be.greaterThan(1 - epsilon);
    });
});

describe('Blocking and unblocking tasks at Duradel', () => {
    it('should allow blocking a task', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');
        slayer.completeAllQuests();
        slayer.unlockAllRewards();
        slayer.maxAllRequiredSkills();
        slayer.unlockAllMiscellaneous();

        slayer.blockTask('blackDemon');

        expect(slayer.blockedTaskCount).to.equal(1);
        expect(slayer.blockList.blackDemon).to.equal(true);

        let tasks = slayer.tasks;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            if (task.monsterId === 'blackDemon') {
                expect(task.unblocked).to.equal(false);
            } else {
                expect(task.unblocked).to.equal(true);
            }
        }
    });

    it('should allow unblocking a task', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');
        slayer.completeAllQuests();
        slayer.unlockAllRewards();
        slayer.maxAllRequiredSkills();
        slayer.unlockAllMiscellaneous();

        slayer.blockTask('blackDemon');
        slayer.unblockTask('blackDemon');

        expect(slayer.blockedTaskCount).to.equal(0);
        expect(slayer.blockList.blackDemon).to.equal(false);

        let tasks = slayer.tasks;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            expect(task.unblocked).to.equal(true);
        }
    });

    it('shouldn\'t allow unblocking an already unblocked task', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');
        slayer.completeAllQuests();
        slayer.unlockAllRewards();
        slayer.maxAllRequiredSkills();
        slayer.unlockAllMiscellaneous();

        slayer.unblockTask('blackDemon');

        expect(slayer.blockedTaskCount).to.equal(0);
        expect(slayer.blockList.blackDemon).to.equal(false);

        let tasks = slayer.tasks;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            expect(task.unblocked).to.equal(true);
        }
    });

    it('shouldn\'t allow blocking more than 6 tasks', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');
        slayer.completeAllQuests();
        slayer.unlockAllRewards();
        slayer.maxAllRequiredSkills();
        slayer.unlockAllMiscellaneous();

        slayer.blockTask('bloodveld');
        slayer.blockTask('waterfiend');
        slayer.blockTask('suqah');
        slayer.blockTask('ironDragon');
        slayer.blockTask('nechryael');
        slayer.blockTask('blueDragon');

        expect(slayer.blockedTaskCount).to.equal(6);
        expect(slayer.blockList.bloodveld).to.equal(true);
        expect(slayer.blockList.waterfiend).to.equal(true);
        expect(slayer.blockList.suqah).to.equal(true);
        expect(slayer.blockList.ironDragon).to.equal(true);
        expect(slayer.blockList.nechryael).to.equal(true);
        expect(slayer.blockList.blueDragon).to.equal(true);

        slayer.blockTask('steelDragon');
        expect(slayer.blockedTaskCount).to.equal(6);
        expect(slayer.blockList.steelDragon).to.equal(false);
        expect(slayer.blockList.bloodveld).to.equal(true);
        expect(slayer.blockList.waterfiend).to.equal(true);
        expect(slayer.blockList.suqah).to.equal(true);
        expect(slayer.blockList.ironDragon).to.equal(true);
        expect(slayer.blockList.nechryael).to.equal(true);
        expect(slayer.blockList.blueDragon).to.equal(true);
    });

    it('should have task probabilities sum to 1', () => {
        let slayer = new index.Slayer;
        slayer.completedQuests.shiloVillage = true;
        slayer.combatLevel = 126;
        slayer.slayerLevel = 99;
        slayer.updateSlayerMaster('duradel');
        slayer.completeAllQuests();
        slayer.unlockAllRewards();
        slayer.unlockAllMiscellaneous();

        let tasks = slayer.tasks;
        let totalProbability = 0;
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            totalProbability += task.probability;
        }

        expect(totalProbability).to.be.a('number');
        expect(totalProbability).to.be.lessThan(1 + epsilon);
        expect(totalProbability).to.be.greaterThan(1 - epsilon);
    });
});

// Verify that slayerMonsters and slayerTasks match:
//  slayerMonsters doesn't contain any IDs not in slayerTasks

describe('Data', () => {
    it('keys in completedQuests should match IDs in slayerQuests', () => {
        let slayer = new index.Slayer;
        const slayerQuests = index.slayerQuests;
        
        for (const questId in slayer.completedQuests) {
            let isContained = slayerQuests.some(quest => quest.id === questId);
            expect(isContained).to.equal(true);
        }
    });

    it('keys in blockList should match IDs in slayerMonsters', () => {
        let slayer = new index.Slayer;
        const slayerMonsters = index.slayerMonsters;
        
        for (const monsterId in slayer.blockList) {
            let isContained = slayerMonsters.some(monster => monster.id === monsterId);
            expect(isContained).to.equal(true);
        }
    });

    it('lookup monsterNameById() should work for all tasks', () => {
        let slayer = new index.Slayer;
        const slayerMonsters = index.slayerMonsters;
        const slayerTasks = index.slayerTasks;

        for (let i = 0; i < slayerTasks.length; i++) {
            let monsterId = slayerTasks[i].monsterId;
            let monsterName = slayer.monsterNameById(monsterId);
            expect(monsterName).to.be.a('string');
        }
    });

    it('slayerMonsters only contains monsters that are in slayerTasks', () => {
        const slayerMonsters = index.slayerMonsters;
        const slayerTasks = index.slayerTasks;

        for (let i = 0; i < slayerMonsters.length; i++) {
            let monsterId = slayerMonsters[i].id;
            let isContained = slayerTasks.some(task => task.monsterId === monsterId);
            expect(isContained).to.equal(true);
        }
    });
    
    it('slayerTasks only contains monsters that are in slayerMonsters', () => {
        const slayerMonsters = index.slayerMonsters;
        const slayerTasks = index.slayerTasks;

        for (let i = 0; i < slayerTasks.length; i++) {
            let monsterId = slayerTasks[i].monsterId;
            let isContained = slayerMonsters.some(monster => monster.id === monsterId);
            expect(isContained).to.equal(true);
        }
    });
});

// Attempt to change all levels above and below their respective bounds. Should throw errors.
// Confirm that strengthOrAgilityLevel works.