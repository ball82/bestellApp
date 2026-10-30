<div align="center">

<img src="img/Logo/Logo.png" alt="ItaFood Logo" width="160" />

# ItaFood – Bestell-App

Ein responsiver Online-Bestellservice für ein italienisches Restaurant, gebaut mit Vanilla JavaScript und Bootstrap.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)

</div>

---

## Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Funktionen](#funktionen)
- [Tech-Stack](#tech-stack)
- [Projektstruktur](#projektstruktur)
- [Lokal starten](#lokal-starten)
- [Preise und Lieferkosten](#preise-und-lieferkosten)
- [Mögliche Erweiterungen](#mögliche-erweiterungen)
- [Autor](#autor)

## Über das Projekt

ItaFood ist eine Single-Page-Anwendung, mit der Gäste Pizza, Pasta, Desserts und Getränke auswählen und in einem Warenkorb bestellen können. Die Speisekarte wird aus einer Datenquelle gerendert, der Warenkorb berechnet Zwischensumme, Lieferkosten und Gesamtsumme automatisch.

Das Projekt kommt ohne Build-Schritt und ohne Framework aus. Der Fokus liegt auf sauberer Trennung von Daten, Logik und Templates sowie auf einer Oberfläche, die auf Desktop und Mobilgeräten funktioniert.

## Funktionen

- **Speisekarte mit vier Kategorien:** Pizza, Pasta, Desserts und Getränke, mit Sprungmarken im Menü
- **Warenkorb:** Produkte per Klick hinzufügen, Menge erhöhen oder verringern, Positionen entfernen
- **Automatische Berechnung:** Zwischensumme, Lieferkosten und Gesamtsumme in CHF
- **Responsives Layout:** Auf dem Desktop ist der Warenkorb dauerhaft sichtbar, auf kleinen Bildschirmen (bis 768 px) öffnet er sich als Modal
- **Hinweis auf neue Artikel:** Ein Zähler am Warenkorb-Button zeigt weitere hinzugefügte Produkte
- **Bestellbestätigung:** Nach dem Absenden wird der Warenkorb geleert und eine Bestätigung angezeigt

## Tech-Stack

| Bereich | Technologie |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3, Bootstrap 5.3 (per CDN) |
| Logik | Vanilla JavaScript (ES6) |
| Daten | Lokale JavaScript-Datenstruktur (`js/db.js`) |

## Projektstruktur

```text
bestellApp/
├── index.html            # Seitenstruktur und Warenkorb-Modal
├── js/
│   ├── db.js             # Speisekarte und Warenkorb-Status
│   ├── script.js         # Anwendungslogik (Warenkorb, Berechnung, Bestellung)
│   └── templates.js      # HTML-Templates für Karten, Warenkorb und Bestätigung
├── styles/
│   ├── standart.css      # Grundlayout
│   ├── menu.css          # Speisekarte
│   ├── basket.css        # Warenkorb
│   └── assets.css        # Allgemeine Elemente
└── img/                  # Logos, Favicons, Icons und Bilder
```

## Lokal starten

Es sind keine Abhängigkeiten oder Build-Schritte nötig.

```bash
git clone https://github.com/ball82/bestellApp.git
cd bestellApp
```

Danach `index.html` im Browser öffnen oder einen lokalen Webserver verwenden, zum Beispiel:

```bash
npx serve .
```

Bootstrap wird über ein CDN geladen, daher ist beim ersten Start eine Internetverbindung erforderlich.

## Preise und Lieferkosten

| Regel | Wert |
| --- | --- |
| Währung | CHF |
| Lieferkosten bei Bestellungen bis 25.00 CHF | 5.00 CHF |
| Lieferkosten bei Bestellungen über 25.00 CHF | kostenlos |

## Mögliche Erweiterungen

- Warenkorb im `localStorage` speichern, damit er nach dem Neuladen erhalten bleibt
- Bestellformular mit Adresse und Zahlungsart
- Anbindung an ein Backend zum Speichern von Bestellungen
- Impressum und Datenschutzerklärung als eigene Seiten

## Autor

**Joannis Ballos**
Portfolio: [bajo-dev.ch](https://www.bajo-dev.ch) · GitHub: [@ball82](https://github.com/ball82)
