import AsyncFiles from './asyncFiles'
import { CsvBuilder } from './buildCsv'
import FilesCutterAAMMDDabc3Dash123E45 from './cutterAAMMDDabc3Dash123E45'

const fileNameFormats = ['AAMMDDabc3Dash123E45', 'AAMMDDabc4Dot123E45']

const main = async () => {
  const asyncFiles = await AsyncFiles.build('testFolders/folder3')

  if (!asyncFiles.files) return
  console.log('🚀 ~ main ~ files2:', asyncFiles.files)

  const filesCutter = new FilesCutterAAMMDDabc3Dash123E45(asyncFiles.files)
  const allPiecesOfFileNames = filesCutter.getAllPiecesOfFileNames()
  console.log('🚀 ~ main ~ allPiecesOfFileNames:', allPiecesOfFileNames)

  const csvBuilder = new CsvBuilder(allPiecesOfFileNames, ';')
  csvBuilder.buildCSVFile('./generatedCsv/files.csv')
}

main()
