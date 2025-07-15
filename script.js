const malla = {
  "Semestre 1": [
    "Historia y Fundamentos de la Psicología",
    "Tópicos de Neurobiología",
    "Psicología y Sociedad",
    "Inglés I",
    "Eje Formación Interdisciplinaria I"
  ],
  "Semestre 2": [
    { nombre: "Sistema Psicológicos", prerrequisitos: ["Historia y Fundamentos de la Psicología"] },
    { nombre: "Procesos Psicológicos y Neurociencias", prerrequisitos: ["Tópicos de Neurobiología"] },
    { nombre: "Psicología y Epistemología", prerrequisitos: ["Historia y Fundamentos de la Psicología"] },
    { nombre: "Inglés II", prerrequisitos: ["Inglés I"] },
    "Habilidades Comunicativas"
  ],
  "Semestre 3": [
    { nombre: "Psicoanálisis I", prerrequisitos: ["Psicología y Epistemología"] },
    { nombre: "Psicología del Desarrollo I", prerrequisitos: ["Sistema Psicológicos"] },
    { nombre: "Investigación I", prerrequisitos: ["Habilidades Comunicativas"] },
    { nombre: "Inglés III", prerrequisitos: ["Inglés II"] },
    "Razonamiento Científico y TICs"
  ],
  "Semestre 4": [
    { nombre: "Psicoanálisis II", prerrequisitos: ["Psicoanálisis I"] },
    { nombre: "Psicología del Desarrollo II", prerrequisitos: ["Psicología del Desarrollo I"] },
    { nombre: "Investigación II", prerrequisitos: ["Investigación I"] },
    { nombre: "Inglés IV", prerrequisitos: ["Inglés III"] },
    { nombre: "Eje Formación Interdisciplinaria II", prerrequisitos: ["Eje Formación Interdisciplinaria I"] }
  ],
  "Semestre 5": [
    { nombre: "Psicodiagnóstico Clínico I", prerrequisitos: ["Psicoanálisis II", "Psicología del Desarrollo II"] },
    { nombre: "Psicopatología y Psiquiatría I", prerrequisitos: ["Procesos Psicológicos y Neurociencias", "Psicología del Desarrollo II"] },
    { nombre: "Taller de Integración", prerrequisitos: ["Investigación II", "Psicopatología y Psiquiatría I"] },
    { nombre: "Psicología Social", prerrequisitos: ["Psicología y Sociedad"] },
    { nombre: "Eje Formación Interdisciplinaria III", prerrequisitos: ["Eje Formación Interdisciplinaria II"] }
  ],
  "Semestre 6": [
    { nombre: "Psicodiagnóstico Clínico II", prerrequisitos: ["Psicodiagnóstico Clínico I"] },
    { nombre: "Psicopatología y Psiquiatría II", prerrequisitos: ["Psicopatología y Psiquiatría I"] },
    { nombre: "Psicología Educacional", prerrequisitos: ["Psicología del Desarrollo II"] },
    { nombre: "Diagnóstico e Intervención Social", prerrequisitos: ["Psicología Social"] },
    { nombre: "Psicología del Trabajo y las Organizaciones", prerrequisitos: ["Psicología Social"] }
  ],
  "Semestre 7": [
    { nombre: "Clínica Sistémica", prerrequisitos: ["Psicodiagnóstico Clínico II"] },
    { nombre: "Psicopatología Infantojuvenil", prerrequisitos: ["Psicología del Desarrollo II", "Psicopatología y Psiquiatría I"] },
    { nombre: "Diagnóstico e Intervención Educacional", prerrequisitos: ["Psicología Educacional"] },
    { nombre: "Psicología Jurídica", prerrequisitos: ["Diagnóstico e Intervención Social"] },
    { nombre: "Diagnóstico e Intervención Organizacional", prerrequisitos: ["Psicología del Trabajo y las Organizaciones"] }
  ],
  "Semestre 8": [
    { nombre: "Clínica Psicoanalítica", prerrequisitos: ["P]()
