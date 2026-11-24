// THE ONLY FILE YOU EDIT WHEN ADDING A SIMULATION.
// 1. Put the .html file in the right course/unit folder.
// 2. Add one line to that unit's "sims" list below: { title, file, blurb }.
// Bump this number whenever a simulation file changes, so browsers load the new copy.
window.SIMS_VERSION = "202611241600";

window.COURSES = {
  sph4u1: {
    name: "SPH4U1", full: "Grade 12 Physics, University Preparation",
    units: [
      { id: "dynamics", name: "Dynamics", sims: [
        { title: "Ramp, Pulley & Static Friction", file: "static-friction-ramp.html", blurb: "Change the masses and see how static friction changes size and direction, with the FBD, graph, and math." }
      ]},
      { id: "energy-momentum", name: "Energy and Momentum", sims: [
        { title: "Spring Simple Harmonic Motion", file: "spring-shm.html", blurb: "Horizontal and vertical springs plus the circular-motion link, with vectors, energy bars, and graphs." },
        { title: "Impulse", file: "impulse.html", blurb: "Push an ocean liner sideways to steer it past an iceberg, and drop eggs on different surfaces to see how stopping time changes the force." },
        { title: "Cart Collision Lab", file: "cart-collision-lab.html", blurb: "Set the masses, velocities, and collision type (magnets, bumper, or velcro) for two dynamics carts and work through six guided trials on momentum and kinetic energy. An Explosions tab shows spring-loaded carts pushing apart." },
        { title: "Spring Energy Challenge", file: "spring-energy-challenge.html", blurb: "Random spring, friction and hill problems at four levels. Solve for the unknown with correct sig digs and units, with hints and worked solutions." },
        { title: "Conservation of Energy in Elastic Collisions", file: "elastic-collision-energy.html", blurb: "A cart hits a cart carrying a spring. Watch kinetic energy turn into elastic potential energy and back, with energy and velocity graphs, max compression, optional track friction, and random practice problems." }
      ]},
      { id: "fields", name: "Gravitational, Electric, and Magnetic Fields", sims: [] },
      { id: "light", name: "The Wave Nature of Light", sims: [] },
      { id: "modern-physics", name: "Revolutions in Modern Physics", sims: [] }
    ]
  },
  sch4u1: {
    name: "SCH4U1", full: "Grade 12 Chemistry, University Preparation",
    units: [
      { id: "organic", name: "Organic Chemistry", sims: [] },
      { id: "structure-properties", name: "Structure and Properties of Matter", sims: [] },
      { id: "energy-rates", name: "Energy Changes and Rates of Reaction", sims: [
        { title: "Pull the Ions Apart", file: "pull-the-ions-apart.html", blurb: "Drag ions out of an NH₄NO₃ or CaCl₂ crystal and watch the water cool or warm as the potential energy changes." },
        { title: "Enthalpy of Solution Lab", file: "enthalpy-of-solution-lab.html", blurb: "Virtual coffee-cup calorimetry: measure mass and volume, dissolve the solid, and collect temperature data to find ΔH." },
        { title: "Enthalpy of Reaction Lab", file: "enthalpy-of-reaction-lab.html", blurb: "Coffee-cup calorimetry for six aqueous reactions: neutralization, precipitation, single displacement and an endothermic fizz. Find ΔH per mole of the limiting reactant." },
        { title: "Collision Theory", file: "collision-theory-lab.html", blurb: "Rotate the molecules and set the temperature to see how orientation and energy decide whether a collision reacts, with a live potential energy diagram." },
        { title: "Factors Affecting Reaction Rates", file: "factors-affecting-rates.html", blurb: "After the rate factors lab: identify the factor tested in each experiment, choose the explanation, then watch the particle collisions you couldn't see." },
        { title: "Method of Initial Rates", file: "rate-law-initial-rates.html", blurb: "Pick concentrations, mix the beakers, and run trials changing one concentration at a time, measure initial rates from tangents, then find the orders, k and the rate law. Includes a spectrophotometer pop-up." },
        { title: "Reaction Mechanisms", file: "reaction-mechanisms.html", blurb: "Watch elementary steps happen one at a time beside a linked potential energy diagram. Track intermediates and catalysts, find the rate-determining step, and judge whether a mechanism is plausible." }
      ]},
      { id: "equilibrium", name: "Chemical Systems and Equilibrium", sims: [] },
      { id: "electrochemistry", name: "Electrochemistry", sims: [] }
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
