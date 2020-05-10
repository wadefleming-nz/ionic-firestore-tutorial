import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Song } from 'src/app/models/song.model';

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
    return await this.firestore.doc(`songList/${id}`).set({ id, ...song });
  }

  getAllSongs() {
    return this.firestore.collection<Song>(`songList`).valueChanges();
  }

  getSong(songId: string) {
    return this.firestore
      .collection<Song>('songList')
      .doc<Song>(songId)
      .valueChanges();
  }
}
