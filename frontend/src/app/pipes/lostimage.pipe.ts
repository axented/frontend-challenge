import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lostimage'
})
export class LostimagePipe implements PipeTransform {

    transform(images:string): string {
        
        if( !images ){
            return 'assets/img/lostimage.png';
        }

        if( images.length > 0 ){
            return images;
        }else{      
            return 'assets/img/lostimage.png';
        }

    }

}
