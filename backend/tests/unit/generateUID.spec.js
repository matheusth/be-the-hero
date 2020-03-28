const generateUID = require('../../src/utils/generateUID');

describe('Generate UID',()=>{
    it('should generate an UID', ()=>{
        const id = generateUID();

        expect(id).toHaveLength(8);
    });
});