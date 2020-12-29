// Write your classes here
class Tree{
<<<<<<< HEAD
  constructor(species){
    this.species=species
  }
  static definition(){
    return("A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.")
  }
  
}

class Deciduous extends Tree{
  constructor(species,name){
    super(species);
    this.name=name;}
  static definition(){return (`${super.definition()} Deciduous trees shed their leaves annually.`)}
}
class Evergreen extends Tree{
  constructor(species,name){
    super(species);
    this.name=name;}
  static definition(){return (`${super.definition()} Evergreens keep their leaves all year round.`)}
=======
  Constructors(species){
    this.species=species
  }
  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  }
  
}
class Decidious extends Tree{
  Constructors(species, name){
    super(species,name)
    this.name=name
  }
  static definition(){return `${super.definition}`}
>>>>>>> 96a78cea4fe2e530724130d05e0d0c18fd2a704c
}