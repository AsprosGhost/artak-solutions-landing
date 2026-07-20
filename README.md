# Artak Solutions Landing

Versión preparada para Vercel como sitio estático preconstruido.

## Deploy

Vercel no ejecuta `npm install` ni `npm run build`; publica directamente la carpeta `dist`.

```powershell
git add .
git commit -m "fix: publicar landing estatica preconstruida"
git push origin main
```

## Nota

La landing está renderizada como HTML estático para evitar el error de npm en Vercel. El menú móvil usa un pequeño script vanilla incluido en `dist/index.html`.
