# cv-simon-dumas

CV digital de Simon Dumas, accessible sur [cv.wingfuel.fr](https://cv.wingfuel.fr).

## Stack

- React (Create React App)
- CSS custom — dark mode par défaut, light mode disponible
- Nginx (serve des fichiers statiques dans le conteneur)
- Caddy (reverse proxy + SSL Let's Encrypt automatique)
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

Caddy gère automatiquement le certificat SSL pour `cv.wingfuel.fr`.  
Les certificats sont persistés dans le volume Docker `caddy_data`.

## Assets

Placer dans `public/` :
- `avatar.JPG` — photo de profil
- `avion.PNG` — photo portrait (section Activités)
