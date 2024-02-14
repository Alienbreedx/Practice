import './Website/styles.css';

function Home() {
  return (
    <div>
      <h1>Band Name</h1>
      <nav>
        <a href='index.html'>Home</a>
        <a href='src/Website/Contact.HTML'>Contact Us</a>
      </nav>
      <h2>Information on music type played.</h2>
      <div className='container'>
        <div className='image-container'>
          <img src='src/Public/blackhole.jpg' alt='Image 1' />
        </div>
        <div className='image-container'>
          <img src='src/Public/blackhole.jpg' alt='Image 2' />
        </div>
        <div className='image-container'>
          <img src='src/Public/blackhole.jpg' alt='Image 3' />
        </div>
        <div className='image-container'>
          <img src='src/Public/blackhole.jpg' alt='Image 4' />
        </div>
      </div>{' '}
    </div>
  );
}
export default Home;
