import ErrorRepository from '../app';

describe('should translate error code', () =>{
    const err = new ErrorRepository();
    
    test('view error', () => {
        expect(err.translate(404)).toBe('not found');
    });

    test('unknown error', () => {
        expect(err.translate(444)).toBe('Unknown error');
    });
});