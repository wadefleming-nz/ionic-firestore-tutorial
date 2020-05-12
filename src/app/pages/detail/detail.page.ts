import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  song$: Observable<Song>;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    const songId = this.route.snapshot.paramMap.get('id');
    this.song$ = this.firestoreService.getSong(songId).pipe(share());
  }
}
