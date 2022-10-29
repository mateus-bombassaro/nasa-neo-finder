import { getFormattedDate, getDateDiff } from './dateService';

const getInitialDate = () => '2022-10-29';
const getFinalDate = () => '2022-10-30';

describe('dateService', () => {
  it('should format date', () => {
    const formattedDate = getFormattedDate(getInitialDate());

    expect(formattedDate).toEqual('29/10/2022');
  });

  it('should calculate difference in days between dates',  () => {
    const difference =  getDateDiff(getInitialDate(), getFinalDate());

    expect(difference).toEqual(1);
  })
});
