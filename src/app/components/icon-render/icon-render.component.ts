import { Component, ViewContainerRef, ViewChild, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSpinner, IconPack } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-icon-render',
  templateUrl: 'icon-render.component.html'
})

export class IconRenderComponent implements OnInit {
  prefixArray = [fas, far, fab];
  totalProcesses = 0;
  loader = faSpinner;

  @ViewChild('host', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  ngOnInit(): void {
    this.loadIcon();
  }

  delayedLoadIcon() {
    this.totalProcesses++;
    setTimeout(() => {
      this.loadIcon();
      this.totalProcesses--;
    }, 3000);
  }

  loadIcon() {
    if (this.container.length) {
      this.container.detach();
    }

    const componentRef = this.container.createComponent(FaIconComponent);

    componentRef.instance.icon = this.getRandomIcon(this.prefixArray);
    componentRef.instance.size = '5x';
    componentRef.instance.render();
  }

  getRandomIcon(prefixArray: IconPack[]) {
    const randomPrefix: IconPack = prefixArray[Math.floor(Math.random() * prefixArray.length)];
    const fasKeysArray = Object.keys(randomPrefix);
    const randomKey = fasKeysArray[Math.floor(Math.random() * fasKeysArray.length)];
    return randomPrefix[randomKey];
  }
}
