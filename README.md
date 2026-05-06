# Nombre del Proyecto

Plantilla de práctica guiada de Git y Git Flow para estudiantes universitarios de Ingeniería de Software.

## Descripción

Este repositorio sirve como base para una actividad automatizada sobre Git Flow. La idea es que cada estudiante haga fork, active el workflow **Iniciar práctica** y avance por una secuencia de issues tipo misión.

Durante la práctica se trabajan ramas `develop`, `feature/`, `release/` y `hotfix/`, Pull Requests, cierre automático de issues, validaciones con GitHub Actions, releases conceptuales, tags y mejora progresiva del README.

## Instalación

Para usar la plantilla:

1. Haz fork de este repositorio en GitHub.
2. Clona tu fork:

```bash
git clone https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
cd NOMBRE_DEL_REPO
```

3. Verifica que Node.js 20 o superior esté disponible si quieres ejecutar scripts localmente:

```bash
node --version
npm run validate:readme
```

No se requieren dependencias externas ni secretos adicionales.

## Uso

Para iniciar la práctica en GitHub:

1. Entra a la pestaña **Actions** de tu fork.
2. Selecciona **Iniciar práctica**.
3. Ejecuta el workflow con **Run workflow**.
4. Abre la pestaña **Issues** y sigue la primera misión.

Cada vez que cierres una misión, el workflow **Issue progresivo** creará la siguiente, siempre que no exista ya.

## Autores

- Docente responsable: reemplazar con el nombre del docente.
- Estudiante: reemplazar con el nombre del estudiante.
- Curso: Ingeniería de Software.

## Flujo de trabajo Git

La actividad sigue este flujo general:

1. Crear `develop` desde `main`.
2. Crear ramas `feature/` desde `develop`.
3. Abrir Pull Requests de features hacia `develop`.
4. Crear `release/v1.0.0` desde `develop`.
5. Abrir Pull Request de release hacia `main`.
6. Crear el tag `v1.0.0`.
7. Crear `hotfix/readme-typo` desde `main`.
8. Integrar el hotfix hacia `main` y `develop`.

Reglas de trabajo:

- No trabajar directamente sobre `main` para cambios grandes.
- Usar commits pequeños y mensajes claros.
- Usar Pull Requests para integrar cambios.
- Cerrar issues desde Pull Requests con palabras clave como `Closes #1`.
- Mantener evidencias de ramas, PRs, workflows y tag final.

Estructura esperada del README del estudiante:

```markdown
# Nombre del Proyecto
## Descripción
## Instalación
## Uso
## Autores
## Flujo de trabajo Git
## Evidencias
```

## Evidencias

Al terminar, el estudiante debe entregar:

- Enlace al fork.
- Enlace a los Pull Requests creados.
- Capturas o enlaces de los workflows ejecutados.
- Evidencia de las ramas `develop`, `feature/`, `release/` y `hotfix/`.
- Evidencia del tag `v1.0.0`.
- README final validado por el workflow.

Consulta las guías completas:

- [Instrucciones para estudiantes](docs/instrucciones-estudiante.md)
- [Instrucciones para docentes](docs/instrucciones-docente.md)
