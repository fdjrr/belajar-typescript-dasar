describe("Object", () => {
    it("should support in typescript", () => {
        const person: { id: string | number, name: string, hobbies?: string[] } = {
            id: 1,
            name: "Fadjrir Herlambang"
        }

        console.info(person)

        person.id = "2"
        person.name = "Ananda Maharani"

        console.info(person)
    })
})