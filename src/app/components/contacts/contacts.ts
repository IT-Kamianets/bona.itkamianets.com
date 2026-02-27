import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  currentYear = new Date().getFullYear();

  contactItems = [
    {
      label: 'Адреса',
      value: 'Кам\'янець-Подільський<br>вул. Польський Ринок, 3/7',
      href: 'https://www.google.com/maps/place/%D0%91%D0%9E%D0%9D%D0%90/@48.6756895,26.5731821,17z/data=!3m1!4b1!4m6!3m5!1s0x4733c7bd813f9e9d:0xcb061d8974fa3f3b!8m2!3d48.6756895!4d26.5731821!16s%2Fg%2F11yj6kvr05',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      label: 'Телефон',
      value: '+380 98 00 01 544',
      href: 'tel:+380980001544',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    },
    {
      label: 'Email',
      value: 'info@bona.rest',
      href: 'mailto:info@bona.rest',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
  ];

  hours = [
    { days: 'Нд — Чт', time: '08:30 — 22:00' },
    { days: 'Пт, Сб',  time: '08:30 — 23:00' },
  ];

  footerLinks = [
    { href: '#about',    label: 'Про нас'  },
    { href: '#menu',     label: 'Меню'     },
    { href: '#gallery',  label: 'Галерея'  },
    { href: '#contacts', label: 'Контакти' },
  ];
}
