import { Component, OnInit } from '@angular/core';
import { faTwitter, faGithub, faLinkedin, faDev, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  twitter = faTwitter;
  github = faGithub;
  linkedin = faLinkedin;
  dev = faDev;
  medium = faMedium;

  constructor() { }

  ngOnInit(): void {
  }

}
