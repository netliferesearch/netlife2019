import { setSplitType, setSplitClass } from './setSplitUtil';

describe('setSplitUtil', () => {
  describe('setSplitType', () => {
    describe('test correct values', () => {
      it('returns expected "splitDivision" when we enter "50-50"', () => {
        const splitDivision = '50-50';
        expect(setSplitType(splitDivision)).toEqual('split-50-50');
      });
      it('returns expected "splitDivision" when we enter "25-75"', () => {
        const splitDivision = '25-75';
        expect(setSplitType(splitDivision)).toEqual('split-25-75');
      });
      it('returns expected "splitDivision" when we enter "75-25"', () => {
        const splitDivision = '75-25';
        expect(setSplitType(splitDivision)).toEqual('split-75-25');
      });
      it('returns expected "splitDivision" when we enter "40-60"', () => {
        const splitDivision = '40-60';
        expect(setSplitType(splitDivision)).toEqual('split-40-60');
      });
      it('returns expected "splitDivision" when we enter "60-40"', () => {
        const splitDivision = '60-40';
        expect(setSplitType(splitDivision)).toEqual('split-60-40');
      });
    });
    describe('test incorrect values', () => {
      it('returns expected "splitDivision" when we enter "42"', () => {
        const splitDivision = '42';
        expect(setSplitType(splitDivision)).toEqual('split-50-50');
      });
      it('returns expected "splitDivision" when we enter ""', () => {
        const splitDivision = '';
        expect(setSplitType(splitDivision)).toEqual('split-50-50');
      });
      it('returns expected "splitDivision" when we enter undefined', () => {
        const splitDivision = undefined;
        expect(setSplitType(splitDivision)).toEqual('split-50-50');
      });
      it('returns expected "splitDivision" when we enter null', () => {
        const splitDivision = null;
        expect(setSplitType(splitDivision)).toEqual('split-50-50');
      });
      it('returns expected "splitDivision" when we do not pass a value', () => {
        expect(setSplitType()).toEqual('split-50-50');
      });
    });
  });
  describe('setSplitClass', () => {
    describe('test correct values', () => {
      it('returns expected "responsive class" for col 1 when we enter "50-50"', () => {
        const splitDivision = '50-50';
        expect(setSplitClass(splitDivision, 1)).toEqual('w-1/2');
      });
      it('returns expected "responsive class" for col 2 when we enter "50-50"', () => {
        const splitDivision = '50-50';
        expect(setSplitClass(splitDivision, 2)).toEqual('w-1/2');
      });
      it('returns expected "responsive class" for col 1 when we enter "25-75"', () => {
        const splitDivision = '25-75';
        expect(setSplitClass(splitDivision, 1)).toEqual('w-1/4');
      });
      it('returns expected "responsive class" for col 2 when we enter "25-75"', () => {
        const splitDivision = '25-75';
        expect(setSplitClass(splitDivision, 2)).toEqual('w-3/4');
      });
      it('returns expected "responsive class" for col 1 when we enter "75-25"', () => {
        const splitDivision = '75-25';
        expect(setSplitClass(splitDivision, 1)).toEqual('w-3/4');
      });
      it('returns expected "responsive class" for col 2 when we enter "75-25"', () => {
        const splitDivision = '75-25';
        expect(setSplitClass(splitDivision, 2)).toEqual('w-1/4');
      });
      it('returns expected "responsive class" for col 1 when we enter "40-60"', () => {
        const splitDivision = '40-60';
        expect(setSplitClass(splitDivision, 1)).toEqual('w-1/3');
      });
      it('returns expected "responsive class" for col 2 when we enter "40-60"', () => {
        const splitDivision = '40-60';
        expect(setSplitClass(splitDivision, 2)).toEqual('w-2/3');
      });
      it('returns expected "responsive class" for col 1 when we enter "60-40"', () => {
        const splitDivision = '60-40';
        expect(setSplitClass(splitDivision, 1)).toEqual('w-2/3');
      });
      it('returns expected "responsive class" for col 2 when we enter "60-40"', () => {
        const splitDivision = '60-40';
        expect(setSplitClass(splitDivision, 2)).toEqual('w-1/3');
      });
    });
    describe('test incorrect values', () => {
      it('returns expected "responsive class" when we enter "42"', () => {
        const splitDivision = '42';
        expect(setSplitClass(splitDivision, 1)).toEqual('w-1/2');
      });
      it('returns expected "responsive class" when we enter ""', () => {
        const splitDivision = '';
        expect(setSplitClass(splitDivision, 2)).toEqual('w-1/2');
      });
      it('returns expected "responsive class" when we enter undefined', () => {
        const splitDivision = undefined;
        expect(setSplitClass(splitDivision)).toEqual('w-1/2');
      });
      it('returns expected "responsive class" when we enter null', () => {
        const splitDivision = null;
        expect(setSplitClass(splitDivision, 1)).toEqual('w-1/2');
      });
      it('returns expected "responsive class" when we do not pass a value', () => {
        expect(setSplitClass()).toEqual('w-1/2');
      });
    });
  });
});
