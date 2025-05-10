function Trailer() {
  return (
    <div className="trailer-container">
      <div className="trailer-overlay">
        <div className="trailer-video-wrapper">
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JP6vBnazpWI?rel=0"
                title="Spy x Family Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Trailer;