# Nombre del Proyecto

Git Flow Practice

## Descripción

Repositorio plantilla para una práctica guiada de Git y Git Flow en cursos universitarios de Ingeniería de Software.

La práctica crea issues progresivos para que cada estudiante trabaje ramas, Pull Requests, releases, tags, hotfixes, `git stash` y documentación del proyecto.

## Instalación

Este repositorio no requiere instalación técnica para comenzar.

Para usarlo como estudiante:

1. Crea un repositorio desde este template o haz fork.
2. Entra a la pestaña **Actions**.
3. Espera que se ejecute **Iniciar práctica** o ejecútalo manualmente si el primer issue no aparece.

Para ejecutar validaciones localmente necesitas Node.js 20 o superior:

```bash
npm run validate:readme
npm run validate:gitflow
```

## Uso

El estudiante debe seguir los issues creados automáticamente en GitHub.

El flujo general es:

1. Crear `develop`.
2. Crear ramas `feature/`.
3. Practicar `git stash`.
4. Completar el README del proyecto de curso.
5. Integrar cambios con Pull Requests.
6. Crear una rama `release/`.
7. Crear el tag `v1.0.0`.
8. Corregir un detalle con una rama `hotfix/`.

## Autores

- Plantilla para estudiantes de Ingeniería de Software.
- Docente responsable: ajustar según el curso.

## Flujo de trabajo Git

La práctica usa una versión guiada de Git Flow:

- `main`: rama estable.
- `develop`: rama de integración.
- `feature/readme-base`: rama para crear el README inicial.
- `feature/documentacion-extra`: rama para mejorar la documentación.
- `release/v1.0.0`: rama de preparación de versión.
- `hotfix/readme-typo`: rama para una corrección menor.

Los workflows de GitHub Actions crean y cierran issues automáticamente a medida que el estudiante avanza.
