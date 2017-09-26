
class GeneralHelper {
  static createNewGuid() {
    return GeneralHelper.s4() + GeneralHelper.s4() + '-' + GeneralHelper.s4() + '-' + GeneralHelper.s4() + '-' + GeneralHelper.s4() + '-' + GeneralHelper.s4() + GeneralHelper.s4() + GeneralHelper.s4();
  }
  static s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  static filterFloat(value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
      return Number(value);
    return NaN;
  }
}

export default GeneralHelper;