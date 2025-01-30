import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  listPokemones: any = [];
  selectedPokemon: any = null;

  constructor(private pokeservice: PokeapiService) {}

  ngOnInit(){
    this.pokeservice.getListPokemones().subscribe((data) => {
      this.listPokemones = data.results;
      console.log(data.results);
    });
  }

  handleDetail(url: string) {
    if (this.selectedPokemon?.url === url) {
      this.selectedPokemon = null;
    } else {
      this.pokeservice.getDetailPokemon(url).subscribe((data) => {
        this.selectedPokemon = { ...data, url };
        console.log(data);
      });
    }
  }
}
