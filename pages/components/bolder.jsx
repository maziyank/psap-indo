import { useState, useEffect } from 'react'

export default function Bolder({ children }) {
    const [bold, setBold] = useState()

    useEffect(() => {
        const value = localStorage.getItem('bold');
        if (value) {
            setBold(JSON.parse(value))
        }

        function storageEventHandler(event) {
            if (event) {
                const value = localStorage.getItem('bold');
                if (value) {
                    setBold(JSON.parse(value))
                }
            }
        }

        window.addEventListener("storage", storageEventHandler);
        return () => { window.removeEventListener("storage", storageEventHandler); };
    }, []);

    return (
        <div className={bold ? 'nx-font-semibold' : ''}>
            {children}
        </div>
    )
}