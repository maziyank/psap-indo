import { useState, useEffect } from 'react'

export default function BolderBtn({ children }) {
    const [bold, setBold] = useState(true)

    useEffect(() => {
        localStorage.setItem("bold", bold);
        window.dispatchEvent(new Event('storage'))
    }, [bold]);


    return (
        <button type="button" className="nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400 nx-bg-gray-100 hover:nx-bg-gray-300 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50"
            onClick={() => setBold(!bold)}>
            Cetak Tebal : {bold ? "Aktif" : "Tidak Aktif"}
        </button>
    )
}