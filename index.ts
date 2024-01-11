import AsyncFiles from './asyncFiles'
import { CsvBuilder } from './buildCsv'
import FilesCutterAAMMDDabc3Dash123E45 from './cutterAAMMDDabc3Dash123E45'
import FilesCutterAAMMDDabc4Dot123E45 from './cutterAAMMDDabc4Dot123E45'

const fileNameFormats = ['AAMMDDabc3Dash123E45', 'AAMMDDabc4Dot123E45']

const main = async (fileNameFormat: string, folderPath: string) => {
  const asyncFiles = await AsyncFiles.build(folderPath)
  if (!asyncFiles.files) return

  switch (fileNameFormat) {
    case fileNameFormats[0]:
      const filesCutter1 = new FilesCutterAAMMDDabc3Dash123E45(asyncFiles.files)
      const allPiecesOfFileNames1 = filesCutter1.getAllPiecesOfFileNames()
      const csvBuilder1 = new CsvBuilder(allPiecesOfFileNames1, ';')
      csvBuilder1.buildCSVFile('./generatedCsv/files.csv')
      break

    case fileNameFormats[1]:
      const filesCutter2 = new FilesCutterAAMMDDabc4Dot123E45(asyncFiles.files)
      const allPiecesOfFileNames2 = filesCutter2.getAllPiecesOfFileNames()
      const csvBuilder2 = new CsvBuilder(allPiecesOfFileNames2, ';')
      csvBuilder2.buildCSVFile('./generatedCsv/files.csv')
      break

    default:
      break
  }
}

// main(fileNameFormats[0], 'testFolders/folder3')
// main(fileNameFormats[0], '/home/gbp2204/Téléchargements/2023/factures normales')
// main(
//   fileNameFormats[0],
//   '/home/gbp2204/Téléchargements/2023/Réglées via compte perso'
// )
main(
  fileNameFormats[1],
  '/home/gbp2204/Dropbox/Actifs/IMMEUBLE RAISMES/Factures/2024/réglées à titre perso'
) // new generation of invoices
