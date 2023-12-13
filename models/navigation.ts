interface NavigationItemProps {
  title: string;
  url: string;
}

class NavigationItem {
  readonly title: string;
  readonly url: string;

  constructor({ title, url }: NavigationItemProps) {
    this.title = title;
    this.url = url;
  }
}

export default NavigationItem;
