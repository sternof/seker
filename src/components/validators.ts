
export class CustomValidators {

  static cannotContainSpace(control) {
    if (control.value.indexOf(' ') >= 0) {
      return { containSpace: true }
    }
    return null;
  }

  static isNir(control) {
    if (control.value.indexOf('nir') >= 0) {
      return { isNir: true }
    }
    return null;
  }

  static isUnique(control) {

    return new Promise( (resolve, reject)  => {
      setTimeout(()=>resolve(null), 3000)
    });


  }

}