// THE ONLY FILE YOU EDIT WHEN ADDING A SIMULATION.
// 1. Put the .html file in the right course/unit folder.
// 2. Add one line to that unit's "sims" list below: { title, file, blurb }.
// Bump this number whenever a simulation file changes, so browsers load the new copy.
window.SIMS_VERSION = "202611152045";

window.COURSES = {
  sph4u1: {
    name: "SPH4U1", full: "Grade 12 Physics, University Preparation",
    units: [
      { id: "dynamics", name: "B. Dynamics", sims: [
        { title: "Ramp, Pulley & Static Friction", file: "static-friction-ramp.html", blurb: "Change the masses and see how static friction changes size and direction, with the FBD, graph, and math." }
      ]},
      { id: "energy-momentum", name: "C. Energy and Momentum", sims: [
        { title: "Spring Simple Harmonic Motion", file: "spring-shm.html", blurb: "Horizontal and vertical springs plus the circular-motion link, with vectors, energy bars, and graphs." }
      ]},
      { id: "fields", name: "D. Gravitational, Electric, and Magnetic Fields", sims: [] },
      { id: "light", name: "E. The Wave Nature of Light", sims: [] },
      { id: "modern-physics", name: "F. Revolutions in Modern Physics", sims: [] }
    ]
  },
  sch4u1: {
    name: "SCH4U1", full: "Grade 12 Chemistry, University Preparation",
    units: [
      { id: "organic", name: "B. Organic Chemistry", sims: [] },
      { id: "structure-properties", name: "C. Structure and Properties of Matter", sims: [] },
      { id: "energy-rates", name: "D. Energy Changes and Rates of Reaction", sims: [
        { title: "Pull the Ions Apart", file: "pull-the-ions-apart.html", blurb: "Drag ions out of an NH₄NO₃ or CaCl₂ crystal and watch the water cool or warm as the potential energy changes." },
        { title: "Enthalpy of Solution Lab", file: "enthalpy-of-solution-lab.html", blurb: "Virtual coffee-cup calorimetry: measure mass and volume, dissolve the solid, and collect temperature data to find ΔH." },
        { title: "Collision Theory Lab", file: "collision-theory.html", blurb: "Rotate the reactant molecules and set the temperature to make an effective collision, with repulsion and a live potential energy diagram." }
      ]},
      { id: "equilibrium", name: "E. Chemical Systems and Equilibrium", sims: [] },
      { id: "electrochemistry", name: "F. Electrochemistry", sims: [] }
    ]
  },
  "green-industries": {
    name: "Green Industries", full: "Green Industries, Technological Education",
    units: [
      { id: "fundamentals", name: "A. Green Industries Fundamentals", sims: [] },
      { id: "skills", name: "B. Green Industries Skills", sims: [] },
      { id: "technology-environment-society", name: "C. Technology, the Environment, and Society", sims: [] },
      { id: "careers", name: "D. Professional Practice and Career Opportunities", sims: [] }
    ]
  }
};
