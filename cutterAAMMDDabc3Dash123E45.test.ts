import { expect, it } from 'bun:test'
import {
  CutterAAMMDDabc3Dash123E45,
  FilesCutterAAMMDDabc3Dash123E45
} from './cutterAAMMDDabc3Dash123E45'

const files = [
  'badNameFormat.txt',
  '231201-FOURNISSEUR2 RESTATION2-32123e54.txt',
  '240110-FOURNISSEUR PRESTATION-23E45.txt',
  '240111-FOURNISSEUR.PRESTATION3-23E45.txt'
]

const expected = [
  ['DATE', 'DATA1', 'PRICE', 'EXTENSION'],
  ['badNameFormat.txt', '', '', ''],
  ['231201', 'FOURNISSEUR2 RESTATION2', '32123,54', 'txt'],
  ['240110', 'FOURNISSEUR PRESTATION', '23,45', 'txt'],
  ['240111', 'FOURNISSEUR.PRESTATION3', '23,45', 'txt']
]

it('File name 231201-FOURNISSEUR2 RESTATION2-32123e54.txt', () => {
  const cutter = new CutterAAMMDDabc3Dash123E45(files[1])
  expect(cutter.convert()).toEqual([
    '231201',
    'FOURNISSEUR2 RESTATION2',
    '32123,54',
    'txt'
  ])
})

it('FilesCutterAAMMDDabc3Dash123E45 --> Multiple file with on bad formated.', () => {
  const filesCutter = new FilesCutterAAMMDDabc3Dash123E45(files)
  expect(filesCutter.getAllPiecesOfFileNames()).toEqual(expected)
})
