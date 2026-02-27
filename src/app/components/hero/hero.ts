import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  heroStats = [
    { value: '357',   label: 'Позицій у меню' },
    { value: '5',     label: 'Розділів'        },
    { value: 'XVI',   label: 'Вік легенди'     },
  ];

  marquee = [
    { icon: '✦', text: 'Їж, подільська корона з голови не впаде' },
    { icon: '❧', text: 'Якщо пити, то вино, якщо в ресторан — до королеви' },
    { icon: '◆', text: 'Посмакувало тобі — приведи друзів' },
    { icon: '✦', text: 'Ми є тим що ми їмо, дозволь собі бути смачненьким' },
    { icon: '✦', text: 'Їж, подільська корона з голови не впаде' },
    { icon: '❧', text: 'Якщо пити, то вино, якщо в ресторан — до королеви' },
    { icon: '◆', text: 'Посмакувало тобі — приведи друзів' },
    { icon: '✦', text: 'Ми є тим що ми їмо, дозволь собі бути смачненьким' },
  ];
}
