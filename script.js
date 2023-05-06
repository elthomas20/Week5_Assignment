class Character {
  constructor(name, pfAncestry, pfClass) {
  this.name = name;
  this.pfAncestry = pfAncestry;
  this.pfClass = pfClass;
  }
  
  describe() {
  console.log(`${this.name} plays a ${this.pfAncestry} ${this.pfClass}`)
  return `${this.name} plays a ${this.pfAncestry} ${this.pfClass}`;
  }
  }
  class adventuringGroup {
  constructor(name) {
  this.name = name;
  this.characters = [];
  }
  
  addCharacter(character) {
  if (character instanceof Character) {
  this.characters.push(character);
  } else {
  throw new Error(`You can only add an instance of Character. 
  argument is not a character: ${character}`);
  }
  }
  
  describe() {
  return `${this.name} has ${this.characters.length} characters.`;
  }
  }
  class Menu { // what drives the application and our choices
  constructor() {
  this.adventuringGroups = [];
  this.selectedadventuringGroup = null; // manage one team at a time
  }
  
  start() { // entry point to application
  let selection = this.showMainMenuOptions(); 
  while (selection != 0) {
  switch(selection) {
  case '1' :
  this.createAdventuringGroup();
  break;
  case '2' :
  this.viewAdventuringGroup();
  break;
  case '3' :
  this.deleteAdventuringGroup();
  break;
  case '4' :
  this.displayAdventuringGroups();
  break;
  default:
  selection = 0;
  }
  selection = this.showMainMenuOptions();
  }
  alert('Thank you for coming. We will see you on your next adventure!');
  }
  
  
  showMainMenuOptions() {
  return prompt(`Welcome to the lottery here in Wati! Please create an adventuring group or view the adventuring groups that are already entered into our lottery. Happy adventuring!
  
  0) Leave the lottery
  1) Create a new Adventuring Group
  2) View an Adventuring Group
  3) Delete an Adventuring Group
  4) Display all Adventuring Groups
  `);
  }
  
  showAdventuringGroupMenuOptions(adventuringGroupInfo) {
  return prompt(`
  0) Go to previous menu
  1) Create a new character
  2) Delete a character
  -----------------
  ${adventuringGroupInfo}
  `);
  }
  
  displayAdventuringGroups() {
  let adventuringGroupString = '';
  for (let i = 0; i < this.adventuringGroups.length; i++) {
  adventuringGroupString += i+ ') ' + this.adventuringGroups[i].name + '\n';
  }
  alert(adventuringGroupString);
  }
  
  createAdventuringGroup() {
  let name = prompt('Enter a name for your new Adventuring Group: ');
  this.adventuringGroups.push(new adventuringGroup(name));
  }
  
  viewAdventuringGroup() {
  let index = prompt("Enter the index of the Adventuring Group that you want to view:");
  if (index > -1 && index < this.adventuringGroups.length) {
  this.selectedAdventuringGroup = this.adventuringGroups[index];
  let description = 'Adventuring Group: ' + this.selectedAdventuringGroup.name + '\n';
  description += ' ' + this.selectedAdventuringGroup.describe() + '\n ';
  for (let i = 0; i < this.selectedAdventuringGroup.characters.length; i++) {
  description += i + ') ' + this.selectedAdventuringGroup.characters[i].name + ' is a ' + this.selectedAdventuringGroup.characters[i].pfAncestry + ' '
  + this.selectedAdventuringGroup.characters[i].pfClass + '.' + '\n';
    }
  let selection1 = this.showAdventuringGroupMenuOptions(description);
  switch (selection1) {
  case '1' :
  this.createCharacter();
  break;
  case '2' :
  this.deleteCharacter();
  }
  } 
  }
  
  deleteAdventuringGroup() {
  let index = prompt('Enter the index of Adventuring Group that you wish to delete: ');
  if (index > -1 && index < this.adventuringGroups.length) {
  this.adventuringGroups.splice(index,1);
  }
  }
  
  
  createCharacter() {
  let name = prompt('Enter a name for your new character: ');
  let pfAncestry = prompt('Enter the Pathfinder 2e ancestry of your new character: ')
  let pfClass = prompt('Enter Pathfinder 2e class for your new character: ');
  this.selectedAdventuringGroup.addCharacter(new Character(name, pfAncestry, pfClass));
  }
  
  deleteCharacter() {
  let index = prompt('Enter the index of the character that you wish to delete: ');
  if (index > -1 && index < this.selectedAdventuringGroup.characters.length) { this.selectedAdventuringGroup.characters.splice(index,1);
  }
  }
  }
  let menu = new Menu();
  menu.start();
  