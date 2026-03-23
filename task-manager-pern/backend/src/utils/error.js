export class ErrorResponse {
  constructor(status = 400, message) {
    this.status = status;
    this.message = message;
  }
}
