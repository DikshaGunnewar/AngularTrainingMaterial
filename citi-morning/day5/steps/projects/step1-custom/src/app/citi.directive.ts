import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
// selector:'citi'
    // selector:'[citi]'
    // selector:'.citi'
   selector:'[citi]'
})

export class CitiDirective implements OnInit{
   @Input() citi:string ='darkSeagreen'
    constructor(private elementRef: ElementRef){

    }

    ngOnInit(){
         this.elementRef.nativeElement.innerHtml="Hello from Citi";
         this.elementRef.nativeElement.style.backgroundColor = this.citi;

     this.elementRef.nativeElement.addEventListener("click", this.clickHandler)
    }

    clickHandler(evt:any){
        // alert("did you click me");
        console.log(evt.target);
        // this.elRef.nativeElement.style.backgroundColor = this.citi;
        let color = evt.target.getAttribute("citi");
        evt.target.style.backgroundColor = color;
    }
}