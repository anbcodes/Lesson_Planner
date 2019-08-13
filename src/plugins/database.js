import Dexie from 'dexie'
export default class DataBase {
  constructor() {
    this.db = this.initDb()
    this.strandName = ["Logic", "Grammer", "Reasoning", "Exposition", "Debate", "Research"]
  }

  initDb() {
    let db = new Dexie("LessonPlannerV2")
    db.version(1).stores({
      strands: "id++, week",
      items: "id++, strand"
    })
    return db
  }

  async getStrands(week) {
    let strands = await this.db.strands.where({ week: week }).toArray()
    let toPut = []
    if (strands.length < 6) {
      for (let x = 0; x < 6; x++) {
        toPut.push({ week: week, strandName: this.strandName[x], itemOrder: [] })
      }
      await this.db.strands.bulkPut(toPut)
      strands = await this.getStrands(week)
    }
    return strands
  }

  async putStrand(strand) {
    this.db.strands.put(strand)
  }
  async removeStrand(strand) {
    this.db.strands.delete(strand.id)
  }
  async putItem(item) {
    this.db.items.put(item)
  }

  async removeItem(item) {
    this.db.items.delete(item.id)
  }

  async getItems(strand) {
    let items = await this.db.items.where({ strand: strand.id }).toArray()
    return items

  }

}