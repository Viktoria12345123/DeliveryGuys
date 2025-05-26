export default function Order() {

    return(
        <>
        <h1 id="header">Leonid</h1>
        <section id="order-form">

            <form method="post">
                <label className="form-label" htmlFor="fname"> Name </label><br />
                <input type="text" name="fname" id="fname" /><br />
                <label className="form-label" htmlFor="address"> Address </label><br />
                <input type="text" name="address" id="address" /><br />
                <label className="form-label" htmlFor="order"> Please describe your order </label><br />
                <input type="text" name="order" id="order" /><br />
            </form>

            
         </section>
       </>
    );
} 