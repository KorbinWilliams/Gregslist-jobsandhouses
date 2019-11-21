import ValuesController from "./Controllers/ValuesController.js";
import JobsController from "./Controllers/JobsController.js"
class App {
  valuesController = new ValuesController();
  jobsController = new JobsController();
}

window["app"] = new App();
