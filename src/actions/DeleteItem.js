export const DELETE_ITEM = 'Delete';

export const DeleteItem = selectedItemId => ({
  type: DELETE_ITEM,
  payload: { id: selectedItemId },
});
