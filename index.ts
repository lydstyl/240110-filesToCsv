import AsyncFiles from './asyncFiles'
import FilesCutterAAMMDDabc3Dash123E45 from './cutterAAMMDDabc3Dash123E45'

const fileNameFormats = ['AAMMDDabc3Dash123E45', 'AAMMDDabc4Dot123E45']

const main = async () => {
  const files = await new AsyncFiles('./testFolders/folder3')
  if (!files) return
  console.log('🚀 ~ main ~ files2:', files)

  // const filesCutter = new FilesCutterAAMMDDabc3Dash123E45(files as string[])
  // console.log('🚀 ~ main ~ filesCutter:', filesCutter)
  // // create csv
}

main()
