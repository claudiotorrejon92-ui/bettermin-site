# Animaciones del sitio (fuente)

Código de las dos animaciones de `index.html`, compiladas en `../assets/fx.js`:

- `src/flow3d.ts`: escena 3D de "Cómo funciona" (three.js). Rajo en curvas de nivel, sensores, tres flujos de datos, gemelo digital y señal con la desviación anticipada.
- `src/lib/ParticleObject/`: partículas del isotipo en el hero, de [Canvas UI](https://canvasui.dev) (licencia MIT + Commons Clause, ver `src/lib/LICENSE-canvas-ui.md`).

El sitio ya trae `assets/fx.js` compilado. Solo hay que recompilar si se cambia algo acá:

```bash
cd web-src
npm install
npm run build
```

Está separado del proyecto Vite/React de la raíz para no mezclar dependencias.
