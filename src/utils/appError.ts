export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: HttpStatusCode, message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = true;

    Error.captureStackTrace(this);
  }
}

export class HTTPNotFound extends AppError {
  constructor(public message: string = 'Page you are looking is not found') {
    super('NOT FOUND', HttpStatusCode.BAD_REQUEST, message);
  }
}
