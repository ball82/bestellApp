# 🍕 ItaFood – Bestell-App

🍝 Online-Bestellung für ein italienisches Restaurant  
💻 HTML | CSS | JavaScript | Bootstrap  
📍 Schweiz  

🔗 **[Live Demo ansehen](https://www.bajo-dev.ch/sub/bestellapp/)**

---

## 🚀 Über das Projekt

ItaFood ist eine Bestell-App, mit der man Pizza, Pasta, Desserts und Getränke auswählen und über einen Warenkorb bestellen kann.  
Der Fokus liegt auf **sauberer Trennung von Daten, Logik und Templates** und einer Oberfläche, die auf Desktop und Mobilgeräten funktioniert.

Das Projekt kommt ohne Framework und ohne Build-Schritt aus.

---

## ✨ Features

- 🍕 Speisekarte mit Pizza, Pasta, Desserts und Drinks
- 🛒 Warenkorb mit Mengenänderung und Entfernen von Produkten
- 💰 Automatische Berechnung von Zwischensumme, Lieferkosten und Gesamtsumme
- 📱 Responsives Layout: Auf kleinen Bildschirmen öffnet sich der Warenkorb als Modal
- 🔔 Zähler am Warenkorb-Button für weitere hinzugefügte Artikel
- 🎉 Bestellbestätigung nach dem Absenden

---

## 🧠 Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript (Vanilla, ES6)
- Bootstrap 5.3 (per CDN)

**Konzepte**
- DOM Manipulation
- Template-Funktionen für die Darstellung
- Modulare Dateistruktur

---

## 📁 Projektstruktur

```text
bestellApp/
├── index.html
├── js/
│   ├── db.js          # Speisekarte und Warenkorb
│   ├── script.js      # Logik: Warenkorb, Berechnung, Bestellung
│   └── templates.js   # HTML-Templates
├── styles/            # CSS-Dateien
└── img/               # Logos, Icons, Bilder
```

---

## ⚙️ Lokal starten

```bash
git clone https://github.com/ball82/bestellApp.git
cd bestellApp
```

Danach `index.html` im Browser öffnen oder einen lokalen Server starten:

```bash
npx serve .
```

---

## 💶 Lieferkosten

| Bestellwert | Lieferkosten |
|-------------|--------------|
| bis 25.00 CHF | 5.00 CHF |
| über 25.00 CHF | kostenlos |

---

## 📌 Ideen für die Weiterentwicklung

🎯 Warenkorb im `localStorage` speichern  
🚀 Bestellformular mit Adresse und Zahlungsart  
🧠 Backend zum Speichern der Bestellungen  

---

## 📫 Kontakt

🌐 Portfolio: [www.bajo-dev.ch](https://www.bajo-dev.ch)  
💻 GitHub: [@ball82](https://github.com/ball82)
