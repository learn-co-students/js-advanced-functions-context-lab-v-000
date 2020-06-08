
cats = [
  {
    name: "fluffles",
    breed: "tabby"
  },

  {
    name: "waffles",
    breed: "black and white"
  }
]

// let greeting = "meow"

function catSaysWithContext(greeting){
  return `${this.name} says ${greeting} from the ${this.breed} clan!`
}


catSaysWithContext.call(cats[0], "hi")
