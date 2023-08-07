import { Customer, CustomerType } from "../src/enum"

describe("Enum", () => {
    it("should enum support typescript", () => {
        const customer: Customer = {
            id: 1,
            name: "Fadjrir Herlambang",
            type: CustomerType.SUPER_VIP
        }

        console.info(customer)
    })
})