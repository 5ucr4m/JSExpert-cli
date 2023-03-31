import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import Util from '../../src/util.js';

describe('#Util - Strings', () => {

    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });

    test('#upperCaseFirstLetter should transform the first letter in uppercase', () => {
        const string = 'test';
        const result = Util.upperCaseFirstLetter(string);
        expect(result).toStrictEqual('Test');
    });
    
    test('#lowerCaseFirstLetter should transform the first letter in lowercase', () => {
        const string = 'Test';
        const result = Util.lowerCaseFirstLetter(string);
        expect(result).toStrictEqual('test');
    });

    test('#upperCaseFirstLetter give a empty string it should return empty', () => {
        const string = '';
        const result = Util.upperCaseFirstLetter(string);
        expect(result).toStrictEqual('');
    });
    test('#lowerCaseFirstLetter give a empty string it should return empty', () => {
        const string = '';
        const result = Util.lowerCaseFirstLetter(string);
        expect(result).toStrictEqual('');
    });

});
