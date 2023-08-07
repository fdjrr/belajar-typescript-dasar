describe("Any", () => {
    it("should support in typescript", () => {
        const person: any = {
            id: 1,
            name: "Fadjrir Herlambang",
            age: 19
        }

        person.email = "fadjrir.co.id@gmail.com"

        console.info(person)
    })
})