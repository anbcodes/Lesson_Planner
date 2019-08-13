// let localStorage = {
//   storage: {
//     options: {
//       showCommunityStrand: false,
//       communityStrand: "Wednesstrand",
//       showWeekends: false,
//       startWithCommunityStrand: true
//     }
//   },
//   getItem(name) {
//     return this.storage[name]
//   },
//   setItem(name, value) {
//     this.storage[name] = value
//   }
// }
export default class StrandHandler {
  constructor() {
    this.strandNames = ["Logic", "Grammer", "Reasoning", "Exposition", "Debate", "Research"]
    this.times = 0
  }

  addStrands(strands) {
    this.strands = strands
    this.shownStrands = this.createShownStrands()
    this.applyStrandOrder(JSON.parse(localStorage.getItem("strandOrder")) || ["Logic", "Grammer", "Reasoning", "Exposition", "Debate", "Research"])
  }
  onOptionsUpdate() {
    this.shownStrands = this.createShownStrands()
    this.applyStrandOrder(JSON.parse(localStorage.getItem("strandOrder")) || ["Logic", "Grammer", "Reasoning", "Exposition", "Debate", "Research"])

  }

  createShownStrands() {
    let shownStrands = []
    for (let x = 0; x < 6; x++) {
      shownStrands.push({ strand: this.getStrandFromNameFromWeek(this.strandNames[x]), show: true, showMobile: false })
    }
    return shownStrands
  }
  getStrandFromNameFromWeek(name) {
    let strandOfWeek = `Can't find ${name} in ${JSON.stringify(this.strands)}`
    this.strands.forEach(strand => {
      if (strand.strandName === name) {
        strandOfWeek = strand
      }
    })
    return strandOfWeek
  }
  getStrandFromName(strandName) {
    let strand = undefined
    this.shownStrands.forEach((shownStrand) => {
      if (shownStrand.strand.strandName === strandName) {
        strand = shownStrand
      }
    })
    return strand
  }
  applyStrandOrder(order) {
    localStorage.setItem("strandOrder", JSON.stringify(order))
    let newShownStrands = JSON.parse(JSON.stringify(this.shownStrands))
    this.shownStrands.forEach((shownStrand, i) => {
      newShownStrands[i] = this.getStrandFromName(order[i])
    })
    this.shownStrands = newShownStrands
  }
  show(strand) {
    this.getStrandFromName(strand).show = true
  }
  hide(strand) {
    this.getStrandFromName(strand).show = false
  }
  getNextShownStrandUp(strandName) {
    let x = 0
    while (x === 0) {
      strandName = this.getNextStrand(strandName)
      if (this.getStrandFromName(strandName).show) {
        x = 1
        return strandName
      }
    }
  }
  getNextShownStrandDown(strandName) {
    let x = 0
    while (x === 0) {
      strandName = this.getPreviousStrand(strandName)
      if (this.getStrandFromName(strandName).show) {
        x = 1
        return strandName
      }
    }
  }
  getNextStrand(strandName) {
    let index = this.shownStrands.indexOf(this.getStrandFromName(strandName))
    if (index >= 5) {
      index = -1
    }
    return this.shownStrands[index + 1].strand.strandName
  }

  getPreviousStrand(strandName) {
    let index = this.shownStrands.indexOf(this.getStrandFromName(strandName))
    if (index <= 0) {
      index = 6
    }
    return this.shownStrands[index - 1].strand.strandName
  }

  moveShownStrandUp(strandName) {
    let strandOrder = JSON.parse(localStorage.getItem("strandOrder")) || ["Logic", "Grammer", "Reasoning", "Exposition", "Debate", "Research"]
    let index = strandOrder.indexOf(strandName);
    delete strandOrder[index];
    if (index === 0) {
      strandOrder.push(strandName);
    } else {
      strandOrder.splice(index - 1, 0, strandName);
    }

    strandOrder = strandOrder.filter(v => v)
    this.applyStrandOrder(strandOrder)
  }

  moveShownStrandDown(strandName) {
    let strandOrder = JSON.parse(localStorage.getItem("strandOrder")) || ["Logic", "Grammer", "Reasoning", "Exposition", "Debate", "Research"]

    let index = strandOrder.indexOf(strandName);
    delete strandOrder[index];
    if (index === strandOrder.length - 1) {
      strandOrder.splice(0, 0, strandName);
    } else {
      strandOrder.splice(index + 2, 0, strandName);
    }

    strandOrder = strandOrder.filter(v => v)

    this.applyStrandOrder(strandOrder)
  }
}