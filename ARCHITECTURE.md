# 🚀 ESTRUCTURA Y PLAN DE MIGRACIÓN: ARQUITECTURA MODULAR WEB
### Stack: TypeScript / ES Modules + Phaser / PixiJS + Vite Architecture

Este documento detalla la estructura limpia, escalable y desacoplada para evolucionar **SANTA'S LAST CHRISTMAS** a un estándar de producción web.

---

## 🏗️ Árbol de Carpetas Recomendado

```text
SANTA CROSS/
├── index.html                 # Punto de entrada HTML5 y Canvas de montaje
├── package.json               # Dependencias (Vite, Phaser / PixiJS, Howler, TypeScript)
├── tsconfig.json              # Configuración de compilación TypeScript estricta
├── vite.config.ts             # Configuración del bundler Vite
├── README.md                  # Manual y controles del juego
├── CHANGELOG.md               # Historial continuo de iteraciones
└── src/
    ├── main.ts                # Inicialización del juego y configuración del motor
    ├── constants.ts           # Configuración global (resolución, teclas, capas de colisión)
    ├── assets/                # Assets gráficos, fuentes y audio
    │   ├── sprites/           # Hojas de sprites (Santa, Elfos, Armas)
    │   ├── tilesets/          # Tiles del taller, línea de montaje, fábrica
    │   └── audio/             # Stems musicales por capas y efectos de sonido
    ├── core/                  # Subsistemas centrales
    │   ├── CameraManager.ts   # Screen shake, seguimiento y lerp predictivo
    │   ├── InputManager.ts    # Mapeo de teclado (WASD, R, M) y puntero 360°
    │   ├── SoundSystem.ts     # Audio procedural / Howler con stems adaptativos
    │   └── EventBus.ts        # Sistema de eventos desacoplado (pub/sub)
    ├── entities/              # Clases y componentes de entidades
    │   ├── Actor.ts           # Clase base con salud, posición y render
    │   ├── Player.ts          # Santa Claus (movimiento, armas, animación)
    │   ├── Enemy.ts           # Elfo base (IA de patrulla, detección LoS, ataque)
    │   └── Bullet.ts          # Proyectil con velocidad, daño y rebote/penetración
    ├── combat/                # Lógica del arsenal y combos
    │   ├── WeaponsData.ts     # Configuración numérica y tipos de armas
    │   ├── Weapon.ts          # Comportamiento de disparo / golpe melee
    │   └── ComboTracker.ts    # Multiplicador decreciente estilo Hotline Miami
    ├── map/                   # Gestión de escenarios
    │   ├── LevelBuilder.ts    # Generador/cargador de paredes y muebles
    │   └── DecalSystem.ts     # Canvas de sangre permanente optimizado
    └── scenes/                # Escenas del juego (si se usa Phaser) o Stages (PixiJS)
        ├── BootScene.ts       # Carga de recursos y preparación
        ├── MainMenuScene.ts   # Pantalla de inicio y selector
        ├── GameScene.ts       # Loop principal de combate cenital
        └── GameOverScene.ts   # Reintentos instantáneos (Hotline restart)
```

---

## 📦 Configuración `package.json`

```json
{
  "name": "santas-last-christmas",
  "version": "1.2.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "phaser": "^3.80.1",
    "howler": "^2.2.4"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "vite": "^5.2.11"
  }
}
```

---

## ⚙️ Configuración `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "moduleResolution": "Node",
    "strict": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

## 🛠️ Configuración `vite.config.ts`

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ['phaser']
        }
      }
    }
  }
});
```

---

## 🎯 Ventajas de esta Arquitectura

1. **Desacoplamiento Total:**
   - La IA de los elfos (`Enemy.ts`) no conoce los detalles internos del renderizador de Santa; interactúan mediante eventos y componentes de estado.
2. **Sistema de Sangre Persistente de Alto Rendimiento (`DecalSystem`):**
   - Utiliza una textura dinámica (RenderTexture) donde cada mancha se imprime una sola vez en lugar de crear sprites vivos, garantizando **60-144 FPS estables** incluso con más de 10.000 manchas de sangre en el suelo.
3. **Audio Adaptativo en Stems Sincronizados:**
   - La pista festiva y la pista de sintetizador oscuro corren en bucle sincronizadas al mismo milisegundo; un simple ajuste del volumen de cada pista (`crossfade`) genera la transición de inocencia a terror durante la acción sin cortes.
4. **Portabilidad Inmediata:**
   - Puede empaquetarse con **Electron** o **Tauri** para crear un ejecutable nativo de escritorio para **Steam** sin cambiar una sola línea de código del juego.
