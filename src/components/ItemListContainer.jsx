import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    console.log(items); //Console.log de control y prueba

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")

        //Se aplica filtro para saber si hay categorias o si se muestran todo los productos

        if (categoryId) {
            
            const prodCategory = query (itemsCollection, where("CategoryId", "==", categoryId))
            getDocs (prodCategory).then((snapshot) => {
                if (snapshot.docs.length) {
                    setItems(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
                } else {
                    setItems()
                }
            })

        } else {

            getDocs(itemsCollection).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setItems(docs)
            })

            }
        
    }, [categoryId])

    return (
        <div>
            <ItemList prod={items} />

        </div>
    )
}

export default ItemListContainer