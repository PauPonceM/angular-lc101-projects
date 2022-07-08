import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://helios-i.mashable.com/imagery/articles/02AuSa1kAloSp8Zu3Ds0ERe/hero-image.fill.size_1200x900.v1623374523.jpg';
  image2 = 'https://api.time.com/wp-content/uploads/2016/10/mulan.jpg?quality=85&w=1500';
  image3 = 'https://img.freepik.com/premium-vector/target-with-arrows-one-arrow-hit-center-target-business-challenge-goal-achievement_168129-755.jpg?w=2000';

  constructor() { }

  ngOnInit() {
  }

}