describe("Optional Parameter", () => {
    it("should support null and undefined in typescript", () => {
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello, ${name}`);
            } else {
                console.info(`Hello`);
            }
        }

        sayHello("Fadjrir")
        const name: string | undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})