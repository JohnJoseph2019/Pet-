import api from "./apiConfig";

export const getAllAppointments = async (pet_id) => {
  try {
    const resp = await api.get(`/pets/${pet_id}/appointments`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createAppointment = async (pet_id, appointmentData) => {
  try {
    const resp = await api.post(`/pets/${pet_id}/appointments`, {
      appointment: appointmentData,
    });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAppointment = async (pet_id, id) => {
  try {
    const resp = await api.delete(`/pets/${pet_id}/appointments/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};