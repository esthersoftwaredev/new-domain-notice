import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
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
