


let asgardianBrothers = [
  {
    firstName: "Thor",
    familyName: "Odinsson"
  },
  {
    firstName: "Loki",
    familyName: "Laufeysson-Odinsson"
  }
]

function introWithContext(line) {
  return `${this.firstName} + ${this.familyName} says: ${line}`
}

let phrase = "I like this brown drink very much, bring me another!"


introWithContext.call(asgardianBrothers[1], phrase)
introWithContext.call(asgardianBrothers[1], phrase)



intro(asgardianBrothers[0], phrase) //=> Thor Odinsson says: I like this brown drink very much, bring me another!
intro(asgardianBrothers[0], phrase) === introWithContext.call(asgardianBrothers[0], phrase) //=> true
intro(asgardianBrothers[0], phrase) === introWithContext.apply(asgardianBrothers[0], [phrase]) //=> true

let complaint = "I was falling for thirty minutes!"
intro(asgardianBrothers[1], complaint) === introWithContext.call(asgardianBrothers[1], complaint) //=> true
intro(asgardianBrothers[1], complaint) === introWithContext.apply(asgardianBrothers[1], [complaint]) //=> true


// ..............

//solution 2:  closure fix
let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)

    let outerContext = this

    this.signatories.forEach(function(signatory){
        let message = `${outerContext.closing[signatory]}, ${signatory}`
        console.log(message)
    })
}

printCard.call(configuration)

//
// function printName(firstName, lastName) {
//   console.log(`${firstName} ${lastName}`)
//   console.log(this)
// }

let printCard = function() {
  this.signatories.forEach(function(signatory){
    let message = `${this.clos}`
  })
}

let printCard = function() {
  this.signatories.forEach(function(signatory){

  })
}


this.signatories.forEach(function(signatory{
  let message = `${this.closing[signatory]}, ${signatory}`

}))

let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)

    this.signatories.forEach(function(signatory){
        let message = `${this.closing[signatory]}, ${signatory}`
        console.log(message)
    })
}

printCard.call(configuration)
