
import './App.css';


// import { get, post } from './services/request';
import { useRoutes } from 'react-router-dom';

import routes from './routes/routes';

function App() {



  // Service GET POST Örneği
  // useEffect(() => {
  //   console.log("Tekrar çekti")
  //   // get('https://jsonplaceholder.typicode.com/todos/1').then(res=> console.log(res))  

  //   post('https://jsonplaceholder.typicode.com/posts', {
  //     userId: 999,
  //     id: 999,
  //     title: "Başlık", body: "Body"
  //   }).then(res=>console.log(res))
  // }, [])



  // LOCATION USAGE

  //const location = useLocation()
  //const nopage = location.pathname.includes('blog')
  //console.log(location)

  return useRoutes(routes);
}

export default App;





  //React Router Part
  
  /* Routes Usage */

  /* <Routes>
    <Route path="/" element={<Layout />} >
      <Route index={true} element={<Home />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/blog" element={<Blogs />}>
        <Route path='categories' index={true} element={<Categories />} />
        <Route path='post/:id' element={<Post />} />
      </Route>
    </Route>
    <Route path='/auth' element={<Login />}>
      <Route path='login' element={<Login />} />
    </Route>
    <Route path="*" element={<NoPage />} />
  </Routes> */



