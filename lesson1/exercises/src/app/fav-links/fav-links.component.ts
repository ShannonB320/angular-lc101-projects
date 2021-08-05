import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
      'https://www.neopets.com/',
      'https://cprewritten.net/'
  ]
  image = 'https://media1.giphy.com/media/LmNwrBhejkK9EFP504/200w.webp?cid=ecf05e47iiu5xi5ycr3a1gdoc5g731l17pter0pj5f3g7erz&rid=200w.webp&ct=g';
  constructor() { }

  ngOnInit() {
  }

}
