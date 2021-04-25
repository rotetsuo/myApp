import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filmes-em-alta',
  templateUrl: './filmes-em-alta.page.html',
  styleUrls: ['./filmes-em-alta.page.scss'],
})
export class FilmesEmAltaPage implements OnInit {
  public page_name: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page_name = "Filmes em Alta";
  }

}
