interface ServiceItemProps {
  service: string;
  price: number;
}

interface PriceItemProps {
  title: string;
  workingHours: string;
  addonPrice: number;
  icon: React.ElementType;
  services: ServiceItemProps[];
}

class PriceItem {
  readonly title: string;
  readonly workingHours: string;
  readonly addonPrice: number;
  readonly icon: React.ElementType;
  readonly services: ServiceItemProps[];

  constructor({
    title,
    workingHours,
    addonPrice,
    icon,
    services,
  }: PriceItemProps) {
    this.title = title;
    this.workingHours = workingHours;
    this.addonPrice = addonPrice;
    this.icon = icon;
    this.services = services;
  }
}

export default PriceItem;
