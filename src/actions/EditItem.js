export const EDIT_ITEM = 'Edit item';

export const EditItem = editedItem => ({
  type: EDIT_ITEM,
  payload: { editedItem },
});
