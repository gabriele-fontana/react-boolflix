

function App() {
  
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=&query='
  const api_key = import.meta.env.VITE_API_KEY
  console.log(api_key);
  function handleSubmit(){

  }
  
  return (
   <>
    <form>
      <input type="text" />
      <button>Search</button>
    </form>
   </>
  )
}

export default App
