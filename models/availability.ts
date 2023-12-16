interface AvailabilityProps {
  title: string;
  color: string;
  status: string;
  statusCode: number;
}

class AvailabilityItem {
  readonly title: string;
  readonly color: string;
  readonly status: string;
  readonly statusCode: number;

  constructor({ title, color, status, statusCode }: AvailabilityProps) {
    this.title = title;
    this.color = color;
    this.status = status;
    this.statusCode = statusCode;
  }
}

export default AvailabilityItem;
