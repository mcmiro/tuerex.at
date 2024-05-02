interface DistrictsContentProps {
  postalCode: string;
  description: string;
  districtName: string;
  subline: string;
  introCopy: string;
  headlineOne: string;
  copyOne: string;
  headlineTwo: string;
  copyTwo: string;
  headlineThree: string;
  copyThree: string;
}

class DistrictItem {
  readonly postalCode: string;
  readonly description: string;
  readonly districtName: string;
  readonly subline: string;
  readonly introCopy: string;
  readonly headlineOne: string;
  readonly copyOne: string;
  readonly headlineTwo: string;
  readonly copyTwo: string;
  readonly headlineThree: string;
  readonly copyThree: string;

  constructor({
    postalCode,
    districtName,
    description,
    subline,
    introCopy,
    headlineOne,
    copyOne,
    headlineTwo,
    copyTwo,
    headlineThree,
    copyThree,
  }: DistrictsContentProps) {
    this.postalCode = postalCode;
    this.districtName = districtName;
    this.description = description;
    this.subline = subline;
    this.introCopy = introCopy;
    this.headlineOne = headlineOne;
    this.copyOne = copyOne;
    this.headlineTwo = headlineTwo;
    this.copyTwo = copyTwo;
    this.headlineThree = headlineThree;
    this.copyThree = copyThree;
  }
}

export default DistrictItem;
