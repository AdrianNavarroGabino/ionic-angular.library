import { AlertController } from "@ionic/angular";

export class Utilities {
    constructor() { }

    async showAlert(header: string, subHeader: string, message: string) {
        const alertController = new AlertController();
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header,
          subHeader,
          message,
          buttons: ['OK']
        });

        await alert.present();
    }
}