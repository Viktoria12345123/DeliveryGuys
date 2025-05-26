export default function Order() {

    return(
        <>
        <h1 id="header">ПОРЪЧАЙ</h1>
        <section id="order-form">

            <form method="post">
                <label className="form-label" htmlFor="fname"> Име </label><br />
                <input type="text" name="fname" id="fname" /><br />
                <label className="form-label" htmlFor="address"> Адрес за доставка </label><br />
                <input type="text" name="address" id="address" /><br />
                <label className="form-label" htmlFor="order"> Моля опишете поръчката си </label><br />
                <textarea name="order" id="order" rows="4" /><br />
                </form>

            <button id="submit" type="submit">Submit</button>
         </section>


        <section id="order-status">
            <h2 id="status">Проследи</h2> 
            <label htmlFor="order-number">въведете номера на своята поръчка</label>  
            <input type="text" id="order-number"/>
        </section>

        

       </>
    );
} 