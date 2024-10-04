import { Component, inject, signal } from '@angular/core';

//material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// interface
import { IProjects } from '../../interface/IProjects.interface';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: "Projeto Lista de Tarefas",
      title: "Lista de Tarefas",
      width: '100px',
      height: '51px',
      description: 'O projeto "To-Do List" é uma aplicação web simples que permite aos usuários gerenciar tarefas. Você pode adicionar, marcar como concluída e remover tarefas da lista. A interface é minimalista e fácil de usar, proporcionando uma experiência intuitiva. O design é responsivo, o que garante uma boa usabilidade em diferentes dispositivos.',
      links: [
          {
            name: 'Visite em GitHub Pages',
            href: 'https://lucasscardoso.github.io/To-do-List/',
          }
      ]


    },
    {
      src: 'assets/img/projects/playflix.png',
      alt: "Projeto Lista de Tarefas",
      title: "PlayFlix",
      width: '100px',
      height: '51px',
      description: 'O projeto "PlayFlix" é uma plataforma de streaming fictícia , foi desenvolvido em parceria com outros colaboradores como um projeto de um curso. Onde Trabalhei nas paginas Home,perfil e Filmes/series/animes, tambem realizei trabalhos com css e javascript. Semelhante a serviços de vídeo sob demanda. O site oferece uma interface que exibe lançamentos de filmes e séries, com opções para login e cadastro de usuários. Ele simula uma experiência de navegação em catálogos de mídia digital. Além disso, apresenta informações de contato, como telefone e e-mail.',
      links: [
          {
            name: 'GitHub Pages',
            href: 'https://lucasscardoso.github.io/projeto_integrador/',
          }
      ]


    },
    {
      src: 'assets/img/projects/pokedex.png',
      alt: "Projeto Pokedex",
      title: "Pokedex",
      width: '100px',
      height: '51px',
      description: 'O projeto "PokedexAngular" é uma aplicação desenvolvida com Angular CLI para criar uma Pokédex interativa. Ele permite a navegação por diferentes componentes, oferecendo uma experiência de visualização e busca de informações sobre Pokémon. O projeto está estruturado para facilitar o desenvolvimento e a construção de novas funcionalidades, com suporte para testes unitários e testes end-to-end.',
      links: [
          {
            name: 'Visite em GitHub Pages',
            href: 'https://lucasscardoso.github.io/Pokedex/',
          }
      ]


    }
]);

public openDialog(data:IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
}

}
