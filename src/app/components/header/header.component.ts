import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeSection = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about', 'projects', 'resume', 'contact'];

    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        const scrollY = window.scrollY + 150;

        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
