describe("If Statement", () => {
    it("should support in typescript", () => {
        const examValue = 90;
        if (examValue > 80) {
            console.info("Good")
        } else if (examValue > 60) {
            console.info("Not bad")
        } else {
            console.info("Try again")
        }
    })

    it("should support ternary operator", () => {
        const examValue = 90;

        const say = examValue > 80 ? "Congratulations" : "Try again"

        console.info(say)
    })

    it("should support switch", () => {
        function sayHello(name: string): string {
            switch (name) {
                case "Fadjrir":
                    return `Halo, ${name}`

                default:
                    return `Halo semuanya!`
            }
        }

        console.info(sayHello("Fadjrir"))
        console.info(sayHello("Herlambang"))
    })
})