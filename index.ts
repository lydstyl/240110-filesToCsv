import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * @param {string | Buffer | URL} directoryPath
 * @returns {Promise<string[]>} - Array of long file paths
 */
async function getFiles(directoryPath: string) {
  try {
    const fileNames = await readdir(directoryPath) // returns a JS array of just short/local file-names, not paths.
    // const filePaths = fileNames.map((fn) => join(directoryPath, fn))
    return fileNames
  } catch (err) {
    console.error(err) // depending on your application, this `catch` block (as-is) may be inappropriate; consider instead, either not-catching and/or re-throwing a new Error with the previous err attached.
  }
}

function cutFile(file: string, cutter: string): string[] {
  const pieceOfFileName = file.split(cutter)
  return pieceOfFileName
}

class PieceOfFileName {
  index
  piece
  type
  typesConverters = {
    AAMMDD: () =>
      `${this.piece[4]}${this.piece[5]}/${this.piece[2]}${this.piece[3]}/${this.piece[0]}${this.piece[1]}`
  }
  constructor(index: number, piece: string, type: string) {
    this.index = index
    this.piece = piece
    this.type = type
  }
  convert() {
    return this.typesConverters[this.type]()
  }
}

// class AsyncFiles {
//   directoryPath
//   fileNames: string[] = []
//   constructor async (directoryPath: string) {
//     // this.directoryPath = directoryPath
//     // this.fileNames = await this.getFiles()
//   }
// //   async getFiles() {
// //     try {
// //       const fileNames = await readdir(this.directoryPath)
// //       this.fileNames = fileNames
// //       return fileNames
// //     } catch (err) {
// //       console.error(err)
// //     }
// //   }
// }

// class AsyncFiles {
//   files: string[] = []
//   constructor(directoryPath: string) {
//     return (async () :Promise<AsyncFiles> => {
//       const xxx = await readdir(directoryPath)
//       this.files = xxx
//       return this;
//     })()
//   }
// }

class AsyncFiles {
  files: string[] = []
  constructor(directoryPath: string) {
    return (async (): Promise<AsyncFiles> => {
      const files = await readdir(directoryPath)
      this.files = files
      return this
    })() as unknown as AsyncFiles // <-- type assertion
  }
}

const main = async () => {
  //   const files = await getFiles('/home/gbp2204/Téléchargements/2023/')

  const files = new AsyncFiles('/home/gbp2204/Téléchargements/2023/')

  if (!files) return
  console.log('🚀 ~ main ~ files2:', files)

  //   const piecesOfFileName = cutFile(files[0], '-')

  //   console.log('🚀 ~ main ~ pieceOfFileName:', piecesOfFileName)

  //   const piece = new PieceOfFileName(0, files[0], 'AAMMDD')
  //   console.log('🚀 ~ main ~ piece:', piece)

  //   console.log(piece.convert())
}

main()
