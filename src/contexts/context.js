import React, {useMemo, useState} from "react";

export const ShopContext = React.createContext([]);

export const ShopContextProvider= ({children}) => {
    const [cart, setCart] = useState([]);

    const addCart = (product) => setCart([...cart, product]);
    const clearCart = () => setCart([]);

    const ShopContextProviderValue = useMemo(() => ({cart, addCart, clearCart}), [cart, addCart]);

    return (
      <ShopContext.Provider value={ShopContextProviderValue}>
            {children}
      </ShopContext.Provider>

    );
}


