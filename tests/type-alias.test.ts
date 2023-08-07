import { Category, Product } from "../src/type-alias"

describe("Type Alias", () => {
    it("should support in typescript", () => {
        const category: Category = {
            id: 1,
            name: "Fadjrir Herlambang",
        }

        console.info(category)

        const product: Product = {
            id: 1,
            name: "Fadjrir Herlambang",
            price: 100,
            category: category
        }

        console.info(product)
    })
})