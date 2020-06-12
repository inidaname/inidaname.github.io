import { Component } from '@angular/core';
import { faTwitter, faGithub, faLinkedin, faDev, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  twitter = faTwitter;
  github = faGithub;
  linkedin = faLinkedin;
  dev = faDev;
  medium = faMedium;
}
