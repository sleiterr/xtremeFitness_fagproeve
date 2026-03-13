# Kontaktformular & API

## Kontaktformular (ContactForm)

Kontaktformularen findes i `src/components/Contact/ContactForm.jsx`.

Felter:

- Navn
- Telefon
- Email
- Emne
- Besked

Validering sker med Formik og Yup. Telefonfeltet accepterer nu både tal, +, mellemrum og forskellige formater.

## Ændring i message.model.js

**Placering:** `lib/db/models/message.model.js`

### Før ændring

```js
phone: { type: Number },
```

### Efter ændring

```js
// Ændret fra Number til String for at støtte telefonnumre med +, mellemrum og forskellige formater fra frontend-formularer
phone: { type: String },
```

**Hvorfor?**
Telefonnummer blev ikke sendt korrekt fra ContactForm til API, fordi brugere kan indtaste numre med +, mellemrum eller andre tegn. Type String sikrer kompatibilitet med alle formater.

## API Endpoint

POST `/message`

- Modtager: name, email, phone, subject, message
- Returnerer status og besked

---

Se [index.md](index.md) for projektoversigt.
Se [api.md](api.md) for flere endpoints.
