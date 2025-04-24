import { Component, Input } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() iconName?: string;

  icon?: IconDefinition;
  library: any;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnChanges(): void {
    if (this.iconName) {
      this.icon = this.library.getIconDefinition(this.iconName);
    }
  }
}
