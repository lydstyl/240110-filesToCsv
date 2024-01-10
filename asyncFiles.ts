import { readdir } from 'node:fs/promises'

class AsyncFiles {
  private directoryPath: string
  files: string[] = []
  constructor(directoryPath: string, files: string[]) {
    this.directoryPath = directoryPath
    this.files = files
  }

  static async build(directoryPath: string) {
    const files = await readdir(directoryPath)
    return new AsyncFiles(directoryPath, files)
  }
}

export default AsyncFiles
