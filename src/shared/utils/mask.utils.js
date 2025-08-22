/* eslint-disable import/no-anonymous-default-export */
class Mask {
  apply(mask, value) {
    if (!value || value === null) {
      return '';
    }

    switch (mask) {
      case 'date':
        return value
          .toString()
          .replace(/\D/g, '')
          .replace(/(\d{4})(\d{2})(\d{2}).*/, '$3/$2/$1');

      default:
        return value;
    }
  }

  remove(value) {
    if (!value) return '';

    return value.toString().replace(/\D/g, '');
  }
}

export default new Mask();