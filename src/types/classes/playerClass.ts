export class Player {
  score: number;
  name: string;

  constructor(score: number, name: string) {
    this.score = score;
    this.name = name;
  }

  addScore() {
    this.score += 1;
  }

  addScoreRobot() {
    this.score += 3;
  }
}
