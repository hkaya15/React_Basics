import React, { useEffect } from 'react'
import { useSecondFooterContext } from '../../contexts/SecondFooterContext';
import styles from '../FooterPanel/Panel.module.css'


function Panel({ children, abc }) {

    // useState kullanıldığında dispatch yerine "setVal" gerekli olacaktır
    const { val, dispatch } = useSecondFooterContext();

    useEffect(() => {
        console.log('Componenent ilk yüklendiğinde çalışır')
        let interval = setInterval(() => console.log('İnterval Çalıştı'), 1000)
        return () => {
            console.log("Component destroyed!")
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log('Componenent render oldu')
    })

    useEffect(() => {
        console.log("Val değeri değişti")
    }, [val])

    function checkButtons() {
        // console.log(parseInt(abc))
        
        // setVal(parseInt(abc))
        
        dispatch({
            type: 'SET_VAL',
            value: parseInt(abc)
        })
    }

    return (
        <>
            {/* It's a way to manage class but you can use "classNames"*/}
            <button className={val === parseInt(abc) ? styles.active : ""} value={abc} onClick={checkButtons}>{children}</button>
        </>


    )
}



export default Panel