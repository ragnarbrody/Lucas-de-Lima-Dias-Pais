const axios = require('axios');

const baseURL = 'http://localhost:3200/api/resources';

async function testCRUD() {
  try {
    // Create
    const createResponse = await axios.post(baseURL, {
      name: 'Test Resource',
      description: 'This is a test resource',
      category: 'Test Category'
    });
    console.log('Created:', createResponse.data);

    const id = createResponse.data._id;

    // Read
    const readResponse = await axios.get(`${baseURL}/${id}`);
    console.log('Read:', readResponse.data);

    // Update
    const updateResponse = await axios.put(`${baseURL}/${id}`, {
      name: 'Updated Test Resource',
      category: 'Updated Category'
    });
    console.log('Updated:', updateResponse.data);

    // List
    const listResponse = await axios.get(baseURL);
    console.log('List:', listResponse.data);

    // Delete
    const deleteResponse = await axios.delete(`${baseURL}/${id}`);
    console.log('Deleted:', deleteResponse.data);

    // Verify deletion
    try {
      await axios.get(`${baseURL}/${id}`);
    } catch (error) {
      console.log('Resource successfully deleted');
    }

    // Add a delay before exiting
    console.log('Waiting for 5 seconds before exiting...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Script completed. Check your database now.');

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testCRUD();