import { Component } from '@angular/core';
import { FirestoreService } from '../services/data/firestore.service';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songs$: Observable<Song[]>;

  constructor(public firestoreService: FirestoreService) {
    this.songs$ = this.firestoreService.getAllSongs();
  }

  deleteSong(event: Event, id: string) {
    //event.stopImmediatePropagation();
  }
}
