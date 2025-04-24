import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  @Input() placeholder: string = "Search..."; // Placeholder for the input field
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchTerm: string = ""; // Model for the input field

  // Method to emit the search term when the button is clicked
  onSearch(): void {
    this.search.emit(this.searchTerm);
  }
}
