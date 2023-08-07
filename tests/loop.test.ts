describe("Loop", () => {
    it("should support for loop", () => {
        const names = ["Fadjrir", "Herlambang"];

        for (let index = 0; index < names.length; index++) {
            const element = names[index];
            console.info(element)
        }

        for (const name of names) {
            console.info(name)
        }

        for (const index in names) {
            if (Object.prototype.hasOwnProperty.call(names, index)) {
                const element = names[index];
                console.info(element)
            }
        }
    })

    it("should support while loop", () => {
        let counter: number = 0;

        while (counter < 10) {
            console.info(counter)
            counter++
        }
    })

    it("should support do while loop", () => {
        let counter: number = 0;

        do {
            console.info(counter)
            counter++
        } while (counter < 10)
    })

    it("should support break & continue", () => {
        let counter: number = 0;

        do {
            counter++

            if (counter == 10) {
                break
            }

            if (counter % 2 == 0) {
                continue
            }

            console.info(counter)
        } while (true)
    })
})