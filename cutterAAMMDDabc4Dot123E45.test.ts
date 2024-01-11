import { expect, it } from 'bun:test'
import {
  CutterAAMMDDabc4Dot123E45,
  FilesCutterAAMMDDabc4Dot123E45
} from './cutterAAMMDDabc4Dot123E45'

const files = [
  '231201.FOURNISSEUR2.PRESTATION2.32123e54.txt',
  'badNameFormat.txt',
  '240111.FOURNISSEUR.PRESTATION3.23E45.txt'
]

const expected = [
  ['DATE', 'DATA1', 'DATA2', 'PRICE', 'EXTENSION'],
  ['231201', 'FOURNISSEUR2', 'PRESTATION2', '32123,54', 'txt'],
  ['badNameFormat.txt', '', '', '', ''],
  ['240111', 'FOURNISSEUR', 'PRESTATION3', '23,45', 'txt']
]

it(`File name ${files[0]}`, () => {
  const cutter = new CutterAAMMDDabc4Dot123E45(files[0])
  expect(cutter.convert()).toEqual(expected[1])
})

it('FilesCutterAAMMDDabc3Dash123E45 --> Multiple file with on bad formated.', () => {
  const filesCutter = new FilesCutterAAMMDDabc4Dot123E45(files)
  expect(filesCutter.getAllPiecesOfFileNames()).toEqual(expected)
})
