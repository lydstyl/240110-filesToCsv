import NameCutter from './nameCutter'
import {
  PieceOfFileName,
  PieceOfFileName123E45,
  PieceOfFileNameExtension,
  PieceOfFileNameNoExtension
} from './pieceOfFileName'

export class CutterAAMMDDabc3Dash123E45 {
  private fileName: string
  constructor(fileName: string) {
    this.fileName = fileName
  }
  convert() {
    const nameCutter = new NameCutter('-', 3)

    if (nameCutter.isGood(this.fileName)) {
      const splitedFileName = nameCutter.cut(this.fileName)
      const pieceOfFileName1 = new PieceOfFileName(splitedFileName[0])

      const pieceOfFileName2 = new PieceOfFileName(splitedFileName[1])

      const pieceOfFileNameNoExtension = new PieceOfFileNameNoExtension(
        splitedFileName[2]
      )
      const pieceOfFileName123E45 = new PieceOfFileName123E45(
        pieceOfFileNameNoExtension.convert()
      )

      const pieceOfFileNameExtension = new PieceOfFileNameExtension(
        splitedFileName[2]
      )

      return [
        pieceOfFileName1.convert(),
        pieceOfFileName2.convert(),
        pieceOfFileName123E45.convert(),
        pieceOfFileNameExtension.convert()
      ]
    } else {
      return [this.fileName, '', '', '']
    }
  }
}

export class FilesCutterAAMMDDabc3Dash123E45 {
  private allPiecesOfFileNames: string[][]
  constructor(fileNames: string[]) {
    const allPiecesOfFileNames: string[][] = []

    fileNames.forEach((fileName) => {
      const cutFiles = new CutterAAMMDDabc3Dash123E45(fileName)

      const piecesOfFileName = cutFiles.convert()

      allPiecesOfFileNames.push(piecesOfFileName)
    })

    this.allPiecesOfFileNames = allPiecesOfFileNames
  }
  getAllPiecesOfFileNames() {
    return this.allPiecesOfFileNames
  }
}

export default FilesCutterAAMMDDabc3Dash123E45
