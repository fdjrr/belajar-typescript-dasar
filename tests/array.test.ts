describe("Array", () => {
    it("should same with javascript", () => {
        const names: string[] = ["Fadjrir", "Herlambang"];
        const values: number[] = [100, 200];

        console.info(names);
        console.info(values);
    })

    it("should support readonly array", () => {
        const names: readonly string[] = ["Fadjrir", "Herlambang"];
        const values: readonly number[] = [100, 200];

        // using generic
        // const names: ReadonlyArray<string> = ["Fadjrir", "Herlambang"];
        // const values: ReadonlyArray<number> = [100, 200];

        console.info(names);
        console.info(values);
    })

    it("should support tupple", () => {
        const names: readonly [string, string, number] = ["Fadjrir", "Herlambang", 19];
        console.info(names);
    })
})