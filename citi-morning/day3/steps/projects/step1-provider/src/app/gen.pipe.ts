import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name :'gen'
})

export class GenPipe implements PipeTransform{
    transform(args1 :any, arg2?:any): string{
        
        if(arg2 === 'male'){
            return "Mr. "+ args1;
        } else {
            return "Miss. "+ args1;
        }
        
        return args1;
    }
}
