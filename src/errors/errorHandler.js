export class costumErrorHandeler extends Error {
    constructor(message, status){
        super()
        this.message = message
        this.status = status
    }

    getInfo() {
        return {
            message: this.message,
            status: this.status
        }
    }
}