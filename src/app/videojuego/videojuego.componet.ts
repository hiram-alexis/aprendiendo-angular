import { Component } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
	})

export class VideojuegoComponent {
	public titulo: string;
	public listado: string;
	contructor(){
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de los juegos más populares";

		console.log("Se ha cargafo el componente: videojuego.component.ts")
	}
}
/*
import { Component} from '@angular/core';

@Component({
	selector: 'videojuego',
	template: `
			<h2>Componente de Videojuegos </h2>
			<ul>
			<li>GTA</li>
			<li>Prince of Persia</li>
			<li>Tekken</li>
			<li>Mario</li>
			</ul>
	`
	})
export class VideojuegoComponent {
	
}
*/