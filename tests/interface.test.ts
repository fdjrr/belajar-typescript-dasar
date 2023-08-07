import { Employee, Manager } from "../src/employee"
import { Person } from "../src/person"
import { Seller } from "../src/seller"

describe("Interface", () => {
    it("should support in typescript", () => {
        const seller: Seller = {
            id: 1,
            name: "Fadjrir Herlambang",
            nib: "1234567890",
            npwp: "1234567890"
        }

        console.info(seller)
    })

    it("should support function interface", () => {
        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(1, 2)).toBe(3)
    })


    it("should support indexable interface", () => {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Fadjrir", "Herlambang"]

        console.info(names[0])
        console.info(names[1])
    })

    it("should support indexable interface for non number index", () => {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            first_name: "Fadjrir",
            last_name: "Herlambang"
        }

        expect(dictionary["first_name"]).toBe("Fadjrir")
        expect(dictionary["last_name"]).toBe("Herlambang")
    })

    it("should support extend interface", () => {
        const employee: Employee = {
            id: 1,
            name: "Fadjrir",
            division: "IT"
        }

        console.info(employee)

        const manager: Manager = {
            id: 2,
            name: "Herlambang",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager)
    })


    it("should support function in interface", () => {
        const person: Person = {
            name: "Fadjrir",
            sayHello: function (name: string): string {
                return `Hello ${name}, My name is ${this.name}`
            }
        }

        console.info(person.sayHello("Herlambang"))
    })

    it("should support intersection types", () => {
        interface HasName {
            name: string
        }

        interface HasId {
            id: number
        }

        type Domain = HasId & HasName


        const domain: Domain = {
            id: 1,
            name: "Fadjrir"
        }

        console.info(domain)
    })

    it("should support type assertions", () => {
        const person: any = {
            id: 1,
            name: "Fadjrir Herlambang",
            age: 19
        }

        const person2: Person = person as Person;

        console.info(person2)
    })
})