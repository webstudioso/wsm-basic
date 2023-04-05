import { IFrameXDefinition } from "../blocks"

describe("Basic blocks", () => {

    describe("IFrameXDefinition", () => {
        it("Validates IFRAME tagName", async () => {
            const def = IFrameXDefinition
            const isComponent = def.isComponent({ tagName: 'IFRAME' })
            expect(isComponent).toBeTruthy()
        })
    })
})
