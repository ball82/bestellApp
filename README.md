# bestellApp (ItaFood)

**[Live-Demo](https://www.bajo-dev.ch/sub/bestellapp/)**

Bestell-Webapp für einen fiktiven Lieferdienst ("ItaFood"): Speisekarte durchstöbern, Artikel in den Warenkorb legen und bestellen.

## Features

- Speisekarte mit Kategorien: Pizza, Pasta, Desserts und Getränke
- Warenkorb mit Mengenänderung und Entfernen einzelner Artikel
- Automatische Preisberechnung inkl. Liefergebühr (ab 25 CHF versandkostenfrei, sonst 5 CHF)
- Live-Anzeige der Artikelanzahl im Warenkorb
- Bestellabschluss
- Responsives Layout mit separatem Warenkorb-Modal für kleine Bildschirme

## Technologien

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Bootstrap 5

## Projektstruktur

```
bestellApp/
├── index.html
├── js/
│   ├── db.js          # Speisekarten-Daten (Pizza, Pasta, Desserts, Drinks)
│   ├── templates.js   # HTML-Templates
│   └── script.js      # Warenkorb- und Bestelllogik
├── styles/
│   ├── standart.css
│   ├── menu.css
│   ├── basket.css
│   └── assets.css
└── img/
```

## Lokaler Start

Repository klonen und `index.html` im Browser öffnen – oder über einen lokalen Webserver:

```
npx serve .
```

## Autor

Joannis Ballos – entwickelt als Frontend-Dev-Übung.
