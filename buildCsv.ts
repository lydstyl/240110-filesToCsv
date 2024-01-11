export const buildCsv = (
  allPiecesOfFileNames: string[][],
  joiner: string
): string => {
  let csv = ''

  allPiecesOfFileNames.forEach((rowPieces) => {
    const row = rowPieces.join(joiner)
    csv += row + '\n'
  })

  return csv
}

export class CsvBuilder {
  private allPiecesOfFileNames: string[][]
  private joiner: string
  csv: string = ''
  constructor(allPiecesOfFileNames: string[][], joiner: string) {
    this.allPiecesOfFileNames = allPiecesOfFileNames
    this.joiner = joiner

    allPiecesOfFileNames.forEach((rowPieces) => {
      const row = rowPieces.join(joiner)
      this.csv += row + '\n'
    })
  }

  buildCSVFile(folderPath: string) {}
}
