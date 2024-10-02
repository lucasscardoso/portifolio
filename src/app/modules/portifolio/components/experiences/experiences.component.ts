import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Trainee Systems Engineer',
        p: 'Minsait | Nov 2023 - Present',
      },
      text: '<p> Desde Novembro de 2023, Atuo como Analista de Sistema na Minsait, Percorrendo uma Jornada em diversas linguagens e aprimorando minhas habilidades em Java,SQL , venho me destacando na área de front-end com o framework angular, utilizando Html5, Css3, Javascript, TypeScript, Angular 2+.</p>'
    }
  ])
}
