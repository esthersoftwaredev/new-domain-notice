import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.handleRedirects();
  }

  private handleRedirects(): void {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // Redirect for any path on monacodelisa.com or monacodelisa.dev to the root domain
    if (hostname === 'monacodelisa.com' || hostname === 'monacodelisa.dev') {
      if (pathname !== '/') {
        window.location.replace('https://monacodelisa.dev');
      }
    }

    // Redirect for blog.monacodelisa.com to blog.esthersoftware.dev
    if (hostname === 'blog.monacodelisa.com') {
      const newPath = pathname || '/';
      window.location.replace(`https://blog.esthersoftware.dev${newPath}`);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const card = document.querySelector('.card') as HTMLElement;
    if (!card) return;

    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const rotateX = ((clientY / innerHeight) - 0.5) * -10; // Vertical tilt
    const rotateY = ((clientX / innerWidth) - 0.5) * 10;  // Horizontal tilt

    card.style.transform = `perspective(62.5rem) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
}
