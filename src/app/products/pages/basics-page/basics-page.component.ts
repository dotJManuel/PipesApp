import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'jose manuel';
  public nameUpper: string = 'JOSE MANUEL';
  public fullName: string = 'JoSe MAnuEL';

  public customDate: Date = new Date();

}
