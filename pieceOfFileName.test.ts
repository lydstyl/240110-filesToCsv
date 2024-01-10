import { expect, it } from 'bun:test'
import {
  PieceOfFileName,
  PieceOfFileNameAAMMDD,
  PieceOfFileName123E45,
  PieceOfFileNameExtension
} from './pieceOfFileName'

// 231201.FOURNISSEUR2.PRESTATION2.32123e54.txt
it('PieceOfFileName with abc.', () => {
  const pieceOfFileName = new PieceOfFileName('abc')
  expect(pieceOfFileName.convert()).toEqual('abc')
})
it('PieceOfFileNameAAMMDD with 241230.', () => {
  const pieceOfFileName = new PieceOfFileNameAAMMDD('241230')
  expect(pieceOfFileName.convert()).toEqual('30/12/24')
})
it('PieceOfFileName123E45 with 123E45.', () => {
  const pieceOfFileName = new PieceOfFileName123E45('123E45')
  expect(pieceOfFileName.convert()).toEqual('123.45')
})
it('PieceOfFileName123E45 with 123e45.', () => {
  const pieceOfFileName = new PieceOfFileName123E45('123e45')
  expect(pieceOfFileName.convert()).toEqual('123.45')
})
it('PieceOfFileNameExt with txt', () => {
  const pieceOfFileName = new PieceOfFileNameExtension('txt')
  expect(pieceOfFileName.convert()).toEqual('txt')
})
it('PieceOfFileNameExt with JPEG', () => {
  const pieceOfFileName = new PieceOfFileNameExtension('JPEG')
  expect(pieceOfFileName.convert()).toEqual('jpeg')
})
it('PieceOfFileNameExtension with xxx.txt', () => {
  const pieceOfFileName = new PieceOfFileNameExtension('xxx.txt')
  expect(pieceOfFileName.convert()).toEqual('txt')
})
