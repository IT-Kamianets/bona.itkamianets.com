import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  private lang = inject(LanguageService);
  t = this.lang.texts;

  readonly images = [
    'https://kamianets.travel/storage/468/conversions/01K810K6XGCESQK0MNCEPYKZP4-large.webp',
    'https://kamianets.travel/storage/482/conversions/01K82WMVGJ9SZMMDBKA32R2MPP-large.webp',
    'https://kamianets.travel/storage/474/conversions/01K82WH7FBTTF0QTSWPFEWHW2R-large.webp',
    'https://kamianets.travel/storage/477/conversions/01K82WHCMSS3DWBNQDHHYVDQ33-large.webp',
    'https://kamianets.travel/storage/480/conversions/01K82WHJ3WPBTQGFVZ4CAAF9ZZ-large.webp',
    'https://kamianets.travel/storage/478/conversions/01K82WHEG1DV0AR3JH5AMG2WQF-large.webp',
  ];

  activeIndex = signal<number | null>(null);

  open(index: number) {
    this.activeIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.activeIndex.set(null);
    document.body.style.overflow = '';
  }

  prev() {
    const i = this.activeIndex();
    if (i !== null) this.activeIndex.set((i - 1 + this.images.length) % this.images.length);
  }

  next() {
    const i = this.activeIndex();
    if (i !== null) this.activeIndex.set((i + 1) % this.images.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.activeIndex() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
