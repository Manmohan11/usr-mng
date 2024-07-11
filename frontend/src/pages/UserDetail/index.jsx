import React, { useEffect, useState } from 'react';
import { DataTable } from './DataTable';
import { fetchData } from '@/constants/data';
import { columns } from './columns'; // Import your columns configuration
import AddUserForm from '@/components/AddUserForm'; // Update path as per your project structure
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
    fetchData()
      .then(fetchedData => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
        setLoading(false);
      });
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
      <DataTable data={data} />
    </div>
  );
}
