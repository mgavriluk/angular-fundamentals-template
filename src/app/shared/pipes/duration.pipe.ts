import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(value: number | string, type: "duration" | "date"): string {
    if (type === "duration") {
      return this.transformDuration(value as number);
    } else if (type === "date") {
      return this.transformDate(value as string);
    }
    return "";
  }
  private transformDuration(duration: number): string {
    if (isNaN(duration) || duration < 0) {
      return "00:00 hour";
    }

    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursPart = hours.toString().padStart(2, "0");
    const minutesPart = minutes.toString().padStart(2, "0");

    return `${hoursPart}:${minutesPart} ${hours === 1 ? "hour" : "hours"}`;
  }

  // Transform date to DD.MM.YYYY format
  private transformDate(date: string): string {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      return "Invalid Date";
    }

    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = parsedDate.getFullYear();

    return `${day}.${month}.${year}`;
  }
}
