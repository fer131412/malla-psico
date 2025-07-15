const ramos = [
  // Formato: { nombre, semestre, prerrequisitos: [nombres de ramos] }

  // 1er semestre
  { nombre: "Historia y Fundamentos de la Psicología", semestre: 1 },
  { nombre: "Tópicos de Neurobiología", semestre: 1 },
  { nombre: "Psicología y Sociedad", semestre: 1 },
  { nombre: "Inglés I", semestre: 1 },
  { nombre: "Eje Formación Interdisciplinaria I", semestre: 1 },

  // 2º semestre
  { nombre: "Sistema Psicológicos", semestre: 2, prerrequisitos: ["Historia y Fundamentos de la Psicología"] },
  { nombre: "Procesos Psicológicos y Neurociencias", semestre: 2, prerrequisitos: ["Tópicos de Neurobiología"] },
  { nombre: "Psicología y Epistemología", semestre: 2, prerrequisitos: ["Historia y Fundamentos de la Psicología"] },
  { nombre: "Inglés II", semestre: 2, prerrequisitos: ["Inglés I"] },
  { nombre: "Habilidades Comunicativas", semestre: 2 },

  // 3er semestre
  { nombre: "Psicoanálisis I", semestre: 3, prerrequisitos: ["Psicología y Epistemología"] },
  { nombre: "Psicología del Desarrollo I", semestre: 3, prerrequisitos: ["Sistema Psicológicos"] },
  { nombre: "Investigación I", semestre: 3, prerrequisitos: ["Habilidades Comunicativas"] },
  { nombre: "Inglés III", semestre: 3, prerrequisitos: ["Inglés II"] },
  { nombre: "Razonamiento Científico y TICs", semestre: 3 },

  // 4º semestre
  { nombre: "Psicoanálisis II", semestre: 4, prerrequisitos: ["Psicoanálisis I"] },
  { nombre: "Psicología del Desarrollo II", semestre: 4, prerrequisitos: ["Psicología del Desarrollo I"] },
  { nombre: "Investigación II", semestre: 4, prerrequisitos: ["Investigación I"] },
  { nombre: "Inglés IV", semestre: 4, prerrequisitos: ["Inglés III"] },
  { nombre: "Eje Formación Interdisciplinaria II", semestre: 4, prerrequisitos: ["Eje Formación Interdisciplinaria I"] },

  // 5º semestre
  { nombre: "Psicodiagnóstico Clínico I", semestre: 5, prerrequisitos: ["Psicoanálisis II", "Psicología del Desarrollo II"] },
  { nombre: "Psicopatología y Psiquiatría I", semestre: 5, prerrequisitos: ["Procesos Psicológicos y Neurociencias", "Psicología del Desarrollo II"] },
  { nombre: "Taller de Integración", semestre: 5, prerrequisitos: ["Investigación II", "Psicopatología y Psiquiatría I"] },
  { nombre: "Psicología Social", semestre: 5, prerrequisitos: ["Psicología y Sociedad"] },
  { nombre: "Eje Formación Interdisciplinaria III", semestre: 5, prerrequisitos: ["Eje Formación Interdisciplinaria II"] },

  // 6º semestre
  { nombre: "Psicodiagnóstico Clínico II", semestre: 6, prerrequisitos: ["Psicodiagnóstico Clínico I"] },
  { nombre: "Psicopatología y Psiquiatría II", semestre: 6, prerrequisitos: ["Psicopatología y Psiquiatría I"] },
  { nombre: "Psicología Educacional", semestre: 6, prerrequisitos: ["Psicología del Desarrollo II"] },
  { nombre: "Diagnóstico e Intervención Social", semestre: 6, prerrequisitos: ["Psicología Social"] },
  { nombre: "Psicología del Trabajo y las Organizaciones", semestre: 6, prerrequisitos: ["Psicología Social"] },

  // 7º semestre
  { nombre: "Clínica Sistémica", semestre: 7, prerrequisitos: ["Psicodiagnóstico Clínico II"] },
  { nombre: "Psicopatología Infantojuvenil", semestre: 7, prerrequisitos: ["Psicología del Desarrollo II", "Psicopatología y Psiquiatría I"] },
  { nombre: "Diagnóstico e Intervención Educacional", semestre: 7, prerrequisitos: ["Psicología Educacional"] },
  { nombre: "Psicología Jurídica", semestre: 7, prerrequisitos: ["Diagnóstico e Intervención Social"] },
  { nombre: "Diagnóstico e Intervención Organizacional", semestre: 7, prerrequisitos: ["Psicología del Trabajo y las Organizaciones"] },

  // 8º semestre
  { nombre: "Clínica Psicoanalítica", semestre: 8, prerrequisitos: ["Psicoanálisis II", "Psicodiagnóstico Clínico II"] },
  { nombre: "Clínica Infantojuvenil", semestre: 8, prerrequisitos: ["Psicopatología Infantojuvenil", "Clínica Sistémica"] },
  { nombre: "Integrador I: Taller de Investigación", semestre: 8, prerrequisitos: ["Taller de Integración"] },
  { nombre: "Diagnóstico e Intervención Jurídica", semestre: 8, prerrequisitos: ["Psicología Jurídica"] },
  { nombre: "Intervención Clínica Sistémica", semestre: 8, prerrequisitos: ["Clínica Sistémica"] },

  // 9º semestre
  { nombre: "Taller de Intervención Clínica", semestre: 9, prerrequisitos: ["Clínica Psicoanalítica", "Clínica Sistémica"] },
  { nombre: "Psicología y Salud", semestre: 9, prerrequisitos: ["Psicopatología y Psiquiatría II"] },
  { nombre: "Taller de Diagnóstico e Intervención Psicosocial", semestre: 9, prerrequisitos: ["Diagnóstico e Intervención Social"] },
  { nombre: "Electivo de Formación Profesional I", semestre: 9 },
  { nombre: "Electivo de Formación Profesional II", semestre: 9, prerrequisitos: ["Electivo de Formación Profesional I"] },

  // 10º semestre
  { nombre: "Integrador II: Práctica Profesional", semestre: 10 }
];

// Estado guardado
const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function renderMalla() {
  const container = document.getElementById("mallaContainer");
  container.innerHTML = "";

  for (let s = 1; s <= 10; s++) {
    const sem = document.createElement("div");
    sem.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${s}`;
    sem.appendChild(titulo);

    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;

      const aprobado = estado[ramo.nombre] === true;

      if (ramo.prerrequisitos && !ramo.prerrequisitos.every(pr => estado[pr])) {
        div.classList.add("bloqueado");
      } else if (aprobado) {
        div.classList.add("aprobado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        estado[ramo.nombre] = !estado[ramo.nombre];
        localStorage.setItem("estadoRamos", JSON.stringify(estado));
        renderMalla();
      });

      sem.appendChild(div);
    });

    container.appendChild(sem);
  }
}

// Render inicial
renderMalla();

