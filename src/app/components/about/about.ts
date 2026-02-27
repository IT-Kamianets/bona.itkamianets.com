import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  facts = [
    { value: '2021',  label: 'Відкриття'         },
    { value: '283',   label: 'Страв у меню'       },
    { value: 'XVI',   label: 'Вік натхнення'      },
  ];
}
