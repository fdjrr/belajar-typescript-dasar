describe("Function", () => {
    it("should support in tyscript", () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello, ${name}`
        }

        expect(sayHello("Fadjrir")).toBe("Hello, Fadjrir")
        expect(sayHello()).toBe("Hello, Guest")

        function printHello(name: string = "Guest"): void {
            console.info(`Hello, ${name}`)
        }

        printHello("Fadjrir")
    })

    it("should support rest parameter", () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value
            }
            return total
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15)
    })

    it("should support optional parameter", () => {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello, ${firstName} ${lastName}`
            } else {
                return `Hello, ${firstName}`
            }
        }

        expect(sayHello("Fadjrir")).toBe("Hello, Fadjrir")
        expect(sayHello("Fadjrir", "Herlambang")).toBe("Hello, Fadjrir Herlambang")
    })

    it("should support function overloading", () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 2;
            }
        }

        expect(callMe(1)).toBe(2)
        expect(callMe("Fadjrir")).toBe("FADJRIR")
    })

    it("should support function as parameter", () => {
        function sayHelloTo(name: string, filter: (name: string) => string): string {
            return `Hello, ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase()
        }

        expect(sayHelloTo("Fadjrir", toUpper)).toBe("Hello, FADJRIR")

        // Anonymouse Function
        expect(sayHelloTo("Fadjrir", function (name: string): string {
            return name.toUpperCase()
        })).toBe("Hello, FADJRIR")

        // Arrow function
        expect(sayHelloTo("Fadjrir", (name: string): string => name.toUpperCase())).toBe("Hello, FADJRIR")
    })
})