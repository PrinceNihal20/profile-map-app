import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [formData, setFormData] = useState({ name: '', photo: '', description: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.photo || !formData.address) {
      alert("Please fill all required fields");
      return;
    }
    setProfiles([...profiles, formData]);
    setFormData({ name: '', photo: '', description: '', address: '' });
  };

  const handleDelete = (index) => {
    const updated = [...profiles];
    updated.splice(index, 1);
    setProfiles(updated);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Name" />
        <input value={formData.photo} onChange={e => setFormData({ ...formData, photo: e.target.value })} placeholder="Photo URL" />
        <input value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} placeholder="Description" />
        <input value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder="Address" />
        <button type="submit">Add Profile</button>
      </form>
      <ul>
        {profiles.map((p, i) => (
          <li key={i}>{p.name} <button onClick={() => handleDelete(i)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;