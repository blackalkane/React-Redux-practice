export const EDIT_ITEM = 'Edit';

export const EditItem = editedItem => ({
  type: EDIT_ITEM,
  payload: { editedItem },
});
