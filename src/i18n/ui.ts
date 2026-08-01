export type Lang = 'en' | 'tr';

export const DEFAULT_LANG: Lang = 'en';

/** Strings may contain inline HTML (<strong>, <a>). */
export const ui = {
  intro1: {
    en: 'A small studio crafting <strong>calm, careful software</strong>. We believe in privacy, open standards, and apps that respect your time and attention.',
    tr: '<strong>Sakin ve özenli yazılımlar</strong> üreten küçük bir stüdyo. Gizliliğe, açık standartlara ve zamanınıza, dikkatinize saygı duyan uygulamalara inanıyoruz.',
  },
  intro2: {
    en: 'We like quiet interfaces, warm tea, long autumn afternoons, and software that does one thing well.',
    tr: 'Sakin arayüzleri, sıcak çayı, uzun sonbahar öğleden sonralarını ve tek bir işi iyi yapan yazılımları severiz.',
  },
  intro3: {
    en: 'Our first apps are in progress.',
    tr: 'İlk uygulamalarımız üzerinde çalışıyoruz.',
  },
  appsHeading: { en: 'Apps', tr: 'Uygulamalar' },
  excerptaBlurb: {
    en: 'Turn what you read into vocabulary you keep — capture passages, learn the words worth learning, remember them with spaced repetition.',
    tr: 'Okuduklarınızı kalıcı bir kelime dağarcığına dönüştürün: metinleri kaydedin, öğrenmeye değer kelimeleri öğrenin, aralıklı tekrarla hatırlayın.',
  },
  excerptaMore: { en: 'Learn more →', tr: 'İncele →' },
  contactHeading: { en: 'Contact', tr: 'İletişim' },
  contactLine: {
    en: "We'd love to hear from you — write to <a href=\"mailto:hello@tegmora.com\">hello@tegmora.com</a>.",
    tr: 'Sizden haber almak isteriz — <a href="mailto:hello@tegmora.com">hello@tegmora.com</a> adresine yazın.',
  },
} as const;
