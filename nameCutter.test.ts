import { expect, it } from 'bun:test'
import NameCutter from './nameCutter'

it('Check "230724-FC0863 Plaquit Seb-99e88.pdf" is good.', () => {
  const nameCutter = new NameCutter('-', 3)
  expect(nameCutter.isGood('230724-FC0863 Plaquit Seb-99e88.pdf')).toBeTrue
})
it('Check "230724-FC0863 Plaquit Seb-99e88.pdf" is good.', () => {
  const nameCutter = new NameCutter('-', 3)
  expect(nameCutter.cut('230724-FC0863 Plaquit Seb-99e88.pdf')).toEqual([
    '230724',
    'FC0863 Plaquit Seb',
    '99e88.pdf'
  ])
})
