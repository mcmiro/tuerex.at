interface ServiceItemProps {
  service: string;
  description: string;
  price: number | string;
}

interface PriceItemProps {
  title: string;
  link?: string;
  workingHours: string;
  addonPrice: number;
  icon: React.ElementType;
  services: ServiceItemProps[];
}

class PriceItem {
  readonly title: string;
  readonly link?: string;
  readonly workingHours: string;
  readonly addonPrice: number;
  readonly icon: React.ElementType;
  readonly services: ServiceItemProps[];

  constructor({
    title,
    link,
    workingHours,
    addonPrice,
    icon,
    services,
  }: PriceItemProps) {
    this.title = title;
    this.link = link || '';
    this.workingHours = workingHours;
    this.addonPrice = addonPrice;
    this.icon = icon;
    this.services = services;
  }
}

export default PriceItem;
