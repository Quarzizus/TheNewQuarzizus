import casatoro from "../images/brands/Casatoro.jpg";
import mercedes from "../images/brands/mercedes.jpg";
import bonaparte from "../images/brands/bonaparte.jpg";
import bellpi from "../images/brands/bellpi.jpg";
import byd from "../images/brands/byd.jpg";
import mitsubishi from "../images/brands/mitsubishi.jpg";
import corsox from "../images/brands/corsox.jpg";

const experiencias = [
  {
    id: 1,
    company: {
      name: "Corsox",
      description:
        "Corsox es una empresa internacional dedicada a ofrecer soluciones tecnológicas y estratégicas en Desarrollo de Software, SaaS, Consultoría Tecnológica y Marketing Digital.",
      logo: corsox,
    },
    jobTitle: "Desarrollador Frontend",
    period: "sep. 2024 - Actualmente",
    location: "Medellín, Antioquia, Colombia · En remoto",
    tasks: [
      "Diseñé e implementé estrategias de testing end-to-end (E2E), mejorando la cobertura de pruebas y reduciendo errores en producción.",
      "Automaticé procesos de limpieza y formateo de datos con Python, optimizando tiempos de procesamiento y garantizando integridad de la información.",
      "Desarrollé e integré funcionalidades clave para el sistema de Recursos Humanos de Farmatodo en el frontend, cumpliendo con los estándares de calidad y plazos establecidos.",
      "Produje materiales audiovisuales y guías de usuario para facilitar la adopción y capacitación en el uso de la aplicación interna.",
      "Lideré sesiones de levantamiento de requerimientos y participé en la planeación de productos internos, alineando necesidades del negocio con soluciones técnicas viables.",
    ],
    results: [], // No specific branded results for Corsox
    skills:
      "JavaScript, TypeScript, Python, React, Testing E2E, Playwright, Cypress, Git, Node.js, Automatización de datos.",
  },
  {
    id: 2,
    company: {
      name: "CasaToro Automotriz",
      description:
        "CasaToro, fundada en 1934, es la red de concesionarios y servicios posventa más grande de Colombia. Representa marcas líderes como Ford, Mazda, Renault, Volkswagen, Audi, SEAT, Cupra y John Deere.",
      logo: casatoro,
    },
    jobTitle: "Desarrollador Frontend",
    period: "abr. 2022 - jun. 2024 · 2 años 3 meses",
    location: "Medellín, Antioquia, Colombia · En remoto",
    tasks: [
      "Convertí diseños en Figma, Sketch y Adobe XD en aplicaciones web funcionales, asegurando fidelidad visual y experiencia de usuario óptima.",
      "Implementé flujos y pasarelas de pago seguras y eficientes, facilitando la integración de sistemas de cobro en entornos web.",
      "Investigué y apliqué estrategias de testing frontend (unitarias y E2E), mejorando la estabilidad y confiabilidad de las interfaces.",
      "Brindé soporte técnico y mantenimiento a sitios web de marcas reconocidas como Mercedes-Benz, Mazda, Mitsubishi y Chevrolet, garantizando alto rendimiento y disponibilidad.",
      "Ejecuté estrategias de optimización SEO en landing pages, aumentando su visibilidad y posicionamiento en buscadores.",
    ],
    results: [
      {
        id: 0,
        name: "Mercedes Benz",
        url: "https://mercedes-benz.motorysa.com/",
        image: mercedes,
      },
      {
        id: 1,
        name: "Bonaparte",
        url: "https://www.bonaparte.com.co/",
        image: bonaparte,
      },
      {
        id: 2,
        name: "Usados Casatoro",
        url: "https://usados.casatoro.com/",
        image: casatoro,
      },
      {
        id: 3,
        name: "Bellpi",
        url: "https://www.bellpi.com/",
        image: bellpi,
      },
      {
        id: 4,
        name: "BYDAuto",
        url: "https://bydauto.com.co/",
        image: byd,
      },
      {
        id: 5,
        name: "Mitsubishi Motors",
        url: "https://mitsubishi-motors.com.co/",
        image: mitsubishi,
      },
    ],
    skills:
      "JavaScript, TypeScript, CSS, React (y su ecosistema), Vue (y su ecosistema), Next.js, Nuxt.js, Git, Redux, Node, Strapi.",
  },
];

export { experiencias };
