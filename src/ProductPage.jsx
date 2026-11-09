import { useNavigate, useParams } from "react-router";

function ProductPage() {
  const {id} =useParams()
  const navigate = useNavigate()
  
  
  const handleClick =()=>{
    navigate('/catalog')
  }

  return (
    <>
      {
        
      }
      <p>ProductPage {id}</p>
      <button onClick={handleClick}>Назад в каталог</button>
    </>
  );
}

export default ProductPage;
