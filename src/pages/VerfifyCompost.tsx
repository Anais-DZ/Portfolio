import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";


function VerifyCompost() {

    return (
        <>
            <Header />

            <h2 className="mt-10 text-2xl">Ver'ify Compost</h2>
            <LayoutProject
                Image={["/verifScreenShot.webp", "/verifScreenShot2.webp"]} 
                Title={"Lien Github de Ver'ify Compost"} 
                Description={""} 
                Link={"https://github.com/Anais-DZ/Verify-compost"} 
                ButtonHref={""}
                TitleButton=""
            />

            <Footer />
        </>

    );
}

export default VerifyCompost;
