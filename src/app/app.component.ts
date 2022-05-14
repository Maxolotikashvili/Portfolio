import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowUp, faC, faCopyright, faEnvelope, faLinesLeaning, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  // Fontawesome
  github: any = faGithub;
  gmail: any = faEnvelope;
  linkedin: any = faLinkedin;
  linkedinIn: any = faLinkedinIn;
  copyright: any = faCopyright;
  arrowUp: any = faArrowUp;
  arrowDown: any = faArrowDown;

  // NavBar
  navbar: string = "navbar";
  navigationBox: string = "navigation-box";
  navMode: boolean = false;
  contactMode: boolean = false;
  gmailMode: boolean = false;

  // Contact
  contactBox: string = "contactbox";
  // Gmail
  gmailSpan: string = "gmail";

  // Effects
  outline: string = "outline";
  projectHover: string = "project-hover";
  sliderHover: string = "slider-hover";
  wavesHover: string = "waves-hover";

  ngOnInit(): void {

  }

  // Navigation Enable
  enableNavigation() {
    this.navMode = !this.navMode;
    if (this.navMode === true) {
      this.navigationBox = "navigation-box-active";
    } else {
      this.navigationBox = "navigation-box";
    };
  };

  // Enable Contactbox
  enableContactBox() {
    this.contactMode = !this.contactMode;
    if (this.contactMode === true) {
      this.contactBox = "responsive-contactbox";
    } else { this.contactBox = "contactbox" };
  };

  // Navigation Animation
  animateNavbar() {
    if (this.navbar === "navbar") {
      this.navbar = "navbaractive";

    } else { this.navbar = "navbar" };
  };

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

  showGmail() {
    this.gmailMode = !this.gmailMode;
    if (this.gmailMode === true) {
      this.gmailSpan = "show-gmail";
    } else {
      this.gmailSpan = "gmail";
    };
  };
}
