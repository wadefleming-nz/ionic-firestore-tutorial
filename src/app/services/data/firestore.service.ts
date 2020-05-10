import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor() {}

  createSong(song: {
    albumName: string;
    artistName: string;
    songDescription: string;
    songName: string;
  }) {}
}
