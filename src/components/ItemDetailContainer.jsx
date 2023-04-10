import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const { productoId } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {

        const db = getFirestore()
        const itemDoc = doc(db, "productos", productoId)
        getDoc(itemDoc).then((item) => {
            if (item.data()) {
                setItem({ ...item.data(), id: item.id })
            } else {
                setItem()
            }
        })

    }, [productoId])

    return (
        <div>
            <ItemDetail prod={item} />
        </div>

    )
}

export default ItemDetailContainer