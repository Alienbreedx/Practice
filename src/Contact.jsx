import { useState } from 'react';

function UserInfoForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      'https://script.google.com/macros/s/AKfycbxDim9BfXElEOO7u591v27tKeE07cYjPFS_l-2wO9LATHZVi1hCA5Zi47-9hZfggYGHdw/exec';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // success
        console.log('Form data submitted successfully.');
      } else {
        // failed
        console.error(
          'Error submitting form data:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      // Error occurred during the fetch request
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Enter Your Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UserInfoForm;
