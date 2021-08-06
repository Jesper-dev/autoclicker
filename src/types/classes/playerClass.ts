export class Player {
  score: number;
  name: string;

  constructor(score: number, name: string) {
    this.score = score;
    this.name = name;
  }

  addScore() {
    // num += 1;
    this.score += 1;
  }
}
