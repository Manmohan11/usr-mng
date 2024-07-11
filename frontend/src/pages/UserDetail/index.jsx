
import React, { useEffect, useState } from 'react';
import { DataTable } from './DataTable';
import { fetchData } from '@/constants/data';
import { columns } from './columns';
import AddUserForm from '@/components/AddUserForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UserDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGY4MzUyODQ4NjBhNGMzOGY1OTQwMSIsImlhdCI6MTcyMDY4MTQwNiwiZXhwIjoxNzIzMjczNDA2fQ.zuOIN55ufRkT1NVuUvuH6jUET_nNoou8RyDZjTzIHAU'; //localStorage.getItem('token'); // Get the token from local storage
        if (token) {
      fetchData(token)
        .then(fetchedData => {
          setData(fetchedData);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('Failed to fetch data. Please try again.');
          setLoading(false);
        });
    } else {
      console.error('No token found');
      setError('No token found. Please login.');
      setLoading(false);
    }
  }, []);

  const handleUserAdded = (newUser) => {
    setData([...data, newUser]);
    setShowAddUserForm(false);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchTerm) ||
        user.last_name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {showAddUserForm && <AddUserForm onUserAdded={handleUserAdded} />}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
