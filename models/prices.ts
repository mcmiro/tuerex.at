interface ServiceItemProps {
  service: string;
  price: number;
}

interface PriceItemProps {
  title: string;
  workingHours: string;
  addonPrice: number;
  className: string;
  icon: React.ElementType;
  services: ServiceItemProps[];
}

class PriceItem {
  readonly title: string;
  readonly workingHours: string;
  readonly addonPrice: number;
  readonly className: string;
  readonly icon: React.ElementType;
  readonly services: ServiceItemProps[];

  constructor({
    title,
    workingHours,
    addonPrice,
    className,
    icon,
    services,
  }: PriceItemProps) {
    this.title = title;
    this.workingHours = workingHours;
    this.addonPrice = addonPrice;
    this.className = className;
    this.icon = icon;
    this.services = services;
  }
}

export default PriceItem;
