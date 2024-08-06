import React, { useEffect, useState } from 'react'
import "../css/PostPage.css";
const PostPage = ({setImageURL}) => {
    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [ogImageUrl, setOgImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    const generateOgImage = async () => {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }

      try {
        const response = await fetch('http://localhost:3001/generate-og-image', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        setOgImageUrl(URL.createObjectURL(blob));
        setImageURL(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Failed to generate OG image:', error);
      }
    };

    if (title || content || image) {
      generateOgImage();
    }
  }, [title, content, image]);
  return (
    

<div className="App">
  <main>
    <form>
      <div className="form-group">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <div className="form-group">
        <label>Image</label>
        <input type="file" onChange={handleImageChange} />
      </div>
    </form>
  </main>

</div>

  )
}

export default PostPage;

