import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  // Fontawesome
  github = faGithub;
  gmail = faEnvelope;
  linkedin = faLinkedin;
  linkedinIn = faLinkedinIn;
  copyright = faCopyright;

  // Effects
  outline: string = "outline";
  projectHover: string = "project-hover";
  sliderHover: string = "slider-hover";
  wavesHover: string  = "waves-hover"

  ngOnInit(): void {

  }

  // Hover Effect For Photo
  changeOutline(mode: boolean) {
    if (mode === true) {
      this.outline = "outline-active"
    } else { this.outline = "outline" };
  };

  // Hover Effect For CyberHub
  changeHover(mode: boolean) {
    if (mode === true) {
      this.projectHover = "project-hover-active";
    } else { this.projectHover = "project-hover" };
  };

  // Hover Effect For Slider
  changeSlider(mode: boolean) {
    if (mode === true) {
      this.sliderHover = "slider-hover-active"
    } else { this.sliderHover = "slider-hover" };
  };

  // Hover Effect For Waves
  changeWaves(mode: boolean) {
    if (mode === true) {
      this.wavesHover = "waves-hover-active";
    } else { this.wavesHover = "waves-hover" };
  };
}
