const Checkbox = require('app/views/components/checkbox/checkbox.js');

class DoneCheckBox extends Checkbox {
  templateContext() {
    return {
      id: this.model.cid,
      checked: this.model.get('done')
    };
  }
}

module.exports = DoneCheckBox;
