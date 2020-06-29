import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
	})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
	public titulo: string;
	public listado: string;
	contructor(){
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de los juegos más populares";

		console.log("Se ha cargafo el componente: videojuego.component.ts")
	}
	ngOnInit(){
		console.log("OnInit ejecurado!");
	}
	ngDoCheck(){
		console.log("DoCheck ejercutado!");
	}
	ngOnDestoy(){
		console.log("OnDestroy ejercutado");
	}
	cambiarTitulo(){
		this.titulo ="Nuevo titulo del componente";
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