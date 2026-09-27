# cv-simon-dumas

CV digital de Simon Dumas, accessible sur [cv.wingfuel.fr](https://cv.wingfuel.fr).

## Stack

- React (Create React App)
- CSS custom — dark mode par défaut, light mode disponible
- Nginx (serve des fichiers statiques dans le conteneur)
- Docker + Docker Compose

## Développement

```bash
npm install
npm start
# → http://localhost:3000
```

## Déploiement (VPS)

```bash
git pull
docker compose up -d --build
```

Le conteneur rejoint le réseau Docker externe `web` sans publier de port. Le TLS et
le certificat de `cv.wingfuel.fr` sont gérés par le Caddy commun du VPS WingFuel
(`/root/emplacement-code/proxy`), hors de ce dépôt.

## Assets

Placer dans `public/` :
- `avatar.JPG` — photo de profil
- `avion.PNG` — photo portrait (section Activités)
