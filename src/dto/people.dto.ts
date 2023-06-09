export class PeopleDto {
  name: string;

  public constructor(init: Partial<PeopleDto>) {
    Object.assign(this, init);
  }
}
