    // ============================================
    // BARAJAS
    // ============================================
    // Helper: URL de Iconify (CDN gratis, SVG vectorial, carga instantánea)
const ico = (set, name) => `https://api.iconify.design/${set}/${name}.svg?color=%23${name.includes('color') ? '' : '1f2937'}`;
// Helper para iconos a color (Twemoji = emojis estilo Twitter en SVG)
const tw = (code) => `https://api.iconify.design/twemoji/${code}.svg`;

const decks = {
  observa: { 
    title: "Veo, Pienso, Me Pregunto", emoji: "👁️", deckName: "Α · Observación",
    greek: "Α", theme: "alpha",
    icon: "fa-solid fa-eye",
    timing: "⏱️ 30-60 segundos · 1 estudiante",
    cards: [
      { img: tw("1f333"), text: "Mira por la ventana 30 segundos. Nombra 3 seres vivos y 1 elemento no vivo." },
      { img: tw("270b"), text: "Observa tu mano. ¿Qué evidencia ves de que eres un ser vivo? Da 3 pruebas." },
      { img: tw("1f4a7"), text: "Describe la última gota de agua que tocaste hoy: temperatura, textura, contexto." },
      { img: tw("1f443"), text: "Cierra los ojos 10 segundos. Identifica 3 olores en el salón sin usar la palabra 'huele'." },
      { img: tw("1f442"), text: "Silencio total 15 segundos. Cuenta cuántos sonidos distintos puedes detectar." },
      { img: tw("1fa9f"), text: "¿Qué color predomina afuera ahora mismo? ¿Qué te dice eso del clima de hoy?" },
      { img: tw("1f45f"), text: "Mira tus zapatos. ¿Qué evidencia hay de fricción y desgaste? ¿Dónde más?" },
      { img: tw("1f4a1"), text: "Observa la luz del salón. ¿De dónde viene? ¿Es natural o artificial? ¿Cómo lo sabes?" },
      { img: tw("1f32c"), text: "¿Hay viento o aire moviéndose ahora? ¿Cómo puedes comprobarlo sin tocarlo?" },
      { img: tw("1f4f1"), text: "Mira tu celular o reloj. Lista 3 fenómenos físicos ocurriendo en este momento dentro." },
      { img: tw("1f9f4"), text: "Observa un líquido cercano. ¿Qué evidencia hay de que es una mezcla?" },
      { img: tw("1f41c"), text: "¿Has visto algún animal/insecto en el salón hoy? Si no, ¿por qué crees que no?" },
      { img: tw("1f321"), text: "Toca tu mejilla y luego la mesa. ¿Por qué se sienten distintas si están en el mismo cuarto?" },
      { img: tw("1f32b"), text: "¿Hay polvo en el aire? Mira un rayo de luz. ¿Qué te dice de la calidad del aire?" },
      { img: tw("1f343"), text: "Observa una planta cercana. ¿Hacia dónde apuntan sus hojas? ¿Por qué?" },
      { img: tw("1f440"), text: "Parpadea conscientemente 5 veces. ¿Para qué sirve algo tan automático?" },
      { img: tw("1f9b7"), text: "Pasa la lengua por tus dientes. ¿Cuántos tipos identificas? ¿Qué función tiene cada uno?" },
      { img: tw("1fa78"), text: "Siente tu pulso. ¿Cuántos latidos en 15 seg? Multiplica por 4. ¿Es normal?" },
      { img: tw("1f311"), text: "¿Dónde está el sol ahora respecto al salón? ¿Cómo lo sabes sin verlo?" },
      { img: tw("1faa8"), text: "Toca un objeto de piedra/cerámica. ¿Por qué se siente más frío que la madera?" },
      { img: tw("1f9ca"), text: "Imagina un cubo de hielo en tu mano. Describe los 3 cambios que verías en 5 minutos." },
      { img: tw("1f4cf"), text: "Estima sin medir: largo de tu mesa en cm. Luego mídelo. ¿Qué tan cerca estuviste?" },
      { img: tw("1f308"), text: "Busca 3 colores diferentes en el salón. ¿Qué tienen en común a nivel de luz?" },
      { img: tw("1fa9e"), text: "Si ves tu reflejo en algo, ¿está al derecho o invertido?" },
      { img: tw("1f964"), text: "Observa una bebida fría. ¿Por qué 'suda' por fuera el vaso? Da tu hipótesis." },
      { img: tw("1f9b4"), text: "Mueve tu dedo índice. Lista 3 cosas que tuvieron que ocurrir dentro de ti." },
      { img: tw("1f300"), text: "Sopla suavemente sobre tu mano. ¿Por qué se siente fría si tu aliento está caliente?" },
      { img: tw("1f4da"), text: "Toma un libro. ¿Cuántos materiales distintos puedes identificar en él?" },
      { img: tw("23f3"), text: "Mira el reloj 10 segundos. ¿Cómo se siente el tiempo cuando lo observas?" },
      { img: tw("1f30d"), text: "Estás girando ahora a ~1600 km/h con la Tierra. ¿Por qué no lo sientes?" }
    ]
  },

  hipotesis: {
    title: "¿Qué pasaría si…?", emoji: "🤔", deckName: "Σ · Hipótesis",
    greek: "Σ", theme: "sigma",
    icon: "fa-solid fa-flask",
    timing: "⏱️ 60 segundos · 2-3 estudiantes en cadena",
    cards: [
      { img: tw("1f30d"), text: "¿Qué pasaría si la Tierra dejara de girar de repente?" },
      { img: tw("1f331"), text: "¿Y si los humanos hiciéramos fotosíntesis? ¿Cómo sería tu día?" },
      { img: tw("1f319"), text: "¿Qué pasaría si la Luna desapareciera mañana?" },
      { img: tw("1f41c"), text: "¿Y si todos los insectos del planeta se extinguieran esta noche?" },
      { img: tw("1f4a7"), text: "¿Qué pasaría si el agua hirviera a 20°C en vez de 100°C?" },
      { img: tw("1f9f2"), text: "¿Y si la gravedad se redujera a la mitad por una semana?" },
      { img: tw("2600"), text: "¿Qué pasaría si el Sol se volviera azul?" },
      { img: tw("1fa78"), text: "¿Y si nuestra sangre fuera verde en lugar de roja?" },
      { img: tw("2744"), text: "¿Qué pasaría si nunca volviera a llover en tu ciudad?" },
      { img: tw("1f996"), text: "¿Y si los dinosaurios no se hubieran extinguido?" },
      { img: tw("1f9ec"), text: "¿Qué pasaría si pudiéramos regenerar miembros como las salamandras?" },
      { img: tw("1f30a"), text: "¿Y si el océano fuera de agua dulce en vez de salada?" },
      { img: tw("1f422"), text: "¿Qué pasaría si los humanos viviéramos 500 años?" },
      { img: tw("1f32a"), text: "¿Y si pudiéramos controlar el clima con un botón?" },
      { img: tw("1f9a0"), text: "¿Qué pasaría si todas las bacterias murieran de repente?" },
      { img: tw("1f525"), text: "¿Y si el oxígeno del aire fuera el doble del actual?" },
      { img: tw("1f441"), text: "¿Qué pasaría si pudiéramos ver luz infrarroja como las serpientes?" },
      { img: tw("1f41d"), text: "¿Y si las abejas dejaran de polinizar mañana?" },
      { img: tw("1f333"), text: "¿Qué pasaría si los árboles caminaran 1 metro al día?" },
      { img: tw("1f480"), text: "¿Y si las células nunca dejaran de dividirse en tu cuerpo?" },
      { img: tw("1fa90"), text: "¿Qué pasaría si Júpiter no existiera en el sistema solar?" },
      { img: tw("1f9e0"), text: "¿Y si pudiéramos descargar conocimiento al cerebro como en una USB?" },
      { img: tw("1f43e"), text: "¿Qué pasaría si los animales pudieran hablar nuestro idioma?" },
      { img: tw("26a1"), text: "¿Y si todos los seres vivos generaran electricidad como las anguilas?" },
      { img: tw("1f321"), text: "¿Qué pasaría si la temperatura promedio subiera 5°C en un año?" },
      { img: tw("1f4a8"), text: "¿Y si el aire pesara el doble de lo que pesa?" },
      { img: tw("1f9b7"), text: "¿Qué pasaría si los dientes se regeneraran como el cabello?" },
      { img: tw("1f310"), text: "¿Y si la atmósfera fuera transparente al sonido (todo se oyera todo)?" },
      { img: tw("1f9ca"), text: "¿Qué pasaría si los polos se derritieran en 1 año?" },
      { img: tw("1f916"), text: "¿Y si los virus pudieran infectar máquinas y humanos por igual?" }
    ]
  },

  mito: {
    title: "Mito o Ciencia", emoji: "⚖️", deckName: "Δ · Pensamiento crítico",
    greek: "Δ", theme: "delta",
    icon: "fa-solid fa-scale-balanced",
    timing: "⏱️ Vota toda la clase · luego revela",
    cards: [
      { img: tw("1f9e0"), text: "Solo usamos el 10% del cerebro.", answer: "❌ MITO. Usamos prácticamente todo el cerebro, en distintos momentos del día." },
      { img: tw("1f9ca"), text: "El agua caliente se congela más rápido que la fría.", answer: "✅ CIENCIA (a veces). Se llama efecto Mpemba, aún se estudia." },
      { img: tw("1f987"), text: "Los murciélagos son ciegos.", answer: "❌ MITO. Ven bien; además usan ecolocación." },
      { img: tw("1f319"), text: "La Luna tiene un lado oscuro que nunca recibe luz.", answer: "❌ MITO. Tiene una cara oculta, pero recibe luz solar." },
      { img: tw("1f992"), text: "Las jirafas duermen solo 30 minutos al día.", answer: "✅ CIENCIA. Duermen entre 30 min y 2 horas en total." },
      { img: tw("1f36f"), text: "La miel nunca se echa a perder.", answer: "✅ CIENCIA. Su baja humedad y pH la hacen casi eterna." },
      { img: tw("1f30a"), text: "El Triángulo de las Bermudas tiene anomalías magnéticas únicas.", answer: "❌ MITO. No hay evidencia científica de algo especial allí." },
      { img: tw("1f9a0"), text: "El estornudo viaja a más de 100 km/h.", answer: "✅ CIENCIA. Puede superar los 150 km/h." },
      { img: tw("1f34e"), text: "Newton descubrió la gravedad por una manzana en la cabeza.", answer: "❌ MITO. Vio una caer, pero nunca le pegó." },
      { img: tw("1f487"), text: "El cabello crece más rápido si lo cortas.", answer: "❌ MITO. La velocidad de crecimiento no cambia." },
      { img: tw("1f420"), text: "Los peces tienen memoria de 3 segundos.", answer: "❌ MITO. Pueden recordar cosas durante meses." },
      { img: tw("2744"), text: "Ningún copo de nieve es igual a otro.", answer: "✅ CIENCIA (probablemente). Las combinaciones son casi infinitas." },
      { img: tw("1f9b7"), text: "El esmalte dental es el tejido más duro del cuerpo.", answer: "✅ CIENCIA. Más duro que los huesos." },
      { img: tw("1f308"), text: "Un arcoíris siempre tiene 7 colores exactos.", answer: "❌ MITO. Es un espectro continuo; los 7 son culturales." },
      { img: tw("1f427"), text: "Los pingüinos solo viven en lugares helados.", answer: "❌ MITO. Hay especies en Galápagos y Sudáfrica." },
      { img: tw("1f95b"), text: "Beber leche fortalece los huesos en cualquier edad.", answer: "⚠️ PARCIALMENTE. Aporta calcio, pero no es indispensable." },
      { img: tw("1f30e"), text: "La Gran Muralla China se ve desde el espacio a simple vista.", answer: "❌ MITO. Es muy delgada para verse desde la órbita." },
      { img: tw("1f40a"), text: "Los cocodrilos no han cambiado en 200 millones de años.", answer: "❌ MITO. Han evolucionado mucho, aunque su forma sea similar." },
      { img: tw("1f4a7"), text: "Hay que tomar 8 vasos de agua al día.", answer: "❌ MITO. La cantidad varía según persona y clima." },
      { img: tw("1f321"), text: "Tener frío te hace enfermar de gripa.", answer: "❌ MITO. La gripa la causan virus, no el frío." },
      { img: tw("1f988"), text: "Los tiburones no tienen huesos.", answer: "✅ CIENCIA. Su esqueleto es de cartílago." },
      { img: tw("1f30b"), text: "La lava y el magma son lo mismo.", answer: "❌ MITO. Magma está dentro; lava es cuando sale." },
      { img: tw("1f43a"), text: "Los lobos aúllan a la luna llena.", answer: "❌ MITO. Aúllan para comunicarse, no por la Luna." },
      { img: tw("1f955"), text: "Las zanahorias mejoran la vista significativamente.", answer: "❌ MITO. Aportan vitamina A, pero no son lentes." },
      { img: tw("1f9ec"), text: "Compartimos 50% del ADN con un plátano.", answer: "✅ CIENCIA (~60%). Toda la vida tiene base común." },
      { img: tw("1f414"), text: "Una gallina puede vivir sin cabeza por minutos.", answer: "✅ CIENCIA. Por reflejos del tronco encefálico." },
      { img: tw("1f30c"), text: "Las estrellas que vemos pueden estar muertas.", answer: "✅ CIENCIA. Su luz tarda años en llegarnos." },
      { img: tw("1f997"), text: "Los grillos te dicen la temperatura por sus chirridos.", answer: "✅ CIENCIA. Existe la fórmula de Dolbear." },
      { img: tw("1f525"), text: "El fuego es un ser vivo: 'come', 'crece' y 'respira'.", answer: "❌ MITO. Le faltan células, ADN y reproducción." },
      { img: tw("1f927"), text: "No puedes estornudar con los ojos abiertos.", answer: "❌ MITO. Es difícil, pero sí se puede." }
    ]
  },

  soyun: {
    title: "Soy un…", emoji: "🎭", deckName: "Ψ · Roleplay",
    greek: "Ψ", theme: "psi",
    icon: "fa-solid fa-microscope",
    timing: "⏱️ 60 segundos · 1 estudiante actúa",
    cards: [
      { img: tw("1f50b"), text: "Soy una MITOCONDRIA. Cuéntale a la clase qué hago en un día normal y por qué soy famosa." },
      { img: tw("1f4a7"), text: "Soy una GOTA DE AGUA. Narra mi viaje por el ciclo hidrológico desde el mar." },
      { img: tw("1f9ec"), text: "Soy una MOLÉCULA DE ADN. Descríbeme y explica por qué soy importante." },
      { img: tw("1f9a0"), text: "Soy un GLÓBULO BLANCO. Describe tu día atacando un virus invasor." },
      { img: tw("1f331"), text: "Soy una SEMILLA. Cuenta tu vida desde que caí al suelo hasta que florecí." },
      { img: tw("2600"), text: "Soy un FOTÓN solar. Narra mi viaje desde el Sol hasta una hoja en la Tierra." },
      { img: tw("1f41d"), text: "Soy una ABEJA OBRERA. Describe mi rutina diaria y mi rol en la colmena." },
      { img: tw("1fac0"), text: "Soy el CORAZÓN humano. Cuenta cómo trabajo 24/7 sin descanso." },
      { img: tw("1faa8"), text: "Soy una ROCA SEDIMENTARIA. Cuenta cómo me formé en millones de años." },
      { img: tw("1f30b"), text: "Soy un VOLCÁN. Narra qué sucede dentro de mí antes de una erupción." },
      { img: tw("1f9e0"), text: "Soy una NEURONA. Describe cómo envío un mensaje a otra neurona." },
      { img: tw("1f30a"), text: "Soy una OLA del océano. Cuenta cómo nací y cómo voy a morir." },
      { img: tw("1f9b4"), text: "Soy un HUESO largo. Describe lo que hago, además de sostener al cuerpo." },
      { img: tw("1f41b"), text: "Soy una ORUGA. Describe mi transformación a mariposa desde mi punto de vista." },
      { img: tw("1f32c"), text: "Soy una MOLÉCULA DE OXÍGENO. Cuenta tu viaje desde una hoja hasta los pulmones." },
      { img: tw("1fa90"), text: "Soy el PLANETA TIERRA. Describe cómo me siento con los humanos hoy." },
      { img: tw("1f9b7"), text: "Soy un DIENTE molar. Cuenta tu día triturando comida y los enemigos que combates." },
      { img: tw("1f41c"), text: "Soy una HORMIGA OBRERA. Describe mi misión en el hormiguero." },
      { img: tw("1f343"), text: "Soy una HOJA verde. Narra cómo hago fotosíntesis paso a paso." },
      { img: tw("1f99f"), text: "Soy un MOSQUITO hembra. Explica por qué necesito sangre (y no es por maldad)." },
      { img: tw("2744"), text: "Soy un CRISTAL DE HIELO. Describe cómo me formé en una nube." },
      { img: tw("1fab1"), text: "Soy una LOMBRIZ DE TIERRA. Cuenta por qué soy clave para los suelos." },
      { img: tw("1f315"), text: "Soy la LUNA. Describe cómo afecto a la Tierra todos los días." },
      { img: tw("1f344"), text: "Soy un HONGO descomponedor. Cuenta mi importante (y poco glamoroso) trabajo." },
      { img: tw("1f445"), text: "Soy una PAPILA GUSTATIVA. Describe cómo distingo dulce de salado." },
      { img: tw("1f41f"), text: "Soy un PEZ EN ARRECIFE. Cuenta cómo respiro debajo del agua." },
      { img: tw("1f9a0"), text: "Soy una BACTERIA INTESTINAL beneficiosa. Cuenta por qué los humanos me necesitan." },
      { img: tw("26a1"), text: "Soy un RAYO. Describe cómo nazco en una nube de tormenta." },
      { img: tw("1f9b4"), text: "Soy un FÓSIL. Cuenta mi historia: desde animal vivo hasta pieza de museo." },
      { img: tw("1f300"), text: "Soy un HURACÁN. Describe cómo me formé sobre el océano caliente." }
    ]
  },

  conecta: {
       title: "Conecta dos", emoji: "🔗", deckName: "Λ · Pensamiento sistémico",
        greek: "Λ", theme: "lambda",
        icon: "fa-solid fa-network-wired",
       timing: "⏱️ 60-90 segundos · pareja o equipo",
        cards: [
      { img: tw("1f30b"), text: "VOLCÁN ↔ PLÁTANO\n¿Cuál es la conexión científica?", answer: "Las cenizas volcánicas crean suelos muy fértiles, ricos en minerales y potasio, ideales para cultivar plátano." },
      { img: tw("1f41d"), text: "ABEJA ↔ CAFÉ\n¿Cuál es la conexión?", answer: "Las abejas polinizan las flores del cafeto. Sin polinización no hay frutos (granos de café)." },
      { img: tw("1f319"), text: "LUNA ↔ MAREA\n¿Cuál es la conexión?", answer: "La gravedad de la Luna atrae el agua de los océanos, generando las mareas altas y bajas." },
      { img: tw("1f9a0"), text: "BACTERIA ↔ PAN\n¿Cuál es la conexión?", answer: "La levadura (un hongo, primo de las bacterias) fermenta la masa: produce CO₂ que hace crecer el pan." },
      { img: tw("1f333"), text: "ÁRBOL ↔ TU RESPIRACIÓN\n¿Cuál es la conexión?", answer: "Los árboles liberan oxígeno por fotosíntesis. Tú lo respiras y devuelves CO₂ que ellos usan." },
      { img: tw("2600"), text: "SOL ↔ HAMBURGUESA\n¿Cuál es la conexión?", answer: "Sol → pasto (fotosíntesis) → vaca (come pasto) → hamburguesa. Toda energía viene del Sol." },
      { img: tw("1f99f"), text: "MOSQUITO ↔ MALARIA\n¿Cuál es la conexión?", answer: "El mosquito Anopheles es el vector que transmite el parásito Plasmodium causante de la malaria." },
      { img: tw("1f30a"), text: "OCÉANO ↔ SAL DE MESA\n¿Cuál es la conexión?", answer: "Mucha sal se obtiene evaporando agua de mar en salinas. El océano es la mayor reserva." },
      { img: tw("1f9b4"), text: "HUESO ↔ LECHE\n¿Cuál es la conexión?", answer: "La leche aporta calcio, mineral esencial para formar y mantener la matriz ósea." },
      { img: tw("1f327"), text: "LLUVIA ↔ ARCOÍRIS\n¿Cuál es la conexión?", answer: "Las gotas de lluvia actúan como prismas: refractan la luz solar y la separan en colores." },
      { img: tw("1fab1"), text: "LOMBRIZ ↔ MAÍZ\n¿Cuál es la conexión?", answer: "Las lombrices airean el suelo y lo enriquecen con sus excreciones, mejorando el cultivo." },
      { img: tw("1f9ec"), text: "ADN ↔ COLOR DE OJOS\n¿Cuál es la conexión?", answer: "Genes en el ADN heredados de los padres determinan los pigmentos del iris." },
      { img: tw("1f32c"), text: "VIENTO ↔ ELECTRICIDAD\n¿Cuál es la conexión?", answer: "Los aerogeneradores transforman energía cinética del viento en energía eléctrica." },
      { img: tw("1f404"), text: "VACA ↔ CAMBIO CLIMÁTICO\n¿Cuál es la conexión?", answer: "Las vacas emiten metano (CH₄) por digestión, un gas de efecto invernadero potente." },
      { img: tw("1f36b"), text: "CHOCOLATE ↔ DEFORESTACIÓN\n¿Cuál es la conexión?", answer: "El cultivo intensivo de cacao destruye selvas tropicales en África y Sudamérica." },
      { img: tw("1f344"), text: "HONGO ↔ ANTIBIÓTICO\n¿Cuál es la conexión?", answer: "Fleming descubrió la penicilina en el hongo Penicillium: combate bacterias." },
      { img: tw("2744"), text: "HIELO POLAR ↔ NIVEL DEL MAR\n¿Cuál es la conexión?", answer: "Al derretirse el hielo continental, aumenta el volumen de agua en océanos." },
      { img: tw("1f9b7"), text: "AZÚCAR ↔ CARIES\n¿Cuál es la conexión?", answer: "Bacterias bucales fermentan azúcar produciendo ácidos que erosionan el esmalte." },
      { img: tw("1f345"), text: "SOL ↔ TOMATE ROJO\n¿Cuál es la conexión?", answer: "La luz solar activa la producción de licopeno, pigmento rojo del tomate maduro." },
      { img: tw("1f32b"), text: "SMOG ↔ ASMA\n¿Cuál es la conexión?", answer: "Partículas y gases del smog inflaman las vías respiratorias y desencadenan crisis asmáticas." },
      { img: tw("1f426"), text: "GALLINA ↔ T-REX\n¿Cuál es la conexión?", answer: "Las aves descienden directamente de dinosaurios terópodos: la gallina es pariente del T-rex." },
      { img: tw("1f33d"), text: "MAÍZ ↔ COMBUSTIBLE\n¿Cuál es la conexión?", answer: "Del maíz se produce bioetanol, combustible alternativo a la gasolina." },
      { img: tw("1f9e0"), text: "CEREBRO ↔ MÚSICA\n¿Cuál es la conexión?", answer: "La música libera dopamina y activa zonas del cerebro relacionadas con emoción y memoria." },
      { img: tw("1f9c0"), text: "MICROBIOS ↔ QUESO\n¿Cuál es la conexión?", answer: "Bacterias y hongos fermentan la leche y dan al queso su sabor, textura y aroma." },
      { img: tw("1f4da"), text: "ÁRBOL ↔ LIBRO\n¿Cuál es la conexión?", answer: "El papel se fabrica con celulosa de la madera de árboles." },
      { img: tw("1f4a7"), text: "AGUA ↔ ELECTRICIDAD\n¿Cuál es la conexión?", answer: "Las hidroeléctricas usan la fuerza del agua en caída para mover turbinas y generar electricidad." },
      { img: tw("1f987"), text: "MOSQUITO ↔ MURCIÉLAGO\n¿Cuál es la conexión?", answer: "Los murciélagos son depredadores naturales: un solo individuo come miles de mosquitos por noche." },
      { img: tw("1f951"), text: "ENERGÍA SOLAR ↔ AGUACATE\n¿Cuál es la conexión?", answer: "El árbol convierte energía solar en azúcares y grasas que almacena en el fruto." },
      { img: tw("1f41f"), text: "PLÁSTICO ↔ PESCADO\n¿Cuál es la conexión?", answer: "Microplásticos del mar entran en la cadena trófica: peces los ingieren y llegan a tu plato." },
      { img: tw("1f9ea"), text: "pH ↔ HORTENSIA\n¿Cuál es la conexión?", answer: "La hortensia cambia de azul a rosa según la acidez del suelo: actúa como indicador natural de pH." }
    ]
  },

  misterio: {
    title: "Empareja el Misterio", emoji: "🔍", deckName: "Ω · ¿Qué seré?",
    greek: "Ω", theme: "omega",
    icon: "fa-solid fa-magnifying-glass",
    timing: "⏱️ Toda la clase grita la respuesta",
    // Esta baraja usa FOTOS REALES (Unsplash) para reforzar el reto visual
    cards: [
      { img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=70", text: "Soy invisible al ojo pero estoy en cada bocado de pan que comes. Vivo en colonias y me reproduzco rápido. ¿Quién soy?", answer: "🍞 LEVADURA (hongo unicelular)" },
      { img: "https://images.unsplash.com/photo-1564399579883-451a5cb6dad9?w=400&q=70", text: "Tengo el corazón en la cabeza, sangre azul y 3 corazones reales. ¿Quién soy?", answer: "🐙 PULPO" },
      { img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&q=70", text: "Soy la estructura más alta hecha por seres vivos visible desde el espacio. ¿Quién soy?", answer: "🪸 LA GRAN BARRERA DE CORAL" },
      { img: tw("1fac0"), text: "Soy un órgano que no para nunca, peso ~300g y late ~100,000 veces al día. ¿Quién soy?", answer: "🫀 EL CORAZÓN" },
      { img: "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?w=400&q=70", text: "Soy el animal más letal para los humanos en el mundo. No soy un león ni un tiburón. ¿Quién soy?", answer: "🦟 EL MOSQUITO" },
      { img: tw("1f32c"), text: "Soy un gas que es 78% del aire que respiras pero casi no lo usas. ¿Quién soy?", answer: "🌬️ NITRÓGENO (N₂)" },
      { img: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=400&q=70", text: "Soy un planeta donde llueve metal líquido. ¿Quién soy?", answer: "🪐 VENUS (o exoplaneta WASP-76b)" },
      { img: tw("1f441"), text: "Soy la única parte del cuerpo humano sin riego sanguíneo propio. ¿Quién soy?", answer: "👁️ LA CÓRNEA del ojo" },
      { img: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&q=70", text: "Soy un mineral más duro que el acero pero arde si lo prendes. ¿Quién soy?", answer: "💎 DIAMANTE (carbono puro)" },
      { img: "https://images.unsplash.com/photo-1564399579883-451a5cb6dad9?w=400&q=70", text: "Tengo memoria, resuelvo problemas y abro frascos, pero no tengo huesos. ¿Quién soy?", answer: "🐙 PULPO" },
      { img: tw("269b"), text: "Soy la fuerza que mantiene unidos los átomos. Sin mí, no existirías. ¿Quién soy?", answer: "⚛️ FUERZA NUCLEAR FUERTE" },
      { img: tw("1f4a7"), text: "Cambio de estado en tu boca cada vez que respiras, sin que lo notes. ¿Quién soy?", answer: "💧 EL AGUA (vapor en exhalación)" },
      { img: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=400&q=70", text: "Soy el órgano más grande del cuerpo humano y me regenero constantemente. ¿Quién soy?", answer: "🧴 LA PIEL" },
      { img: tw("1f9a0"), text: "Vivo en tu intestino, pesamos juntos ~2kg y soy clave para tu salud. ¿Quién soy?", answer: "🦠 MICROBIOTA INTESTINAL" },
      { img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&q=70", text: "Soy un proceso que convierte luz en azúcar. Sin mí, no hay oxígeno. ¿Quién soy?", answer: "🌿 FOTOSÍNTESIS" },
      { img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&q=70", text: "Soy un fenómeno donde dos placas se rozan y libero energía repentina. ¿Quién soy?", answer: "🌎 TERREMOTO (fallas tectónicas)" },
      { img: "https://images.unsplash.com/photo-1581262208435-41726149a759?w=400&q=70", text: "Soy el animal más lento del planeta y casi nunca bajo del árbol. ¿Quién soy?", answer: "🦥 PEREZOSO" },
      { img: tw("1f4a1"), text: "Soy la cantidad mínima de luz que existe. Soy onda y partícula a la vez. ¿Quién soy?", answer: "💡 FOTÓN" },
      { img: tw("1f9ea"), text: "Soy un número fundamental en química. Defino qué tan ácido o básico es algo. ¿Quién soy?", answer: "🧪 EL pH" },
      { img: tw("1f310"), text: "Soy una capa que te protege de los rayos UV. Estoy a 20-30 km de altura. ¿Quién soy?", answer: "🌐 CAPA DE OZONO" },
      { img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=400&q=70", text: "Soy el río más largo del mundo, pero no el de mayor caudal. ¿Quién soy?", answer: "🌊 EL NILO" },
      { img: tw("1faa8"), text: "Soy un tipo de roca formada por enfriamiento de magma. ¿Quién soy?", answer: "🪨 ROCA ÍGNEA" },
      { img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=70", text: "Soy una galaxia y vivo dentro de ti cada noche cuando ves el cielo. ¿Quién soy?", answer: "🌌 LA VÍA LÁCTEA" },
      { img: "https://images.unsplash.com/photo-1591389703887-bcb6d6c19abf?w=400&q=70", text: "Cambio de color para sobrevivir, pero no por moda. ¿Quién soy?", answer: "🦎 CAMALEÓN (o pulpo, o sepia)" },
      { img: tw("1f9b4"), text: "Soy un tejido vivo que conecta tus huesos y se rompe fácil al estirarse mucho. ¿Quién soy?", answer: "🦴 LIGAMENTO" },
      { img: tw("1f4e1"), text: "Soy un tipo de energía que viaja sin necesitar materia. ¿Quién soy?", answer: "📡 ENERGÍA ELECTROMAGNÉTICA (luz)" },
      { img: tw("1f4a8"), text: "Soy un símbolo de 2 letras. Sin mí no hay vida. Estoy en el agua y en el aire. ¿Quién soy?", answer: "💨 O₂ (OXÍGENO)" },
      { img: tw("1f308"), text: "Soy un fenómeno donde la luz se descompone en colores. ¿Quién soy?", answer: "🌈 REFRACCIÓN (arcoíris/prisma)" },
      { img: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=400&q=70", text: "Soy el ser vivo más antiguo conocido aún en pie. Tengo más de 4,800 años. ¿Quién soy?", answer: "🌲 PINO MATUSALÉN (Pinus longaeva)" },
      { img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&q=70", text: "Soy un animal que no envejece biológicamente como los demás. ¿Quién soy?", answer: "🪼 MEDUSA INMORTAL (Turritopsis dohrnii)" }
    ]
  },

  digalo: {
    title: "Dígalo como pueda", emoji: "🤐", deckName: "Φ · ¡SECRETO!",
    greek: "Φ", theme: "phi",
    icon: "fa-solid fa-masks-theater",
    timing: "⏱️ 60 segundos · explica SIN decir la palabra",
    secret: true,
    cards: [
      { img: tw("1f92b"), text: "FOTOSÍNTESIS", hint: "SIN decir: planta · sol · clorofila" },
      { img: tw("1f92b"), text: "MITOCONDRIA", hint: "SIN decir: célula · energía · ATP" },
      { img: tw("1f92b"), text: "TERREMOTO", hint: "SIN decir: temblor · placa · suelo" },
      { img: tw("1f92b"), text: "VOLCÁN", hint: "SIN decir: lava · erupción · montaña" },
      { img: tw("1f92b"), text: "ECOSISTEMA", hint: "SIN decir: animales · plantas · ambiente" },
      { img: tw("1f92b"), text: "GRAVEDAD", hint: "SIN decir: caer · Newton · peso" },
      { img: tw("1f92b"), text: "ADN", hint: "SIN decir: genes · herencia · doble" },
      { img: tw("1f92b"), text: "EVOLUCIÓN", hint: "SIN decir: Darwin · cambio · especie" },
      { img: tw("1f92b"), text: "FOTÓN", hint: "SIN decir: luz · partícula · sol" },
      { img: tw("1f92b"), text: "OSMOSIS", hint: "SIN decir: agua · membrana · célula" },
      { img: tw("1f92b"), text: "DEPREDADOR", hint: "SIN decir: cazar · presa · comer" },
      { img: tw("1f92b"), text: "MAGNETISMO", hint: "SIN decir: imán · atraer · metal" },
      { img: tw("1f92b"), text: "FERMENTACIÓN", hint: "SIN decir: pan · vino · levadura" },
      { img: tw("1f92b"), text: "EXTINCIÓN", hint: "SIN decir: dinosaurios · morir · especie" },
      { img: tw("1f92b"), text: "POLINIZACIÓN", hint: "SIN decir: abeja · flor · polen" },
      { img: tw("1f92b"), text: "ATMÓSFERA", hint: "SIN decir: aire · cielo · gases" },
      { img: tw("1f92b"), text: "FRICCIÓN", hint: "SIN decir: rozar · superficie · calor" },
      { img: tw("1f92b"), text: "VACUNA", hint: "SIN decir: inyección · enfermedad · inmunidad" },
      { img: tw("1f92b"), text: "CADENA ALIMENTICIA", hint: "SIN decir: comer · animal · planta" },
      { img: tw("1f92b"), text: "EFECTO INVERNADERO", hint: "SIN decir: calor · CO2 · planeta" },
      { img: tw("1f92b"), text: "METAMORFOSIS", hint: "SIN decir: oruga · mariposa · cambio" },
      { img: tw("1f92b"), text: "ÓRGANO", hint: "SIN decir: cuerpo · función · corazón" },
      { img: tw("1f92b"), text: "REACCIÓN QUÍMICA", hint: "SIN decir: mezclar · sustancia · cambio" },
      { img: tw("1f92b"), text: "BIODIVERSIDAD", hint: "SIN decir: muchas · especies · variedad" },
      { img: tw("1f92b"), text: "SIMBIOSIS", hint: "SIN decir: juntos · ayudar · dos" },
      { img: tw("1f92b"), text: "CICLO DEL AGUA", hint: "SIN decir: lluvia · evaporación · nube" },
      { img: tw("1f92b"), text: "ELECTRICIDAD ESTÁTICA", hint: "SIN decir: cabello · globo · chispa" },
      { img: tw("1f92b"), text: "VIRUS", hint: "SIN decir: enfermedad · contagio · gripa" },
      { img: tw("1f92b"), text: "FÓSIL", hint: "SIN decir: dinosaurio · piedra · antiguo" },
      { img: tw("1f92b"), text: "TECTÓNICA DE PLACAS", hint: "SIN decir: terremoto · continente · mover" }
    ]
  }
};


    // ============================================
    // ESTADO Y LÓGICA
    // ============================================
    let currentDeck = 'observa';
    let availableCards = [];
    let currentCard = null;
    let drawnCount = 0;
    let answerRevealed = false;

    // Ruleta
    let mode = 'solo';
    let usedStudents = []; // historial sin repetir
    let usedTeams = [];

    const $ = id => document.getElementById(id);
    const card = $('card'), cardFront = $('cardFront');
    const deckSymbol = $('deckSymbol'), deckIcon = $('deckIcon'), deckTitle = $('deckTitle');    const cardNumber = $('cardNumber'), cardDeckName = $('cardDeckName');
    const cardIcon = $('cardIcon'), cardIconImg = $('cardIconImg'), cardText = $('cardText');    const cardFooter = $('cardFooter'), answerBox = $('answerBox');
    const counter = $('counter');
    const drawBtn = $('drawBtn'), revealBtn = $('revealBtn'), shuffleBtn = $('shuffleBtn');
    const totalStudentsInput = $('totalStudents'), totalTeamsInput = $('totalTeams');
    const noRepeatChk = $('noRepeat');
    const rouletteResult = $('rouletteResult'), rouletteLabel = $('rouletteLabel');
    const spinBtn = $('spinBtn'), historyEl = $('rouletteHistory');
    const resetHistoryBtn = $('resetHistoryBtn');

    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function loadDeck(deckKey) {
      currentDeck = deckKey;
      const deck = decks[deckKey];
      deckSymbol.textContent = deck.greek;
      deckIcon.className = 'card-back-icon ' + (deck.icon || 'fa-solid fa-eye');
      deckTitle.textContent = deck.title.toUpperCase();      cardDeckName.textContent = deck.deckName;
      availableCards = shuffle(deck.cards);
      drawnCount = 0;
      answerRevealed = false;
      card.classList.remove('flipped');
      revealBtn.classList.add('hidden');
      answerBox.style.display = 'none';

      // Aplicar tema visual al reverso de la carta (limpiar previos + aplicar nuevo)
      const cardBack = document.querySelector('.card-back');
      cardBack.className = 'card-face card-back';
      if (deck.theme) cardBack.classList.add(`theme-${deck.theme}`);

      cardFront.classList.toggle('secret', !!deck.secret);
      updateCounter();
      document.querySelectorAll('.deck-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.deck === deckKey)
      );
      
      buildDeckPile();
      clearDiscardPile();
}

    function updateCounter() {
      const total = decks[currentDeck].cards.length;
      counter.textContent = `Carta ${drawnCount} de ${total}`;
    }

    function drawCard() 
    {// Si ya había una carta en pantalla, mándala a la mesa de descartes
         // ... resto del código existente sin cambios ...
      if (availableCards.length === 0) {
        availableCards = shuffle(decks[currentDeck].cards);
        drawnCount = 0;
      }
      currentCard = availableCards.pop();
      drawnCount++;
      answerRevealed = false;

            const showCard = () => {
        const deck = decks[currentDeck];
        cardNumber.textContent = `${deck.greek}-${String(drawnCount).padStart(2, '0')}`;
        cardIconImg.src = currentCard.img;
        cardIconImg.alt = currentCard.text.substring(0, 40);
        cardFooter.textContent = deck.timing;

        // Aplicar tema del mazo
        cardFront.className = 'card-face card-front';
        cardFront.classList.add(`theme-${deck.theme}`);
        if (deck.secret) cardFront.classList.add('secret');

        if (deck.secret) {
        cardText.innerHTML = `
  <div class="secret-label">🤫 Tu palabra es:</div>
  <div class="secret-word">${currentCard.text}</div>
  <div class="secret-hint">${currentCard.hint || ''}</div>
`;
        } else {
        cardText.innerHTML = currentCard.text.replace(/\n/g, '<br>');
        }


        if (currentCard.answer) {
          revealBtn.classList.remove('hidden');
          answerBox.style.display = 'none';
        } else {
          revealBtn.classList.add('hidden');
          answerBox.style.display = 'none';
        }
      };


      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => { showCard(); setTimeout(() => card.classList.add('flipped'), 100); }, 600);
      } else {
        showCard();
        setTimeout(() => card.classList.add('flipped'), 100);
      }
      updateCounter();
    }

    function revealAnswer() {
      if (!currentCard || !currentCard.answer) return;
      answerBox.textContent = currentCard.answer;
      answerBox.style.display = 'block';
      answerRevealed = true;
      revealBtn.classList.add('hidden');
    }

    // ============================================
    // RULETA
    // ============================================
    function setMode(m) {
      mode = m;
      document.querySelectorAll('.mode-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.mode === m)
      );
      rouletteResult.classList.remove('team', 'all');
      if (m === 'equipo') rouletteResult.classList.add('team');
      if (m === 'todos') rouletteResult.classList.add('all');

      // Vista previa según modo
      if (m === 'todos') {
        rouletteLabel.textContent = 'Modo grupal';
        rouletteResult.textContent = '🙌 ¡TODOS!';
      } else {
        rouletteLabel.textContent = 'Presiona el botón';
        rouletteResult.textContent = '—';
      }
    }

    function pickRandom(max, exclude = []) {
      const available = [];
      for (let i = 1; i <= max; i++) if (!exclude.includes(i)) available.push(i);
      if (available.length === 0) return null;
      return available[Math.floor(Math.random() * available.length)];
    }

    function spin() {
      const totalS = parseInt(totalStudentsInput.value) || 26;
      const totalT = parseInt(totalTeamsInput.value) || 4;
      const noRepeat = noRepeatChk.checked;

      if (mode === 'todos') {
        rouletteResult.textContent = '🙌 ¡TODA LA CLASE!';
        rouletteLabel.textContent = 'Respuesta colectiva';
        return;
      }

      // Animación de números
      rouletteResult.classList.add('spinning');
      rouletteLabel.textContent = 'Sorteando...';
      let ticks = 0;
      const interval = setInterval(() => {
        if (mode === 'equipo') {
          rouletteResult.textContent = `EQUIPO ${Math.floor(Math.random() * totalT) + 1}`;
        } else {
          rouletteResult.textContent = Math.floor(Math.random() * totalS) + 1;
        }
        ticks++;
      }, 80);

      setTimeout(() => {
        clearInterval(interval);
        rouletteResult.classList.remove('spinning');

        if (mode === 'solo') {
          let exclude = noRepeat ? usedStudents : [];
          if (exclude.length >= totalS) { usedStudents = []; exclude = []; }
          const pick = pickRandom(totalS, exclude);
          rouletteResult.textContent = pick;
          rouletteLabel.textContent = '👤 Estudiante #';
          if (noRepeat) usedStudents.push(pick);
          historyEl.textContent = `Historial: ${usedStudents.join(', ') || 'vacío'}`;
        } else if (mode === 'pareja') {
          let exclude = noRepeat ? [...usedStudents] : [];
          if (exclude.length >= totalS - 1) { usedStudents = []; exclude = []; }
          const p1 = pickRandom(totalS, exclude);
          const p2 = pickRandom(totalS, [...exclude, p1]);
          rouletteResult.textContent = `${p1} & ${p2}`;
          rouletteLabel.textContent = '👥 Pareja';
          if (noRepeat) usedStudents.push(p1, p2);
          historyEl.textContent = `Historial: ${usedStudents.join(', ') || 'vacío'}`;
        } else if (mode === 'equipo') {
          let exclude = noRepeat ? usedTeams : [];
          if (exclude.length >= totalT) { usedTeams = []; exclude = []; }
          const pick = pickRandom(totalT, exclude);
          rouletteResult.textContent = `EQUIPO ${pick}`;
          rouletteLabel.textContent = '🏆 Equipo';
          if (noRepeat) usedTeams.push(pick);
          historyEl.textContent = `Equipos usados: ${usedTeams.join(', ') || 'vacío'}`;
        }
      }, 1200);
    }

    function resetHistory() {
      usedStudents = [];
      usedTeams = [];
      historyEl.textContent = 'Historial: vacío';
      rouletteResult.textContent = '—';
      rouletteLabel.textContent = 'Presiona el botón';
    }
    // ============================================
// 🎴 MAZO FÍSICO INTERACTIVO + PILA DE DESCARTES
// ============================================
const deckPile = $('deckPile');
const discardPile = $('discardPile');
const cardContainer = $('cardContainer');
let pileCards = []; // referencia a los elementos DOM del mazo apilado

// Construir el mazo apilado visual cuando se carga una baraja
function buildDeckPile() {
  const deck = decks[currentDeck];
  deckPile.innerHTML = '';
  pileCards = [];
  const totalCards = Math.min(deck.cards.length, 12); // máx 12 apiladas (visualmente suficiente)

  for (let i = 0; i < totalCards; i++) {
    const pc = document.createElement('div');
    pc.className = `pile-card theme-${deck.theme}`;

    // Offset escalonado tipo abanico
    const offsetX = i * 2;
    const offsetY = i * -2;
    const rot = (i - totalCards / 2) * 1.5;
    pc.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rot}deg)`;
    pc.style.zIndex = i;
    pc.dataset.baseTransform = pc.style.transform;

    pc.innerHTML = `
      <div class="mini-back theme-${deck.theme}">
        <div class="mini-symbol">${deck.greek}</div>
        <i class="${deck.icon} mini-icon"></i>
      </div>
    `;

    pc.addEventListener('click', () => triggerDrawFromPile(pc));
    deckPile.appendChild(pc);
    pileCards.push(pc);
  }

}

// Efecto abanico al pasar el mouse: cada carta se separa lateralmente
deckPile.addEventListener('mousemove', (e) => {
  const rect = deckPile.getBoundingClientRect();
  const mouseY = e.clientY - rect.top;
  const center = rect.height / 2;

  pileCards.forEach((pc, i) => {
    if (pc.classList.contains('gone') || pc.classList.contains('flying')) return;
    const baseRot = (i - pileCards.length / 2) * 1.5;
    const baseX = i * 2;
    const baseY = i * -2;
    // Aumenta el spread con la proximidad al mouse
    const dist = Math.abs((i / pileCards.length) * rect.height - mouseY);
    const closeness = Math.max(0, 1 - dist / rect.height);
    const extraX = closeness * 15;
    const extraRot = closeness * (i % 2 === 0 ? -8 : 8);

    pc.style.transform = `translate(${baseX + extraX}px, ${baseY}px) rotate(${baseRot + extraRot}deg)`;
  });
});

deckPile.addEventListener('mouseleave', () => {
  pileCards.forEach((pc, i) => {
    if (pc.classList.contains('gone') || pc.classList.contains('flying')) return;
    pc.style.transform = pc.dataset.baseTransform;
  });
});

// Cuando se hace clic en una carta del mazo, vuela al centro
// Cuando se hace clic en una carta del mazo o se presiona "Sacar carta"
function triggerDrawFromPile(pileCardEl) {
  // Si había una carta visible, primero mándala a descartes
  if (currentCard) {
    flyCardToDiscard();
  }

  // Calcular posición destino (centro de la carta principal)
  const pileRect = pileCardEl.getBoundingClientRect();
  const targetRect = cardContainer.getBoundingClientRect();

  const deltaX = (targetRect.left + targetRect.width / 2) - (pileRect.left + pileRect.width / 2);
  const deltaY = (targetRect.top + targetRect.height / 2) - (pileRect.top + pileRect.height / 2);
  const scaleX = targetRect.width / pileRect.width;
  const scaleY = targetRect.height / pileRect.height;
  const scale = Math.max(scaleX, scaleY);

  // Esconde la carta central temporalmente para que la animación tome el protagonismo
  cardContainer.style.opacity = '0';

  // Lanza la carta del mazo al centro con rotación
  pileCardEl.classList.add('flying');
  pileCardEl.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale}) rotate(720deg)`;

  // Cuando la carta llega al centro: hace fade-out, aparece la carta real ya volteada
  setTimeout(() => {
    pileCardEl.style.opacity = '0';
  }, 500);

  setTimeout(() => {
    pileCardEl.classList.add('gone'); // se elimina del flujo
    cardContainer.style.opacity = '1';
    drawCard(); // ahora sí muestra el contenido real
  }, 700);
}

// Animación: la carta actual se va volando a la pila de descartes
function flyCardToDiscard() {
  const cardRect = cardContainer.getBoundingClientRect();
  const discardRect = discardPile.getBoundingClientRect();

  const deltaX = (discardRect.left + discardRect.width / 2) - (cardRect.left + cardRect.width / 2);
  const deltaY = (discardRect.top + 50) - (cardRect.top + cardRect.height / 2);

  // Clonamos visualmente la carta para animarla sin afectar la real
  const ghost = cardContainer.cloneNode(true);
  ghost.style.position = 'fixed';
  ghost.style.top = cardRect.top + 'px';
  ghost.style.left = cardRect.left + 'px';
  ghost.style.width = cardRect.width + 'px';
  ghost.style.height = cardRect.height + 'px';
  ghost.style.margin = '0';
  ghost.style.zIndex = '2000';
  ghost.style.pointerEvents = 'none';
  ghost.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease';
  document.body.appendChild(ghost);

  // Forzar reflow
  void ghost.offsetWidth;

  ghost.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.15) rotate(${(Math.random() * 30 - 15)}deg)`;
  ghost.style.opacity = '0.4';

  setTimeout(() => {
    ghost.remove();
    moveToDiscardPile();
  }, 700);
}


// Mover la carta actual a la pila de descartes
function moveToDiscardPile() {
  if (!currentCard) return;
  const deck = decks[currentDeck];

  const empty = discardPile.querySelector('.discard-empty');
  if (empty) empty.remove();

  const mini = document.createElement('div');
  mini.className = `discard-card theme-${deck.theme}`;
  const rotation = (Math.random() * 16 - 8).toFixed(1);
  mini.style.setProperty('--rot', `${rotation}deg`);
  mini.innerHTML = `
    <div style="font-size:1.4rem;line-height:1;">${deck.greek}</div>
    <div class="mini-num">${String(drawnCount).padStart(2, '0')}</div>
  `;
  applyDiscardTheme(mini, deck.theme);
  mini.title = (currentCard.text || '').substring(0, 80);

  // Guardamos la carta completa en el elemento DOM para poder revisarla luego
  const cardSnapshot = {
    card: { ...currentCard },
    deckKey: currentDeck,
    number: drawnCount
  };
  mini.addEventListener('click', () => previewDiscardCard(cardSnapshot, mini));

  discardPile.appendChild(mini);

  while (discardPile.children.length > 30) {
    discardPile.removeChild(discardPile.firstChild);
  }
}

// Mostrar de nuevo una carta del historial (sin romper el estado actual)
let isPreviewMode = false;
let savedCurrentCard = null;
let savedDrawnCount = null;

function previewDiscardCard(snapshot, miniEl) {
  // Si ya estaba en preview, restaura
  if (isPreviewMode) {
    exitPreviewMode();
    return;
  }

  // Guardar el estado actual para restaurar después
  savedCurrentCard = currentCard;
  savedDrawnCount = drawnCount;
  isPreviewMode = true;

  // Marcar visualmente la mini-carta seleccionada
  document.querySelectorAll('.discard-card').forEach(d => d.classList.remove('previewing'));
  miniEl.classList.add('previewing');
  cardContainer.classList.add('viewing-discard');

  // Mostrar la carta del historial
  const deck = decks[snapshot.deckKey];
  currentCard = snapshot.card;
  drawnCount = snapshot.number;

  cardNumber.textContent = `${deck.greek}-${String(snapshot.number).padStart(2, '0')}`;
  cardIconImg.src = snapshot.card.img;
  cardIconImg.alt = (snapshot.card.text || '').substring(0, 40);
  cardFooter.textContent = deck.timing;

  cardFront.className = 'card-face card-front';
  cardFront.classList.add(`theme-${deck.theme}`);
  if (deck.secret) cardFront.classList.add('secret');

  if (deck.secret) {
    cardText.innerHTML = `
      <div class="secret-label">🤫 Tu palabra es:</div>
      <div class="secret-word">${snapshot.card.text}</div>
      <div class="secret-hint">${snapshot.card.hint || ''}</div>
    `;
  } else {
    cardText.innerHTML = (snapshot.card.text || '').replace(/\n/g, '<br>');
  }

  // Voltear para mostrar el frente
  if (!card.classList.contains('flipped')) {
    card.classList.add('flipped');
  }

  // Si la carta tiene respuesta, mostrarla automáticamente en preview
  if (snapshot.card.answer) {
    answerBox.textContent = snapshot.card.answer;
    answerBox.style.display = 'block';
  } else {
    answerBox.style.display = 'none';
  }
  revealBtn.classList.add('hidden');
}

function exitPreviewMode() {
  isPreviewMode = false;
  cardContainer.classList.remove('viewing-discard');
  document.querySelectorAll('.discard-card').forEach(d => d.classList.remove('previewing'));

  // Restaurar carta actual
  currentCard = savedCurrentCard;
  drawnCount = savedDrawnCount;

  if (currentCard) {
    const deck = decks[currentDeck];
    cardNumber.textContent = `${deck.greek}-${String(drawnCount).padStart(2, '0')}`;
    cardIconImg.src = currentCard.img;
    cardFooter.textContent = deck.timing;
    cardText.innerHTML = (currentCard.text || '').replace(/\n/g, '<br>');
    if (currentCard.answer) revealBtn.classList.remove('hidden');
  } else {
    card.classList.remove('flipped');
  }
  answerBox.style.display = 'none';
}


// Aplicar el fondo del tema a la mini-carta de descarte
function applyDiscardTheme(el, theme) {
  const themes = {
    alpha:  { bg: 'linear-gradient(135deg, rgba(60,20,80,0.95), rgba(10,10,25,0.98))', color: '#FF6B00' },
    sigma:  { bg: 'linear-gradient(45deg, #001f3f, #0074D9)', color: '#7FDBFF' },
    delta:  { bg: 'linear-gradient(90deg, #1a1a2e 50%, #f1f5f9 50%)', color: '#fff' },
    psi:    { bg: '#0a0a1a', color: '#ff1493' },
    lambda: { bg: '#000', color: '#ff00ff' },
    omega:  { bg: 'linear-gradient(to bottom, #2b0f4c, #130026)', color: '#d8b4e2' },
    phi:    { bg: 'linear-gradient(135deg, #001f3f, #003366, #004080)', color: '#d4af37' }
  };
  const t = themes[theme] || themes.alpha;
  el.style.background = t.bg;
  el.style.color = t.color;
  el.style.border = `1px solid ${t.color}40`;
}

// Vaciar la pila de descartes (se llama al cambiar de mazo o reiniciar)
function clearDiscardPile() {
  discardPile.innerHTML = '<span class="discard-empty">Aún ninguna</span>';
}


    // ============================================
    // EVENT LISTENERS
    // ============================================
    document.querySelectorAll('.deck-btn').forEach(btn =>
      btn.addEventListener('click', () => loadDeck(btn.dataset.deck))
    );

    document.querySelectorAll('.mode-btn').forEach(btn =>
      btn.addEventListener('click', () => setMode(btn.dataset.mode))
    );

    card.addEventListener('click', () => {
      if (drawnCount === 0) drawCard();
      else card.classList.toggle('flipped');
    });

    drawBtn.addEventListener('click', () => {
  // Si estamos en preview de descarte, primero salir
  if (isPreviewMode) exitPreviewMode();

  // Toma la primera carta visible del mazo apilado
  const nextPileCard = pileCards.find(pc =>
    !pc.classList.contains('gone') && !pc.classList.contains('flying')
  );

  if (nextPileCard) {
    triggerDrawFromPile(nextPileCard);
  } else {
    // Si el mazo se acabó, reconstruirlo y sacar
    buildDeckPile();
    setTimeout(() => {
      const fresh = pileCards.find(pc => !pc.classList.contains('gone'));
      if (fresh) triggerDrawFromPile(fresh);
    }, 200);
  }
});
    revealBtn.addEventListener('click', revealAnswer);
   shuffleBtn.addEventListener('click', () => {
  availableCards = shuffle(decks[currentDeck].cards);
  drawnCount = 0;
  card.classList.remove('flipped');
  updateCounter();
  buildDeckPile();       // reconstruye el mazo visual
  clearDiscardPile();    // limpia la mesa
  currentCard = null;
});


    spinBtn.addEventListener('click', spin);
    resetHistoryBtn.addEventListener('click', resetHistory);

    // Inicializar
    loadDeck('observa');
    setMode('solo');
 
