import { NgModule } from "@angular/core";
import { ChildComponent } from "./child.component";
import { CitiDirective } from "./citi.directive";

@NgModule({
    declarations: [CitiDirective, ChildComponent],
    imports: [],
    exports:[CitiDirective, ChildComponent],
    providers: [],
    bootstrap: []
  })
  export class CitiModule { }