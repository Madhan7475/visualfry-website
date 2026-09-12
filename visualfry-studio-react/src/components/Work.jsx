import React, { useState, useContext } from 'react';
import { WorkContext } from '../context/WorkContext';

const Work = () => {
  const { workItems, galleryImages } = useContext(WorkContext);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenVideo = (url) => {
    if (url && url !== '#') {
      setSelectedVideo(url);
    }
  };

  const getEmbedUrl = (url) => {
    let embedUrl = '';
    if (url.includes('youtube.com/watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    } else if (url.includes('youtu.be/')) {
      embedUrl = url.replace('youtu.be/', 'youtube.com/embed/');
    } else {
      embedUrl = url;
    }
    return `${embedUrl}?autoplay=1&rel=0`;
  };

  const getThumbnailUrl = (url) => {
    if (!url || url === '#') return null;
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Our work</span>
          <h2>A look at what we've shipped.</h2>
          <p>A mix of edits, motion pieces, and property films from recent projects. Replace each slot below with your own image or video.</p>
        </div>

        <div className="work-grid reveal">
          {workItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => item.type === 'Video' ? handleOpenVideo(item.url) : null}
              className={`work-card ${item.wide ? 'wide' : ''} ${item.full ? 'full' : ''}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                cursor: item.type === 'Video' ? 'pointer' : 'default'
              }}
            >
              <span className="tag">{item.type}</span>
              <div className="placeholder">
                {item.type === 'Video' && getThumbnailUrl(item.url) ? (
                  <img src={getThumbnailUrl(item.url)} alt={item.title} className="work-thumbnail" />
                ) : item.type === 'Photo' && item.url !== '#' ? (
                  <img src={item.url} alt={item.title} className="work-thumbnail" />
                ) : (
                  <>
                    {item.type === 'Video' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    )}
                    <span>Add {item.type === 'Video' ? 'video' : 'image'}</span>
                  </>
                )}
              </div>
              {item.hasPlay && (
                <div className="play-icon">
                  <span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--violet)"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                </div>
              )}
              <div className="caption">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="work-gallery reveal">
          <div className="marquee">
            <div className="marquee-track">
              {galleryImages.map((img, idx) => (
                <img key={idx} src={img.url} alt={img.alt} className="gallery-img" />
              ))}
              {galleryImages.map((img, idx) => (
                <img key={`dup-${idx}`} src={img.url} alt={img.alt} className="gallery-img" />
              ))}
            </div>
          </div>
        </div>

        <p className="work-note reveal">More case studies available on request — email contact@visualfry.com for the full portfolio.</p>
      </div>

      {selectedVideo && (
        <div className={`video-modal open`}>
          <button className="modal-close" onClick={() => setSelectedVideo(null)}>CLOSE</button>
          <div className="modal-content">
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(selectedVideo)}
              title="Work Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
