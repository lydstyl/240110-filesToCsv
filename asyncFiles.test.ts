import { expect, it } from 'bun:test'
import AsyncFiles from './asyncFiles'

it('AsyncFiles.files to be an array.', async () => {
  const asyncFiles = await new AsyncFiles('testFolders/folder1')
  expect(asyncFiles.files).toBeArray()
})
it('AsyncFiles.files to equal an array.', async () => {
  const asyncFiles = await new AsyncFiles('testFolders/folder1')
  expect(asyncFiles.files).toEqual([
    '231201.FOURNISSEUR2.PRESTATION2.32123e54.txt',
    '240111.FOURNISSEUR.PRESTATION3.23E45.txt',
    '240110.FOURNISSEUR.PRESTATION.123E45.txt'
  ])
})
