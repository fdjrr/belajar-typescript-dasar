import { sayHello } from "../src/say-hello"

describe("sayHello", () => {
    it("should say hello", () => {
        expect(sayHello("Fadjrir")).toBe("Hello, Fadjrir")
    })
})