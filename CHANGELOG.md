# 📜 HISTORIAL DE CAMBIOS Y DESARROLLO (CHANGELOG)
### Proyecto: SANTA'S LAST CHRISTMAS (Capítulo 1 & 2: El Secreto de la Fábrica)

---

## 📅 Versión 2.1.0 — Corazón Animado con Vaciado Dinámico, Temblor de Pantalla y Tensión Oscura
*Fecha: 06 de Noviembre, 2026*

### 💖 Corazón de Vitalidad SVG con Animación Fluida
- Se sustituyó la barra tradicional por un **gran corazón esculpido en SVG** con brillo y degradado de rubí a sangre profunda (`#ff758f` ➜ `#d90429` ➜ `#720026`).
- **Vaciado Progresivo:** Al recibir daño, el corazón se vacía suavemente de arriba hacia abajo mediante máscara de recorte animada (`clip-height`).
- **Latido y Pánico Dinámico:**
  - Con salud normal late de forma rítmica y suave (`heart-pulse`).
  - Al bajar del 40% de salud entra en **modo pánico frenético** (`heart-panic`) palpitando aceleradamente con brillo rojo de emergencia.

### 📳 Temblor de Pantalla Proporcional al Daño (Screen Shake)
- Cuanta menos vida tiene Santa, **más tiembla el encuadre de la cámara** en tiempo real (`ctx.translate(shakeX, shakeY)`).
- El temblor escala dinámicamente desde una ligera vibración hasta un terremoto desorientador cuando la vida roza el peligro crítico.

### 🌑 Viñeta de Tensión y Oscurecimiento Periférico
- Se incorporó la capa `#tension-vignette` con sombras y destellos sangrientos que oscurecen los bordes de la pantalla.
- La intensidad del oscurecimiento aumenta en paralelo a la pérdida de salud, sumergiendo al jugador en una atmósfera claustrofóbica y de pura supervivencia.

---

## 📅 Versión 2.0.0 — ¡Inicio del ACTO 2! Animación de Golpeo, Balas Visibles, Plan Secreto y Barra de Vida
*Fecha: 06 de Noviembre, 2026*

### ⚔️ Animación de Ataque & Apuntado Realista
- **Animación Melee Dinámica:** El ataque con bastón/piruleta ahora genera un barrido arqueado agresivo de 2.2 radianes acompañado de una estela de chispas en semicírculo hacia donde Santa está mirando.
- **Pistola Orientada al Frente:** La pistola ya no apunta hacia el jugador; su cañón y boca de fuego se orientan exactamente hacia la dirección de movimiento y mirada de Santa (perfil, frente o arriba) con retroceso visual y destello de cañón (*muzzle flash*).
- **Proyectiles Visibles:** Los disparos ahora lanzan **balas doradas brillantes reales** con iluminación, estela de chispas y colisiones precisas con paredes y enemigos.

### 📜 La Caja del Plan Secreto & Lectura Animada
- Tras noquear a los elfos insurrectos en el Taller de Golosinas, aparece una **caja de madera con herrajes dorados y un pergamino brillante**.
- Al interactuar con la caja, se despliega una ventana animada de papiro antiguo con el texto del complot:
  > *"Los elfos se han rebelado... hay que 'educarlos' por la fuerza. Hemos escondido la verdadera arma de fuego en el Almacén de Cajas (Sala Oeste)..."*
- Al cerrar el plan, se activa la nueva misión: **Ir a la Sala Oeste a por la pistola**.

### 🩸 Despliegue del ACTO 2, Barra de Vida e Inventario de Armas
- **Barra de Vitalidad de Santa:** Se añadió una barra de salud en el HUD superior (`❤️ VITALIDAD DE SANTA`) que responde al daño en combate.
- **Selector de Armas en el HUD:** Muestra las armas desbloqueadas en ranuras (`[1] 🍭 MELEE`, `[2] 🔫 PISTOLA`) con soporte para alternar con teclas numéricas `[1]` y `[2]` o haciendo clic.
- **Transición al ACTO 2:** Al incautar la pistola en el Almacén Oeste, se desata el ACTO 2 con atmósfera de terror, música oscura y patrullas de elfos hostiles en todas las salas a las que Santa debe enfrentarse y purificar.

---

## 📅 Versión 1.9.0 — Corrección de Puerta en Sala Médica & Remasterización de Elementos 3D
*Fecha: 05 de Noviembre, 2026*

### 🚪 Corrección de la Puerta y Fuga en Sala del Doctor
- Se eliminaron las falsas puertas laterales inexistentes en el *Centro de Reacondicionamiento* (`1,0`), dejando como único acceso real y coherente la **puerta sur** que conecta directamente con la Sala Central.
- Ambos elfos malignos huyen en tromba hacia el sur a través de la puerta principal para distribuirse en el taller central y el almacén oeste.
- Santa ya no queda bloqueado intentando salir por una puerta que no conducía a ninguna sala de la cuadrícula.

### 🎨 Remasterización Visual de Elementos de Escenario
- **Cápsulas de Reacondicionamiento 3D:**
  - Cristal cian translúcido con gradiente de fluido curativo.
  - Generación de burbujas dinámicas ascendentes en tiempo real.
  - Indicador LED de estado (verde = disponible, rojo neón = ocupada).
  - Los elfos ingresados se muestran flotando dormidos en sedación con partículas de sueño (`💤`).
  - Cartel interactivo flotante con diseño estilizado: `👉 PULSA [E] INGRESAR`.
- **Mesas de Trabajo Detalladas:**
  - Mesas de peluches con costuras, hilos y ositos (`🧸🧵`).
  - Mesas de trenes con pinturas y modelos (`🚂🎨`).
  - Mesas médicas con microscopios y matraces químicos (`🔬🧪`).
  - Bordes biselados con profundidad 3D y sombras volumétricas.
- **Modelo del Dr. Valeriano en 2.5D:**
  - Rediseñado desde cero: bata blanca médica estilizada, estetoscopio azul en el pecho, gorro quirúrgico con cruz blanca y mascarilla sanitaria.

---

## 📅 Versión 1.8.0 — Corrección de Fuga de Elfos, Mirada de Santa, Revisión de 3 Regalos y Entrada al Motín
*Fecha: 05 de Noviembre, 2026*

### 🎁 Revisión Estricta de los 3 Regalos
- Ahora es obligatorio revisar **los 3 regalos** en la Sala Central para que Copito entregue la **Llave Dorada**.
- El contador en el HUD muestra el progreso exacto: `REGALOS: X / 3`.
- Hasta que no se revisan los 3 regalos no se desbloquea la puerta norte.

### 🏃 Fuga Dinámica de los Elfos (Sin Teletransporte)
- Los elfos malignos en el Centro de Reacondicionamiento ya no se desvanecen ni teletransportan:
  - Al grito de Santa, **Bribón** corre en tiempo real hacia la puerta sur (hacia el Taller Central).
  - **Trasto** corre hacia la puerta oeste (hacia el Almacén).
  - Ambos cruzan las puertas corriendo con animación antes de posicionarse en sus respectivas salas.

### 🎅 Mirada y Dirección Dinámica de Santa
- Santa ahora **gira su mirada y rostro hacia donde camina**:
  - Al caminar a la **izquierda/derecha**: su rostro, ojos, nariz y barba se posicionan de perfil, con volteo horizontal natural (`scale(-1, 1)`).
  - Al caminar hacia **arriba**: se ve de espaldas, mostrando la capucha y el pelo blanco trasero.
  - Al caminar hacia **abajo**: vista frontal completa con ojos y barba al frente.

### 🍬 Desbloqueo Fluido del Taller de Golosinas (Sin Bloqueos en Puerta)
- Se corrigió la colisión y transición de puertas (`transitionRoom`), ampliando el umbral a 140px y evitando que Santa quede atascado en el marco de la puerta este.
- Se garantiza el cambio inmediato a la fase `candy_revolt` tan pronto como Santa cruza al Taller de Golosinas.

---

## 📅 Versión 1.7.0 — Secuencia Original Preservada, Santa Frontal, Reacondicionamiento con [E]
*Fecha: 05 de Noviembre, 2026*

### 🔄 Restauración Fiel de la Secuencia Narrativa
1. **Inicio en Taller Central (1,1):**
   - Santa inspecciona los 3 regalos junto a *Pimpollo*, *Cascabel* y *Copito*.
   - El tercer regalo otorga la **Llave Dorada** para abrir la puerta norte con candado.
2. **Apertura de Puerta Norte & Confrontación:**
   - Al traspasar la puerta norte, Santa descubre a los elfos malignos en la sala norte liándola:
     > *"¡¿Pero qué desorden es este en el centro?! **¡QUIETOS AHÍ, DUENDECILLOS!**"*
   - Los elfos malignos se asustan y huyen disparados a esconderse por el resto de salas (taller central y almacén oeste).
3. **Caza y Captura de Elfos:**
   - Santa debe perseguir y alcanzar a los 3 elfos prófugos por las salas para atraparlos.
4. **Entrega al Doctor con la tecla `[E]`:**
   - Santa regresa al **Centro de Reacondicionamiento de Elfos** con los 3 prisioneros.
   - En las cápsulas cilíndricas aparece el aviso interactivo: **`PULSA [E] DEJAR ELFO`**.
   - Tras depositarlos en las cápsulas, el **Dr. Valeriano** dice su diálogo inquietante: *"Perfecto, Santa. Los pondré de inmediato bajo 'tratamiento profundo' en estas cabinas... ji, ji, ji."*
5. **Alerta del Ayudante & Motín en el Taller de Golosinas:**
   - Al salir al taller central, un elfo ayudante llega corriendo desesperado avisando del motín en el *Taller de Golosinas*.
   - Santa entra a la sala este, los elfos se rebelan contra él (*"¡Consigue un arma!"*) y se desbloquean las golosinas melee.
   - Se golpea a los elfos amotinados dejándolos noqueados en el suelo mareados (**sin sangre**).
6. **Hallazgo de la Pistola y la Muerte Gore:**
   - Aparece la pistola de metal en el suelo y el líder rebelde.
   - Al disparar: **destrucción del cuerpo en mil pedazos**, 90 partículas de sangre en 360°, charcos permanentes y sonido brutal de crujido óseo (*gore crunch*).

### 🎅 Santa Claus en Vista Frontal (Front View 2.5D)
- Rediseñado completamente el sprite y volumen 2.5D de Santa Claus para que se vea **de frente**:
  - Gorro rojo con borla caída hacia la derecha y ribete de pelo blanco frontal.
  - Ojos bondadosos con cejas blancas pobladas y nariz sonrosada entrañable.
  - Gran barba blanca esponjosa cayendo sobre el pecho.
  - Cinturón negro frontal con hebilla dorada y botas vistas de frente que dan pasos al caminar.
  - Empuñadura lateral derecha del arma en mano (bastón, piruleta o pistola).

### 🏥 Corrección Visual en el Centro de Reacondicionamiento
- El **Dr. Valeriano** ya **NO queda tapado por la mesa**:
  - Las mesas de fórmulas y archivos se han colocado en los laterales de la sala.
  - El doctor permanece totalmente visible y despejado en el centro entre ambas cápsulas de tratamiento.

---

## 📅 Versión 1.6.0 — Centro de Reacondicionamiento, Taller de Golosinas y la Primera Muerte Gore
- Voces siniestras de elfo, sala de golosinas decorada, armas dulces pacifistas y detonación gore con pistola.
