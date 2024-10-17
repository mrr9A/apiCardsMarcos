import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
/*   kids: any[] = [];  // Almacena el array de Pokémon

  constructor(private services: ApiService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.services.getPokemon().subscribe({
      next: (data: any) => {
        // Procesamos los datos y extraemos el ID de la URL
        this.kids = data.results.map((pokemon: any) => {
          const id = pokemon.url.split('/').filter(Boolean).pop(); // Extrae el ID del Pokémon
          return { ...pokemon, id };  // Añadimos el ID al objeto de cada Pokémon
        });
        console.log(this.kids);  // Verifica que se obtengan los datos correctamente
      },
      error: (error: any) => {
        console.error('Error obteniendo datos de la API:', error);
      }
    });
  } */
    kids: any[] = []; // Almacena el array de Pokémon
    visiblePokemons: number = 4; // Cantidad de Pokémon visibles inicialmente

    constructor(private services: ApiService) {}

    ngOnInit(): void {
      this.getUser();
    }

    getUser() {
      this.services.getPokemon().subscribe({
        next: (data: any) => {
          this.kids = data.results.map((pokemon: any) => {
            const id = pokemon.url.split('/').filter(Boolean).pop(); // Extrae el ID del Pokémon
            return { ...pokemon, id }; // Añadimos el ID al objeto de cada Pokémon
          });
        },
        error: (error: any) => {
          console.error('Error obteniendo datos de la API:', error);
        }
      });
    }

    showMore() {
      this.visiblePokemons += 4; // Incrementa el número de Pokémon visibles en 4
    }
}
