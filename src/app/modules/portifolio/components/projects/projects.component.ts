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
      description: '',
      links: [
          {
            name: 'GitHub Pages',
            href: 'https://lucasscardoso.github.io/To-do-List/',
          }
      ]


    },
    {
      src: 'assets/img/projects/playflix.png',
      alt: "Projeto Lista de Tarefas",
      title: "Lista de Tarefas",
      width: '100px',
      height: '51px',
      description: '',
      links: [
          {
            name: 'GitHub Pages',
            href: 'https://lucasscardoso.github.io/To-do-List/',
          }
      ]


    },
    {
      src: 'assets/img/projects/pokedex.png',
      alt: "Projeto Lista de Tarefas",
      title: "Lista de Tarefas",
      width: '100px',
      height: '51px',
      description: '',
      links: [
          {
            name: 'GitHub Pages',
            href: 'https://lucasscardoso.github.io/To-do-List/',
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
