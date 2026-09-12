import React, { createContext, useState, useEffect } from 'react';

export const WorkContext = createContext();

const DEFAULT_WORK_DATA = [
  {
    type: "Video",
    title: "Featured project",
    desc: "Real estate walkthrough film",
    full: true,
    hasPlay: true,
    url: "https://www.youtube.com/watch?v=s7KSqw3ERRU"
  },
];

const DEFAULT_WORK_IMAGES = [
  { url: "/logo.png", alt: "Project 1" },
  { url: "/logo.png", alt: "Project 2" },
  { url: "/logo.png", alt: "Project 3" },
  { url: "/logo.png", alt: "Project 4" },
  { url: "/logo.png", alt: "Project 5" },
  { url: "/logo.png", alt: "Project 6" },
];

export const WorkProvider = ({ children }) => {
  const [workItems, setWorkItems] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const savedWork = localStorage.getItem('vfs_work_data');
    const savedImages = localStorage.getItem('vfs_gallery_images');

    if (savedWork) {
      setWorkItems(JSON.parse(savedWork));
    } else {
      setWorkItems(DEFAULT_WORK_DATA);
      localStorage.setItem('vfs_work_data', JSON.stringify(DEFAULT_WORK_DATA));
    }

    if (savedImages) {
      setGalleryImages(JSON.parse(savedImages));
    } else {
      setGalleryImages(DEFAULT_WORK_IMAGES);
      localStorage.setItem('vfs_gallery_images', JSON.stringify(DEFAULT_WORK_IMAGES));
    }
  }, []);

  const addWorkItem = (item) => {
    setWorkItems((prev) => {
      const newItems = [...prev, item];
      localStorage.setItem('vfs_work_data', JSON.stringify(newItems));
      return newItems;
    });
  };

  const addGalleryImage = (img) => {
    setGalleryImages((prev) => {
      const newImages = [...prev, img];
      localStorage.setItem('vfs_gallery_images', JSON.stringify(newImages));
      return newImages;
    });
  };

  return (
    <WorkContext.Provider value={{ workItems, galleryImages, addWorkItem, addGalleryImage }}>
      {children}
    </WorkContext.Provider>
  );
};
