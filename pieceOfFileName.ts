export class PieceOfFileName {
  piece
  constructor(piece: string) {
    this.piece = piece
  }
  convert() {
    return this.piece
  }
}
export class PieceOfFileNameAAMMDD extends PieceOfFileName {
  convert() {
    return `${this.piece[4]}${this.piece[5]}/${this.piece[2]}${this.piece[3]}/${this.piece[0]}${this.piece[1]}`
  }
}
export class PieceOfFileName123E45 extends PieceOfFileName {
  convert() {
    const splited = this.piece.toLowerCase().split('e')
    const int = splited[0]
    const decimal = splited[1]

    return `${int}.${decimal}`
  }
}
export class PieceOfFileNameNoExtension extends PieceOfFileName {
  convert() {
    const pieceLowered = this.piece.toLowerCase()
    const splited = pieceLowered.split('.')
    if (splited.length > 2) {
      splited.pop()
      return splited.join('.') // aaa.bbb.txt --> aaa.bbb
    } else {
      return splited[0]
    }
  }
}
export class PieceOfFileNameExtension extends PieceOfFileName {
  convert() {
    const pieceLowered = this.piece.toLowerCase()
    const splited = pieceLowered.split('.')
    if (splited.length > 1) {
      const extension = splited[splited.length - 1]
      return extension
    } else {
      return pieceLowered
    }
  }
}
