export class RankDto {
  id: string;
  raceName: string;
  teamName: string;
  rank: number;
  public constructor(init: Partial<RankDto>) {
    Object.assign(this, init);
  }
}
