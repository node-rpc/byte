import { Buffer } from "buffer";
import ByteBuffer from "./stream/byte";

export default class Hessian {
    private buf: ByteBuffer;

    constructor() {
        this.buf = ByteBuffer.alloc();
    }

    public writeBytes(buf: Buffer): void {
        //
    }
}
