export const PRACTICE_MARKER = "gitflow-practice";

export const missions = [
  {
    id: 1,
    title: "Crear rama develop",
    summary: "Crearás la rama de integración donde se acumulan los cambios antes de preparar una versión.",
    why: "En Git Flow, `develop` protege a `main` y permite integrar trabajo en curso sin afectar la versión estable.",
    body: `## Objetivo
Crear la rama principal de integración llamada \`develop\`.

## Pasos sugeridos
- Sincroniza tu fork con \`main\`.
- Crea la rama con \`git checkout -b develop\`.
- Publica la rama con \`git push -u origin develop\`.

## Criterio de cierre
El workflow cerrará este issue cuando la rama \`develop\` exista en GitHub.`
  },
  {
    id: 2,
    title: "Crear rama feature/readme-base",
    summary: "Crearás una rama de feature para trabajar el README sin tocar directamente `develop`.",
    why: "Las ramas `feature/` aíslan cambios pequeños y facilitan revisarlos mediante Pull Requests.",
    body: `## Objetivo
Crear una rama de trabajo para iniciar el README del proyecto.

## Pasos sugeridos
- Cambia a \`develop\`.
- Actualiza la rama con \`git pull origin develop\`.
- Crea \`feature/readme-base\` con \`git checkout -b feature/readme-base\`.
- Publica la rama con \`git push -u origin feature/readme-base\`.

## Criterio de cierre
El workflow cerrará este issue cuando la rama \`feature/readme-base\` exista en GitHub.`
  },
  {
    id: 3,
    title: "Completar estructura básica del README",
    summary: "Agregarás la estructura mínima del README que documentará el proyecto durante la práctica.",
    why: "Un README bien organizado ayuda a que otras personas entiendan el repositorio y puedan usar el proyecto.",
    body: `## Objetivo
Crear la estructura inicial del README del proyecto del estudiante.

## Pasos sugeridos
- Edita \`README.md\` desde la rama \`feature/readme-base\`.
- Reemplaza el contenido de \`README.md\` con este ejemplo.
- Cambia los textos entre corchetes para adaptarlos a tu proyecto de curso.

\`\`\`markdown
# [Nombre del Proyecto]

## Descripción

[Explica en 3 a 5 líneas qué problema resuelve el proyecto, quién lo usaría y cuál es su objetivo principal.]

## Instalación

[Describe cómo preparar el proyecto según tu caso real.]

Ejemplo para un proyecto con código:

1. Clonar el repositorio.
2. Instalar las herramientas necesarias.
3. Ejecutar los comandos de configuración.

Ejemplo si no requiere instalación técnica:

Este proyecto no requiere instalación. Para revisarlo, abre los archivos principales del repositorio y sigue las instrucciones de la sección Uso.

## Uso

[Explica cómo se utiliza, ejecuta o revisa el proyecto.]

Incluye pasos concretos. Por ejemplo:

1. Abrir el proyecto.
2. Ejecutar la aplicación, prototipo o documento principal.
3. Revisar el flujo principal de uso.

## Autores

- [Nombre del integrante 1] - [Rol o responsabilidad]
- [Nombre del integrante 2] - [Rol o responsabilidad]

## Flujo de trabajo Git

Durante la práctica se usará Git Flow:

- \`main\`: rama principal y estable.
- \`develop\`: rama de integración.
- \`feature/readme-base\`: rama para crear la primera versión del README.
- \`feature/documentacion-extra\`: rama para mejorar la documentación.
- \`release/v1.0.0\`: rama para preparar la entrega final.
- \`hotfix/readme-typo\`: rama para corregir un error menor.

La versión final se marcará con el tag \`v1.0.0\`.
\`\`\`

- Haz commit y push de tus cambios.

## Criterio de cierre
El workflow cerrará este issue cuando el README tenga todas las secciones requeridas.`
  },
  {
    id: 4,
    title: "Crear Pull Request de feature/readme-base hacia develop",
    summary: "Abrirás y fusionarás un Pull Request para integrar el README base en `develop`.",
    why: "El Pull Request deja trazabilidad, permite revisión y evita integrar cambios sin una conversación mínima.",
    body: `## Objetivo
Integrar la primera versión del README a \`develop\` usando un Pull Request.

## Pasos sugeridos
- Abre un Pull Request desde \`feature/readme-base\` hacia \`develop\`.
- Revisa que el workflow de README pase correctamente.
- Solicita revisión si tu docente lo requiere.
- Fusiona el Pull Request cuando esté listo.

## Criterio de cierre
El workflow de progreso cerrará este issue cuando detecte el Pull Request fusionado hacia \`develop\`.`
  },
  {
    id: 5,
    title: "Crear rama feature/documentacion-extra",
    summary: "Crearás una segunda rama de feature para ampliar la documentación del proyecto.",
    why: "Separar mejoras en ramas pequeñas hace más claro qué cambia y por qué se integra.",
    body: `## Objetivo
Crear una segunda rama de feature para mejorar la documentación.

## Pasos sugeridos
- Cambia a \`develop\`.
- Actualiza la rama con \`git pull origin develop\`.
- Crea \`feature/documentacion-extra\`.
- Publica la rama en GitHub.

## Criterio de cierre
El workflow cerrará este issue cuando la rama \`feature/documentacion-extra\` exista en GitHub.`
  },
  {
    id: 6,
    title: "Practicar git stash antes de cambiar de contexto",
    summary: "Guardarás cambios temporales del README sin convertirlos todavía en commit.",
    why: "`git stash` te permite cambiar de contexto con un árbol limpio sin perder trabajo incompleto.",
    body: `## Objetivo
Aprender a guardar temporalmente cambios sin crear un commit.

## Situación
Imagina que empezaste a mejorar el README en \`feature/documentacion-extra\`, pero necesitas cambiar de rama o revisar algo antes de terminar. En lugar de hacer un commit incompleto, usarás \`git stash\`.

## Pasos sugeridos
- Asegúrate de estar en \`feature/documentacion-extra\`.
- Haz un cambio pequeño en \`README.md\`, por ejemplo una nota temporal en la sección \`Uso\` o \`Instalación\`.
- Revisa el estado con \`git status\`.
- Guarda el cambio temporalmente con:

\`\`\`bash
git stash push -m "avance temporal documentacion extra"
\`\`\`

- Verifica que el directorio quedó limpio con \`git status\`.
- Revisa la lista de stashes con \`git stash list\`.

## Criterio de cierre
El workflow cerrará este issue cuando corresponda avanzar a la siguiente misión.`
  },
  {
    id: 7,
    title: "Recuperar cambios guardados con git stash",
    summary: "Recuperarás los cambios guardados y los convertirás en un commit real cuando ya estén listos.",
    why: "Saber volver desde un stash evita perder avances y enseña la diferencia entre trabajo temporal y cambios versionados.",
    body: `## Objetivo
Aplicar de nuevo los cambios guardados con \`git stash\` y continuar trabajando normalmente.

## Pasos sugeridos
- Asegúrate de estar en \`feature/documentacion-extra\`.
- Revisa los cambios guardados con \`git stash list\`.
- Recupera el stash con:

\`\`\`bash
git stash pop
\`\`\`

- Resuelve cualquier conflicto si Git lo indica.
- Revisa \`README.md\` y conserva el contenido que sí debe quedar en la documentación.
- Haz commit y push cuando el cambio ya esté listo:

\`\`\`bash
git add README.md
git commit -m "Mejora documentación del README"
git push
\`\`\`

## Criterio de cierre
El workflow cerrará este issue cuando hayas recuperado el stash, convertido el cambio en un commit real y publicado la rama.`
  },
  {
    id: 8,
    title: "Mejorar README con instalación, uso y autores",
    summary: "Completarás secciones prácticas del README para que el proyecto sea entendible y ejecutable.",
    why: "La documentación útil no solo enumera títulos: guía instalación, uso y responsabilidades del equipo.",
    body: `## Objetivo
Completar el README de acuerdo con el proyecto de curso para que una persona externa pueda entenderlo, prepararlo y usarlo.

## Pasos sugeridos
- Trabaja en \`feature/documentacion-extra\`.
- Completa especialmente las secciones \`Instalación\`, \`Uso\` y \`Autores\` según las características reales de tu proyecto de curso.
- En \`Instalación\`, explica lo que otra persona necesita para preparar el proyecto. Por ejemplo:
  - requisitos previos, software o herramientas necesarias;
  - pasos para clonar, configurar o abrir el proyecto;
  - comandos de instalación si tu proyecto los necesita;
  - si no hay instalación técnica, indícalo y explica cómo acceder, revisar o ejecutar la entrega.
- En \`Uso\`, explica cómo se utiliza el proyecto. Por ejemplo:
  - cómo iniciar la aplicación, prototipo, informe o artefacto;
  - qué flujo principal debe seguir el usuario;
  - ejemplos de comandos, pantallas o acciones importantes;
  - qué resultado debería observarse al usarlo correctamente.
- En \`Autores\`, incluye nombres de integrantes, curso, grupo o rol de cada persona si aplica.
- Haz commit y push.

## Criterio de cierre
El workflow cerrará este issue cuando el README explique instalación, uso y autores de forma coherente con tu proyecto de curso.`
  },
  {
    id: 9,
    title: "Crear Pull Request hacia develop",
    summary: "Integrarás la documentación extra a `develop` por medio de un Pull Request.",
    why: "La integración mediante PR permite verificar que la mejora documental no rompa reglas del repositorio.",
    body: `## Objetivo
Integrar la documentación extra a la rama \`develop\`.

## Pasos sugeridos
- Abre un Pull Request desde \`feature/documentacion-extra\` hacia \`develop\`.
- Espera que pasen las validaciones.
- Fusiona el Pull Request cuando esté aprobado.

## Criterio de cierre
El workflow de progreso cerrará este issue cuando detecte el Pull Request fusionado hacia \`develop\`.`
  },
  {
    id: 10,
    title: "Crear rama release/v1.0.0",
    summary: "Crearás una rama de release para preparar la primera versión estable.",
    why: "Una rama `release/` congela la versión candidata y permite ajustes finales antes de llegar a `main`.",
    body: `## Objetivo
Preparar una rama de release para la primera versión estable.

## Pasos sugeridos
- Cambia a \`develop\`.
- Verifica que \`develop\` tenga los últimos cambios.
- Crea \`release/v1.0.0\`.
- Publica la rama en GitHub.

## Criterio de cierre
El workflow cerrará este issue cuando la rama \`release/v1.0.0\` exista en GitHub.`
  },
  {
    id: 11,
    title: "Ajustar README final para release",
    summary: "Revisarás el README final antes de llevar la versión candidata a `main`.",
    why: "La release debe salir con documentación consistente y una explicación clara del flujo usado.",
    body: `## Objetivo
Hacer una revisión final del README antes de liberar la versión 1.0.0.

## Pasos sugeridos
- Trabaja en \`release/v1.0.0\`.
- Revisa ortografía, claridad y consistencia.
- Ejecuta manualmente el workflow de validación de README si lo necesitas.
- Haz commit y push.

## Criterio de cierre
El workflow cerrará este issue cuando el README esté listo para ser integrado a \`main\`.`
  },
  {
    id: 12,
    title: "Crear Pull Request de release/v1.0.0 hacia main",
    summary: "Fusionarás la rama de release hacia `main` para publicar la versión estable.",
    why: "`main` representa el estado listo para entregar; por eso solo debe recibir releases o hotfixes controlados.",
    body: `## Objetivo
Integrar la versión candidata a la rama principal \`main\`.

## Pasos sugeridos
- Abre un Pull Request desde \`release/v1.0.0\` hacia \`main\`.
- Verifica que los workflows pasen.
- Fusiona el Pull Request cuando esté aprobado.

## Criterio de cierre
El workflow de progreso cerrará este issue cuando detecte el Pull Request de release fusionado hacia \`main\`.`
  },
  {
    id: 13,
    title: "Crear tag v1.0.0",
    summary: "Crearás un tag para identificar exactamente el commit de la versión 1.0.0.",
    why: "Los tags permiten ubicar y auditar versiones publicadas sin depender solo del historial de commits.",
    body: `## Objetivo
Marcar la primera versión estable del proyecto con un tag.

## Pasos sugeridos
- Cambia a \`main\`.
- Actualiza con \`git pull origin main\`.
- Crea el tag con \`git tag v1.0.0\`.
- Publica el tag con \`git push origin v1.0.0\`.

## Criterio de cierre
El workflow cerrará este issue cuando el tag \`v1.0.0\` exista en GitHub.`
  },
  {
    id: 14,
    title: "Crear rama hotfix/readme-typo",
    summary: "Crearás una rama de hotfix desde `main` para simular una corrección urgente.",
    why: "Los hotfixes permiten corregir producción sin esperar el ciclo normal de features y releases.",
    body: `## Objetivo
Simular una corrección urgente sobre la versión publicada.

## Pasos sugeridos
- Cambia a \`main\`.
- Actualiza con \`git pull origin main\`.
- Crea \`hotfix/readme-typo\`.
- Publica la rama en GitHub.

## Criterio de cierre
El workflow cerrará este issue cuando la rama \`hotfix/readme-typo\` exista en GitHub.`
  },
  {
    id: 15,
    title: "Corregir un error menor del README",
    summary: "Harás una corrección pequeña y controlada en el README desde la rama de hotfix.",
    why: "Un hotfix debe ser puntual; si crece demasiado, deja de ser una corrección urgente y se vuelve otro tipo de cambio.",
    body: `## Objetivo
Aplicar una corrección pequeña en el README desde una rama de hotfix.

## Pasos sugeridos
- Trabaja en \`hotfix/readme-typo\`.
- Corrige una falta de ortografía, una palabra repetida o un detalle menor.
- Haz commit y push.

## Criterio de cierre
El workflow cerrará este issue cuando la corrección esté publicada en la rama de hotfix.`
  },
  {
    id: 16,
    title: "Hacer Pull Request del hotfix hacia main y develop",
    summary: "Integrarás el hotfix en `main` y también en `develop` para mantener ambas líneas sincronizadas.",
    why: "Si el hotfix solo queda en `main`, el error puede reaparecer cuando `develop` vuelva a integrarse.",
    body: `## Objetivo
Integrar el hotfix en \`main\` y también en \`develop\` para que ambas ramas queden consistentes.

## Pasos sugeridos
- Abre un Pull Request desde \`hotfix/readme-typo\` hacia \`main\`.
- Fusiona el Pull Request cuando pase la validación.
- Abre un segundo Pull Request desde \`hotfix/readme-typo\` hacia \`develop\`, o sincroniza \`develop\` según indique tu docente.

## Criterio de cierre
Este es el último issue de la práctica. El workflow lo cerrará cuando el hotfix esté integrado en \`main\` y \`develop\`.`
  }
];

export function missionNumber(id) {
  return String(id).padStart(2, "0");
}

export function missionMarker(id) {
  return `<!-- ${PRACTICE_MARKER}:mission=${id} -->`;
}

export function missionIssueTitle(mission) {
  return `[Misión ${missionNumber(mission.id)}] ${mission.title}`;
}

export function missionIssueBody(mission) {
  return `${missionMarker(mission.id)}

## Resumen rápido
- **Qué harás:** ${mission.summary}
- **Por qué importa:** ${mission.why}

${mission.body}

## Seguimiento automático
Cuando avances en esta misión, el workflow **Validar progreso de misiones** intentará revisar los criterios verificables. Si cumple, comentará el resultado, cerrará este issue y creará la siguiente misión. Si no cumple todavía, dejará una checklist breve con lo que falta.

No cierres este issue manualmente. Si se cierra desde la interfaz de GitHub o desde un Pull Request, el workflow **Proteger cierre de misiones** lo reabrirá.

---
Práctica guiada de Git Flow. Identificador interno: misión ${mission.id}.`;
}

export function getMissionById(id) {
  return missions.find((mission) => mission.id === Number(id));
}

export function getNextMission(id) {
  return getMissionById(Number(id) + 1);
}

export function extractMissionId(text = "") {
  const markerMatch = text.match(/gitflow-practice:mission=(\d+)/i);
  if (markerMatch) {
    return Number(markerMatch[1]);
  }

  const titleMatch = text.match(/\[?Misi[oó]n\s+0?(\d+)\]?/i);
  if (titleMatch) {
    return Number(titleMatch[1]);
  }

  return null;
}
