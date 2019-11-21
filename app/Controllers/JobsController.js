import _jobsService from "../services/JobsService.js";
import _store from "../store"

function _drawJobs(jobId) {
  let template = ''
  let jobs = _store.State.jobs
  jobs.forEach(jobs => {
    template += jobId.getTemplate();
  });
}
export default class JobsController {
  constructor(

  ) {
    addJob(event) {
      event.preventDefault()
      let formData = event.target
      let newJob = {
        title: formData.jobtitle.value,
        description: formData.jobdescription.value,
        pay: formData.jobpay.value
      }
    }
  }
}

