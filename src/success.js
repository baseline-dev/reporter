import Validator from 'fastest-validator';

const validator = new Validator();
const schema = {
  statusCode: {type: 'number', default: 200},
  result: {type: 'any', optional: true},
};

class BaselineSuccess {
  constructor(response) {
    const isValid = validator.validate(response, schema);
    if (isValid !== true) throw isValid;

    this.statusCode = response.statusCode;
    this.result = response.result;
  }

  get name() {
    return 'Response';
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      status: 'ok',
      result: this.result
    }
  }
}

export {
  BaselineSuccess
}