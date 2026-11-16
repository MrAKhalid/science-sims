// THE ONLY FILE YOU EDIT WHEN ADDING A SIMULATION.
// 1. Put the .html file in the right course/unit folder.
// 2. Add one line to that unit's "sims" list below: { title, file, blurb }.
// Bump this number whenever a simulation file changes, so browsers load the new copy.
window.SIMS_VERSION = "202611162310";

window.COURSES = {
  sph4u1: {
    name: "SPH4U1", full: "Grade 12 Physics, University Preparation",
    units: [
      { id: "dynamics", name: "B. Dynamics", sims: [
        { title: "Ramp, Pulley & Static Friction", file: "static-friction-ramp.html", blurb: "Change the masses and see how static friction changes size and direction, with the FBD, graph, and math." }
      ]},
      { id: "energy-momentum", name: "C. Energy and Momentum", sims: [
        { title: "Spring Simple Harmonic Motion", file: "spring-shm.html", blurb: "Horizontal and vertical springs plus the circular-motion link, with vectors, energy bars, and graphs." },
        { title: "Impulse", file: "impulse.html", blurb: "Push an ocean liner sideways to steer it past an iceberg, and drop eggs on different surfaces to see how stopping time changes the force." },
        { title: "Cart Collision Lab", file: "cart-collision-lab.html", blurb: "Set the masses, velocities, and collision type for two dynamics carts and work through guided trials on momentum conservation." }
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
        { title: "Enthalpy of Reaction Lab", file: "enthalpy-of-reaction-lab.html", blurb: "Coffee-cup calorimetry for six aqueous reactions: neutralization, precipitation, single displacement and an endothermic fizz. Find ΔH per mole of the limiting reactant." },
        { title: "Collision Theory", file: "collision-theory-lab.html", blurb: "Rotate the molecules and set the temperature to see how orientation and energy decide whether a collision reacts, with a live potential energy diagram." },
        { title: "Factors Affecting Reaction Rates", file: "factors-affecting-rates.html", blurb: "After the rate factors lab: identify the factor tested in each experiment, choose the explanation, then watch the particle collisions you couldn't see." }
      ]},
      { id: "equilibrium", name: "E. Chemical Systems and Equilibrium", sims: [] },
      { id: "electrochemistry", name: "F. Electrochemistry", sims: [] }
    ]
  },
  "green-industries": {
    name: "THJ2O1", full: "Green Industries",
    units: [
      { id: "general", name: "Simulations", sims: [
        { title: "Reservoir Top-Up Calculator", file: "reservoir-top-up.html", blurb: "Measure the reservoir level and calculate how much water and Part A and Part B nutrient to add." }
      ]}
    ]
  }
};
