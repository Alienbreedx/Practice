import './styles.css';

function Home() {
  return (
    <div>
      <h1>Band Name</h1>
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
