import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(public firestore: AngularFirestore) {}

  async createSong(song: {
    albumName: string;
    artistName: string;
    songDescription: string;
    songName: string;
  }) {
    const id = this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({ id, ...song });
  }
}
