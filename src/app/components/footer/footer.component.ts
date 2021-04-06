import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { setFilterAction } from "src/app/store/actions";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {}

  setFilter(filterValue: string) {
    this.store.dispatch(setFilterAction({ filterValue }));
  }
}
