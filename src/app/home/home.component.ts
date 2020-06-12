import { Component, OnInit } from '@angular/core';
import { faTwitter, faDev, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  twitter = faTwitter;
  github = faGithub;
  linkedin = faLinkedin;
  dev = faDev;
  medium = faMedium;

  constructor() { }

  ngOnInit(): void {
  }

}
