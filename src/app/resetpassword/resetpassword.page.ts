import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: 'resetpassword.page.html',
  styleUrls: ['resetpassword.page.scss'],
})
export class ResetpasswordPage {
  username: string = '';
  newPassword: string = '';
  passwordReset: boolean = false;
  currentUser: { username: string } | null;

  constructor(
    private alertController: AlertController,
    private userService: UserService
  ) {
    this.currentUser = this.userService.getCurrentUser();
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'La contraseña se ha restablecido correctamente.',
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
    if (this.currentUser && this.currentUser.username === this.username) {
      try {
        this.passwordReset = true;
        await this.presentSuccessAlert();
      } catch (error) {
        
        await this.presentErrorAlert('Error al solicitar el restablecimiento de contraseña.');
      }
    } else {
      this.presentErrorAlert('Nombre de usuario no encontrado.');
    }
  }

  async resetPassword() {
    if (this.currentUser && this.passwordReset) {
      try {
        await this.presentSuccessAlert();
      } catch (error) {
        await this.presentErrorAlert('Error al restablecer la contraseña.');
      }
    } else {
      this.presentErrorAlert('Solicita el restablecimiento de contraseña antes de cambiarla.');
    }
  }
}
