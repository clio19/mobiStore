import 'intl';
import 'intl/locale-data/jsonp/pt-PT';

export const {format: formatPrice} = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
});
