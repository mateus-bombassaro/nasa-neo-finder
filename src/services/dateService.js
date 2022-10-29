import moment from 'moment';

export function dateFormat(date) {
  return moment(date).format('DD/MM/YYYY');
}

export function getDateDiff(initial, final) {
  const initialDate = moment(initial);
  const finalDate = moment(final);
  
  return finalDate.diff(initialDate, 'days');
}
