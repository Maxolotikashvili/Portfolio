import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  github = faGithub;
  gmail = faEnvelope;
  linkedin = faLinkedin;

  outline: string = "outline"

  ngOnInit(): void {
    
  }

  changeOutline(mode: boolean) {
    if (mode === true) {
      this.outline = "outline-active"
    } else {this.outline = "outline"}
  }
}
