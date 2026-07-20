# Artak Solutions Landing

Landing page de práctica/propuesta para Artak Solutions.

## Importante para Vercel

Esta versión incluye la carpeta `dist/` ya construida y Vercel está configurado para desplegarla directamente.

Esto evita el error de `npm install` en Vercel con Node 24:

```txt
npm error Exit handler never called!
```

## Configuración usada por Vercel

Archivo `vercel.json`:

```json
{
  "version": 2,
  "installCommand": "echo skip install",
  "buildCommand": "echo skip build",
  "outputDirectory": "dist"
}
```

## Desarrollo local opcional

Cuando tengas un entorno Node/npm estable, puedes instalar dependencias y reconstruir:

```bash
npm install
npm run build
```

Para este deploy actual no hace falta correr npm localmente.
