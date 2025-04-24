import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  authorsList: { id: number; name: string }[] = [];
  courseAuthors: { id: number; name: string }[] = [];
  formSubmitted: boolean = false;
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ["", Validators.required, Validators.minLength(2)],
      description: ["", Validators.required, Validators.minLength(2)],
      duration: [0, Validators.required, Validators.min(0)],
      authors: this.fb.array([]),
      newAuthor: this.fb.group({
        name: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern("^[a-zA-Z0-9 ]+$"), // Only Latin letters and numbers
          ],
        ],
      }),
    });
  }

  get authors(): FormArray {
    return this.courseForm.get("authors") as FormArray;
  }

  createAuthor(): void {
    const newAuthorName = this.courseForm.get("newAuthor.name")?.value;
    if (newAuthorName) {
      const newAuthor = {
        id: Date.now(), // Generate a unique ID
        name: newAuthorName,
      };
      this.authorsList.push(newAuthor);
      this.courseForm.get("newAuthor.name")?.reset(); // Clear the input
    }
  }

  addAuthor(author: { id: number; name: string }): void {
    this.courseAuthors.push(author);
    this.authorsList = this.authorsList.filter((a) => a.id !== author.id);
  }

  // Remove an author from the course authors list
  deleteAuthor(author: { id: number; name: string }): void {
    this.authorsList.push(author);
    this.courseAuthors = this.courseAuthors.filter((a) => a.id !== author.id);
  }

  // Handle form submission
  onSubmit(): void {
    this.formSubmitted = true;
    if (this.courseForm.valid) {
      console.log("Form Submitted:", this.courseForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
