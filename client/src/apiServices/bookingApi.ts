import axios from 'axios';

const API_URL = 'https://abdis.onrender.com/api/bookings/';

export interface Booking {
    id?: number;
    pickup_location: string;
    dropoff_location: string;
    pickup_date: string; // Use string to represent date in ISO format
    pickup_time: string; // Use string to represent time in ISO format
    return_date: string; // Use string to represent date in ISO format
    return_time: string; // Use string to represent time in ISO format
    car_type: string;
}

export const getBookings = async (): Promise<Booking[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getBooking = async (id: number): Promise<Booking> => {
    const response = await axios.get(`${API_URL}${id}/`);
    return response.data;
};

export const createBooking = async (booking: Booking): Promise<Booking> => {
    const response = await axios.post(API_URL, booking);
    return response.data;
};

export const updateBooking = async (id: number, booking: Booking): Promise<Booking> => {
    const response = await axios.put(`${API_URL}${id}/`, booking);
    return response.data;
};

export const deleteBooking = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}${id}/`);
};