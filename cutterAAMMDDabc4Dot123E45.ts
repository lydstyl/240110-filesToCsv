import NameCutter from './nameCutter'
import {
  PieceOfFileName,
  PieceOfFileName123E45,
  PieceOfFileNameExtension,
  PieceOfFileNameNoExtension
} from './pieceOfFileName'

// 231201.FOURNISSEUR2.PRESTATION2.32123e54.txt
export class CutterAAMMDDabc4Dot123E45 {
  private fileName: string
  constructor(fileName: string) {
    this.fileName = fileName
  }
  convert() {
    const nameCutter = new NameCutter('.', 5)

    if (nameCutter.isGood(this.fileName)) {
      const splitedFileName = nameCutter.cut(this.fileName)
      const pieceOfFileName1 = new PieceOfFileName(splitedFileName[0])
      const pieceOfFileName2 = new PieceOfFileName(splitedFileName[1])
      const pieceOfFileName3 = new PieceOfFileName(splitedFileName[2])
      const pieceOfFileName123E45 = new PieceOfFileName123E45(
        splitedFileName[3]
      )
      const pieceOfFileNameExtension = new PieceOfFileNameExtension(
        splitedFileName[4]
      )

      return [
        pieceOfFileName1.convert(),
        pieceOfFileName2.convert(),
        pieceOfFileName3.convert(),
        pieceOfFileName123E45.convert(),
        pieceOfFileNameExtension.convert()
      ]
    } else {
      return [this.fileName, '', '', '', '']
    }
  }
}

export class FilesCutterAAMMDDabc4Dot123E45 {
  private allPiecesOfFileNames: string[][] = [
    ['DATE', 'DATA1', 'DATA2', 'PRICE', 'EXTENSION']
  ]
  constructor(fileNames: string[]) {
    fileNames.forEach((fileName) => {
      const cutFiles = new CutterAAMMDDabc4Dot123E45(fileName)
      const piecesOfFileName = cutFiles.convert()
      this.allPiecesOfFileNames.push(piecesOfFileName)
    })
  }
  getAllPiecesOfFileNames() {
    return this.allPiecesOfFileNames
  }
}

export default FilesCutterAAMMDDabc4Dot123E45
