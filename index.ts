import AsyncFiles from './asyncFiles'

function cutFile(file: string, cutter: string): string[] {
  const pieceOfFileName = file.split(cutter)
  return pieceOfFileName
}

const main = async () => {
  const files = await new AsyncFiles('/home/gbp2204/Téléchargements/2023/')
  if (!files) return
  console.log('🚀 ~ main ~ files2:', files)

  //   const piecesOfFileName = cutFile(files[0], '-')

  //   console.log('🚀 ~ main ~ pieceOfFileName:', piecesOfFileName)

  //   const piece = new PieceOfFileName(0, files[0], 'AAMMDD')
  //   console.log('🚀 ~ main ~ piece:', piece)

  //   console.log(piece.convert())
}

main()
