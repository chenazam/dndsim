'use strict';
import { characters } from './modules/characterlist.js';

let current_character_list = [];
let current_party = [];

const filterCharacterList = function () {
  const filterValue = document.getElementById('name_filter').value;
  let filtered_list = [];
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].name.toLowerCase().includes(filterValue.toLowerCase())) {
      filtered_list.push(characters[i]);
      filtered_list = filtered_list.sort();
    }
  }
  loadCharacterList(filtered_list);
};

const resetFilter = function () {
  document.getElementById('name_filter').value = '';
  loadCharacterList(characters);
};

const loadCharacterList = function (arr) {
  current_character_list = [];
  const characterList = document.getElementById('character_list');
  characterList.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    arr.sort((a, b) => a.name.localeCompare(b.name));
    const character_name = arr[i].name;
    const p = document.createElement('p');
    p.className = 'character_list_element';
    p.id = character_name;
    p.textContent = arr[i].name;
    current_character_list.push(arr[i].name);
    characterList.appendChild(p);
    p.addEventListener('click', () => showCharacterDetails(arr[i]), false);
  }
  console.log(current_character_list);
};

const showCharacterDetails = function (character) {
  let buttonLabel = current_party.includes(character)
    ? 'REMOVE FROM PARTY'
    : 'ADD TO PARTY';
  document.getElementById(
    'character_details'
  ).innerHTML = `<table class="center">
    <tr>
        <td><img class="character_image" src="${character.image}"/></td>
        <td>
            <p>${character.name}</p>
            <p>Level ${character.level} ${character.class}</p>
        </td>
    </tr>
    <tr><td>Strength:</td><td><progress value="${character.str}" max="20">${character.str}%</progress></td></tr>
    <tr><td>Dexterity:</td><td><progress value="${character.dex}" max="20">${character.dex}%</progress></td></tr>
    <tr><td>Constitution:</td><td><progress value="${character.con}" max="20">${character.con}%</progress></td></tr>
    <tr><td>Intelligence:</td><td><progress value="${character.int}" max="20">${character.int}%</progress></td></tr>
    <tr><td>Wisdom:</td><td><progress value="${character.wis}" max="20">${character.wis}%</progress></td></tr>
    <tr><td>Charisma:</td><td><progress value="${character.cha}" max="20">${character.cha}%</progress></td></tr>
    <tr><td colspan="2" class="partybutton_container"><button id="partybutton">${buttonLabel}</button></td></tr>
  </table>`;

  document
    .getElementById('partybutton')
    .addEventListener('click', () => togglePartyStatus(character), false);
};

const togglePartyStatus = function (character) {
  if (!current_party.includes(character)) {
    current_party.push(character);
  } else {
    const index = current_party.indexOf(character);
    current_party.splice(index, 1);
  }
  loadPartyList(current_party);
  showCharacterDetails(character);
};

const loadPartyList = function (arr) {
  const partyList = document.getElementById('party_list');
  partyList.innerHTML = '';
  arr.sort((a, b) => a.name.localeCompare(b.name));
  for (let i = 0; i < arr.length; i++) {
    const character_name = arr[i].name;
    const p = document.createElement('p');
    p.className = 'party_list_element';
    p.id = character_name;
    p.innerHTML = `<img class="party_icon" src="${arr[i].image}" /> ${arr[i].name}`;
    partyList.appendChild(p);
    p.addEventListener('click', () => showCharacterDetails(arr[i]), false);
  }
  console.log(current_party);
};

document.body.onload = function () {
  loadCharacterList(characters);
};
document.getElementById('filter_button').onclick = filterCharacterList;
document.getElementById('reset_button').onclick = resetFilter;
