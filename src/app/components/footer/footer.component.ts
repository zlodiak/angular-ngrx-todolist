import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { setFilterAction } from "src/app/store/actions";
import { selectFilterValue } from "src/app/store/selectors";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  filterValue$ = this.store.pipe(select(selectFilterValue));

  constructor(private store: Store) {}

  ngOnInit() {}

  setFilter(filterValue: string) {
    this.store.dispatch(setFilterAction({ filterValue }));
  }
}
