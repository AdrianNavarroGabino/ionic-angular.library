import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform, ToastController } from '@ionic/angular';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public sePuedeCerrar: boolean = false;

  constructor(private platform: Platform, private toastController: ToastController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if(this.sePuedeCerrar) {
        App.exitApp();
      }
      else {
        this.sePuedeCerrar = true;

        this.handleButtonClick();

        setTimeout(() => this.sePuedeCerrar = false, 2500);
      }
    });
  }

  async handleButtonClick() {
    const toast = await this.toastController.create({
      duration: 2000,
      message: 'Press again to exit'
    });
    await toast.present();
  }
}
