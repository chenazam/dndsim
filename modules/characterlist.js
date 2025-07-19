'use strict';

class Character {
  constructor(
    name,
    level = 1,
    character_class,
    strength_score = 10,
    dexterity_score = 10,
    constitution_score = 10,
    intelligence_score = 10,
    wisdom_score = 10,
    charisma_score = 10,
    imageURL = 'https://placehold.co/100'
  ) {
    this.name = name;
    this.level = level;
    this.class = character_class;
    this.str = strength_score;
    this.strMod = Math.floor((strength_score - 10) / 2);
    this.dex = dexterity_score;
    this.dexMod = Math.floor((dexterity_score - 10) / 2);
    this.con = constitution_score;
    this.conMod = Math.floor((constitution_score - 10) / 2);
    this.int = intelligence_score;
    this.intMod = Math.floor((intelligence_score - 10) / 2);
    this.wis = wisdom_score;
    this.wisMod = Math.floor((wisdom_score - 10) / 2);
    this.cha = charisma_score;
    this.chaMod = Math.floor((charisma_score - 10) / 2);
    this.image = imageURL;
  }
}

// CHARACTERS

let caelum = new Character(
  'Caelum Spiredrift',
  3,
  'College of Dance Bard',
  8,
  16,
  14,
  8,
  10,
  17,
  'https://www.dndbeyond.com/avatars/48691/228/1581111423-144703329.jpeg'
);
let briaxys = new Character(
  'Briaxys Vykaros',
  3,
  'Architect of Ruin Illrigger',
  10,
  15,
  14,
  16,
  8,
  12,
  'https://www.dndbeyond.com/avatars/48553/18/1581111423-144681870.jpeg'
);
let didi = new Character(
  'Didi Delure',
  3,
  'Cursed Existence Sorcerer',
  14,
  12,
  14,
  8,
  12,
  16,
  'https://www.dndbeyond.com/avatars/50393/236/1581111423-144975707.jpeg'
);

// CAMPAIGN LIST

let mirabilis = [caelum, briaxys, didi];

const allCampaigns = [mirabilis];

let temporaryCharacterList = [];

for (let i = 0; i < allCampaigns.length; i++) {
  temporaryCharacterList = temporaryCharacterList.concat(allCampaigns[i]);
}

let fullCharacterList = [...new Set(temporaryCharacterList)];

export const characters = fullCharacterList;
