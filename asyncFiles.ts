import { readdir } from 'node:fs/promises'

export class AsyncFiles {
  files: string[] = []
  constructor(directoryPath: string) {
    return (async (): Promise<AsyncFiles> => {
      const files = await readdir(directoryPath)
      this.files = files
      return this
    })() as unknown as AsyncFiles // <-- type assertion
  }
}

export default AsyncFiles
