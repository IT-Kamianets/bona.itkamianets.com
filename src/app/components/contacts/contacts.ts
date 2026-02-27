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
      value: 'м. Кам\'янець-Подільський<br>вул. Стара фортеця, 1',
      href: null,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      label: 'Телефон',
      value: '+38 (099) 999-99-99',
      href: 'tel:+380999999999',
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
    { days: 'Пн – Чт', time: '12:00 – 22:00' },
    { days: 'Пт – Нд', time: '12:00 – 00:00' },
  ];

  footerLinks = [
    { href: '#about',    label: 'Про нас'  },
    { href: '#menu',     label: 'Меню'     },
    { href: '#gallery',  label: 'Галерея'  },
    { href: '#contacts', label: 'Контакти' },
  ];
}
