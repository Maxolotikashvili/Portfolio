import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowUp, faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
  navbar: string = 'navbar';
  navigationBox: string = 'navigation-box';
  navMode: boolean = false;
  contactMode: boolean = false;
  gmailMode: boolean = false;

  // Contact
  contactBox: string = 'contactbox';
  // Gmail
  gmailSpan: string = 'gmail';

  // Effects
  outline: string = 'outline';
  projectHover: string = 'project-hover';
  sliderHover: string = 'slider-hover';
  snakeHover: string = 'snake-hover';

  // Animation Variables
  smallboxMode: boolean = false;
  photoMode: boolean = false;
  projectImageMode: boolean = false;
  projectTextboxMode: boolean = false;
  textBoxSliderMode: boolean = false;
  sliderImageMode: boolean = false;
  snakeImageMode: boolean = false;
  snakeTextBoxMode: boolean = false;
  h3Mode: boolean = false;
  touchMode: boolean = false;
  ballGithubMode: boolean = false;
  ballLinkedinMode: boolean = false;
  ballGmailMode: boolean = false;

  ngOnInit(): void {
    // Gsap
    document.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop);

      if (scrollTop >= 3351) {
        if ((this.ballGithubMode, this.ballLinkedinMode, this.ballGithubMode)) {
          return;
        } else {
          this.startBallsAnimation();
          this.ballGithubMode = true;
          this.ballLinkedinMode = true;
          this.gmailMode = true;
        }
      } else if (scrollTop < 3351) {
        this.ballGithubMode = false;
        this.ballLinkedinMode = false;
        this.gmailMode = false;
      }

      if (scrollTop >= 3246) {
        if (this.touchMode) {
          return;
        } else {
          this.startTouchAnimation();
          this.touchMode = true;
        }
      } else if (scrollTop < 3246) {
        this.touchMode = false;
      }

      if (scrollTop >= 2924) {
        if (this.h3Mode) {
          return;
        } else {
          this.startH3Animation();
          this.h3Mode = true;
        }
      } else if (scrollTop < 2924) {
        this.h3Mode = false;
      }

      if (scrollTop >= 2356) {
        if ((this.snakeImageMode, this.snakeTextBoxMode)) {
          return;
        } else {
          this.startSnakeBoxAnimation();
          this.snakeImageMode = true;
          this.snakeTextBoxMode = true;
        }
      } else if (scrollTop < 2356) {
        this.snakeImageMode = false;
        this.snakeTextBoxMode = false;
      }

      if (scrollTop >= 1705) {
        if ((this.textBoxSliderMode, this.sliderImageMode)) {
          return;
        } else {
          this.startSliderBoxAnimation();
          this.textBoxSliderMode = true;
          this.sliderImageMode = true;
        }
      } else if (scrollTop < 1705) {
        this.textBoxSliderMode = false;
        this.sliderImageMode = false;
      }

      if (scrollTop >= 912) {
        if ((this.projectImageMode, this.projectTextboxMode)) {
          return;
        } else {
          this.startProjectBoxAnimation();
          this.projectImageMode = true;
          this.projectTextboxMode = true;
        }
      } else if (scrollTop < 912) {
        this.projectImageMode = false;
        this.projectTextboxMode = false;
      }

      if (scrollTop >= 194) {
        if ((this.smallboxMode, this.photoMode)) {
          return;
        } else {
          this.startSmallBoxAnimation();
          this.smallboxMode = true;
          this.photoMode = true;
        }
      } else if (scrollTop < 193) {
        this.smallboxMode = false;
        this.photoMode = false;
      };
      
    });
  }

  // Navigation Enable
  enableNavigation() {
    this.navMode = !this.navMode;
    if (this.navMode === true) {
      this.navigationBox = 'navigation-box-active';
    } else {
      this.navigationBox = 'navigation-box';
    }
  }

  // Enable Contactbox
  enableContactBox() {
    this.contactMode = !this.contactMode;
    if (this.contactMode === true) {
      this.contactBox = 'responsive-contactbox';
    } else {
      this.contactBox = 'contactbox';
    }
  }

  // Navigation Animation
  animateNavbar() {
    if (this.navbar === 'navbar') {
      this.navbar = 'navbaractive';
    } else {
      this.navbar = 'navbar';
    }
  }

  // Hover Effect For Photo
  changeOutline(mode: boolean) {
    if (mode === true) {
      this.outline = 'outline-active';
    } else {
      this.outline = 'outline';
    }
  }

  // Hover Effect For CyberHub
  changeHover(mode: boolean) {
    if (mode === true) {
      this.projectHover = 'project-hover-active';
    } else {
      this.projectHover = 'project-hover';
    }
  }

  // Hover Effect For Slider
  changeSlider(mode: boolean) {
    if (mode === true) {
      this.sliderHover = 'slider-hover-active';
    } else {
      this.sliderHover = 'slider-hover';
    }
  }

  // Hover Effect For Snake
  changeSnake(mode: boolean) {
    if (mode === true) {
      this.snakeHover = 'snake-hover-active';
    } else {
      this.snakeHover = 'snake-hover';
    }
  }

  showGmail() {
    this.gmailMode = !this.gmailMode;
    if (this.gmailMode === true) {
      this.gmailSpan = 'show-gmail';
    } else {
      this.gmailSpan = 'gmail';
    }
  }

  // Animations

  // Animate Smallbox
  startSmallBoxAnimation() {
    gsap.from(document.querySelector('.smallbox-about'), {
      ease: 'expo',
      duration: 1,
      y: 500,
    });

    gsap.from(document.querySelector('.smallbox-image'), {
      ease: 'expo',
      duration: 1,
      y: 500,
      delay: 0.1,
    });
  }

  startProjectBoxAnimation() {
    gsap.from(document.querySelector('.workedon-box'), {
      ease: 'expo',
      duration: 1,
      y: 500,
    });

    gsap.from(document.querySelector('.project-imagebox'), {
      ease: 'expo',
      duration: 1,
      y: 500,
    });

    gsap.from(document.querySelector('.project-textbox'), {
      ease: 'expo',
      duration: 1,
      y: 500,
      delay: 0.1,
    });
  }

  startSliderBoxAnimation() {
    gsap.from(document.querySelector('.textbox-slider'), {
      ease: 'expo',
      duration: 1,
      y: 500,
    });

    gsap.from(document.querySelector('.imagebox-slider'), {
      ease: 'expo',
      duration: 1,
      y: 500,
      delay: 0.1,
    });
  }

  startSnakeBoxAnimation() {
    gsap.from(document.querySelector('.imagebox-snake'), {
      ease: 'expo',
      duration: 1,
      y: 500,
    });

    gsap.from(document.querySelector('.textbox-snake'), {
      ease: 'expo',
      duration: 1,
      y: 500,
      delay: 0.1,
    });
  }

  startH3Animation() {
    gsap.from(document.querySelector('.more'), {
      ease: 'expo',
      duration: 1,
      y: 500,
    });
  }

  startTouchAnimation() {
    gsap.from(document.querySelector('.touch'), {
      ease: 'expo',
      duration: 1,
      y: 100,
    });
  }

  startBallsAnimation() {
    gsap.from(document.querySelector('.ball-github'), {
      ease: 'bounce',
      duration: 1.5,
      x: -70,
    });

    gsap.from(document.querySelector('.ball-linkedin'), {
      ease: 'bounce',
      duration: 1.5,
      y: -70
    });

    gsap.from(document.querySelector('.ball-gmail'), {
      ease: 'bounce',
      duration: 1.5,
      x: 70
    });
  };
};