const makeProcessElement = require('./') 

describe('Process Element Entity', () => {
    it('Must have title', async (done) => {
        const pe = {
            title: null
        }

        await expect(makeProcessElement(pe))
        .rejects
        .toMatchObject({message:"a process element must have title"})
        done()
    })


    it('Must have aim,fail when no aim', async (done) => {
        const pe = {
            title: "process element title",
            aim: null
        }

        await expect(makeProcessElement(pe))
        .rejects
        .toMatchObject({message:"a process element must have aim"})
        done()
    })

    it('Must have outcome', async (done) => {
        const pe = {
            title: "process element title",
            aim: "process element aim",
            outcome: null
        }

        await expect(makeProcessElement(pe))
        .rejects
        .toMatchObject({message:"a process element must have an outcome"})
        done()
    })

    it('Must have description', async (done) => {
        const pe = {
            title: "process element title",
            aim: "process element aim",
            outcome: "project outcome",
            description: null
        }

        await expect(makeProcessElement(pe))
        .rejects
        .toMatchObject({message:"a process element must have a description"})
        done()
    })


    it('should make valid process element', async (done) => {
        const pe = {
            title: "process element title",
            aim: "process element aim",
            outcome: "process outcome",
            description: "process description"
        }

        await expect(makeProcessElement(pe))
        .resolves
        .toMatchObject(pe)
        done()
    })
});