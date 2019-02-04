export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, optional_props = null) => {
  // debugger //we are hitting this and modal not opening
  return {
    type: OPEN_MODAL,
    modal: modal,
    optional_props: optional_props,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};