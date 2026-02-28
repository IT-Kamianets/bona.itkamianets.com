import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

const ICONS = {
  address: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  phone:   'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
};

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  private lang = inject(LanguageService);
  t = this.lang.texts;

  currentYear = new Date().getFullYear();

  contactItems = computed(() => [
    {
      label: this.t().contacts.addressLabel,
      value: this.t().contacts.addressValue,
      href: 'https://www.google.com/maps/place/%D0%91%D0%9E%D0%9D%D0%90/@48.6756895,26.5731821,17z/data=!3m1!4b1!4m6!3m5!1s0x4733c7bd813f9e9d:0xcb061d8974fa3f3b!8m2!3d48.6756895!4d26.5731821!16s%2Fg%2F11yj6kvr05',
      icon: ICONS.address,
    },
    {
      label: this.t().contacts.phoneLabel,
      value: '+380 98 00 01 544',
      href: 'tel:+380980001544',
      icon: ICONS.phone,
    },
  ]);

  hours = computed(() => this.t().contacts.hours);

  footerLinks = computed(() => this.t().footer.links);
}
