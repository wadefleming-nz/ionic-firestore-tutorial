import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  public createSongForm: FormGroup;

  constructor(
    public router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder
  ) {
    this.createSongForm = formBuilder.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    });
  }

  async createSong() {
    const loading = await this.loadingController.create();
    await loading.present();

    const albumName = this.createSongForm.value.albumName;
    const artistName = this.createSongForm.value.artistName;
    const songDescription = this.createSongForm.value.songDescription;
    const songName = this.createSongForm.value.songName;

    await this.firestoreService.createSong({
      albumName,
      artistName,
      songDescription,
      songName,
    });

    await loading.dismiss();
    this.router.navigate(['']);
  }
}
