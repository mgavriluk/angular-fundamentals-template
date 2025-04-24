import { Component, Input } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent {
  @Input() title: string = ""; // Title of the card
  @Input() text?: string; // Optional text for the card
}
