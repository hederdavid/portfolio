import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  isHovered = false;

  public projects = signal([
    {
      id: 1,
      bg: "bg-orange-300",
      logo: "../../../assets/logo-bookmark.svg",
      description: "Uma interface limpa e simples para organizar seus sites favoritos.",
      isHovered: false,
      tecnologies: [
        "../../../assets/angular.svg",
        "../../../assets/spring.svg",
        "../../../assets/tailwind.svg"
      ]
    },
    {
      id: 1,
      bg: "bg-orange-300",
      logo: "../../../assets/logo-bookmark.svg",
      description: "Uma interface limpa e simples para organizar seus sites favoritos.",
      isHovered: false
    },
    {
      id: 1,
      bg: "bg-orange-300",
      logo: "../../../assets/logo-bookmark.svg",
      description: "Uma interface limpa e simples para organizar seus sites favoritos.",
      isHovered: false
    }
  ])

}
