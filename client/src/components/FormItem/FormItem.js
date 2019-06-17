import React from 'react';
import './FormItem.css';
function FormItem({ msg }) {
  return (<li className="form_item__component list-group-item form-control">{msg}</li>);
}

export default FormItem;
