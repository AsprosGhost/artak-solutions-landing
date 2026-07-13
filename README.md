# Artak Solutions Landing

Landing page de prueba para Artak Solutions desarrollada con React + Vite.

## Requisitos recomendados

- Node.js 20 LTS
- npm 10.x

El proyecto fija Node 20 en `package.json` para que Vercel no use una versión demasiado nueva de Node/npm.

## Ejecutar localmente

```bash
npm install --no-audit --no-fund
npm run dev
```

Abrir:

```txt
http://localhost:5173/
```

## Probar build local

```bash
npm run build
```

Debe terminar con `✓ built`.

## Configuración de Vercel

El proyecto incluye `vercel.json` con:

```json
{
  "framework": "vite",
  "installCommand": "npm install --no-audit --no-fund",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

En Vercel no se necesitan variables de entorno para esta landing.

## Archivos que NO deben subirse

- `node_modules/`
- `dist/`
- `.vercel/`
- `.env`

Ya están incluidos en `.gitignore`.
