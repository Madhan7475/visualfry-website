import React, { useState, useContext } from 'react';
import { WorkContext } from '../context/WorkContext';

const AdminPanel = () => {
  const { workItems, addWorkItem, galleryImages, addGalleryImage } = useContext(WorkContext);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkItem(item);
    setItem({
      type: 'Video',
      title: '',
      desc: '',
      url: '',
      wide: false,
      full: false,
      hasPlay: true
    });
    alert('Work item added successfully!');
  };

  return (
    <div className="admin-panel-wrap">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Admin Panel</span>
          <h2>Manage Your Portfolio</h2>
          <p>Add new videos and images to your work gallery.</p>
        </div>

        <div className="admin-grid">
          <div className="admin-card">
            <h3>Add New Work Item</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Type</label>
                <select name="type" value={item.type} onChange={handleInputChange}>
                  <option value="Video">Video</option>
                  <option value="Photo">Photo</option>
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
                <label>URL (YouTube or Image link)</label>
                <input
                  type="text"
                  name="url"
                  value={item.url}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  required
                />
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
              <button type="submit" className="btn-submit">Add to Portfolio</button>
            </form>
          </div>

          <div className="admin-list">
            <h3>Current Items ({workItems.length})</h3>
            <div className="items-grid">
              {workItems.map((wi, idx) => (
                <div key={idx} className="item-preview">
                  <strong>{wi.title}</strong> ({wi.type})
                  <span className="item-url">{wi.url}</span>
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
