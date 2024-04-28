import { createContext, useEffect, useState } from "react"

const AppContent = createContext();

const AppProvider = ({ children }) => {
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
        fetchData();      
      }, []);
    
      return (
        <AppContent.Provider value={{ products, loading, error }}>
          {children}
        </AppContent.Provider>
      );
}

export { AppContent, AppProvider };