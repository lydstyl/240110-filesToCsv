import AsyncFiles from './asyncFiles'

const main = async () => {
  const files = await new AsyncFiles('/home/gbp2204/Téléchargements/2023/')
  if (!files) return
  console.log('🚀 ~ main ~ files2:', files)

  ////////////////////
  // cut file names one by one AAMMDDabc3Dash123E45 AAMMDDabc4Dot123E45
  // check it is good
  //
}

main()
