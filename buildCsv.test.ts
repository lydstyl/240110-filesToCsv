import { expect, it } from 'bun:test'
import { CsvBuilder, buildCsv } from './buildCsv'

const allPiecesOfFileNames = [
  ['DATE', 'DATA1', 'PRICE', 'EXTENSION'],
  ['badNameFormat.txt', '', '', ''],
  ['231201', 'FOURNISSEUR2 RESTATION2', '32123.54', 'txt'],
  ['240110', 'FOURNISSEUR PRESTATION', '23.45', 'txt'],
  ['240111', 'FOURNISSEUR.PRESTATION3', '23.45', 'txt']
]

const expected = `DATE;DATA1;PRICE;EXTENSION\nbadNameFormat.txt;;;\n231201;FOURNISSEUR2 RESTATION2;32123.54;txt\n240110;FOURNISSEUR PRESTATION;23.45;txt\n240111;FOURNISSEUR.PRESTATION3;23.45;txt\n`

it('CSV is built correctly.', () => {
  const csv = buildCsv(allPiecesOfFileNames, ';')
  expect(csv).toBe(expected)
})
it('CSV is built correctly with CSV class.', () => {
  const csvBuilder = new CsvBuilder(allPiecesOfFileNames, ';')
  expect(csvBuilder.csv).toBe(expected)
})
