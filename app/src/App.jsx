import modelsData from './data.json'

const App = () => {
  return (
    <div className='bg-white min-h-screen font-sans p-5'>
      <div className='my-5 text-center m-auto w-3/4 md:w-2/3 lg:w-full'>
        <h1 className='text-2xl md:text-3xl mb-4 font-semibold'>Exploring Open-Ended Evolution of Aesthetic & Abstract 3D art</h1>
        <p className='text-md md:text-lg'>Ritwik Murali and Veeramanohar Avudaiappan</p>
        <a className='text-md md:text-lg' href="https://dl.acm.org/doi/10.1145/3638530.3654321">[PDF]</a>
      </div>
      <div className='flex flex-wrap justify-center items-center sm:px-5 md:p-6 gap-5'>
        {modelsData.map((model) => (
            <div className='w-full sm:w-auto' key={model['_id']}>
              <div className='relative flex flex-col bg-clip-border rounded-xl bg-white shadow-md w-2/3 h-52 sm:w-60 sm:h-60 lg:w-96 lg:h-96 m-auto p-5'>
                <div className='relative bg-clip-border rounded-xl overflow-hidden h-full w-full bg-blue-gray-50 m-0'>
                  <model-viewer src={model['fileLink']} class='h-full w-full' camera-controls/>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
