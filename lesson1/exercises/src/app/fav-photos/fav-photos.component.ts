import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Gallery';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://petcostumecenter.com/wp-content/uploads/2020/05/Screen-Shot-2018-09-20-at-8.50.29-PM.png';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAiVh6yJqMf5sUXQIzAhA1eB21ylTDFKZytloDt8F4Ii-_NXsAO3BIXD3NShID_BSV5s&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}