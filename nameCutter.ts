class NameCutter {
  splitter
  splitCount
  constructor(splitter: string, splitCount: number) {
    this.splitter = splitter
    this.splitCount = splitCount
  }
  isGood(name: string) {
    return name.split(this.splitter).length === this.splitCount
  }
  cut(name: string) {
    return name.split(this.splitter)
  }
}

export default NameCutter
