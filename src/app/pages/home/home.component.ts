import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FustechSectionComponent } from "../../components/fustech-section/fustech-section.component";
import { SocialIconsComponent } from "../../components/social-icons/social-icons.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ProjectListComponent } from "../../components/project-list/project-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FustechSectionComponent, SocialIconsComponent, AboutMeComponent, ProjectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
