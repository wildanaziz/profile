import { useState } from 'react';

// Import MDX files with metadata
import introductionToNN, { frontmatter as introductionToNNFrontmatter } from '../content/blog/introduction-to-NN.mdx';
import roboflowYOLO, { frontmatter as roboflowYOLOFrontmatter } from '../content/blog/Roboflow, Introduction to YOLO & CUDA Installation.mdx';
import yoloWandb, { frontmatter as yoloWandbFrontmatter } from '../content/blog/yoloWandb.mdx';
import fineTuningSingleTurn, { frontmatter as fineTuningSingleTurnFrontmatter } from '../content/blog/fine-tuning-single-turn.mdx';
import fineTuningMultiTurn, { frontmatter as fineTuningMultiTurnFrontmatter } from '../content/blog/fine-tuning-multi-turn.mdx';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Map MDX content and frontmatter to blog posts
  const blogPosts = [
    {
        ...fineTuningSingleTurnFrontmatter,
        content: fineTuningSingleTurn
    },
    {
      ...fineTuningMultiTurnFrontmatter,
      content: fineTuningMultiTurn
    },
    {
      ...yoloWandbFrontmatter,
      content: yoloWandb
    },
    {
      ...roboflowYOLOFrontmatter,
      content: roboflowYOLO
    },
    {
      ...introductionToNNFrontmatter,
      content: introductionToNN
    }
  ];

  const openModal = (post) => {
    setSelectedBlog(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedBlog(null), 300);
  };

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(post); }}>
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.description || post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Blog Modal */}
      {modalOpen && selectedBlog && (
        <div className="modal-container active" onClick={closeModal}>
          <div className="overlay active"></div>
          <div className="modal-content blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
            </div>

            <div className="modal-body blog-modal-body">
              <div className="blog-header">
                <h2 className="h2 modal-title">{selectedBlog.title}</h2>
                <div className="blog-meta">
                  <p className="blog-category">
                    <ion-icon name="pricetag-outline"></ion-icon>
                    {selectedBlog.category}
                  </p>
                  <span className="dot"></span>
                  <time dateTime={selectedBlog.date}>
                    {new Date(selectedBlog.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  {selectedBlog.author && (
                    <>
                      <span className="dot"></span>
                      <span style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-7)' }}>
                        <ion-icon name="person-outline" style={{ fontSize: '14px', verticalAlign: 'middle' }}></ion-icon>
                        {' '}{selectedBlog.author}
                      </span>
                    </>
                  )}
                </div>
                {selectedBlog.tags && selectedBlog.tags.length > 0 && (
                  <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedBlog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'var(--border-gradient-onyx)',
                          color: 'var(--light-gray)',
                          fontSize: 'var(--fs-8)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          border: '1px solid var(--jet)'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Render full MDX content */}
              <div className="mdx-content">
                {selectedBlog.content && <selectedBlog.content />}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Blog;
