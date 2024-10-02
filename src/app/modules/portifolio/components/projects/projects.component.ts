import { Component, signal } from '@angular/core';

// interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

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


    }
])

}
