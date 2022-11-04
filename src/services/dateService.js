import moment from 'moment';

moment.locale('pt', {
  months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
})

export function getFormattedDate(date) {
  return moment(date).format('DD/MM/YYYY');
}

export function getDateDiff(initial, final) {
  const initialDate = moment(initial);
  const finalDate = moment(final);
  
  return finalDate.diff(initialDate, 'days');
}

export function getFullDate(date) {
  return `${moment(date).format('dddd')}, ${moment(date).format('DD')} de ${moment(date).format('MMMM')} de ${moment(date).format('YYYY')}`;
}
