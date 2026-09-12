import React, { useState, useContext } from 'react';
import { WorkContext } from '../context/WorkContext';

const AdminPanel = () => {
  const { workItems, addWorkItem, deleteWorkItem, updateWorkItem } = useContext(WorkContext);
  const [editingId, setEditingId] = useState(null);
  const [item, setItem] = useState({
    type: 'Video',
    title: '',
    desc: '',
    url: '',
    wide: false,
    full: false,
    hasPlay: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setItem(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItem(prev => ({
          ...prev,
          type: 'Photo',
          url: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateWorkItem(editingId, item);
      setEditingId(null);
      alert('Work item updated successfully!');
    } else {
      addWorkItem(item);
      alert('Work item added successfully!');
    }
    setItem({
      type: 'Video',
      title: '',
      desc: '',
      url: '',
      wide: false,
      full: false,
      hasPlay: true
    });
  };

  const startEdit = (wi) => {
    setEditingId(wi.id);
    setItem({ ...wi });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setItem({
      type: 'Video',
      title: '',
      desc: '',
      url: '',
      wide: false,
      full: false,
      hasPlay: true
    });
  };

  return (
    <div className="admin-panel-wrap">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Admin Panel</span>
          <h2>Manage Your Portfolio</h2>
          <p>Add new videos and images to your work gallery. Note: Image uploads are stored locally (base64) for prototype purposes.</p>
        </div>

        <div className="admin-grid">
          <div className="admin-card">
            <h3>{editingId ? 'Edit Work Item' : 'Add New Work Item'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Type</label>
                <select name="type" value={item.type} onChange={handleInputChange}>
                  <option value="Video">Video (YouTube link)</option>
                  <option value="Photo">Photo (Direct upload/URL)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={handleInputChange}
                  placeholder="Project Title"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="desc"
                  value={item.desc}
                  onChange={handleInputChange}
                  placeholder="Short description"
                  required
                />
              </div>
              <div className="form-group">
                <label>URL / Link</label>
                <input
                  type="text"
                  name="url"
                  value={item.url}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  required
                />
              </div>
              <div className="form-group">
                <label>Direct Image Upload</label>
                <input type="file" accept="image/*" onChange={handleFileUpload} />
              </div>
              <div className="form-row">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    name="wide"
                    checked={item.wide}
                    onChange={handleInputChange}
                    id="wide"
                  />
                  <label htmlFor="wide">Wide Layout</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    name="full"
                    checked={item.full}
                    onChange={handleInputChange}
                    id="full"
                  />
                  <label htmlFor="full">Full Width</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    name="hasPlay"
                    checked={item.hasPlay}
                    onChange={handleInputChange}
                    id="hasPlay"
                  />
                  <label htmlFor="hasPlay">Show Play Icon</label>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit">{editingId ? 'Update Portfolio' : 'Add to Portfolio'}</button>
                {editingId && <button type="button" className="btn-ghost" onClick={cancelEdit}>Cancel</button>}
              </div>
            </form>
          </div>

          <div className="admin-list">
            <h3>Current Items ({workItems.length})</h3>
            <div className="items-grid">
              {workItems.map((wi) => (
                <div key={wi.id} className="item-preview">
                  <div className="item-details">
                    <strong>{wi.title}</strong> ({wi.type})
                    <span className="item-url">{wi.url.substring(0, 40)}...</span>
                  </div>
                  <div className="item-actions">
                    <button onClick={() => startEdit(wi)} className="btn-edit">Edit</button>
                    <button onClick={() => deleteWorkItem(wi.id)} className="btn-delete">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
