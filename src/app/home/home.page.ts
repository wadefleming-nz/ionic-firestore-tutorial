import { Component } from '@angular/core';
import { FirestoreService } from '../services/data/firestore.service';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songs$: Observable<Song[]>;

  constructor(
    private firestoreService: FirestoreService,
    private alertController: AlertController
  ) {
    this.songs$ = this.firestoreService.getAllSongs();
  }

  async deleteSong(id: string, name: string) {
    const alert = await this.alertController.create({
      header: 'Delete Song',
      message: `Are you sure you want to delete '${name}'?`,
      buttons: [
        { text: 'Cancel', role: 'cancel', cssClass: 'secondary' },
        { text: 'OK', handler: () => this.firestoreService.deleteSong(id) },
      ],
    });

    await alert.present();
  }
}
