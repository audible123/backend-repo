class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack_trace = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack_trace) {
            this.stack_trace = stack_trace
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}