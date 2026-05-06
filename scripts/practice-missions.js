export const PRACTICE_MARKER = "gitflow-practice";

export const missions = [
  {
    id: 1,
    title: "Crear rama develop",
    body: `## Objetivo
Crear la rama principal de integracion llamada \`develop\`.

## Pasos sugeridos
- Sincroniza tu fork con \`main\`.
- Crea la rama con \`git checkout -b develop\`.
- Publica la rama con \`git push -u origin develop\`.

## Criterio de cierre
Cierra este issue cuando la rama \`develop\` exista en GitHub.

## Evidencia sugerida
Incluye una captura o enlace donde se vea la rama \`develop\`.`
  },
  {
    id: 2,
    title: "Crear rama feature/readme-base",
    body: `## Objetivo
Crear una rama de trabajo para iniciar el README del proyecto.

## Pasos sugeridos
- Cambia a \`develop\`.
- Actualiza la rama con \`git pull origin develop\`.
- Crea \`feature/readme-base\` con \`git checkout -b feature/readme-base\`.
- Publica la rama con \`git push -u origin feature/readme-base\`.

## Criterio de cierre
Cierra este issue cuando la rama \`feature/readme-base\` exista en GitHub.`
  },
  {
    id: 3,
    title: "Completar estructura básica del README",
    body: `## Objetivo
Crear la estructura inicial del README del proyecto del estudiante.

## Pasos sugeridos
- Edita \`README.md\` desde la rama \`feature/readme-base\`.
- Agrega estas secciones como encabezados reales, no dentro de bloques de código:
  - \`# Nombre del Proyecto\`
      - \`## Descripción\`
      - \`## Instalación\`
  - \`## Uso\`
  - \`## Autores\`
  - \`## Flujo de trabajo Git\`
  - \`## Evidencias\`
- Puedes dejar texto breve o pendiente en algunas secciones; se completaran mas adelante.
- Haz commit y push de tus cambios.

## Criterio de cierre
Cierra este issue cuando el README tenga todas las secciones requeridas.`
  },
  {
    id: 4,
    title: "Crear Pull Request de feature/readme-base hacia develop",
    body: `## Objetivo
Integrar la primera versión del README a \`develop\` usando un Pull Request.

## Pasos sugeridos
- Abre un Pull Request desde \`feature/readme-base\` hacia \`develop\`.
- En la descripción del Pull Request escribe \`Closes #NUMERO_DEL_ISSUE\` usando el número de este issue.
- Revisa que el workflow de README pase correctamente.
- Solicita revisión si tu docente lo requiere.
- Fusiona el Pull Request cuando esté listo.

## Criterio de cierre
Este issue debe cerrarse automáticamente al fusionar el Pull Request si usaste la palabra clave \`Closes\`.`
  },
  {
    id: 5,
    title: "Crear rama feature/documentacion-extra",
    body: `## Objetivo
Crear una segunda rama de feature para mejorar la documentación.

## Pasos sugeridos
- Cambia a \`develop\`.
- Actualiza la rama con \`git pull origin develop\`.
- Crea \`feature/documentacion-extra\`.
- Publica la rama en GitHub.

## Criterio de cierre
Cierra este issue cuando la rama \`feature/documentacion-extra\` exista en GitHub.`
  },
  {
    id: 6,
    title: "Mejorar README con instalacion, uso y autores",
    body: `## Objetivo
Completar el README para que una persona externa pueda entender y ejecutar el proyecto.

## Pasos sugeridos
- Trabaja en \`feature/documentacion-extra\`.
- Completa especialmente las secciones \`Instalación\`, \`Uso\` y \`Autores\`.
- Agrega comandos reales o ejemplos claros.
- Haz commit y push.

## Criterio de cierre
Cierra este issue cuando el README tenga contenido suficiente en las secciones solicitadas.`
  },
  {
    id: 7,
    title: "Crear Pull Request hacia develop",
    body: `## Objetivo
Integrar la documentacion extra a la rama \`develop\`.

## Pasos sugeridos
- Abre un Pull Request desde \`feature/documentacion-extra\` hacia \`develop\`.
- Usa \`Closes #NUMERO_DEL_ISSUE\` en la descripción del Pull Request.
- Espera que pasen las validaciones.
- Fusiona el Pull Request cuando esté aprobado.

## Criterio de cierre
Este issue debe cerrarse al fusionar el Pull Request.`
  },
  {
    id: 8,
    title: "Crear rama release/v1.0.0",
    body: `## Objetivo
Preparar una rama de release para la primera versión estable.

## Pasos sugeridos
- Cambia a \`develop\`.
- Verifica que \`develop\` tenga los últimos cambios.
- Crea \`release/v1.0.0\`.
- Publica la rama en GitHub.

## Criterio de cierre
Cierra este issue cuando la rama \`release/v1.0.0\` exista en GitHub.`
  },
  {
    id: 9,
    title: "Ajustar README final para release",
    body: `## Objetivo
Hacer una revisión final del README antes de liberar la versión 1.0.0.

## Pasos sugeridos
- Trabaja en \`release/v1.0.0\`.
- Revisa ortografia, claridad y consistencia.
- Agrega en \`Evidencias\` los enlaces o capturas relevantes de la práctica.
- Ejecuta manualmente el workflow de validación de README si lo necesitas.
- Haz commit y push.

## Criterio de cierre
Cierra este issue cuando el README este listo para ser integrado a \`main\`.`
  },
  {
    id: 10,
    title: "Crear Pull Request de release/v1.0.0 hacia main",
    body: `## Objetivo
Integrar la versión candidata a la rama principal \`main\`.

## Pasos sugeridos
- Abre un Pull Request desde \`release/v1.0.0\` hacia \`main\`.
- Usa \`Closes #NUMERO_DEL_ISSUE\` en la descripción del Pull Request.
- Verifica que los workflows pasen.
- Fusiona el Pull Request cuando esté aprobado.

## Criterio de cierre
Este issue debe cerrarse al fusionar el Pull Request.`
  },
  {
    id: 11,
    title: "Crear tag v1.0.0",
    body: `## Objetivo
Marcar la primera versión estable del proyecto con un tag.

## Pasos sugeridos
- Cambia a \`main\`.
- Actualiza con \`git pull origin main\`.
- Crea el tag con \`git tag v1.0.0\`.
- Publica el tag con \`git push origin v1.0.0\`.

## Criterio de cierre
Cierra este issue cuando el tag \`v1.0.0\` exista en GitHub.`
  },
  {
    id: 12,
    title: "Crear rama hotfix/readme-typo",
    body: `## Objetivo
Simular una corrección urgente sobre la versión publicada.

## Pasos sugeridos
- Cambia a \`main\`.
- Actualiza con \`git pull origin main\`.
- Crea \`hotfix/readme-typo\`.
- Publica la rama en GitHub.

## Criterio de cierre
Cierra este issue cuando la rama \`hotfix/readme-typo\` exista en GitHub.`
  },
  {
    id: 13,
    title: "Corregir un error menor del README",
    body: `## Objetivo
Aplicar una corrección pequeña en el README desde una rama de hotfix.

## Pasos sugeridos
- Trabaja en \`hotfix/readme-typo\`.
- Corrige una falta de ortografia, una palabra repetida o un detalle menor.
- Haz commit y push.

## Criterio de cierre
Cierra este issue cuando la corrección esté publicada en la rama de hotfix.`
  },
  {
    id: 14,
    title: "Hacer Pull Request del hotfix hacia main y develop",
    body: `## Objetivo
Integrar el hotfix en \`main\` y también en \`develop\` para que ambas ramas queden consistentes.

## Pasos sugeridos
- Abre un Pull Request desde \`hotfix/readme-typo\` hacia \`main\`.
- Fusiona el Pull Request cuando pase la validación.
- Abre un segundo Pull Request desde \`hotfix/readme-typo\` hacia \`develop\`, o sincroniza \`develop\` según indique tu docente.
- Usa \`Closes #NUMERO_DEL_ISSUE\` en el segundo Pull Request, o cierra manualmente este issue solo cuando ambos destinos estén actualizados.

## Criterio de cierre
Este es el último issue de la práctica. Al cerrarlo, revisa que tus evidencias estén completas.`
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

${mission.body}

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
