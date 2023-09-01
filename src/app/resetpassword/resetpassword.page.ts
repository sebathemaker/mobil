import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: 'resetpassword.page.html',
  styleUrls: ['resetpassword.page.scss'],
})
export class ResetpasswordPage {
  username: string = ''; 
  newPassword: string = ''; 
  passwordReset: boolean = false; 

  registeredUsernames: string[] = ['usuario1', 'usuario2', 'usuario3'];
  
  constructor(private alertController: AlertController) {} 
  
  requestPasswordReset() {
    if (this.registeredUsernames.includes(this.username)) {
      this.passwordReset = true;
    } else {
      this.presentErrorAlert(); 
    }
  }
  
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Nombre de usuario no encontrado.',
      buttons: ['OK'],
    });
  
    await alert.present();
  }

  resetPassword() {
    console.log('Nueva contraseña:', this.newPassword);
  }
}
