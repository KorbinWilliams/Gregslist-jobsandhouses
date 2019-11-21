export default class Jobs {
  constructor() {

  }
  getTemplate(jobId) {
    return `
   <div class="col">
            <h1>${this.jobtitle}</h1>
            <p>${this.jobdescription}</p>
            <p>${this.jobpay}</p>
    </div>
   `
  }
}