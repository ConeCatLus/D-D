const characters = [];

class Character {
    constructor(name, gender, selectedRace, selectedClass) {
        this.name = name;
        this.gender = gender;
        // Race specifics
        this.race       = races[selectedRace].race;
        this.stats      = races[selectedRace].stats;
        this.inventory  = races[selectedRace].inventory
        this.skills     = races[selectedRace].skills;
        // Class specifics
        this.class  = classes[selectedClass].class;
        this.hitPoints  = classes[selectedClass].hitPoints;
        this.weapons    = classes[selectedClass].weapons;
        this.skills     += classes[selectedClass].skills;
        
    }

    attack() {
        console.log(`${this.name} attacks with a strength of ${this.stats.strength}.`);
    }
}

const races = {
    human: {
        description: "Humans are versatile and adaptable, able to thrive in a variety of environments and pursue a wide range of occupations.",
        race: "Human",
        stats: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        },
        inventory: [],
        skills: [],
    },
    elf: {
        description: "Elves are a graceful and long-lived race, known for their mastery of magic and their connection to nature.",
        race: "Elf",
        stats: {
            strength: 8,
            dexterity: 14,
            constitution: 10,
            intelligence: 12,
            wisdom: 14,
            charisma: 10
        },
        inventory: [],
        skills: [
            "archery",
            "stealth",
            "nature lore",
            "perception",
            "survival"
        ],
    },
    dwarf: {
        description: "Dwarves are a sturdy and hardy race, known for their skill in mining and crafting, as well as their resistance to poison and magic.",
        race: "Dwarf",
        stats: {
            strength: 12,
            dexterity: 8,
            constitution: 16,
            intelligence: 10,
            wisdom: 14,
            charisma: 8
        },
        inventory: [],
        skills: [
            "mining",
            "engineering",
            "blacksmithing",
            "toughness",
            "endurance"
        ]
    }
};

const classes = {
    warrior: {
        class: "Warrior",
        hitPoints: 10,
        weapons: [
            "sword",
            "shield",
            "mace"
        ],
        skills: [
            "tactics",
            "athletics",
            "intimidation",
            "survival"
        ],
        description: "Warriors are known for their prowess in combat and their physical strength."
    },
    wizard: {
        class: "Wizard",
        hitPoints: 6,
        weapons: [
            "dagger",
            "quarterstaff"
        ],
        skills: [
            "arcana",
            "history",
            "insight",
            "meditation"
        ],
        spellbook: [
            "magic missile",
            "fireball",
            "cure wounds",
            "invisibility"
        ],
        description: "Wizards are masters of magic and arcane knowledge, using their spells to defeat their enemies and protect their allies."
    },
    rogue: {
        class: "Rogue",
        hitPoints: 8,
        weapons: [
            "dagger",
            "shortsword",
            "crossbow"
        ],
        skills: [
            "stealth",
            "thievery",
            "perception",
            "investigation"
        ],
        description: "Rogues are known for their cunning and stealth, using their skills to slip past their enemies and steal valuable treasures."
    }
};