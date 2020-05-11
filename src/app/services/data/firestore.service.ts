import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Song } from 'src/app/models/song.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  songListPath = 'songList';
  songCollection: AngularFirestoreCollection<Song>;

  constructor(public firestore: AngularFirestore) {
    this.songCollection = this.firestore.collection<Song>(this.songListPath);
  }

  async createSong(song: {
    albumName: string;
    artistName: string;
    songDescription: string;
    songName: string;
  }) {
    const id = this.firestore.createId();
    return await this.songCollection.doc(id).set({ id, ...song });
  }

  getAllSongs() {
    return this.songCollection.valueChanges();
  }

  getSong(id: string) {
    return this.songCollection.doc<Song>(id).valueChanges();
  }

  async deleteSong(id: string) {
    await this.songCollection.doc(id).delete();
  }
}
