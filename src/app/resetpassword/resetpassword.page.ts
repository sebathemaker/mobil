import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-resetpassword',
  templateUrl: 'resetpassword.page.html',
  styleUrls: ['resetpassword.page.scss'],
})
export class ResetpasswordPage {
  username: string = '';
  newPassword: string = '';
  passwordReset: boolean = false;
  currentUser: UserModel | null = null;


  constructor(private alertController: AlertController) {}

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async requestPasswordReset() {
    // Implementa la lógica para solicitar el restablecimiento de contraseña aquí
    // Puedes usar this.username para identificar al usuario


    this.passwordReset = true;
    this.presentSuccessAlert('Solicitud de restablecimiento de contraseña enviada.');
  }

  async resetPassword() {

    if (this.currentUser && this.passwordReset) {
      
      this.presentSuccessAlert('Contraseña restablecida correctamente.');
    } else {
      this.presentErrorAlert('Solicita el restablecimiento de contraseña antes de cambiarla.');
    }
  }
}
