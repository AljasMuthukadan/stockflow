import axios from './axios.js';

// Create a new production order
export const createProductionOrder = async (orderData) => {
    try{
        const response = await axios.post('/api/production', orderData);
        return response.data;
    } catch (error) {
        console.error('Error creating production order:', error);
        throw error;
    }
}
// Get all production orders
export const getProductionOrders = async () => {
    try{
        const response = await axios.get('/api/production');
        // Assuming the API returns an object with a 'data' property containing the orders
        return response.data.data;
    } catch (error) {
        console.error('Error fetching production orders:', error);
        throw error;
    }
}

// Get a single production order by ID
export const getProductionOrderById = async (orderId) => {
    try{
        const response = await axios.get(`/api/production/${orderId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching production order with ID ${orderId}:`, error);
        throw error;
    }
}

// Update a production order by ID
export const updateProductionOrder = async (orderId, updatedData) => {
    try{
        const response = await axios.put(`/api/production/${orderId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Error updating production order with ID ${orderId}:`, error);
        throw error;
    }
}

// Delete a production order by ID
export const deleteProductionOrder = async (orderId) => {
    try{
        const response = await axios.delete(`/api/production/${orderId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting production order with ID ${orderId}:`, error);
        throw error;
    }
}

