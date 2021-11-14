import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.scss'],
})
export class SemanalComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}
  ngOnInit() {}
  async openMenu(ev:any){
    console.log("abrir menu");
      const popover = await this.popoverController.create({
        component: MenuComponent,
        translucent: true,
        event:ev
      });
      await popover.present();
  
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }


}
