class Counter {
  constructor(index) {
    this.index = ++index;
  }

  log() {
    console.log(index);
  }
}

const a = new Counter(1);
